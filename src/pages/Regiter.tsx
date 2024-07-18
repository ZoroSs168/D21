import TextField from '@mui/material/TextField';
import { Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';

type RegisterForm = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterForm>();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<RegisterForm> = async (data) => {
    try {
      await axios.post("http://localhost:3000/register", data);
      console.log(data);
      alert("Đăng ký thành công!");
      navigate("/Login");
    } catch (error) {
      console.log("người dùng đăng ký thất bại", error);
      alert("đăng ký không thanh công");
    }
  };

  const password = watch('password');

  return (
    <Container component="main" maxWidth="xs" >
      <CssBaseline />
      <div>
        <Typography textAlign={'center'} fontWeight={'bold'} fontSize={50} variant="h5">
        Register
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}  >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Username"
                {...register("username", {
                  required: "Tên người dùng bắt buộc",
                })}
                error={!!errors.username}
                helperText={errors.username?.message}
                name="username"
                autoComplete="username"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="email"
                label="Email"
                {...register("email", {
                  required: "Email bắt buộc",
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Email không hợp lệ",
                  },
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Password"
                {...register("password", {
                  required: "Password bắt buộc",
                })}
                error={!!errors.password}
                helperText={errors.password?.message}
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Confirm Password"
                {...register("confirmPassword", {
                  required: "Confirm Password bắt buộc",
                  validate: value =>
                    value === password || "Mật khẩu không khớp",
                })}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword?.message}
                name="confirmPassword"
                type="password"
                id="confirmPassword"
                autoComplete="confirm-password"
              />
            </Grid>
            <Grid item xs={12} sx={{ textAlign: 'left', marginBottom: '10px' }}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Sign Up
          </Button>
          <Grid>
            <Grid item>
              <Link to="/Login">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
