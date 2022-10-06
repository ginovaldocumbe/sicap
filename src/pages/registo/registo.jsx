import React from 'react';
import Topo from './../../components/top_login/top_login'
import Baixo from './../../components/baixo/baixo'
import BtnPrimaria from '../../components/Btn_primaria/Btn_primaria';
const Registo = () => (
  <div className="h-full pt-24 ">
    <Topo />
    <div className='h-full px-2 overflow-y-scroll'>
      <h1 className='text-cyan-800 font-bold text-lg mb-8'>Registe-se no SICAP</h1>
      <form>
        <div className='flex flex-col mb-4'>
          <label className='text-gray-400'>Apelido</label>
          <input type='text' className=' border-b border-gray-400 outline-none focus:outline-offset-2 focus:border-blue-500  text-sm' />
        </div>
        <div className='flex flex-col mb-4'>
          <label className='text-gray-400'>Nomes</label>
          <input type='text' className=' border-b border-gray-400 outline-none focus:outline-offset-2 focus:border-blue-500  text-sm' />
        </div>
        <div className='flex flex-col mb-4'>
          <label className='text-gray-400'>E-mail</label>
          <input type='e-mail' className=' border-b border-gray-400 outline-none focus:outline-offset-2 focus:border-blue-500  text-sm' />
        </div>
        <div className='flex flex-col mb-4'>
          <label className='text-gray-400'>Contacto</label>
          <input type='number' className=' border-b border-gray-400 outline-none focus:outline-offset-2 focus:border-blue-500  text-sm' />
        </div>
        <div className='flex flex-col mb-4'>
          <label className='text-gray-400'>Morada</label>
          <input type='text' className=' border-b border-gray-400 outline-none focus:outline-offset-2 focus:border-blue-500  text-sm' />
        </div>
        <div className='flex flex-col mb-4'>
          <label className='text-gray-400'>Senha</label>
          <input type='password' className=' border-b border-gray-400 outline-none focus:outline-offset-2 focus:border-blue-500  text-sm' />
        </div>
        <div className='flex flex-col mb-4'>
          <label className='text-gray-400'>Confirme a senha</label>
          <input type='password' className=' border-b border-gray-400 outline-none focus:outline-offset-2 focus:border-blue-500  text-sm' />
        </div>
        <div className='flex flex-row items-center justify-center'>
          <BtnPrimaria funcao="Registar" />
          <button className='bg-gray-500 ml-8  '>Voltar</button>
        </div>
      </form>

    </div>
    <Baixo />
  </div>
);

Registo.propTypes = {};

Registo.defaultProps = {};

export default Registo;
