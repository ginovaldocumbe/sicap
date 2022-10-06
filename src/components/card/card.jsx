import React from 'react';
import styles from './card.module.css';
import BtnPrimaria from '../Btn_primaria/Btn_primaria'
import BtnSecondaria from '../Btn_secundaria/Btn_secundaria'
import Img from './../../imagens/main.png'
const Card = () => (
  <section className='flex items-center md:grid grid-cols-[40%_60%] overflow-hidden w-full h-screen'>
    <div className={styles.Card}>
      <h1 className={styles.login}>Login</h1>
      <span className={styles.welcome}>Bem vindo ao SICAP</span>
      <form className='flex flex-col items-center'>
        <div className={styles.Inp}>
          <label className={styles.Text}>Email</label>
          <input type='email' className='form-control' />
        </div>
        <div className={styles.Inp}>
          <label className={styles.Text}>Senha</label>
          <input type='password' className='form-control' />
        </div>
        <a className={styles.esqueci}>Esqueceu a senha?</a> <br />
        <div className='flex flex-col items-center justify-center'>
          <BtnPrimaria funcao='Entrar'></BtnPrimaria>
          <BtnSecondaria funcao='Nova Conta' />
        </div>
      </form>
    </div>
    <div className='hidden md:block bg-blue-200 rounded-tl-full'>
      {/* <div className={styles.custom1}>
        <svg className={styles.custom2} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className={styles.custom3}></path>
        </svg>
      </div> */}
      <img className='h-full w-auto -mt-12 ml-12' src={Img} /></div>
  </section>
);



export default Card;
