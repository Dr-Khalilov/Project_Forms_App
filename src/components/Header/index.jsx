import React, { useState } from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

const Header = props => {
  const isOpen = document.location.pathname === '/sign-up';

  return (
    <header className={styles.container}>
      <Link to='/'>
        <img src='./staticAssets/icons/logo.png' alt='logo' />
      </Link>
      <Link to={isOpen ? '/sign-in' : '/sign-up'} className={styles.signLink}>
        {isOpen ? 'Signin' : 'Signup'}
      </Link>
    </header>
  );
};

export default Header;
