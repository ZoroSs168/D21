import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Forter from "src/component/Footer";
import Header from "src/component/Header";
import Loading from "src/component/Loading";
import { Product } from "src/type/interface";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import AddIcon from "@mui/icons-material/Add";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import StarRateIcon from "@mui/icons-material/StarRate";
import ProductCard from "src/component/ProductCart";

function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState<boolean>(false);
  const [product, setProduct] = useState<Product | undefined>();

  const getProduct = async (id: string) => {
    try {
      setLoading(true);
      const { data } = await axios.get(`http://localhost:3000/products/${id}`);
      setProduct(data);
    } catch (error) {
      console.log("not found ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!id) return;
    getProduct(id);
  }, [id]);


  const handleDecrease = () => {
    if (product && product.quantity > 0) {
      setProduct({ ...product, quantity: product.quantity - 1 });
    }
  };

  const handleIncrease = () => {
    if (product) {
      setProduct({ ...product, quantity: product.quantity + 1 });
    }
  };

  return (
    <>
      <Loading isShow={loading} />
      <Box sx={{ borderRadius: "7px", boxShadow: "5px 7px 0 2px #DDDDDD" }}>
        <Header />
        <Typography
          sx={{ marginLeft: 9, marginTop: 6, marginBottom: 6, fontSize: '20px', fontWeight: 'bold' }}
        >
          {" "}
          Trang Chủ / Chi tiết sản phẩm
        </Typography>
        <Container>
          <Grid
            container
            spacing={2}
            sx={{ margin: "0 auto", justifyContent: "center" }}
          >
            <Grid item xs={7} spacing={5} >
              <img src={product?.image} alt="" height={500} width={580} />
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                border: "1px solid #DDDDDD",
                marginLeft: "10px",
                bgcolor: "white",
                borderRadius: "4px",
              }}
            >
              {product && (
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    sx={{ marginBottom: 2, textAlign: "left" }}
                    component="h1"
                    fontSize={"26px"}
                  >
                    Tên sản phẩm: {product.title}
                  </Typography>
                  <Typography  sx={{
                      marginBottom: 2,
                      textAlign: "left",
                      color: "black",
                    }}
                    color={"Highlight"}>
                      Hãng : {product.brand}
                    </Typography>
                   


                    <Typography
                      sx={{
                        marginBottom: 2,
                        textAlign: "left",
                        color: "black",
                      }}
                      fontWeight={"bold"}
                      color={"Highlight"}
                    >
                      Đánh giá sản phẩm
                      <Box>
                        <StarRateIcon sx={{ color: "yellow" }} />
                        <StarRateIcon sx={{ color: "yellow" }} />
                        <StarRateIcon sx={{ color: "yellow" }} />
                        <StarRateIcon sx={{ color: "yellow" }} />
                        <StarRateIcon sx={{ color: "#DDDDDD" }} />
                      </Box>
                    </Typography>
                    <Typography
                      sx={{
                        marginBottom: 2,
                        textAlign: "left",
                        color: "black",
                      }}
                      fontWeight={"bold"}
                      color={"Highlight"}
                    >
                      Giá sản phẩm: ${product.price}
                    </Typography>
                    <Typography
                      sx={{
                        marginBottom: 2,
                        textAlign: "left",
                        color: "black",
                      }}
                      fontWeight={"bold"}
                      color={"Highlight"}
                    >
                      Mô tả: {product.description}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "60px",
                      }}
                    >
                      <Stack direction={"row"} spacing={2}>
                        <Button
                          variant="outlined"
                          startIcon={<HorizontalRuleIcon />}
                          onClick={handleDecrease}
                        ></Button>
                        <Button variant="outlined">{product.quantity}</Button>
                        <Button
                          variant="outlined"
                          startIcon={<AddIcon />}
                          onClick={handleIncrease}
                        ></Button>
                      </Stack>
                    </Box>
                    <Button variant="contained">Mua ngay</Button>
                </Box>
              )}
            </Grid>
          </Grid>
        </Container>

        <Typography
          component="h1"
          fontSize={"26px"}
          sx={{ textAlign: "left", marginLeft: 9, marginTop: 6, marginBottom: 6 }}
        >
          Sản phẩm liên quan
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", border: "1px solid #DDDDDD", borderRadius: '4px', marginBottom: '30px' }}>
          <ProductCard limit={4} />
        </Box>

        <Forter />
      </Box>
    </>
  );
}

export default ProductDetail;
