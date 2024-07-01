import React, { useState, useEffect } from "react";

function Map27() {
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileDevice(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const iframeWidth = isMobileDevice ? "220" : "600";
  const iframeHeight = isMobileDevice ? "300" : "450";

  return (
    <div style={{ width: '100%', height: '450px', border: '0' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d526.09109466664!2d-14.22179202972728!3d28.170935506002472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc479d151362d887%3A0xdec6e6c8e3e81c89!2sApartament%2027%20Colores%20de%20Fuerteventura%201!5e1!3m2!1spl!2spl!4v1715880374653!5m2!1spl!2spl"
        width={iframeWidth}
        height={iframeHeight}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps"
      ></iframe>
    </div>
  );
};

export default Map27;