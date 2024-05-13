import { ArrowBack } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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

      <h1
        style={{
          color: "#FFF",
          margin: "0px 0px 8px",
        }}
      >
        togethër
      </h1>
      <h6
        style={{
          color: "#FFF",
        }}
      >
        COMMUNITY POWERED COMMERCE
      </h6>
      <div style={{ height: "40px" }} />
    </div>
  );
}
