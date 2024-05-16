import React from 'react';

function Map23() {
  return (
    <div style={{ width: '100%', height: '450px', border: '0' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d526.09109466664!2d-14.22179202972728!3d28.170935506002472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc479dbab87a8d25%3A0x4308c4573d8e01e1!2sApartament%2023%20-%20Colores%20de%20Fuerteventura%202!5e1!3m2!1spl!2spl!4v1715880417863!5m2!1spl!2spl"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps"
      ></iframe>
    </div>
  );
};

export default Map23;