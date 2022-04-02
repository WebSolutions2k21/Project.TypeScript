import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {login} from '../../services/auth.service'

const Login = () => {
    const initialValues: {
        email: string;
        password: string;
      } = {
        email: "",
        password: "",
      };

  const validationSchema = Yup.object({
      email: Yup.string().email('Invalid email format').required("Required"),
      password: Yup.string().required('Required')
  })

  const onSubmit = (formValue: { email: string; password: string }) => {
    const { email, password } = formValue;
    console.log("czy weszło 1")
    login(email, password).then(
        () => {

            console.log("czy weszło 4")
        
        //   window.location.reload();
        },
    )
}

  return (
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
{
    formik => {
        return <Form>
             <label htmlFor="email">email</label>
        <Field type="text" name="email" placeholder="email"/>
        <label htmlFor="password">password</label>
        <Field type="text" name="password" placeholder="password"/>
        <button type='submit' disabled={!formik.isValid}> Submit</button>
        </Form>
    }
}

      </Formik>
  );
};
export default Login;
