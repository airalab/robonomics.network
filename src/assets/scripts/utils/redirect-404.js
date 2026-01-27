  const savedLocale = localStorage.getItem('locale') || 'en';
  
  if (savedLocale !== 'en' && !window.location.pathname.includes(`/${savedLocale}/404`)) {
    const url = new URL(window.location.href);
    url.pathname = `/${savedLocale}/404/`;
    window.location.replace(url.toString());
  }