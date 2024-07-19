import {
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
  Box,
  CircularProgress
} from "@mui/material";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";

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
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<LoginForm> = async (data) => {
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:3000/login", data);
      const user = res.data;
      console.log(user);
      localStorage.setItem("accessToken", res.data.accessToken);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/admin");
      alert("Đăng nhập thành công");
    } catch (error) {
      alert("Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.");
      console.error("Error", error);
    } finally {
      setLoading(false);
    }
  };

  return (<>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5" textAlign={'center'} fontWeight={'bold'} fontSize={30}>
          Log in
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email" 
            {...register("email", {
              required: "Email không được để trống",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Email không hợp lệ"
              }
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
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Box sx={{ position: 'relative' }}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} /> : "Sign In"}
            </Button>
          </Box>
          <Grid container>
            <Grid item>
              <Link to="/register">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
    </>
  );
}
