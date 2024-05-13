import { ArrowBack } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useState } from "react";

export default function PageHeader() {
  const [isHaveBack, setIsHaveBack] = useState(false);
  return (
    <div>
      <div
        style={{
          width: 100,
          textAlign: "start",
        }}
      >
        {isHaveBack && (
          <div
            style={{
              width: 100,
              textAlign: "start",
            }}
          >
            <IconButton aria-label="back">
              <ArrowBack
                style={{
                  color: "#FFF",
                  float: "left",
                }}
              />
            </IconButton>
          </div>
        )}
      </div>
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
    </div>
  );
}
