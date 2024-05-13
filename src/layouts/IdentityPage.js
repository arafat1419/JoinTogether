import React from "react";
import PageHeader from "../components/PageHeader";
import PageFooter from "../components/PageFooter";
import { Box, Button, Card } from "@mui/material";
import FieldWithTitle from "../components/FieldWithTitle";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { ROUTE_PLAN } from "../utility/routePage";

export default function IdentityPage() {
  const navigate = useNavigate();
  const { isLoggedIn, login, logout } = useAuth();

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
            <FieldWithTitle title={"First Name"} />
            <FieldWithTitle title={"Last Name"} />
            <FieldWithTitle title={"Email"} />

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
            >
              Continue
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
      <PageFooter />
    </div>
  );
}
