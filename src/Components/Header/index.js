import React from 'react'
import Logo from './Logo'
import Search from './Search'
import TelePhone from './TelePhone'
import User from './User'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header>
      <section className='container'>
        <div className={styles.header_content}>
        <Logo/>
        <Search/>
        <TelePhone/>
        <User/>
        </div>
        </section>
    </header>
  )
}
