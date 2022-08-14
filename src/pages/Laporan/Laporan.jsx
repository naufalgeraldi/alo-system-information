import React, { useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Toggle from "../../components/Toggle/Toggle";

function Laporan() {
  useEffect(() => {
    document.title = "Laporan | ALO";
  });
  return (
    <>
      <Sidebar>
        <div className="ml-[320px] h-screen w-full bg-[#F4F4F4] pt-[60px] pl-[75px] pr-[77px] dark:bg-[#292929]">
          <div className="flex justify-between">
            <h2 className="h-[34px] w-full text-[30px] font-bold uppercase text-[#2A6EB8]">
              LAPORAN PRESENSI KARYAWAN PT. TRITEK INDONESIA
            </h2>
            <Toggle />
          </div>
        </div>
      </Sidebar>
    </>
  );
}

export default Laporan;
