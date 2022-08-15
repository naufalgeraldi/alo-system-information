import React from "react";
import iconLogOut from "../../assets/icons/log-out.png";
import { Link, useNavigate } from "react-router-dom";
// import Toggle from "../Toggle/Toggle";
import { FaFingerprint } from "react-icons/fa";
import {
  MdOutlineReport,
  MdOutlineEngineering,
  MdOutlineToday,
} from "react-icons/md";
import { BsCalendarMonth } from "react-icons/bs";
import axios from "axios";

function Sidebar(props) {
  const navigate = useNavigate();

  const Logout = async () => {
    try {
      await axios.delete("http://localhost:5000/logout");
      localStorage.removeItem("token");
      navigate("/", { replace: true });
    } catch (error) {}
  };

  return (
    <>
      <div className="flex">
        <div className="fixed h-screen w-[320px] bg-white px-[25px] dark:bg-[#202020]">
          <div className="mt-[40px] flex h-[42px] w-[270px] items-center justify-center px-8">
            <FaFingerprint className="mr-3 h-[55px] w-[55px] dark:text-white" />
            <h1 className="h-[42px] text-lg font-bold uppercase leading-5 text-[#202020] dark:text-white">
              administrator Presensi alo
            </h1>
          </div>
          <div className="mt-[40px] flex h-[620px] flex-col justify-between">
            <div>
              <Link to="/umum">
                <button className="group flex h-[50px] w-[266px] items-center rounded-[15px] px-[14px] py-[17px] hover:bg-[#2A6EB8]">
                  <div className="flex w-[30px] justify-center">
                    <FaFingerprint className="text-xl group-hover:text-white dark:text-white" />
                  </div>
                  <span className="ml-3 text-[15px] font-medium text-[#202020] group-hover:text-white dark:text-white">
                    Umum
                  </span>
                </button>
              </Link>
              <Link to="/presensihari">
                <button className="group flex h-[50px] w-[266px] items-center rounded-[15px] px-[14px] py-[17px] hover:bg-[#2A6EB8]">
                  <div className="flex w-[30px] justify-center">
                    <MdOutlineToday className="text-xl group-hover:text-white dark:text-white" />
                  </div>
                  <span className="ml-3 text-[15px] font-medium text-[#202020] group-hover:text-white dark:text-white">
                    Presensi hari ini
                  </span>
                </button>
              </Link>
              <Link to="/presensibulan">
                <button className="group flex h-[50px] w-[266px] items-center rounded-[15px] px-[14px] py-[17px] hover:bg-[#2A6EB8]">
                  <div className="flex w-[30px] justify-center">
                    <BsCalendarMonth className="text-lg group-hover:text-white dark:text-white" />
                  </div>
                  <span className="ml-3 text-[15px] font-medium text-[#202020] group-hover:text-white dark:text-white">
                    Presensi satu bulan
                  </span>
                </button>
              </Link>
              <Link to="/karyawan">
                <button className="group flex h-[50px] w-[266px] items-center rounded-[15px] px-[14px] py-[17px] hover:bg-[#2A6EB8]">
                  <div className="flex w-[30px] justify-center">
                    <MdOutlineEngineering className="text-xl group-hover:text-white dark:text-white" />
                  </div>
                  <span className="ml-3 text-[15px] font-medium text-[#202020] group-hover:text-white dark:text-white">
                    Daftar Karyawan
                  </span>
                </button>
              </Link>
              <Link to="/laporan">
                <button className="group flex h-[50px] w-[266px] items-center rounded-[15px] px-[14px] py-[17px] hover:bg-[#2A6EB8]">
                  <div className="flex w-[30px] justify-center">
                    <MdOutlineReport className="text-2xl group-hover:text-white dark:text-white" />
                  </div>
                  <span className="ml-3 text-[15px] font-medium text-[#202020] group-hover:text-white dark:text-white">
                    Laporan
                  </span>
                </button>
              </Link>
            </div>
            <div>
              <button
                className="flex h-[50px] w-[266px] items-center rounded-[15px] bg-[#ED3131] px-[14px] py-[17px] hover:bg-[#f94848]"
                onClick={Logout}
              >
                <div className="flex w-[30px] justify-center">
                  <img src={iconLogOut} alt="" className="h-[19px] w-[19px]" />
                </div>
                <span className="ml-3 text-[15px] font-medium text-white group-hover:text-white">
                  Keluar
                </span>
              </button>
            </div>
          </div>
        </div>
        {props.children}
      </div>
    </>
  );
}

export default Sidebar;
