import React, { useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Table from "../../components/Table/Table";
import useQuery3 from "../../hook/useQuery3";
import { useSelector } from "react-redux";

function Karyawan() {
  const karyawan = useQuery3();

  const data = useSelector((state) => state.karyawan.list);

  useEffect(() => {
    document.title = "Karyawan| ALO";
  });
  return (
    <>
      <Sidebar name="daftar karyawan">
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
                Nama Karyawan
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
                  {item.Nama}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Sidebar>
    </>
  );
}

export default Karyawan;
