import React, { useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import useQuery from "../../hook/useQuery";
import Toggle from "../../components/Toggle/Toggle";

function Umum() {
  // eslint-disable-next-line no-unused-vars
  const umum = useQuery();

  useEffect(() => {
    document.title = "Umum | ALO";
  });

  return (
    <>
      <Sidebar>
        <div className="ml-[320px] h-screen w-full bg-[#F4F4F4] pt-[60px] pl-[75px] pr-[77px] dark:bg-[#292929]">
          <div className="flex justify-between">
            <h2 className="h-[34px] w-full text-[30px] font-bold uppercase text-[#2A6EB8]">
              SISTEM INFORMASI PRESENSI ALO
            </h2>
            <Toggle />
          </div>
          <p className="mt-4 w-full text-justify text-lg leading-6 dark:text-[#E8E8E8]">
            ALO merupakan sistem informasi presensi karyawan yang memiliki
            integrasi dari perangkat keras pendeteksi sidik jari sebagai sistem
            presensi berbasis biometrik, pusat data dari Google Spreadsheet,
            dengan situs web sebagai tempat monitor presensi karyawan dengan
            akses terbatas untuk admin.
          </p>
          <h2 className="mt-24 h-[49px] w-[105px] text-[30px] font-bold uppercase text-[#2A6EB8]">
            data umum
          </h2>
          <div className="mt-10 flex space-x-[72px]">
            <div className="flex h-[222px] w-[273px] flex-col justify-between rounded-[30px] bg-white p-[30px] dark:bg-[#202020]">
              <h3 className="text-[60px] font-bold text-[#2A6EB8]">25</h3>
              <p className="text-xl font-bold leading-6 text-[#202020] dark:text-white">
                Karyawan
              </p>
            </div>
            <div className="flex h-[222px] w-[273px] flex-col justify-between rounded-[30px] bg-white p-[30px] dark:bg-[#202020]">
              <h3 className="text-[60px] font-bold text-[#2A6EB8]">8</h3>
              <p className="text-xl font-bold leading-6 text-[#202020] dark:text-white">
                Jam Kerja
              </p>
            </div>
            <div className="flex h-[222px] w-[273px] flex-col justify-between rounded-[30px] bg-white p-[30px] dark:bg-[#202020]">
              <h3 className="text-[60px] font-bold text-[#2A6EB8]">15</h3>
              <p className="text-xl font-bold leading-6 text-[#202020] dark:text-white">
                Hari
              </p>
            </div>
          </div>
        </div>
      </Sidebar>
    </>
  );
}

export default Umum;
