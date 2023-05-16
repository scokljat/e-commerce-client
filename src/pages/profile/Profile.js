import { useState } from "react";
import { useForm, useFormState } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as Close } from "../../assets/images/bx-left-arrow-alt.svg";
import { ReactComponent as User } from "../../assets/images/user.svg";
import { editUser, editUserPassword } from "../../store/user/userSlice";
import { Username, Container, ButtonContainer } from "./ProfileStyle";
import { StyledButton } from "../../globalStyle";
import { StyledForm, StyledInput, ErrorDescription } from "../auth/AuthStyle";

function Profile() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [editFormIsOpen, setEditFormIsOpen] = useState(false);
  const [editPassword, setEditPassword] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      userName: user.userName,
      email: user.email,
    },
  });

  const { dirtyFields } = useFormState({
    control,
  });

  const onSubmitInformations = (values) => {
    dispatch(
      editUser({
        id: user.id,
        ...(dirtyFields?.firstName && { firstName: values.firstName }),
        ...(dirtyFields?.lastName && { lastName: values.lastName }),
        ...(dirtyFields?.userName && { userName: values.userName }),
        ...(dirtyFields?.email && { firstName: values.email }),
      })
    );
    setEditFormIsOpen(false);
  };

  const onSubmitPassword = (values) => {
    dispatch(
      editUserPassword({
        id: user?.id,
        password: values.currentPassword,
        newPassword: values.newPassword,
        confirmedPassword: values.confirmedPassword,
      })
    );
    setEditPassword(false);
  };

  return (
    <>
      {editFormIsOpen ? (
        <Container>
          <Close
            style={{ alignSelf: "flex-start", cursor: "pointer" }}
            onClick={() => setEditFormIsOpen(false)}
          />
          <StyledForm
            onSubmit={handleSubmit(onSubmitInformations)}
            style={{ gap: "0.3rem", width: "100%" }}
          >
            <p style={{ fontSize: "1.2rem" }}>Edit personal informations</p>
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

            <StyledButton
              type="submit"
              style={{ width: "50%", alignSelf: "center" }}
            >
              Confirm
            </StyledButton>
          </StyledForm>
        </Container>
      ) : editPassword ? (
        <Container>
          <Close
            style={{ alignSelf: "flex-start", cursor: "pointer" }}
            onClick={() => setEditPassword(false)}
          />
          <StyledForm
            style={{ gap: "0.3rem", width: "100%" }}
            onSubmit={handleSubmit(onSubmitPassword)}
          >
            <p style={{ fontSize: "1.2rem" }}>Edit password</p>
            <StyledInput
              placeholder="Current Password"
              {...register("currentPassword", {
                required: "Current password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long!",
                },
              })}
            />
            {errors.currentPassword && (
              <ErrorDescription>
                {errors.currentPassword.message}
              </ErrorDescription>
            )}
            <StyledInput
              placeholder="New password"
              {...register("newPassword", {
                required: "New password is required",
                minLength: {
                  value: 8,
                  message: "New password must be at least 8 characters long!",
                },
              })}
            />
            {errors.newPassword && (
              <ErrorDescription>{errors.newPassword.message}</ErrorDescription>
            )}

            <StyledInput
              placeholder="Confirm password"
              {...register("confirmedPassword", {
                required: "Confirmed password is required",
                minLength: {
                  value: 8,
                  message:
                    "COnfirmed password must be at least 8 characters long!",
                },
              })}
            />
            {errors.confirmedPassword && (
              <ErrorDescription>
                {errors.confirmedPassword.message}
              </ErrorDescription>
            )}

            <StyledButton
              type="submit"
              style={{ width: "50%", alignSelf: "center" }}
            >
              Confirm
            </StyledButton>
          </StyledForm>
        </Container>
      ) : (
        <Container>
          <Username>
            <User style={{ width: "1.5rem", height: "1.5rem" }} />
            <h1>
              {user?.firstName?.toUpperCase()} {user?.lastName?.toUpperCase()}
            </h1>
          </Username>
          <h3>Username: {user?.userName}</h3>
          <h3>Email: {user?.email}</h3>
          <ButtonContainer>
            <StyledButton onClick={() => setEditFormIsOpen(true)}>
              Edit informations
            </StyledButton>
            <StyledButton onClick={() => setEditPassword(true)}>
              Change password
            </StyledButton>
          </ButtonContainer>
        </Container>
      )}
    </>
  );
}

export default Profile;
