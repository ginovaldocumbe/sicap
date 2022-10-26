import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";

function top_admin(props) {
  return (
    <div className="flex justify-between relative top-0 bg-sky-800 w-full text-white h-7 items-center px-3">
      <h1>{props.titulo}</h1>
      <div className="flex flex-row items-center gap-2">
        <IoIosNotificationsOutline />
        <div className="rounded-full h-5 w-5 bg-slate-50"></div>
      </div>
    </div>
  );
}

export default top_admin;
