import React from 'react';
import PropTypes from 'prop-types';
import styles from './Btn_secundaria.module.css';

function BtnSecundaria(props) {
  return (
    <button className='w-64 bg-blue-300 text-black py-2 rounded-md'>{props.funcao}</button>
  );
}


export default BtnSecundaria;
