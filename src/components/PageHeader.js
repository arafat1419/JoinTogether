import { ArrowBack } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import logoTogetherWhite from "../assets/logo_together_white.svg";

export default function PageHeader({ isHaveBack }) {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    // Navigate to the "register" route when the button is clicked
    navigate(-1);
  };
  return (
    <div>
      {isHaveBack && (
        <div
          style={{
            textAlign: "start",
          }}
        >
          <IconButton aria-label="back" onClick={handleBackButtonClick}>
            <ArrowBack
              style={{
                color: "#FFF",
                float: "left",
              }}
            />
          </IconButton>
        </div>
      )}

      <div
        style={{
          width: "150px",
          height: "35px",
          backgroundImage: `url(${logoTogetherWhite})`,
          backgroundSize: "cover",
          margin: "0 auto",
        }}
      />
      <Typography
        variant="h6"
        style={{
          color: "#FFF",
          fontSize: "0.875rem",
          lineHeight: "1.625",
          fontWeight: "400",
          marginTop: "35px",
          fontFamily: "'Plus Jakarta Display', Helvetica, Arial, sans-serif",
        }}
      >
        COMMUNITY POWERED COMMERCE
      </Typography>
      <div style={{ height: "40px" }} />
    </div>
  );
}
