import React from 'react';
import Toggle from '../Button/Toggle';
import styles from './Navbar.module.css';

export default function NavBar() {
  return (
    //prettier-ignore
    <nav className={styles.nav}>
      <div className={styles.navLeft}>
        <ul>
          <li><a href="/index.html">Home</a></li>
          <li><a href="/JavaScript/javascript.html">JavaScript</a></li>
          <li><a href="/HTML/html.html">HTML</a></li>
          <li><a href="/CSS/css.html">CSS</a></li>
          <li><a href="/VS Code/vs_code.html">VS Code Extensions</a></li>
          <li><a href="/VS Code Shortcuts/vscodeshortcuts.html">VS Code Shortcuts</a></li>
          <li><a href="/GitHub/github.html">Git/GitHub</a></li>
          <li><a href="/documentation/documentation.html">Documentation</a></li>
        </ul>
      </div>
      <div className={styles.navRight}>
        <Toggle />
      </div>
    </nav>
  );
}
