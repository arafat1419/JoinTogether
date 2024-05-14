import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import PageFooter from "../components/PageFooter";
import { Alert, Box, Button, Card, Snackbar, Typography } from "@mui/material";
import FieldWithTitle from "../components/FieldWithTitle";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { ROUTE_PLAN } from "../utility/routePage";

export default function AddressPage() {
  const navigate = useNavigate();
  const { isLoggedIn, login, logout } = useAuth();
  const [formState, setFormState] = useState({
    addressOne: { value: "", isError: true },
    addressTwo: { value: "", isError: false },
    city: { value: "", isError: true },
    states: { value: "", isError: true },
    zip: { value: "", isError: true },
  });
  const [showSnackbar, setShowSnackbar] = useState(false);

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

  const handleCloseSnackbar = () => {
    setShowSnackbar(false);
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
          <Box
            style={{
              background: "rgb(19, 21, 56)",
              borderRadius: "1.5rem",
              padding: "30px",
              width: "270px",
            }}
          >
            <Typography
              variant="lg"
              style={{
                display: "flex",
                color: "#FFF",
                fontSize: "1.125rem",
                lineHeight: "1.625",
                fontWeight: "700",
                fontFamily:
                  "'Plus Jakarta Display', Helvetica, Arial, sans-serif",
                marginBottom: "24px",
              }}
            >
              Billing & Shipping Address
            </Typography>

            <FieldWithTitle
              title={"Address 1"}
              onInputChange={(value, isError) =>
                handleInputChange("addressOne", value, isError)
              }
              value={formState.addressOne.value}
            />
            <FieldWithTitle
              title={"Address 2"}
              required={false}
              onInputChange={(value, isError) =>
                handleInputChange("addressTwo", value, isError)
              }
              value={formState.addressTwo.value}
            />
            <FieldWithTitle
              title={"City"}
              onInputChange={(value, isError) =>
                handleInputChange("city", value, isError)
              }
              value={formState.city.value}
            />
            <FieldWithTitle
              title={"States"}
              onInputChange={(value, isError) =>
                handleInputChange("states", value, isError)
              }
              value={formState.states.value}
            />
            <FieldWithTitle
              title={"Zip"}
              onInputChange={(value, isError) =>
                handleInputChange("zip", value, isError)
              }
              value={formState.zip.value}
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
              onClick={() => setShowSnackbar(true)}
            >
              PAY
            </Button>

            <Button
              fullWidth
              variant="outlined"
              style={{
                marginTop: "100px",
                borderRadius: "0.75rem",
                borderWidth: "2px",
                color: "rgb(245, 54, 123)",
                borderColor: "rgb(245, 54, 123)",
                fontSize: "0.625rem",
                minHeight: "2.5rem",
                fontWeight: "700",
              }}
              onClick={() => {
                navigate(ROUTE_PLAN);
              }}
            >
              Change Product
            </Button>

            <Button
              fullWidth
              variant="outlined"
              style={{
                marginTop: "20px",
                borderRadius: "0.75rem",
                borderWidth: "2px",
                color: "rgb(245, 54, 123)",
                borderColor: "rgb(245, 54, 123)",
                fontSize: "0.625rem",
                minHeight: "2.5rem",
                fontWeight: "700",
              }}
              onClick={() => {
                logout();
                navigate(ROUTE_PLAN);
              }}
            >
              Log out
            </Button>
          </Box>
        </Card>
      </Box>
      <Snackbar
        open={showSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        message="Payment successful!"
      >
        <Alert onClose={handleCloseSnackbar} severity="success">
          Payment successful!
        </Alert>
      </Snackbar>
      <PageFooter />
    </div>
  );
}
