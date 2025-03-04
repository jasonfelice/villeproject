import React from 'react'
import Styles from './Page.module.css';
import logo from '../assets/logo.svg'

export default function Page() {
  return (
    <section className={Styles.main_wrapper}>
        <div className={Styles.logo_wrapper}>
          <img src={logo} alt="RomeVille Logo" />
          <span>RomeVille</span>
        </div>    
    </section>
  )
}
