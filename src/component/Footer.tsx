import { Box, Stack, Typography } from "@mui/material";
import { Product } from "src/type/interface";
import no1 from "../image/imgNo1.gif";
import no2 from "../image/imgNo2.jpg";
import no3 from "../image/imgNo3.png";
import Link from "@mui/material/Link";

// interface text {
//     title: string
// }
function Forter() {
  return (
    <>
      <hr />
      <Stack
        direction="row"
        justifyContent="space-around"
        bgcolor="white"
        marginTop={3}
        paddingTop="15px"
        marginBottom={5}
      >
        <Box
          sx={{
            "& > *": {
              marginBottom: 1,
              textAlign: "left",
            },
          }}
        >
          <Typography>Tính điểm quà tặng VIP</Typography>
          <Typography>Lịch sử mua hàng </Typography>
          <Typography>Tìm hiểu về trả Góp </Typography>
          <Typography>Chính sánh bảo hành </Typography>
          <Typography>Xem Thêm </Typography>
        </Box>
        <Box
          sx={{
            "& > *": {
              marginBottom: 1,
              textAlign: "left",
            },
          }}
        >
          <Typography>Giới thiệu công ty </Typography>
          <Typography>Tuyển dụng </Typography>
          <Typography>Gửi góp ý, Gủi lại </Typography>
          <Typography>Tìm hiểu thêm </Typography>
          <Typography>Xem bản mobile </Typography>
        </Box>
        <Box
          sx={{
            "& > *": {
              marginBottom: 1,
              textAlign: "left",
            },
          }}
        >
          <Typography>
            Tổng đài hỗ trợ
            <Link sx={{textDecoration:"none", marginLeft:"10px"}}>
             093865247
            </Link>
          </Typography>
          <Typography>Gọi mua <Link sx={{textDecoration:"none", marginLeft:"10px"}}>
             036253725
            </Link> </Typography>
          <Typography>Khiếu nại </Typography>
          <Typography>Chính sánh bảo hành </Typography>
          <Typography> Bảo hàng </Typography>
        </Box>
        <Box
          sx={{
            "& > *": {
              marginBottom: 1,
              textAlign: "left",
            },
          }}
        >
          <Stack direction={"row"} spacing={4}>
            <img src={no1} width={70} alt="Logo công ty" />
            <img src={no2} width={100} alt="Logo công ty" />
            <img src={no2} width={100} alt="Logo công ty" />
          </Stack>
          <Typography sx={{ marginLeft: "10px", marginBottom: "5px" }}>
            {" "}
            Liên quan{" "}
          </Typography>
          <img src={no3} width={370} alt="Logo công ty" />
        </Box>
      </Stack>
    </>
  );
}
export default Forter;
