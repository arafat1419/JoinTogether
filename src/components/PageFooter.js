import React from "react";

export default function PageFooter() {
  return (
    <div>
      <div style={{ height: "40px" }} />

      <p
        class=""
        style={{
          marginTop: "50px",
          color: "rgb(189, 201, 226)",
          fontSize: "10px",
          lineHeight: "1.6",
        }}
      >
        Powered by
        <a
          href="https://tgt.wtf"
          target="_blank"
          rel="noopener noreferrer"
          bis_skin_checked="1"
          style={{
            color: "rgb(245, 54, 123)",
            textDecoration: "underline",
            marginLeft: "4px",
          }}
        >
          together
        </a>
        A visionary product of
        <a
          href="http://www.fireworks.digital/"
          target="_blank"
          rel="noopener noreferrer"
          bis_skin_checked="1"
          style={{
            color: "rgb(245, 54, 123)",
            textDecoration: "underline",
            marginLeft: "4px",
          }}
        >
          Fireworks Digital
        </a>
        <br />© 2024 Mobility Asia Sdn. Bhd. (Registration No: 1257623-M)
      </p>
    </div>
  );
}
