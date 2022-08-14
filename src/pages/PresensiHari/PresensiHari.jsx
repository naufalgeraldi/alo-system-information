import React, { useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Table from "../../components/Table/Table";
import { useSelector } from "react-redux";
import useQuery from "../../hook/useQuery";

function PresensiHari() {
  const umum = useQuery();

  console.log(umum);

  useEffect(() => {
    document.title = "Presensi Hari ini | ALO";
  });

  const data = useSelector((state) => state.umum.list);

  return (
    <>
      <Sidebar name="presensi hari ini">
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
      </Sidebar>
    </>
  );
}

export default PresensiHari;
