import React, { useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Table from "../../components/Table/Table";

function PresensiBulan() {
  useEffect(() => {
    document.title = "Presensi Satu Bulan | ALO";
  });
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
            <tr className="border-b border-t">
              <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-white"></td>
              <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-white"></td>
              <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-white"></td>
              <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-white"></td>
            </tr>
            <tr className="border-b border-t">
              <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-white"></td>
              <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-white"></td>
              <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-white"></td>
              <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-white"></td>
            </tr>
            <tr className="border-b border-t">
              <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-white"></td>
              <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-white"></td>
              <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-white"></td>
              <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-white"></td>
            </tr>
            <tr className="border-b border-t">
              <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-white"></td>
              <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-white"></td>
              <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-white"></td>
              <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-white"></td>
            </tr>
          </tbody>
        </Table>
      </Sidebar>
    </>
  );
}

export default PresensiBulan;
