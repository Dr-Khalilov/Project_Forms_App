import React, { useState } from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

const Header = props => {
  const [isOpen, setIsOpen] = useState(true);
  const switchLink = () => {
    setIsOpen(!isOpen);
  };
  // const switchLink2 = () => {
  //   if ((<Link to='sign-in'>Signin</Link>)) {
  //     return <Link to='sign-up'>Signup</Link>;
  //   } else if ((<Link to='sign-up'>Signup</Link>)) {
  //     return <Link to='sign-in'>Signin</Link>;
  //   }
  // };
  return (
    <header className={styles.container}>
      <Link to='/'>
        <img src='./staticAssets/icons/logo.png' alt='logo' />
      </Link>
      <Link
        to={isOpen ? '/sign-up' : '/sign-in'}
        onClick={switchLink}
        className={styles.signLink}
      >
        {isOpen ? 'Signup' : 'Signin'}
      </Link>
    </header>
  );
};

export default Header;
