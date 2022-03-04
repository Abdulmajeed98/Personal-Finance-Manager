import React from "react";
import { GrSearch } from "react-icons/gr";
import { HiOutlineFilter } from "react-icons/hi";
const TransactionHistory = () => {
  return (
    <div className="p-6">
      <div className="flex h-12 w-full items-center overflow-hidden rounded-lg bg-white">
        <div className="my-4 ml-3 h-5 w-5">
          <GrSearch className="h-full w-full" />
        </div>
        <input
          type="text"
          className="ml-4 h-full w-full text-lg outline-none"
        />
        <button className="flex h-full items-center justify-center bg-cyan-700 px-5 py-3 text-xl capitalize text-white">
          clear
        </button>
      </div>
      <div className="my-6 flex h-16 w-full items-center overflow-hidden rounded-lg bg-slate-50">
        <div className="my-4 mx-7 h-6 w-6">
          <HiOutlineFilter className="h-full w-full" />
        </div>
        <input
          type="text"
          className="ml-4 h-full w-full bg-transparent text-lg outline-none"
        />
        <button className="flex h-full items-center justify-center bg-cyan-700 px-5 py-3 text-xl capitalize text-white">
          clear
        </button>
      </div>
    </div>
  );
};

export default TransactionHistory;
