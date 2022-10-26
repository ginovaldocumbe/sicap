import React from 'react';
import { BsSearch } from "react-icons/bs";




function Filtro() {

  return (
    <div className="mt-5">
      <div className="flex flex-row items-center gap-1 shadow-md border w-fit p-2 rounded-md text-slate-400">
        <BsSearch />
        <input className="text-[12px] bg-inherit w-60 outline-0" placeholder="Pesquise por um item..." type="text" name="" id="" />
      </div>
    </div>
  );
}

export default Filtro;
