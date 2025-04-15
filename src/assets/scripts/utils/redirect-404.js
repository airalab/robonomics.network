const locale = localStorage.getItem('locale');

if (locale !== 'en' && !window.location.pathname.includes(`/${locale}/404`)) {
  window.location.href = `/${locale}/404/`;
}