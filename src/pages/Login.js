import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/user/userSlice";
import { StyledButton } from "../globalStyle";
import {
  StyledForm,
  StyledInput,
  ErrorDescription,
  StyledLink,
} from "./LoginStyle";

function Login() {
  const dispatch = useDispatch();

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (values) => {
    dispatch(loginUser(values));
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledInput
        placeholder="Email"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Please Enter A Valid Email!",
          },
        })}
      />
      {errors.email && (
        <ErrorDescription>{errors.email.message}</ErrorDescription>
      )}
      <StyledInput
        placeholder="Password"
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters long!",
          },
        })}
      />
      {errors.password && (
        <ErrorDescription>{errors.password.message}</ErrorDescription>
      )}
      <StyledButton type="submit">Login</StyledButton>
      <p>
        Don't have an account ?{" "}
        <StyledLink to="/register">Register here</StyledLink>
      </p>
    </StyledForm>
  );
}

export default Login;
