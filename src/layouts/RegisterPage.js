import React, { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import PageFooter from "../components/PageFooter";
import {
  Alert,
  Box,
  Button,
  Card,
  Icon,
  IconButton,
  Typography,
} from "@mui/material";
import { Apple, Google } from "@mui/icons-material";
import LogoButton from "../components/LogoButton";
import IcMeteor from "../assets/IcMeteor";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import { ROUTE_PLAN } from "../utility/routePage";
import FieldWithTitle from "../components/FieldWithTitle";

export default function RegisterPage() {
  const navigate = useNavigate();
  const { isLoggedIn, login, logout } = useAuth();

  const [formState, setFormState] = useState({
    phone: { value: "", isError: true },
    password: { value: "", isError: true },
  });

  const handleInputChange = (fieldName, value, isError) => {
    setFormState((prevState) => ({
      ...prevState,
      [fieldName]: {
        value: value,
        isError: isError,
      },
    }));
  };

  const isFormValid = () => {
    return Object.values(formState).every((field) => !field.isError);
  };

  const handleLoginClick = async () => {
    login();
    navigate(ROUTE_PLAN);
  };

  return (
    <div>
      <PageHeader isHaveBack={true} />
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Card
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
              padding: "45px",
            }}
          >
            <FieldWithTitle
              title={"Phone Number"}
              onInputChange={(value, isError) =>
                handleInputChange("phone", value, isError)
              }
              value={formState.phone.value}
            />

            <FieldWithTitle
              title={"Password"}
              type={"password"}
              onInputChange={(value, isError) =>
                handleInputChange("password", value, isError)
              }
              value={formState.password.value}
            />

            <Button
              fullWidth
              variant="filled"
              style={{
                marginTop: "24px",
                borderRadius: "0.75rem",
                color: "white",
                background: "rgb(245, 54, 123)",
                fontSize: "0.625rem",
                minHeight: "2.5rem",
                fontWeight: "700",
              }}
              disabled={!isFormValid()}
              onClick={handleLoginClick}
            >
              Login
            </Button>

            <Typography
              variant="body1"
              style={{
                fontWeight: "700",
                fontSize: "1.123rem",
              }}
              marginTop={"40px"}
            >
              Or Continue with
            </Typography>

            <div
              style={{
                margin: "25px 32px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: "16px",
              }}
            >
              <LogoButton onBtnClick={handleLoginClick}>
                <Apple />
              </LogoButton>
              <LogoButton onBtnClick={handleLoginClick}>
                <Google />
              </LogoButton>
              <LogoButton onBtnClick={handleLoginClick}>
                <IcMeteor />
              </LogoButton>
            </div>
          </div>
        </Card>

        <Alert
          variant="outlined"
          severity="info"
          style={{
            backgroundColor: "rgb(234, 243, 255)",
            color: "rgb(20, 57, 102)",
            borderWidth: "0px",
            textAlign: "start",
            width: "359px",
            marginTop: "50px",
          }}
        >
          If you log in with Meteor wallet, kindly
          <u
            style={{
              cursor: "pointer",
              margin: "0 4px",
            }}
          >
            refresh
          </u>
          the page.
        </Alert>
      </Box>
      <PageFooter />
    </div>
  );
}
