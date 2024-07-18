import { Box,Typography } from "@mui/material";

import Forter from "src/component/Footer";
import Header from "src/component/Header";
import ProductCard from "src/component/ProductCart";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";


function Home() {
  return (
    <>  
        <Box
          sx={{
            height: "auto",
          }}
        >
          <Header />
          <Box sx={{ marginTop: "20px", textAlign:'center' }}>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  src="https://picsum.photos/1200/600?random=1"
                  alt="slide1"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://picsum.photos/1200/600?random=2"
                  alt="slide2"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://picsum.photos/1200/600?random=3"
                  alt="slide3"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://picsum.photos/1200/600?random=4"
                  alt="slide4"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://picsum.photos/1200/600?random=5"
                  alt="slide5"
                />
              </SwiperSlide>
            </Swiper>
          </Box>
          <Typography sx={{textAlign:'center', marginTop:'20px',fontSize:'25px',fontWeight:'bold'}} >
            Danh sách sản phẩm
          </Typography>
          <ProductCard limit={8 }/>
          <Forter />
        </Box>
    </>
  );
}
export default Home;
