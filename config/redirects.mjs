import { readFileSync } from "node:fs";
import { resolve, sep } from "node:path";
import { globSync } from "glob";

// External landing page for removed hardware routes.
const cyberpunksShop = "https://cyberpunks.shop/";
// Historical hardware pages that now point to the shop.
const devicePaths = ["altruist/", "smart-home-server/", "hikikomori/", "energy-monitor/", "risc-v/"];
// Blog content is scanned once to build legacy URL redirects.
const blogContentDir = resolve("./src/blog");
const postsPerPage = 12;

/**
 * @param {{
 *   locales: Record<string, string>,
 *   defaultLocale: string,
 * }} options
 */
export function createRedirectConfig({ locales, defaultLocale }) {
  /**
   * @param {string} location
   */
  const normalizeRedirectLocation = (location) => {
    if (/^[a-z]+:\/\//i.test(location)) {
      return location;
    }

    const lastSegment = location.split("/").pop() ?? "";
    const looksLikeFile = lastSegment.includes(".");
    if (location === "/" || location.endsWith("/") || looksLikeFile) {
      return location;
    }

    return `${location}/`;
  };

  // Collect blog slugs and tags so old `/blog/{locale}/...` URLs can be redirected.
  const blogPostSlugs = Object.fromEntries(
    Object.keys(locales).map((locale) => [locale, new Set()]),
  );
  const blogTags = new Set();

  for (const relativePath of globSync("**/*.{md,mdx}", {
    cwd: blogContentDir,
    nodir: true,
  }).sort()) {
    const normalizedPath = relativePath.split(sep).join("/");
    const parts = normalizedPath.split("/");
    const hasLocalePrefix = parts.length > 1 && Object.hasOwn(locales, parts[0]);
    const locale = hasLocalePrefix ? parts[0] : defaultLocale;
    const slug = (hasLocalePrefix ? parts.slice(1).join("/") : normalizedPath).replace(/\.(md|mdx)$/i, "");

    blogPostSlugs[locale].add(slug);

    const source = readFileSync(resolve(blogContentDir, relativePath), "utf8");
    const frontmatterMatch = source.match(/^---\n([\s\S]*?)\n---/);
    const tagsMatch = frontmatterMatch?.[1].match(/^\s*tags:\s*\[([\s\S]*?)\]\s*$/m);
    if (!tagsMatch) continue;

    for (const tagMatch of tagsMatch[1].matchAll(/'([^']+)'|"([^"]+)"/g)) {
      const tag = (tagMatch[1] || tagMatch[2] || "").toLowerCase();
      if (tag) {
        blogTags.add(tag);
      }
    }
  }

  /** @type {Record<string, string>} */
  const redirects = {};
  for (const code of Object.keys(locales)) {
    const prefix = code === defaultLocale ? "" : `/${code}`;

    // Redirect removed hardware pages to the external store.
    redirects[`${prefix}/devices`] = cyberpunksShop;
    for (const slug of devicePaths) {
      redirects[`${prefix}/devices/${slug}`] = cyberpunksShop;
    }

    // Redirect legacy blog URLs from `/blog/{locale}/...` to `/{locale}/blog/...`.
    const legacyBlogPrefix = `/blog/${code}`;
    const localizedBlogPrefix = code === defaultLocale ? "/blog" : `/${code}/blog`;
    redirects[legacyBlogPrefix] = localizedBlogPrefix;

    for (const slug of blogPostSlugs[code]) {
      redirects[`${legacyBlogPrefix}/${slug}`] = `${localizedBlogPrefix}/${slug}`;
    }

    for (const tag of blogTags) {
      redirects[`${legacyBlogPrefix}/tags/${tag}`] = `${localizedBlogPrefix}/tags/${tag}`;
    }

    const localizedCount = code === defaultLocale
      ? blogPostSlugs[code].size
      : new Set([...blogPostSlugs[defaultLocale], ...blogPostSlugs[code]]).size;
    const totalPages = Math.ceil(localizedCount / postsPerPage);

    for (let page = 2; page <= totalPages; page += 1) {
      redirects[`${legacyBlogPrefix}/page/${page}`] = `${localizedBlogPrefix}/page/${page}`;
    }
  }

  /**
   * Redirect slashless page requests in dev before Astro returns a 404.
   * Keep file-like paths (`.png`, `.xml`, etc.) untouched.
   *
   * @returns {import('vite').Plugin}
   */
  function trailingSlashRedirectPlugin() {
    return {
      name: "trailing-slash-redirect",
      enforce: "post",
      configureServer(server) {
        return () => {
          server.middlewares.stack.unshift({
            route: "",
            handle(req, res, next) {
              const url = req.url ?? "";
              const [pathname, search = ""] = url.split("?");
              const query = search ? `?${search}` : "";
              const redirectTarget = redirects[pathname];

              if (redirectTarget) {
                res.writeHead(301, { Location: `${normalizeRedirectLocation(redirectTarget)}${query}` });
                res.end();
                return;
              }

              const lastSegment = pathname.split("/").pop() ?? "";
              const looksLikeFile = lastSegment.includes(".");
              const canAppendTrailingSlash = pathname !== "/" && !pathname.endsWith("/") && !looksLikeFile;

              if (canAppendTrailingSlash) {
                res.writeHead(301, { Location: `${pathname}/${query}` });
                res.end();
                return;
              }
              next();
            },
          });
        };
      },
    };
  }

  return {
    redirects,
    trailingSlashRedirectPlugin,
  };
}
