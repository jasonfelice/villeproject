import React from 'react'
import Styles from './Page.module.css';
import logo from '../assets/logo.svg'

export default function Page() {
  return (
    <section className={Styles.main_wrapper}>
        <div className={Styles.logo_wrapper}>
          <img className={`${Styles.logo}, noselect`} draggable={false} src={logo} alt="RomeVille Logo" />
          <p className="noselect">RomeVille</p>
        </div>
        <div className={Styles.socials}>
            <a target="_blank" href="/#"> <i className={Styles.ig} /> </a>
            <a target="_blank" href="/#"> <i className={Styles.wa} /> </a>
            <a target="_blank" href="/#"> <i className={Styles.fb} /> </a>
            <a target="_blank" href="/#"> <i className={Styles.mail} /> </a>
        </div>
    </section>
  )
}
