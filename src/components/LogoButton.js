import { IconButton } from "@mui/material";
import React from "react";

export default function LogoButton({ children }) {
  return (
    <IconButton
      style={{
        background:
          "radial-gradient(94.43% 69.43% at 50% 50%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%) transparent",
        color: "#FFF",
        padding: "2px",
        borderRadius: "1.5rem",
        width: "fit-content",
        height: "fit-content",
      }}
    >
      <div
        style={{
          background: "rgb(19, 21, 56)",
          borderRadius: "1.5rem",
          width: "64px",
          height: "64px",
          alignContent: "center",
        }}
      >
        {children}
      </div>
    </IconButton>
  );
}
