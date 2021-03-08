import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import { SIGN_UP_SCHEMA } from '../../../utils/validationSchemas';
import Input from '../Input';
import styles from './SignUpForm.module.scss';

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
          <Form className={styles.SignUpFormStyles}>
            <Field name={'name'}>
              {fieldProps => (
                <Input {...fieldProps} placeholder='Name' autoFocus />
              )}
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
            <div className={styles.radioBtnStyles}>
              <label>
                <div className={styles.joinAsStyles}>
                  <input type='radio' name='joinAsBuyerCreative' />
                  <strong className={styles.joinHeadingStyles}>
                    Join As a Buyer
                  </strong>
                  <p className={styles.joinTextStyles}>
                    I am looking for a Name, Logo or Tagline for my business,
                    brand or product.
                  </p>
                </div>
              </label>
              <label>
                <div className={styles.joinAsStyles}>
                  <input type='radio' name='joinAsBuyerCreative' />
                  <strong className={styles.joinHeadingStyles}>
                    Join As a Creative or Marketplace Seller
                  </strong>
                  <p className={styles.joinTextStyles}>
                    I plan to submit name ideas, Logo designs or sell names in
                    Domain Marketplace.
                  </p>
                </div>
              </label>
            </div>
            <label className={styles.checkboxStyles}>
              <input type='checkbox' id='allow' />
              <span style={{ paddingLeft: '10px' }}>
                Allow Squadhelp to send marketing/promotional offers from time
                to time
              </span>
            </label>
            <Field
              className={styles.btnStyles}
              type='submit'
              value='Create account'
            />
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignUpForm;
