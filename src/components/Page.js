import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Styles from './Page.module.css';
import logo from '../assets/logo.svg'
import Privacy from './Privacy';

const Main = () => {
  return (
    <>
    <div className={Styles.logo_wrapper}>
          <img className={`${Styles.logo}, noselect`} draggable={false} src={logo} alt="RomeVille Logo" />
          <p className="noselect">RomeVille</p>
        </div>
        <div className={Styles.socials}>
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/romevilleofficial/"> <i className={Styles.ig} /> </a>
            <a target="_blank" rel="noreferrer" href="https://wa.link/ooea7s"> <i className={Styles.wa} /> </a>
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/RomevilleOfficial/"> <i className={Styles.fb} /> </a>
            <a target="_blank" rel="noreferrer" href="mailto:hello@romeville.com"> <i className={Styles.mail} /> </a>
        </div>
        <footer className={Styles.footer}>
          <p>Our website is currently under construction.</p>
          <p style={{fontSize: '0.9rem'}}>&#169; 2025 RomeVille</p>
        </footer>
    </>
  );
};

export default function Page() {
  return (
    <section className={Styles.main_wrapper}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </section>
  );
}
