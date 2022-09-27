import React from 'react';
import PropTypes from 'prop-types';
import styles from './butao.module.css';

function Butao(props) {
  return (
    <div className={styles.Butao}>
      <button>{props.funcao}</button>
    </div>
  );
}

export default Butao;
