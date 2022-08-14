import React, { useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Table from "../../components/Table/Table";
import { useSelector } from "react-redux";
import useQuery2 from "../../hook/useQuery2";

function PresensiBulan() {
  const bulan = useQuery2();

  console.log(bulan);

  useEffect(() => {
    document.title = "Presensi Satu Bulan | ALO";
  });

  const data = useSelector((state) => state.bulan.list);
  return (
    <>
      <Sidebar name="presensi satu bulan">
        <Table>
          <thead className="border-b">
            <tr>
              <th
                scope="col"
                className="px-6 py-4 text-left text-sm font-bold text-white"
              >
                No.
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
                Jam Kerja Reguler
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-left text-sm font-bold text-white"
              >
                Lembur
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr className="border-b border-t">
                <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-white">
                  {index + 1}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-white">
                  {item.ID}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-white">
                  {item.Jam_Kerja_Reguler}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-white">
                  {item.Lembur}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Sidebar>
    </>
  );
}

export default PresensiBulan;
