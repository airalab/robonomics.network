  const savedLocale = localStorage.getItem('locale') || 'en';
  
  if (savedLocale !== 'en' && !window.location.pathname.includes(`/${savedLocale}/404`)) {
    window.location.replace(`/${savedLocale}/404/`);
  }