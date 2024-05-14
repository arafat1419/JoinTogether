import { Done, DoneRounded, InfoOutlined, Search } from "@mui/icons-material";
import { InputBase, Typography, styled } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

export default function FieldWithTitle({
  title,
  type,
  required = true,
  onInputChange,
}) {
  const [inputValue, setInputValue] = useState("");
  const [typing, setTyping] = useState(false);
  const [error, setError] = useState(required);
  const [errorMessage, setErrorMessage] = useState(
    required ? `${title} Required` : ""
  );
  const inputRef = useRef(null);

  if (title == "Address 2") {
    console.log(required);
    console.log(error);
  }

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setTyping(true);
    validateInput(e.target.value);
    if (onInputChange) {
      onInputChange(e.target.value, error);
    }
  };

  const validateInput = (value) => {
    if (required && !value) {
      setError(true);
      setErrorMessage(`${title} Required`);
      return;
    }

    let isValid = true;
    let message = "";
    switch (type) {
      case "email":
        isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        message = "Invalid email address";
        break;
      case "password":
        isValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/.test(value); // Minimum 8 characters, at least 1 uppercase, 1 lowercase, 1 symbol
        message =
          "Password must contains at least :\n- 8 characters\n- 1 uppercase letter\n- 1 lowercase letter\n- 1 symbol";
        break;
      case "phone":
        isValid = /^\+?[1-9]\d{1,14}$/.test(value); // Example rule: international phone numbers
        message = "Invalid phone number";
        break;
      default:
        isValid = true;
    }
    setError(!isValid);
    setErrorMessage(isValid ? "" : message);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    const timeout = setTimeout(() => {
      setTyping(false);
    }, 600);
    return () => clearTimeout(timeout);
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
      borderColor: !required
        ? "rgb(74, 85, 104)"
        : error
        ? "red"
        : hasContent
        ? "green"
        : "red",
      fontSize: 16,
      padding: "10px 40px 10px 12px", // Adjust padding for the icon
      color: "white",
      transition: theme.transitions.create([
        "border-color",
        "background-color",
        "box-shadow",
      ]),
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

  const InputContainer = styled("div")({
    position: "relative",
    display: "flex",
    alignItems: "center",
  });

  const IconWrapper = styled("div")(({ hasContent }) => ({
    position: "absolute",
    right: 10,
    display: "flex",
    alignItems: "center",
    color: error ? "red" : hasContent ? "green" : "red",
    pointerEvents: "none",
    transition: "opacity 0.3s",
    opacity: typing || !required ? 0 : 1,
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
      <InputContainer>
        <BootstrapInput
          hasContent={Boolean(inputValue)}
          value={inputValue}
          onChange={handleChange}
          inputRef={inputRef}
          fullWidth
          type={type}
        />
        <IconWrapper hasContent={Boolean(inputValue)} typing={typing}>
          {Boolean(inputValue) && !error ? <DoneRounded /> : <InfoOutlined />}
        </IconWrapper>
      </InputContainer>
      {error && (
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
            textAlign: "left",
          }}
        >
          {errorMessage.split("\n").map((msg, index) => (
            <React.Fragment key={index}>
              {msg}
              <br />
            </React.Fragment>
          ))}
        </Typography>
      )}
      <div style={{ marginBottom: "12px" }} />
    </div>
  );
}
