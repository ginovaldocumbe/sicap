import React from 'react';
import styles from './card.module.css';
import Butao from '../butao/butao'
const Card = () => (
  <div className={styles.Card}>
    <h1 className={styles.login}>Login</h1>
    <span className={styles.welcome}>Bem vindo ao SICAP</span>
    <form>
      <div className={styles.Inp}>
        <label className={styles.Text}>Email</label>
        <input type='email' className='form-control'/>
      </div>
      <div className={styles.Inp}>
        <label className={styles.Text}>Senha</label>
        <input type='password' className='form-control'/>
      </div>
      <a className={styles.esqueci}>Esqueci a senha.</a>
      <Butao className={styles.btn} funcao='Entrar'/>
    </form>
  </div>
);



export default Card;
