import React from 'react';
import { Formik, Form, Field } from 'formik';
import PropTypes from 'prop-types';
import { SIGN_IN_SCHEMA } from '../../../utils/validationSchemas';
import Input from '../Input';
import styles from './SignInForm.module.scss';

const SignInForm = props => {
  const initialValues = {
    email: '',
    password: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={props.onSubmit}
      validationSchema={SIGN_IN_SCHEMA}
    >
      <Form className={styles.signInContainer}>
        <Field name={'email'}>
          {fieldProps => <Input {...fieldProps} placeholder='Email Address' />}
        </Field>
        <Field name={'password'}>
          {fieldProps => (
            <Input {...fieldProps} type='password' placeholder='Password' />
          )}
        </Field>
        <div className={styles.checkboxStyles}>
          <label>
            <Field
              type='checkbox'
              id='remember me'
              name='remember me'
              value='remember me'
            />
            <span> Remeber Me!</span>
          </label>
          <a
            href='https://www.squadhelp.com/forgot_password.php'
            target='_blank'
            rel='noreferrer'
            style={{
              textDecoration: 'none',
              color: 'white',
            }}
          >
            Forgot Password
          </a>
        </div>
        <Field className={styles.btnStyles} type='submit' value='LOGIN' />
      </Form>
    </Formik>
  );
};

SignInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SignInForm;
