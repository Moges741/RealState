import React from 'react'
import styles from './header.module.css';
import {Link} from 'react-router-dom';
const Header = () => {
  return (
    <div className={styles.header_container}>
     <div> <h2>RS</h2></div>
      <div className={styles.nav_links}>
        <div>
        <Link to="#">SignUp</Link>
      </div>
      <div><Link to="#">SignIn</Link></div>
      <div><Link to="#">Contact Us</Link></div>
      <div><Link to="#">Properties</Link></div>
      </div>
    </div>
  )
}

export default Header
