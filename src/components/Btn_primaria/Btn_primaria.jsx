import React from 'react';
import PropTypes from 'prop-types';
import styles from './Btn_primaria.module.css';

function BtnPrimaria(props) {
  return (
    <button className='w-64 bg-sky-800 text-white py-2  rounded-md my-4' >{props.funcao}</button>
  );
}

export default BtnPrimaria;
