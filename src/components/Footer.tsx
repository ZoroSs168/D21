import { Box, Stack, Typography } from "@mui/material"
function Footer() {

    return (
        <>
            <hr />
            <Stack direction='row' justifyContent='space-around' bgcolor='rgb(25, 118, 210)' color={"white"} marginTop={3} paddingTop='15px' marginBottom={5}>
                <Box sx={{
                    '& > *': {
                        marginBottom: 1,
                        textAlign: 'left',
                    },
                }}>
                    <Typography>Tính điểm quà tặng VIP</Typography>
                    <Typography>Lịch sử mua hàng </Typography>
                    <Typography>Tìm hiểu về trả Góp </Typography>
                    <Typography>Chính sánh bảo hành </Typography>
                    <Typography>Xem Thêm </Typography>

                </Box>
                <Box sx={{
                    '& > *': {
                        marginBottom: 1,
                        textAlign: 'left',
                    },
                }}>
                    <Typography>Giới thiệu công ty </Typography>
                    <Typography>Tuyển dụng </Typography>
                    <Typography>Gửi góp ý, Gủi lại </Typography>
                    <Typography>Tìm hiểu thêm  </Typography>
                    <Typography>Xem bản mobile </Typography>

                </Box>
                <Box sx={{
                    '& > *': {
                        marginBottom: 1,
                        textAlign: 'left',
                    },
                }}>
                    <Typography>Tổng đài hỗ trợ </Typography>
                    <Typography>Gọi mua </Typography>
                    <Typography>Khiếu nại  </Typography>
                    <Typography>Chính sánh bảo hành </Typography>
                    <Typography> Bảo hàng  </Typography>
                </Box>
            </Stack>

        </>
    )
}
export default Footer