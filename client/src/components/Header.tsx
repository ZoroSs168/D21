import { useState, useMemo } from "react";
import {
  Badge,
  IconButton,
  Stack,
  styled,
  Typography,
  Popover,
  Box,
  Divider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useCart } from "src/contexts/cart";
import DeleteIcon from "@mui/icons-material/Delete";
import { useProductCart } from "src/hooks/useProductCart";

const menus = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Shop",
    link: "/shop",
  },
  {
    label: "About",
    link: "/about",
  },
  {
    label: "Contact",
    link: "/contact",
  },
];

const Header = () => {
  const { cart } = useCart();
  const { removeToCart } = useProductCart();
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

  const cartQuantity = useMemo(
    () =>
      cart
        ? cart.products.reduce((total, { quantity }) => total + quantity, 0)
        : 0,
    [cart]
  );
  const totalPrice = useMemo(
    () =>
      cart
        ? cart.products.reduce(
            (total, { product, quantity }) => total + product.price * quantity,
            0
          )
        : 0,
    [cart]
  );

  const handlePopoverOpen = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Wrapper
      sx={{ padding: "0 50px" }}
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <img src="/logo.svg" alt="logo" />
      <Stack direction={"row"} gap={"75px"}>
      
        {menus.map((menu, index) => (
          <Link to={menu.link} key={index}>
            <Typography fontWeight={"500"}>{menu.label}</Typography>
          </Link>
        ))}
      </Stack>
      <Stack gap={"45px"} direction={"row"}>
        <Link to={"/login"}>
          <img src="/user.svg" alt="user" />
        </Link>
        <SearchIcon />
        <FavoriteBorderIcon />
        <div onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
          
          
        >
          <Badge badgeContent={cartQuantity} color="secondary" >
            <img src="/cart.svg" alt="cart" />
          </Badge>
          {/* //render */}
          <Popover
            id="mouse-over-popover"
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            onClose={handlePopoverClose}
            disableRestoreFocus
          >
            {/* gio hang */}
            <Box sx={{ p: 2, minWidth: 200 }}>
              <Typography variant="h6" gutterBottom>
                Giỏ hàng
              </Typography>
              <Divider />

              <Stack direction={"row"} spacing={3} padding={1} fontWeight={600}>
                <Typography flex={1}>Image</Typography>
                <Typography flex={3}>Name</Typography>
                <Typography flex={3}>Price</Typography>
                <Typography flex={1}>Sl</Typography>
              </Stack>
              <Divider />
              <Stack gap={2} my={2}>
                {cart?.products.length ? (
                  cart.products.map((item) => (
                    <Stack
                      key={item.product._id}
                      direction={"row"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                      spacing={3}
                      padding={1}
                    >
                      <Stack direction={"row"} alignItems={"center"} gap={2}>
                        <Link to="/cart">
                          <img
                            src={item.product.image}
                            width={"40px"}
                            height={"50px"}
                            alt={item.product.title}
                          />
                        </Link>
                        <Typography
                          fontWeight={500}
                          sx={{ textAlign: "center", width: "100%" }}
                        >
                          {item.product.title.substring(0, 10)}...
                        </Typography>
                      </Stack>
                      <Typography
                        fontWeight={500}
                        sx={{ textAlign: "center", width: "100%" }}
                      >
                        {item.product.price}
                      </Typography>
                      <Typography fontWeight={500}>x{item.quantity}</Typography>
                    </Stack>
                  ))
                ) : (
                  <Typography>Giỏ hàng đang trống.</Typography>
                )}
              </Stack>
              <Divider />
              <Typography color="black" textAlign={"left"} mt={2}>
                Total: {totalPrice} VND
              </Typography>
            </Box>
          </Popover>
        </div>
      </Stack>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled(Stack)({
  height: 100,
  padding: "0 50px",
});
