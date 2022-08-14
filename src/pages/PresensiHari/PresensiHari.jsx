import React, { useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Table from "../../components/Table/Table";
import { useSelector } from "react-redux";
import useQuery from "../../hook/useQuery";
import Toggle from "../../components/Toggle/Toggle";

function PresensiHari() {
  const umum = useQuery();

  console.log(umum);

  useEffect(() => {
    document.title = "Presensi Hari ini | ALO";
  });

  const data = useSelector((state) => state.umum.list);

  return (
    <>
      <Sidebar>
        <div className="ml-[320px] h-full w-full bg-[#F4F4F4] pt-[60px] pl-[75px] pr-[77px] dark:bg-[#292929]">
          <div className="flex justify-between">
            <h2 className="h-[34px] w-full text-[30px] font-bold uppercase text-[#2A6EB8]">
              PRESENSI HARI INI
            </h2>
            <Toggle />
          </div>
          <Table>
            <thead className="border-b">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-sm font-bold text-white"
                >
                  Tanggal
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-sm font-bold text-white"
                >
                  ID
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-sm font-bold text-white"
                >
                  Masuk
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-sm font-bold text-white"
                >
                  Keluar
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-sm font-bold text-white"
                >
                  Total Jam Kerja / Hari
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-sm font-bold text-white"
                >
                  Jam Kerja Reguler
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-sm font-bold text-white"
                >
                  Jam Lembur
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr className="border-b border-t">
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-white">
                    {item.Tanggal}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-white">
                    {item.ID}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-white">
                    {item.Masuk}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-white">
                    {item.Keluar}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-white">
                    {item.Total_Jam_Hari}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-white">
                    {item.Jam_Kerja_Reguler}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-white">
                    {item.Jam_Lembur}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Sidebar>
    </>
  );
}

export default PresensiHari;
