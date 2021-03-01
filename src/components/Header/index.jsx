import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

const Header = props => {
  return (
    <header className={styles.container}>
      <Link to='/'>
        <img src='./staticAssets/icons/logo.png' alt='logo' />
      </Link>
      <Link to='/sign-up'>Signup</Link>
    </header>
  );
};

export default Header;
