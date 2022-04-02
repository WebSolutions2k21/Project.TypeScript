import * as Yup from "yup";

const lowercaseRegex = /(?=.*[a-z])/;
const uppercaseRegex = /(?=.*[A-Z])/;
const numericRegex = /(?=.*[0-9])/;

export const SignupSchema = Yup.object().shape({
  userName: Yup.string()
    .min(2, "Your user name is too short")
    .required("Please enter your user name"),
  firstName: Yup.string()
    .min(2, "Your first name is too short"),
  lastName: Yup.string()
    .min(2, "Your last name is too short"),
  email: Yup.string()
    .lowercase()
    .min(5, "Your email is too short")
    .email('The email is incorrect')
    .required('Please enter your email'),
  password: Yup.string()
    .matches(lowercaseRegex, 'One lowercase required!')
    .matches(uppercaseRegex, 'One uppercase required!')
    .matches(numericRegex, 'One number required!')
    .min(8, 'Minimum 8 characters required!')
    .required('Please enter your password'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Password must be the same!')
    .required('Please enter your password'),
});