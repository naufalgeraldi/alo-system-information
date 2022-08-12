import React, { useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";

function Laporan() {
  useEffect(() => {
    document.title = "Laporan | ALO";
  });
  return (
    <>
      <Sidebar
        name="laporan
        presensi karyawan
        pt. tritek indonesia
        per bulan"
      ></Sidebar>
    </>
  );
}

export default Laporan;
