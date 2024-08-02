import { FC } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Product } from "src/types/Product";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useCart } from "src/contexts/cart";




type ProductCardProps = {
  product: Product;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { addtoCart } = useCart();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        width="200"
        image={product.image}
        sx={{ objectFit: "contain" }}
      />
      <CardContent>
        <Typography  gutterBottom variant="h5" component="div">
          {product.price}$
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" startIcon={<AddShoppingCartIcon/>} onClick={()=>addtoCart(product)} >Add to cart</Button>
        <Link to={`/product/${product._id}`}>
          <Button size="small" variant="contained">
            Detail
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
