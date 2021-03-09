import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={styles.homePageContainer}>
      <a
        href='https://www.squadhelp.com/login'
        target='_blank'
        rel='noreferrer'
        className={styles.linkStyles}
      >
        <h1 style={{ color: 'white' }}>Неповторимый оригинал!</h1>
      </a>
      <div>
        <h1 style={{ paddingBottom: '20px', color: '#9c6441' }}>
          Жалкая пародия...
        </h1>
        <Link to='/sign-in' className={styles.linkStyles}>
          SignIn
        </Link>
        <Link to='/sign-up' className={styles.linkStyles}>
          SignUp
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
