import {
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {  Link, useNavigate, useParams } from "react-router-dom";

type UpdateForm = {
  title: string;
  price: number;
  image: string;
  brand: string;
};

function Update() {
  const { id } = useParams<{ id: string }>();
  // console.log(id);
    const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<UpdateForm>();

  // lay du lieu tu server tra vao input
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await axios.get(`http://localhost:3000/products/${id}`);
      setValue("title", data.title);
      setValue("price", data.price);
      setValue("image", data.image);
      setValue("brand", data.brand);
    };
    getProduct();
  }, [id, setValue]);
  // update lại sản phẩm 
  const onSubmit: SubmitHandler<UpdateForm> = async (data :any) => {
    try {
      await axios.put(`http://localhost:3000/products/${id}`,data); 
      console.log(data);
        alert("Update thanh cong");
        navigate("/list");
    } catch (error) {
      console.log("Update that bai", error);
      alert("Update that bai");
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
              // label="title"
              name="title"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              // label="price"
              {...register("price", {
                required: " không được để chống price",
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
              // label="image"
              {...register("image", {
                required: "không được dể chống ảnh",
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
              // label="brand"
              {...register("brand", {
                required: " không được để chống brand",
              })}
              error={!!errors.brand}
              helperText={errors.brand ? errors.brand.message : ""}
              name="brand"
              type="brand"
              id="brand"
              autoComplete="current-brand"
            />

            <Button type="submit" fullWidth variant="contained" color="primary">
              Update
            </Button>
            <Grid container>
              <Grid item>
               
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Container>
  );
}
export default Update;
