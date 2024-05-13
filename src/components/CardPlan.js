import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import backgroundImage from "../assets/background-cover.png";

export default function CardPlan({ title, onPreOrderClick }) {
  return (
    <Card
      style={{
        background: "rgb(19, 21, 55)",
        color: "#FFF",
        padding: "22px",
      }}
    >
      <CardMedia
        component="img"
        image="https://app.tgt.wtf/loyalty/uploads/package/luckynft.png"
        alt="Paella dish"
      />
      <h3
        style={{
          background: "rgb(30, 36, 75)",
          borderRadius: "10rem",
          padding: "8px 12px",
          display: "inline-block",
          marginTop: "15px",
          marginBottom: "4px",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          color: "white",
          fontSize: "13px",
          margin: "0",
        }}
      >
        *excluding RM 10 flat rate nationwide shipping fee
      </p>
      <h2>RM 99</h2>
      <span
        style={{
          background: "rgb(245, 54, 123)",
          borderRadius: "20px",
          padding: "10px",
          display: "inline-block",
          marginTop: "15px",
          marginBottom: "4px",
          fontSize: "12px",
          margin: "10px",
        }}
      >
        Experience unmatched luxury with our exclusive NFT Bundle. Elevate your
        beauty routine and digital collection with a Tyra Hand-Drawn NFT,
        sought-after blusher, and complimentary perks. Embrace elegance today!
      </span>
      <div
        style={{
          marginTop: "16px",
        }}
      >
        {[1, 2, 3].map((element) => (
          <div
            key={element}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px",
            }}
          >
            <div
              style={{
                color: "rgb(160, 174, 192)",
                fontSize: "14px",
                fontWeight: "normal",
              }}
            >
              The Cheek Canvas: Lucky Blusher
            </div>
            <div
              style={{
                fontSize: "14px",
                fontWeight: "700",
              }}
            >
              RM55
            </div>
          </div>
        ))}
      </div>

      <Button
        fullWidth
        variant="contained"
        style={{
          marginTop: "48px",
          borderRadius: "0.75rem",
          background: "rgb(245, 54, 123)",
          fontSize: "0.625rem",
          minHeight: "2.5rem",
          fontWeight: "700",
        }}
        onClick={onPreOrderClick}
      >
        Pre-Order Now
      </Button>
    </Card>
  );
}
