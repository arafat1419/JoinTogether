import { InputBase, Typography, styled } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

export default function FieldWithTitle({ title }) {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputValue]);

  const BootstrapInput = styled(InputBase)(({ theme, hasContent }) => ({
    "label + &": {
      marginTop: theme.spacing(3),
    },
    "& .MuiInputBase-input": {
      borderRadius: "0.9375rem",
      position: "relative",
      backgroundColor: "transparent",
      border: "1px solid",
      borderColor: hasContent ? "green" : "red",
      fontSize: 16,
      padding: "10px 12px",
      color: "white",
      transition: theme.transitions.create([
        "border-color",
        "background-color",
        "box-shadow",
      ]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        "'Plus Jakarta Display'",
        "Helvetica",
        "Arial",
        "sans-serif",
      ].join(","),
      "&:focus": {
        boxShadow: "rgb(98, 143, 194) 0rem 0rem 0rem 0.125rem",
        borderColor: "rgba(226, 232, 240, 0.6)",
      },
    },
  }));

  return (
    <div>
      <Typography
        variant="caption"
        style={{
          display: "flex",
          marginLeft: "4px",
          marginBottom: "4px",
          fontSize: "0.75rem",
          fontFamily: "'Plus Jakarta Display', Helvetica, Arial, sans-serif",
          fontWeight: "700",
        }}
      >
        {title}
      </Typography>
      <BootstrapInput
        hasContent={Boolean(inputValue)}
        value={inputValue}
        onChange={handleChange}
        inputRef={inputRef}
        fullWidth
      />
      {!Boolean(inputValue) && (
        <Typography
          variant="caption"
          style={{
            display: "flex",
            marginLeft: "4px",
            marginTop: "4px",
            fontSize: "0.75rem",
            fontFamily: "'Plus Jakarta Display', Helvetica, Arial, sans-serif",
            fontWeight: "400",
            color: "red",
          }}
        >
          Required
        </Typography>
      )}
      <div style={{ marginBottom: "12px" }} />
    </div>
  );
}
