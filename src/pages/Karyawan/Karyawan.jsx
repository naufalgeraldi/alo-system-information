import React, { useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Table from "../../components/Table/Table";
import useQuery3 from "../../hook/useQuery3";
import { useSelector } from "react-redux";
import Toggle from "../../components/Toggle/Toggle";

function Karyawan() {
  // eslint-disable-next-line no-unused-vars
  const karyawan = useQuery3();

  const data = useSelector((state) => state.karyawan.list);

  useEffect(() => {
    document.title = "Karyawan| ALO";
  });
  return (
    <>
      <Sidebar>
        <div className="ml-[320px] h-full w-full bg-[#F4F4F4] pt-[60px] pl-[75px] pr-[77px] dark:bg-[#292929]">
          <div className="flex justify-between">
            <h2 className="h-[34px] w-full text-[30px] font-bold uppercase text-[#2A6EB8]">
              DAFTAR KARYAWAN
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
        </div>
      </Sidebar>
    </>
  );
}

export default Karyawan;
