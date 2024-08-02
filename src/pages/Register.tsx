import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type RegisterFormParams = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormParams>();
  const naviage = useNavigate();
  const onSubmit: SubmitHandler<RegisterFormParams> = async (data) => {
    try {
      await axios.post("http://localhost:3000/register", data);
      alert("Register success");
      naviage("/login");

    } catch (error) { }
  };
  const password = watch("password");
  return (
    <Container>
      <Typography variant="h2" textAlign={"center"} mb={2}>
        Register
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack gap={2}>
          <TextField
            label="Username"
            {...register("username", {
              required: "Username is required",
            })}
            error={!!errors?.username?.message}
            helperText={errors?.username?.message}
          />
          <TextField
            label="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            })}
            error={!!errors?.email?.message}
            helperText={errors?.email?.message}
          />
          <TextField
            label="Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password is min length 6 characters",
              },
            })}
            type="password"
            error={!!errors?.password?.message}
            helperText={errors?.password?.message}
          />

          <TextField
            variant="outlined"
            fullWidth
            label="Confirm Password"
            {...register("confirmPassword", {
              required: "Confirm Password bắt buộc",
              validate: (value) =>
                value === password || "Mật khẩu không khớp",
            })}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
            name="confirmPassword"
            type="password"
            id="confirmPassword"
            autoComplete="confirm-password"
          />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Stack>
      </form>
    </Container>
  );
};

export default Register;