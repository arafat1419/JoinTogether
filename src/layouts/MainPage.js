import { Box, Container, Grid, ThemeProvider, colors } from "@mui/material";

import backgroundImage from "../assets/background-cover.png";
import PageHeader from "../components/PageHeader";
import PageFooter from "../components/PageFooter";

export default function MainPage({ children }) {
  return (
    <Container
      maxWidth="max"
      style={{
        margin: 0,
        padding: 0,
        width: "100vw",
        minHeight: "100vh",
        background:
          "linear-gradient(166deg, rgb(15, 18, 59), rgb(77, 20, 82), rgb(59, 15, 57))",
        scrollbarWidth: "none",
      }}
    >
      <Box display="grid">
        <Grid container spacing={2} columns={2}>
          <Grid
            item
            xs={1}
            display={"flex"}
            textAlign={"center"}
            justifyContent={"center"}
            alignItems={"center"}
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "105vh",
            }}
          >
            <Box display={"flex flex-col"}>
              <h6
                style={{
                  color: "#FFF",
                }}
              >
                COMMUNITY POWERED COMMERCE
              </h6>
              <h1
                style={{
                  color: "#FFF",
                  margin: "0px 0px 8px",
                }}
              >
                Togethër
              </h1>
            </Box>
          </Grid>
          <Grid
            item
            xs={1}
            display={"flex"}
            textAlign={"center"}
            justifyContent={"center"}
            marginTop={"5rem"}
            marginBottom={"5rem"}
          >
            <Box width="30vw">
              <PageHeader />
              {children}
              <PageFooter />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
