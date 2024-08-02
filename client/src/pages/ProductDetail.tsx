import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CartItem, Product } from "src/types/Product";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Loading from "src/components/Loading";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useProductCart } from "src/hooks/useProductCart";
import Footer from "src/components/Footer";

import StarRateIcon from "@mui/icons-material/StarRate";
import Banner from "src/components/Banner";

function ProductDetail() {
  const { addToCart } = useProductCart();

  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [product, setProduct] = useState<Product | undefined>();
  const [quantity, setQuantity] = useState<number>(1);

  const getProduct = async (id: string) => {
    try {
      setLoading(true);
      const { data } = await axios.get(`http://localhost:3000/products/${id}`);
      setProduct(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (!id) return;
    getProduct(id);
  }, [id]);

  const handleAddToCart = (product: Product) => {
    if (quantity <= 0) return;
    addToCart({ product, quantity });
  };
  return (
    <>
      <Banner page="Detail" />
      <Loading isShow={loading} />
      <Container>
        <Grid 
          container
          spacing={2}
          sx={{ margin: "0 auto", justifyContent: "center", padding:"30px 0 30px 0 " }}
        >
          <Grid item xs={7} spacing={5}>
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
                    height: "30px",
                  }}
                ></Box>

                <Stack direction={"row"} gap={2} alignItems={"center"}>
                <Button sx={{color:'black'}}
                  onClick={() => setQuantity(quantity === 0 ? 0 : quantity - 1)}
                >
                  <RemoveIcon />
                </Button >
                <TextField style={{padding:'unset',width:'100px'}}
                  id="outlined-basic"
                  variant="outlined"
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                />
                <Button sx={{color:'black'}} onClick={() => setQuantity(quantity + 1)}>
                  <AddIcon />
                </Button>
              </Stack>
                <Link to="/cart">
                  <Button
                    sx={{marginTop:"20px"}}
                    variant="outlined"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to cart
                  </Button>
                </Link>
              </Box>
            )}
          </Grid>
        </Grid>

        

        {/* <Typography>{product.description}</Typography> */}
        {/* <Link to="/cart">
              <Button
                variant="outlined"
                onClick={() => handleAddToCart(product)}
              >
                Add to cart
              </Button>
              </Link> */}
      </Container>
      <Footer></Footer>
    </>
  );
}

export default ProductDetail;
