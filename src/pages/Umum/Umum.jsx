import React, { useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";

function Umum() {
  useEffect(() => {
    document.title = "Umum | ALO";
  });

  return (
    <>
      <Sidebar name="sistem informasi presensi alo">
        <p className="text-lg leading-6 w-full mt-4 text-justify">
          ALO merupakan sistem informasi presensi karyawan yang memiliki
          integrasi dari perangkat keras pendeteksi sidik jari sebagai sistem
          presensi berbasis biometrik, pusat data dari Google Spreadsheet,
          dengan situs web sebagai tempat monitor presensi karyawan dengan akses
          terbatas untuk admin.
        </p>
        <h2 className="text-[30px] text-[#2A6EB8] w-[105px] h-[49px] uppercase font-bold mt-24">
          data umum
        </h2>
        <div className="mt-10 flex space-x-[72px]">
          <div className="w-[273px] h-[222px] rounded-[30px] bg-white p-[30px] flex flex-col justify-between">
            <h3 className="text-[#2A6EB8] text-[60px] font-bold">25</h3>
            <p className="text-[#202020] font-bold text-xl leading-6">
              Karyawan
            </p>
          </div>
          <div className="w-[273px] h-[222px] rounded-[30px] bg-white p-[30px] flex flex-col justify-between">
            <h3 className="text-[#2A6EB8] text-[60px] font-bold">8</h3>
            <p className="text-[#202020] font-bold text-xl leading-6">
              Jam Kerja
            </p>
          </div>
          <div className="w-[273px] h-[222px] rounded-[30px] bg-white p-[30px] flex flex-col justify-between">
            <h3 className="text-[#2A6EB8] text-[60px] font-bold">15</h3>
            <p className="text-[#202020] font-bold text-xl leading-6">Hari</p>
          </div>
        </div>
      </Sidebar>
    </>
  );
}

export default Umum;
