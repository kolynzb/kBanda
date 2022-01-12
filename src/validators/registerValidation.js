import * as Yup from "yup";

const validate = Yup.object({
  username: Yup.string()
    .max(15, "Must be  15 characters or less")
    .required("Required"),
  email: Yup.string().email("Email is invalid").required("Required"),
  password: Yup.string()
    .min(6, "Password be  6 characters or more")
    .required("Password is Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is Required"),
});
export default validate;
