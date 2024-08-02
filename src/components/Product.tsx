import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    CssBaseline,
    Stack,
    Typography,
  } from "@mui/material";
  import axios from "axios";
  import { useEffect, useState } from "react";
  import { Product } from "../types/product";
  import { Link } from "react-router-dom";
  
  
  interface ProductProps{
    limit: number
  }
  function ProductList( {limit=4}:ProductProps) {
    const [products, setProducts] = useState<Product[]>([]);
    const GetAll = async () => {
      const { data } = await axios.get("http://localhost:3000/product");
      setProducts(data);
    };
    useEffect(() => {
      GetAll();
    }, []);
  
    return (
      <Container>
        <CssBaseline />
        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="space-around"
          spacing={2}
        >
          {products.slice(0,limit).map((item, index) => (
            <Box
              key={index}
              sx={{
                width: { xs: "100%", sm: "45%", md: "22%" },
                mb: 2,
                paddingTop: "20px",
              }}
            >
              <Card sx={{marginBottom:'12px'}}>
                <CardMedia
                  sx={{
                    height: 180,
                    width: 230,
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "7px", 
                    borderRadius: "3px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                  }}
                  image={item.image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.price} VND
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Link to={`/product/${item.id}`}>
                    {" "}
                    <Button
                      size="small"
                      variant="outlined"
                    >
                      Chi tiết
                    </Button>
                  </Link>
                  <Button size="small" variant="outlined">
                  Mua Ngay

                  </Button>
                 
                </CardActions>
              </Card>
            </Box>
          ))}
        </Stack>
      </Container>
    );
  }
  
  export default ProductList;