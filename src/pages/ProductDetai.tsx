import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "src/types/product";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Loading from "../components/Loading";
import ResponsiveAppBar from "../components/Header";
import Footer from "../components/Footer";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import AddIcon from "@mui/icons-material/Add";

function ProductDetail() {
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [product, setProduct] = useState<Product | undefined>();

  const getProduct = async (id: string) => {
    try {
      setLoading(true);
      const { data } = await axios.get(`http://localhost:3000/product/${id}`);
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
      <ResponsiveAppBar></ResponsiveAppBar>
      <Loading isShow={loading} />
      <Container sx={{ paddingTop: 7 }}>
        {product && (
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            gap={3}
            sx={{
              backgroundColor: 'white',
              borderRadius: 2,
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
              padding: 3,
              alignItems: 'center',
            }}
          >
            <Box sx={{ flex: 1, textAlign: 'center' }}>
              <img
                src={product.image}
                alt={product.name}
                style={{
                  border: '1px solid black',
                  borderRadius: '5px',
                  maxWidth: '500px',
                  margin: '0 auto',
                  maxHeight: '400px',
                  objectFit: 'contain',
                }}
              />
            </Box>
            <Stack gap={3} sx={{ flex: 2 }}>
              <Typography component="h1" fontSize="32px" fontWeight="bold">
                {product.name}
              </Typography>
              <Typography
                fontSize="24px"
                fontWeight="bold"
                color="primary"
              >
                ${product.price}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {product.description}
              </Typography>
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


              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<AddShoppingCartIcon />}
                sx={{
                  alignSelf: 'flex-start',
                  fontSize: '18px', // Increase font size
                  padding: '12px 24px', // Increase padding
                }}
              >
                Add to cart
              </Button>

            </Stack>
          </Stack>
        )}
      </Container>
      <Footer></Footer>
    </>
  );
}

export default ProductDetail;