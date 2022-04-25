import React from 'react';
import styles from  './Header.module.css'
export default function Search() {
  return (
    <div className={styles.search}>
 <img src="img/search.svg" alt="" />
 <input type='text' placeholder='Поиск'/>
    </div>
  )
}
