import React from 'react'
import Logo from './Logo'
import Search from './Search'
import TelePhone from './TelePhone'
import User from './User'

export default function Header() {
  return (
    <header>
        <Logo/>
        <Search/>
        <TelePhone/>
        <User/>
    </header>
  )
}
