import React from "react";

function Footer() {
  // Date object
  const date = new Date();
  const year = date.getUTCFullYear();
  return (
    <footer>
      <p>Copyright Pratik Thapa {year}</p>
    </footer>
  );
}

export default Footer;
