import {
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';

type LoginForm = {
  email: string; 
  password: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginForm> = async (data) => {
    try {
      const res= await axios.post("http://localhost:3000/login", data);
      const user = res.data;
      console.log(user);
      localStorage.setItem("token", res.data.accessToken);
      localStorage.setItem("user",JSON.stringify(res.data.user));
      navigate("/admin");
      alert("Đăng nhập thành công");
    } catch (error) {
      alert("Thất bại");
      console.error("Error",data);
    }
  };

  return (
    <>
    <Container component="main" maxWidth="xs">
    <Grid container component="main">
        <CssBaseline />
        <div>
          <Typography  textAlign={'center'} fontWeight={'bold'} fontSize={50} variant="h5">
          Log in
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="email" 
              {...register("email", {
                required: "Email không được để trống",
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
              label="Email" 
              name="email" 
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label="Password"
              {...register("password", {
                required: "Password không được để trống",
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Grid sx={{ textAlign: "left", marginBottom: "10px" }}>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/Register">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Container>
    </>
  );
}
