import React from 'react';
import styles from './login.module.css';
import Baixo from '../../components/baixo/baixo'
import Topo from '../../components/top_login/top_login'
import Card from '../../components/card/card'
function Login() {
  return (
    <div className={styles.Login}>
      <Topo />
      <Card />
      <Baixo />
    </div>
  );
}

export default Login;
