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
    <div style={{ width: "100%", height: "450px", border: "0" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1091.1094905382247!2d-14.221792!3d28.170936!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc479dbab87a8d25%3A0x4308c4573d8e01e1!2sApartament%2023%20-%20Colores%20de%20Fuerteventura%202!5e1!3m2!1spl!2spl!4v1724836381305!5m2!1spl!2spl"
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
}

export default Map27;