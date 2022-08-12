import React, { useState } from "react";
import Logo from "../../assets/image/logo.png";
import iconSidik from "../../assets/icons/sidik.png";
import iconSidikHover from "../../assets/icons/sidik-hover.png";
import iconToday from "../../assets/icons/today.png";
import iconTodayHover from "../../assets/icons/today-hover.png";
import iconMonth from "../../assets/icons/month.png";
import iconMonthHover from "../../assets/icons/month-hover.png";
import iconConstruction from "../../assets/icons/construction.png";
import iconConstructionHover from "../../assets/icons/construction-hover.png";
import iconReport from "../../assets/icons/report.png";
import iconReportHover from "../../assets/icons/report-hover.png";
import iconLogOut from "../../assets/icons/log-out.png";
import { Link } from "react-router-dom";

function Sidebar(props) {
  const [over, setOver] = useState(false);
  const [over2, setOver2] = useState(false);
  const [over3, setOver3] = useState(false);
  const [over4, setOver4] = useState(false);
  const [over5, setOver5] = useState(false);
  return (
    <>
      <div className="flex">
        <div className="w-[320px] px-[25px] h-screen bg-white fixed">
          <img src={Logo} alt="logo" className="mt-10" />
          <div className="mt-[50px] flex flex-col h-[620px] justify-between">
            <div>
              <Link to="/umum">
                <button
                  className="w-[266px] h-[50px] px-[14px] py-[17px] rounded-[15px] bg-white flex items-center hover:bg-[#2A6EB8] group"
                  onMouseOver={() => setOver(true)}
                  onMouseOut={() => setOver(false)}
                >
                  <div className="w-[30px] flex justify-center">
                    <img
                      src={over ? iconSidikHover : iconSidik}
                      alt=""
                      className="w-[19.43px] h-[20.51px]"
                    />
                  </div>
                  <span className="text-[#202020] text-[15px] font-medium ml-3 group-hover:text-white">
                    Umum
                  </span>
                </button>
              </Link>
              <Link to="/presensihari">
                <button
                  className="w-[266px] h-[50px] px-[14px] py-[17px] rounded-[15px] bg-white flex items-center hover:bg-[#2A6EB8] group"
                  onMouseOver={() => setOver2(true)}
                  onMouseOut={() => setOver2(false)}
                >
                  <div className="w-[30px] flex justify-center">
                    <img src={over2 ? iconTodayHover : iconToday} alt="" />
                  </div>
                  <span className="text-[#202020] text-[15px] font-medium ml-3 group-hover:text-white">
                    Presensi hari ini
                  </span>
                </button>
              </Link>
              <Link to="/presensibulan">
                <button
                  className="w-[266px] h-[50px] px-[14px] py-[17px] rounded-[15px] bg-white flex items-center hover:bg-[#2A6EB8] group"
                  onMouseOver={() => setOver3(true)}
                  onMouseOut={() => setOver3(false)}
                >
                  <div className="w-[30px] flex justify-center">
                    <img
                      src={over3 ? iconMonthHover : iconMonth}
                      alt=""
                      className="-ml-1"
                    />
                  </div>
                  <span className="text-[#202020] text-[15px] font-medium ml-3 group-hover:text-white">
                    Presensi satu bulan
                  </span>
                </button>
              </Link>
              <Link to="/karyawan">
                <button
                  className="w-[266px] h-[50px] px-[14px] py-[17px] rounded-[15px] bg-white flex items-center hover:bg-[#2A6EB8] group"
                  onMouseOver={() => setOver4(true)}
                  onMouseOut={() => setOver4(false)}
                >
                  <div className="w-[30px] flex justify-center">
                    <img
                      src={over4 ? iconConstructionHover : iconConstruction}
                      alt=""
                      className="w-[20px] h-[20px]"
                    />
                  </div>
                  <span className="text-[#202020] text-[15px] font-medium ml-3 group-hover:text-white">
                    Jam Kerja Karyawan
                  </span>
                </button>
              </Link>
              <Link to="/laporan">
                <button
                  className="w-[266px] h-[50px] px-[14px] py-[17px] rounded-[15px] bg-white flex items-center hover:bg-[#2A6EB8] group"
                  onMouseOver={() => setOver5(true)}
                  onMouseOut={() => setOver5(false)}
                >
                  <div className="w-[30px] flex justify-center">
                    <img
                      src={over5 ? iconReportHover : iconReport}
                      alt=""
                      className="w-[19px] h-[19px]"
                    />
                  </div>
                  <span className="text-[#202020] text-[15px] font-medium ml-3 group-hover:text-white">
                    Laporan
                  </span>
                </button>
              </Link>
            </div>
            <div>
              <button className="w-[266px] h-[50px] px-[14px] py-[17px] rounded-[15px] bg-[#ED3131] flex items-center hover:bg-[#f94848]">
                <div className="w-[30px] flex justify-center">
                  <img src={iconLogOut} alt="" className="w-[19px] h-[19px]" />
                </div>
                <span className="text-white text-[15px] font-medium ml-3 group-hover:text-white">
                  Keluar
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="h-[2002px] bg-[#F4F4F4] pt-[60px] pl-[75px] pr-[77px] w-[1267px] ml-[320px]">
          <h2 className="text-[30px] text-[#2A6EB8] w-full h-[34px] uppercase font-bold">
            {props.name}
          </h2>
          {props.children}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
