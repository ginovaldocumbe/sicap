import React from 'react';
import Topo from '../../components/top_login/top_login'
import Baixo from '../../components/baixo/baixo'
import { BsThreeDotsVertical } from "react-icons/bs";
import Iphone from './../../imagens/iphone.jpg';

const Detalhes = () => (
  <div className="">
    <Topo />
    <div className='h-screen pt-16 pb-8 overflow-y-scroll'>
      <div className=' flex justify-center bg-sky-100 pt-1 h-96  pb-[35px] overflow-hidden z-0'>
        <img className='h-full rounded-lg' src={Iphone}/>
      </div>
      <div className='-mt-8 border py-5 bg-white rounded-t-[40px] z-20'>
        <h1 className='flex justify-center font-bold text-xl'>Detalhes do Item</h1>
        <div className='flex justify-between px-3'>
          <span>Tipo: </span>
          <label>B.I</label>
        </div>
        <div className='flex justify-between px-3'>
          <span>Data de publicação: </span>
          <label>B.I</label>
        </div>
        <div className='flex justify-between px-3'>
          <span>Data de perda: </span>
          <label>B.I</label>
        </div>
        <div className='flex justify-between px-3'>
          <span>Estado: </span>
          <label>B.I</label>
        </div>

        <div className='flex justify-between px-3'>
          <span className='mr-12'>Outros detalhes: </span>
          <label className='text-justify '>Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Aut molestiae aliquid veritatis,
            tempora labore eligendi repudiandae, ipsum, voluptate
           </label>
        </div>
        <div className='h-px my-2 bg-gradient-to-r from-sky-600 via-black to-sky-600'></div>
        <div className='flex justify-center mt-8'>
          <button className='mr-6 bg-sky-900 w-42 px-3 py-2 rounded-md text-white'>Pedir devolucao</button>
          <button className='px-12 py-2 rounded-md bg-blue-200 text-black'>Voltar</button>
        </div>
      </div>
    </div>
    <Baixo />
  </div>
);


export default Detalhes;
