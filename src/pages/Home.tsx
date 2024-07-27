import { Box,Typography } from "@mui/material";

import Forter from "src/component/Footer";
import Header from "src/component/Header";
import ProductCard from "src/component/ProductCart";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {  Pagination, Navigation } from "swiper/modules";


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
             
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  src="https://intphcm.com/data/upload/banner-thoi-trang-nam-dep.jpg"
                  width={1300}
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
