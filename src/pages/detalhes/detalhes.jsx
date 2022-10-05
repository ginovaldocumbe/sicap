import React from 'react';
import Topo from './../../components/top_login/top_login'
import Baixo from './../../components/baixo/baixo'
import { BsThreeDotsVertical } from "react-icons/bs";

const Detalhes = () => (
  <div className="">
    <Topo />
    <div className='h-screen pt-16 pb-16 overflow-y-scroll'>
      <div className='h-52 bg-red-500 mx-2 rounded-lg'>
        <img src=''/>
      </div>
      <div className='mt-4 l'>
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
            iure voluptates rerum non minus error.
            At assumenda laudantium esse excepturi dolorum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste esse mollitia sapiente quaerat repellat ex, aspernatur temporibus! Amet ab voluptate repudiandae quasi enim inventore ad, aliquid iusto doloremque reprehenderit at.</label>
        </div>
        <div className='h-px my-2 bg-gradient-to-r from-sky-600 via-black to-sky-600'></div>
        <div>
          <p className='text-sm font-bold'>Alterar estado</p>
          <div className='flex flex-row items-center justify-between pr-2'>
            <select className='text-sm'>
              <option>Perdido</option>
              <option>Achado</option>
            </select>
            <BsThreeDotsVertical />
          </div>
        </div>
        <div className='flex justify-center mt-8'>
          <button className='mr-6 bg-sky-900 px-12 py-2 rounded-md text-white'>Salvar</button>
          <button className='px-12 py-2 rounded-md bg-blue-200 text-black'>Voltar</button>
        </div>
      </div>
    </div>
    <Baixo />
  </div>
);


export default Detalhes;
