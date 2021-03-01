import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <Link to='/sign-in' >SignIn</Link>
      <Link to='/sign-up' >SignUp</Link>
    </>
  );
};

export default HomePage;
