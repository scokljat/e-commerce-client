import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registerUser } from "../store/user/userSlice";
import { StyledButton } from "../globalStyle";
import {
  StyledForm,
  StyledInput,
  ErrorDescription,
  StyledLink,
} from "./LoginStyle";

function Register() {
  const dispatch = useDispatch();

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (values) => {
    dispatch(registerUser(values));
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledInput
        placeholder="First name"
        {...register("firstName", {
          required: "First name is required",
          minLength: {
            value: 3,
            message: "First name must be at least 3 characters long!",
          },
        })}
      />
      {errors.firstName && (
        <ErrorDescription>{errors.firstName.message}</ErrorDescription>
      )}
      <StyledInput
        placeholder="Last name"
        {...register("lastName", {
          required: "Last name is required",
          minLength: {
            value: 3,
            message: "Last name must be at least 3 characters long!",
          },
        })}
      />
      {errors.lastName && (
        <ErrorDescription>{errors.lastName.message}</ErrorDescription>
      )}
      <StyledInput
        placeholder="Username"
        {...register("userName", {
          required: "Username is required",
          minLength: {
            value: 5,
            message: "Username must be at least 5 characters long!",
          },
        })}
      />
      {errors.userName && (
        <ErrorDescription>{errors.userName.message}</ErrorDescription>
      )}
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
      <StyledButton type="submit">Sign up</StyledButton>
      <p>
        Have an account ? <StyledLink to="/login">Login here</StyledLink>
      </p>
    </StyledForm>
  );
}

export default Register;
