import React from 'react';
import SignUpForm from '../../components/forms/SignUpForm';
import Header from '../../components/Header';
import styles from './SignUp.module.scss';

const SignUp = props => {
  const onSubmit = values => console.log(values);

  return (
    <div>
      <Header />
      <main className={styles.container}>
        <h1>CREATE AN ACCOUNT</h1>
        <h3>We always keep your name and email address private.</h3>
        <SignUpForm onSubmit={onSubmit} />
      </main>
    </div>
  );
};

export default SignUp;
