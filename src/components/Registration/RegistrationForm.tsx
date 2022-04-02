import React from 'react';
import { Formik, FormikHelpers, Form, Field, ErrorMessage } from 'formik';

import { Label, Int, IntAll, Btn, StyledInlineErrorMessage } from "./registration.style";
import IRegistrationForm from './RegistrationForm.interface';
import { TextInput } from '../Inputs/TextInput';
import text from '../../utils/text.png'
import password from '../../utils/password.png'
import { SignupSchema } from './validate';


export const RegistrationForm = () => {
  return (
    <Formik
      initialValues={{ userName: '', firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }}
      validationSchema={SignupSchema}
      onSubmit={(values, { setSubmitting }: FormikHelpers<IRegistrationForm>) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
    {({ isSubmitting }) => (
      
      <Form>
        <IntAll>
          <Int>
            <Label>
              <img src={text} alt=""/>
              <label htmlFor="userName">user name</label>
            </Label>
            <Field type="text" name="userName" placeholder="Type your user name" as={TextInput} />
            <ErrorMessage name="userName" component={StyledInlineErrorMessage}/>
          </Int>
        </IntAll>

        <IntAll>
          <Int>
            <Label>
              <img src={text} alt=""/>
              <label htmlFor="firstName">first name</label>
            </Label>
            <Field type="text" name="firstName" placeholder="Type your first name" as={TextInput} />
            <ErrorMessage name="firstName" component={StyledInlineErrorMessage} />
          </Int>
        </IntAll>

        <IntAll>
          <Int>
            <Label>
              <img src={text} alt=""/>
              <label htmlFor="lastName">last name</label>
            </Label>
            <Field type="text" name="lastName" placeholder="Type your last name" as={TextInput} />
            <ErrorMessage name="lastName" component={StyledInlineErrorMessage} />
            </Int>
          </IntAll>

        <IntAll>
          <Int>
            <Label>
              <img src={text} alt=""/>
              <label htmlFor="email">email</label>
            </Label>
            <Field type="email" name="email" placeholder="Type your email" as={TextInput} />
            <ErrorMessage name="email" component={StyledInlineErrorMessage} />
          </Int>
        </IntAll>

        <IntAll>
          <Int>
            <Label>
              <img src={password} alt=""/>
              <label htmlFor="password">password</label>
            </Label>
            <Field type="password" name="password" placeholder="Type your password" as={TextInput} />
            <ErrorMessage name="password" component={StyledInlineErrorMessage} />
          </Int>
        </IntAll>

        <IntAll>
          <Int>
            <Label>
              <img src={password} alt=""/>
              <label htmlFor="confirmPassword">confirm password</label>
            </Label>
            <Field type="password" name="confirmPassword" placeholder="Type your password" as={TextInput} />
            <ErrorMessage name="confirmPassword" component={StyledInlineErrorMessage} />
          </Int>
        </IntAll>

        <Int>
          <Btn>
            <button type="submit" disabled={isSubmitting}>
              Sign Up
            </button>
          </Btn>
        </Int>
      </Form>
    )}
  </Formik>
  );
};
