import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import { SIGN_UP_SCHEMA } from '../../../utils/validationSchemas';
import Input from '../Input';

const SignUpForm = props => {
  const initialValues = {
    name: '',
    surName: '',
    nickName: '',
    emailAddress: '',
    password: '',
    passwordConfirmation: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={props.onSubmit}
      validationSchema={SIGN_UP_SCHEMA}
    >
      {formProps => {
        return (
          <Form>
            <Field name={'name'}>
              {fieldProps => <Input {...fieldProps} placeholder='Name' />}
            </Field>
            <Field name={'surName'}>
              {fieldProps => <Input {...fieldProps} placeholder='Surname' />}
            </Field>
            <Field name={'nickName'}>
              {fieldProps => <Input {...fieldProps} placeholder='Nickname' />}
            </Field>
            <Field name={'emailAddress'}>
              {fieldProps => (
                <Input {...fieldProps} placeholder='Email Address' />
              )}
            </Field>
            <Field name={'password'}>
              {fieldProps => <Input {...fieldProps} placeholder='Password' />}
            </Field>
            <Field name={'passwordConfirmation'}>
              {fieldProps => (
                <Input {...fieldProps} placeholder='Password Confirmation' />
              )}
            </Field>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignUpForm;
