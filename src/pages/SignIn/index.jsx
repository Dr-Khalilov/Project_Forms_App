import React from 'react';
import Header from '../../components/Header';
import SignInForm from '../../components/forms/SignInForm';
import styles from './SignIn.module.scss';

const SignIn = props => {
  const onSubmit = values => console.log(values);

  return (
    <div>
      <Header />
      <main className={styles.signInContainer}>
        <h1 className={styles.headingStyles}>Login to your account</h1>
        <SignInForm onSubmit={onSubmit} />
      </main>
    </div>
  );
};

export default SignIn;
