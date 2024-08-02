import { Container, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Banner from "src/components/Banner";
import Footer from "src/components/Footer";
import Loading from "src/components/Loading";
import ProductCard from "src/components/ProductCard";
import { Product } from "src/types/Product";
import { styled } from "@mui/system";

function Homepage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getAllProduct = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("http://localhost:3000/products");
      setProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <>
      <Banner page="Shop" />
      <Typography sx={{textAlign:'center', marginTop:'20px',fontSize:'25px',fontWeight:'bold'}} >
            Danh sách sản phẩm
          </Typography>
      <Loading isShow={loading} />
      <Container>
        <ProductGrid>
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </ProductGrid>
      </Container>
      <Footer />
    </>
  );
}

export default Homepage;

const ProductGrid = styled(Stack)({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '16px',
  padding: '16px',
});
