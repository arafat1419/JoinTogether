import { Box, Button, Card } from "@mui/material";
import React from "react";
import CardPlan from "../components/CardPlan";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import PageFooter from "../components/PageFooter";
import PageHeader from "../components/PageHeader";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { ROUTE_CONTINUE, ROUTE_REGISTER } from "../utility/routePage";

SwiperCore.use([Autoplay, Pagination]);

export default function PlanPage() {
  const navigate = useNavigate();
  const { isLoggedIn, login, logout } = useAuth();

  const handleLoginClick = () => {
    // Navigate to the "register" route when the button is clicked
    if (isLoggedIn) {
      logout();
    } else {
      navigate(ROUTE_REGISTER);
    }
  };

  const handleOrderClick = () => {
    // Navigate to the "register" route when the button is clicked
    if (isLoggedIn) {
      navigate(ROUTE_CONTINUE);
    } else {
      navigate(ROUTE_REGISTER);
    }
  };

  return (
    <div>
      <PageHeader isHaveBack={false} />
      <Box
        style={{
          display: "flex",
          flexDirection: "column", // Set flexDirection to column
          alignItems: "center", // Center items horizontally
        }}
      >
        <Swiper
          style={{
            width: "444px",
            "--swiper-pagination-color": "rgb(245, 54, 123)",
            "--swiper-pagination-bullet-inactive-color": "#FFF",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "14px",
            "--swiper-pagination-bullet-horizontal-gap": "8px",
          }}
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          autoplay={{ delay: 3000 }}
          onSwiper={(swiper) => console.log(swiper)}
          pagination={{
            clickable: true,
          }}
        >
          <SwiperSlide>
            <CardPlan title={"card 1"} onPreOrderClick={handleOrderClick} />
          </SwiperSlide>
          <SwiperSlide>
            <CardPlan title={"card 2"} onPreOrderClick={handleOrderClick} />
          </SwiperSlide>
          <SwiperSlide>
            <CardPlan title={"card 3"} onPreOrderClick={handleOrderClick} />
          </SwiperSlide>
          <SwiperSlide>
            <CardPlan title={"card 4"} onPreOrderClick={handleOrderClick} />
          </SwiperSlide>
          <div style={{ height: "46px" }} />
        </Swiper>

        <Button
          fullWidth
          variant="outlined"
          style={{
            marginTop: "48px",
            borderRadius: "0.75rem",
            borderWidth: "2px",
            color: "rgb(245, 54, 123)",
            borderColor: "rgb(245, 54, 123)",
            fontSize: "0.625rem",
            minHeight: "2.5rem",
            fontWeight: "700",
            width: "444px",
          }}
          onClick={handleLoginClick}
        >
          {isLoggedIn ? "Log out" : "Login"}
        </Button>
      </Box>
      <PageFooter />
    </div>
  );
}
