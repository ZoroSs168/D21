import { FC } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Stack,
} from "@mui/material";
import { Product } from "src/types/Product";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

type ProductCardProps = {
  product: Product;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: 2,
        boxShadow: 3,
        overflow: "hidden",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardMedia
        component="img"
        alt={product.title}
        height="200"
        image={product.image}
        sx={{ objectFit: "contain", backgroundColor: "#f5f5f5" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="h6" color="primary" component="div">
          {product.price}$
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Stack direction="row" spacing={2} width="100%">
          <Button
            size="small"
            startIcon={<AddShoppingCartIcon />}
            variant="outlined"
            color="primary"
            sx={{ flexGrow: 1 }}
          >
            Add to cart
          </Button>
          <Button
            size="small"
            variant="contained"
            color="primary"
            component={Link}
            to={`/product/${product._id}`}
            sx={{ flexGrow: 1 }}
          >
            Detail
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
