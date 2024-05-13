import React from "react";
import PageHeader from "../components/PageHeader";
import PageFooter from "../components/PageFooter";
import { Alert, Box, Card, Icon, IconButton, Typography } from "@mui/material";
import { Apple, Google } from "@mui/icons-material";
import LogoButton from "../components/LogoButton";
import IcMeteor from "../assets/IcMeteor";

export default function RegisterPage() {
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
            <Typography
              variant="body1"
              style={{
                fontWeight: "700",
                fontSize: "1.123rem",
              }}
            >
              Continue with
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
              <LogoButton>
                <Apple />
              </LogoButton>
              <LogoButton>
                <Google />
              </LogoButton>
              <LogoButton>
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
