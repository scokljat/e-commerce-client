import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../../store/user/userSlice";
import { StyledImage, Container, Wrapper } from "./ProfileStyle";
import { StyledButton } from "../../globalStyle";
import { StyledForm, StyledInput, ErrorDescription } from "../LoginStyle";

function Profile() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [editFormIsOpen, setEditFormIsOpen] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (values) => {
    dispatch(
      editUser({
        id: user.id,
        firstName: values.firstName,
        lastName: values.lastName,
        userName: values.userName,
        email: values.email,
      })
    );
    setEditFormIsOpen(false);
  };
  return (
    <Wrapper>
      <StyledImage src={user?.image} alt="" />
      {!editFormIsOpen ? (
        <Container>
          <h1>{user?.firstName}</h1>
          <h1>{user?.lastName}</h1>
          <h2>Username: {user?.userName}</h2>
          <h2>{user?.email}</h2>
          <StyledButton
            style={{ width: "60%" }}
            onClick={() => setEditFormIsOpen(true)}
          >
            Edit
          </StyledButton>
        </Container>
      ) : (
        <StyledForm onSubmit={handleSubmit(onSubmit)} style={{ gap: "5px" }}>
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

          <StyledButton type="submit">Confirm</StyledButton>
        </StyledForm>
      )}
    </Wrapper>
  );
}

export default Profile;
