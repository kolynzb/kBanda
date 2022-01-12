import * as Yup from "yup";

const validate = Yup.object({
  email: Yup.string().email("Email is invalid").required("Required"),
  password: Yup.string()
    .min(15, "Password must be  6 characters or more")
    .required("Password is Required"),
});
export default validate;
