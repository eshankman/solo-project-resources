import React, { useState } from 'react';
import styles from './Toggle.module.css';

export default function Toggle() {
  const [toggled, setToggled] = useState(false);

  return (
    <button className={`${styles.toggleBtn} ${toggled ? styles.toggled : ''}`} onClick={() => setToggled(!toggled)}>
      <div className={`${styles.thumb} ${toggled ? styles.thumbToggled : ''}`}></div>
      <span className={styles.toggleLabel}>{toggled ? 'Dark' : 'Light'}</span>
    </button>
  );
}
