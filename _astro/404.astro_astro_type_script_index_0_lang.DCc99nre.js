const e=localStorage.getItem("locale")||"en";e!=="en"&&!window.location.pathname.includes(`/${e}/404`)&&window.location.replace(`/${e}/404/`);
