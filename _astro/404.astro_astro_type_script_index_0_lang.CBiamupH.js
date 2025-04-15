const o=localStorage.getItem("locale");o!=="en"&&!window.location.pathname.includes(`/${o}/404`)&&(window.location.href=`/${o}/404/`);
