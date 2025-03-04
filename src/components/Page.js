import React from 'react'
import Styles from './Page.module.css';
import logo from '../assets/logo.svg'

export default function Page() {
  return (
    <section className={Styles.main_wrapper}>
        <div className={Styles.logo_wrapper}>
          <img className="noselect" draggable={false} src={logo} alt="RomeVille Logo" />
          <span className="noselect">RomeVille</span>
        </div>
        <div className={Styles.socials}>
            <a href="/#"> <i className={Styles.ig} /> </a>
            <a href="/#"> <i className={Styles.wa} /> </a>
            <a href="/#"> <i className={Styles.fb} /> </a>
            <a href="/#"> <i className={Styles.mail} /> </a>
        </div>
    </section>
  )
}
