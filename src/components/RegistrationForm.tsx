import React from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';

import RegistrationFormInterface from '../interfaces/RegistrationForm.interface';


const registrationValidation = (values:any) => {
  const errors = {};
  return errors;
}

export const RegistrationForm = () => {
  return (
    <Formik
    initialValues={{ userName: '', firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }}
    validate={registrationValidation}
    onSubmit={(values, { setSubmitting }: FormikHelpers<RegistrationFormInterface>) => {
      setTimeout(() => {
        console.log(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
  >
    {({ isSubmitting }) => (
      <Form>
        <label htmlFor="userName">user name</label>
        <Field type="text" name="userName" placeholder="Type your user name"/>
        <ErrorMessage name="userName" component="div" />

        <label htmlFor="firstName">first name</label>
        <Field type="text" name="firstName" placeholder="Type your first name"/>
        <ErrorMessage name="firstName" component="div" />

        <label htmlFor="firstName">last name</label>
        <Field type="text" name="lastName" placeholder="Type your last name"/>
        <ErrorMessage name="lastName" component="div" />

        <label htmlFor="email">email</label>
        <Field type="email" name="email" placeholder="Type your email" />
        <ErrorMessage name="email" component="div"/>

        <label htmlFor="password">password</label>
        <Field type="password" name="password" placeholder="Type your password"/>
        <ErrorMessage name="password" component="div" />

        <label htmlFor="confirmPassword">confirm password</label>
        <Field type="password" name="confirmPassword" placeholder="Type your confirm password"/>
        <ErrorMessage name="confirmPassword" component="div" />

        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </Form>
    )}
  </Formik>
  );
};
