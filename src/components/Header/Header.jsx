import React from 'react'
import { HeaderNav } from './HeaderNav'

export const Header = () => {
  return <header className='header'>
    <a href="/" className='header__logo'><img src="/logo.png" alt="logo" /></a>
    <HeaderNav/>
  </header>
}