  (function() {
    const path = window.location.pathname;

    // Match /blog/locale/slug
    const match = path.match(/^\/blog\/([a-z]{2}(?:-[A-Z]{2})?)\/(.+)/);

    if (match) {
      const [, locale, slug] = match;
      const newUrl = `/${locale}/blog/${slug}${window.location.search}${window.location.hash}`;

      // Redirect to new URL with replace so no extra history entry
      window.location.replace(newUrl);
    }
  })();