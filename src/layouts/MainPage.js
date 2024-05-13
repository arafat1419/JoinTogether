import {
  Box,
  Container,
  Grid,
  ThemeProvider,
  Typography,
  colors,
} from "@mui/material";

import backgroundImage from "../assets/background-cover.png";

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
              <Typography
                variant="h6"
                style={{
                  color: "#FFF",
                  fontSize: "1.25rem",
                  lineHeight: "1.625",
                  fontWeight: "500",
                  letterSpacing: "8px",
                  fontFamily:
                    "'Plus Jakarta Display', Helvetica, Arial, sans-serif",
                }}
              >
                COMMUNITY POWERED COMMERCE
              </Typography>
              <Typography
                variant="h2"
                marginTop={"10px"}
                style={{
                  color: "#FFF",
                  fontSize: "2.25rem",
                  lineHeight: "1.3",
                  fontWeight: "700",
                  letterSpacing: "8px",
                  fontFamily:
                    "'Plus Jakarta Display', Helvetica, Arial, sans-serif",
                }}
              >
                Togethër
              </Typography>
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
            <Box>{children}</Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
