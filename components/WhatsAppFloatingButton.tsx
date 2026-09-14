"use client";


import { CSSProperties } from "react";


const PHONE = "21623163109"; // remplace par le vrai numéro Tunisie, format international sans le +


function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" width="50" height="50" fill="#FFFFFF" aria-hidden="true">
      <path d="M16.001 3C9.107 3 3.5 8.607 3.5 15.5c0 2.29.615 4.437 1.688 6.285L3 29l7.4-2.15A12.44 12.44 0 0 0 16 28.5c6.894 0 12.5-5.607 12.5-12.5S22.895 3 16.001 3zm0 22.7c-2.043 0-3.955-.58-5.58-1.586l-.4-.24-4.393 1.276 1.29-4.28-.26-.44A10.16 10.16 0 0 1 5.7 15.5c0-5.68 4.62-10.3 10.301-10.3 5.68 0 10.3 4.62 10.3 10.3 0 5.68-4.62 10.3-10.3 10.3zm5.65-7.71c-.31-.155-1.833-.905-2.117-1.008-.284-.104-.49-.155-.697.155-.207.31-.8 1.008-.98 1.216-.18.207-.362.233-.672.078-.31-.155-1.31-.483-2.494-1.54-.922-.822-1.545-1.836-1.726-2.146-.18-.31-.02-.478.135-.632.14-.14.31-.362.465-.543.155-.18.207-.31.31-.517.104-.207.052-.388-.026-.543-.078-.155-.697-1.68-.955-2.3-.252-.605-.508-.523-.697-.533l-.593-.01c-.207 0-.543.078-.827.388-.284.31-1.084 1.06-1.084 2.585 0 1.526 1.11 3 1.264 3.207.155.207 2.184 3.334 5.293 4.675.74.32 1.318.51 1.768.653.743.236 1.42.203 1.955.123.596-.089 1.833-.75 2.092-1.474.259-.724.259-1.345.181-1.474-.078-.13-.284-.207-.594-.362z" />
    </svg>
  );
}


const wrapperStyle: CSSProperties = {
  position: "fixed",
  bottom: "50px",
  right: "50px",
  zIndex: 9999,
};


const buttonStyle: CSSProperties = {
  width: "60px",
  height: "60px",
  borderRadius: "9999px",
  backgroundColor: "#25D366",
  border: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  boxShadow: "0 4px 14px rgba(0,0,0,0.25)",
  padding: 0,
  textDecoration: "none",
};


export default function WhatsAppFloatingButton() {
  return (
    <div style={wrapperStyle}>
      <a
        href={`https://wa.me/${PHONE}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter sur WhatsApp"
        style={buttonStyle}
      >
        <WhatsAppIcon />
      </a>
    </div>
  );
}
