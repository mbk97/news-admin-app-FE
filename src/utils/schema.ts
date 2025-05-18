import * as Yup from "yup"; // Import Yup for validation

export const validationSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().required("Password is required").min(5),
});
export const updatePasswordSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  currentPassword: Yup.string().required("Password is required").min(5),
  newPassword: Yup.string().required("Password is required").min(8),
});
export const resetPasswordSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
});

export const registerUserSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  fullname: Yup.string().required("Full Name is required").min(5),
  roleName: Yup.string().required("Role Name is required"),
});