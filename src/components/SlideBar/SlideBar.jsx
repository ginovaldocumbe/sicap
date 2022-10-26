import React from "react";
import styles from "./SlideBar.module.css";
import { NavLink, Outlet } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import ImagemMain from "../../imagens/main2.png";
import { useState } from "react";
import { SlideData } from './../../files/SlideData';
// import {SlideDataAdmin} from '../../../files/SlideDataAdmin';
// import Calendar from 'color-calendar';
// import 'color-calendar/dist/css/theme-basic.css';
// import 'color-calendar/dist/css/theme-glass.css';
// import Imag from "./../Imagens/stu.png"
import { IoIosNotificationsOutline } from "react-icons/io";



const SlideBar = ({ children }) => {

  let tv = true;
  return (
    <section className='flex '>
      <div className='pl-2 w-56 '>
        <div className={styles.topo}>
          <div className={styles.ImgTop}>
            <img src='' className="img-fluid" />
          </div>
          <span className={styles.topText}>SICAP</span>
        </div>
        {SlideData.map((route) => (
          <NavLink activeClassName='active' className='flex flex-row items-center rounded-md text-gray-400 h-10 pl-2 mr-2 hover:bg-gray-200 hover:text-blue-800 ' to={route.path} key={route.nome}>
            <div className={styles.Icones}>{route.icone}</div>
            <div className={styles.TextIcon}>{route.nome}</div>
          </NavLink>
        ))}


        <div className="mt-40">
          <img src={ImagemMain} className="h-[80%]" />
          <button className="bg-sky-800 text-white py-1 px-4 rounded-md -translate-y-5 translate-x-7">Convidar</button>
        </div>
        <NavLink to="/">
          <footer className="text-gray-400 pl-2">
            <IoIosLogOut className='' />
            <span className='text-base pl-2'>Sair</span>
          </footer>
        </NavLink>
      </div>
      <main className='w-full h-screen bg-white'>
        <Outlet />
      </main>

    </section>
  );
};

export default SlideBar;
