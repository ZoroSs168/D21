import { Box, Button, Stack } from "@mui/material";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Box
        sx={{
          bgcolor: "rgb(25, 118, 210)",
          display: "flex",
          justifyContent: "space-around",
          paddingTop: "20px", borderRadius: "7px",
          height:"70px",
          width:"100%"
          
        }}
      >
        <Stack  direction="row" spacing={4} >
          <Link to="/"><Button  sx={{color: "white"}} variant="outlined">Trang chủ </Button></Link>
         <Link to=""> <Button sx={{color: "white"}} variant="outlined">Nội dung </Button></Link>
         <Link to="/admin"> <Button sx={{color: "white"}} variant="outlined">Admin</Button></Link>
        </Stack>
        <Stack direction="row" marginTop={"-5px"}>
          <TextField
            sx={{ borderRadius: "5px", bgcolor: "white", height: "40px", '.MuiOutlinedInput-root': { height: '40px' } }}
            variant="outlined"
            placeholder="Tìm kiếm..."
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Stack>
        <Stack direction="row" spacing={4}>
         <Link to="/Register"> <Button variant="text" sx={{color: "white"}} startIcon={<HowToRegIcon />}>
            Register | Login
          </Button></Link>
         <Link to="/"> <Button variant="text" sx={{color: "white"}} startIcon={<ShoppingCartIcon />}>
            Cart
          </Button></Link>
        </Stack>
      </Box>

      {/* <silide></silide> */}
    </>
  );
}
export default Header;
