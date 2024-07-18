import {
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import {  Link, useNavigate } from "react-router-dom";

type AddForm = {
  title: string;
  price: number;
  image: string;
  description: string;
  brand: string;
};
// {...data,data.image[0].name}
function ADD() {
    const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddForm>();
  const onSubmit: SubmitHandler<AddForm> = async (data :any) => {
    try {
      await axios.post("http://localhost:3000/products",data); 
      console.log(data);
        alert("ADD thanh cong");
        navigate("/list");
    } catch (error) {
      console.log("ADD that bai", error);
      alert("ADD that bai");
    }
  };

  return (
    <Container>
      <Grid container component="main">
        <CssBaseline />
        <div>
          <Typography component="h1" variant="h5">
            ADD Product
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="title"
              {...register("title", {
                required: "Username không được để chống",
              })}
              error={!!errors.title}
              helperText={errors.title ? errors.title.message : ""}
              label="title"
              name="title"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label="price"
              {...register("price", {
                required: "price không để trống ",
              })}
              error={!!errors.price}
              helperText={errors.price ? errors.price.message : ""}
              name="price"
              type="price"
              id="price"
              autoComplete="current-price"
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label="image"
              {...register("image", {
                required: "image không đúng",
              })}
              error={!!errors.image}
              helperText={errors.image ? errors.image.message : ""}
              name="image"
              type="text"
              id="image"
              autoComplete="current-image"
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label="description"
              {...register("description", {
                required: "description không đc de trống ",
              })}
              error={!!errors.description}
              helperText={errors.description ? errors.description.message : ""}
              name="description"
              type="description"
              id="description"
              autoComplete="current-description"
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label="brand"
              {...register("brand", {
                required: "brand không đc để trống ",
              })}
              error={!!errors.brand}
              helperText={errors.brand ? errors.brand.message : ""}
              name="brand"
              type="brand"
              id="brand"
              autoComplete="current-brand"
            />

            <Button type="submit" fullWidth variant="contained" color="primary">
              ADD
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/list">
                  {" danh sach sản phẩm "}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Container>
  );
}
export default ADD;
