import { Box, Container, Grid, Link, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 5,
        bgcolor: "#fff",
        color: "#000",
        mt: 'auto',
        borderTop: '1px solid #ccc',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              D21 Shop
            </Typography>
            <Typography variant="body2" component="p">
              D21 là một thương hiệu thời trang hàng đầu chuyên cung cấp các sản phẩm áo quần thời trang phong cách và chất lượng, giúp bạn tự tin thể hiện cá tính và phong cách riêng.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Liên Kết
            </Typography>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Link href="#" color="inherit" underline="hover" sx={{ color: "#000", display: 'block', mb: 1 }}>
                  Trang Chủ
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Link href="#" color="inherit" underline="hover" sx={{ color: "#000", display: 'block', mb: 1 }}>
                  Sản Phẩm
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Link href="#" color="inherit" underline="hover" sx={{ color: "#000", display: 'block', mb: 1 }}>
                  Liên Hệ
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Mạng Xã Hội
            </Typography>
            <Grid container spacing={1}>
              <Grid item>
                <Link href="#" color="inherit" underline="hover" sx={{ color: "#000", mr: 1 }}>
                  <FacebookIcon />
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" color="inherit" underline="hover" sx={{ color: "#000", mr: 1 }}>
                  <InstagramIcon />
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" color="inherit" underline="hover" sx={{ color: "#000", mr: 1 }}>
                  <TwitterIcon />
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box mt={5} textAlign="center">
          <Typography variant="body2" color="inherit" sx={{ color: "#000" }}>
             D21. Những Chiếc Áo Xinh Xắn Đều Có Ở Đây.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
