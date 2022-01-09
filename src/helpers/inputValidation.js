import * as Yup from "yup";

const validate = Yup.object({
  username: Yup.string()
    .max(15, "Must be  15 characters or less")
    .required("Required"),
  email: Yup.string().email("Email is invalid").required("Required"),
  password: Yup.string()
    .max(15, "Must be  15 characters or less")
    .required("Email is Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is Required"),
});
export default validate;
