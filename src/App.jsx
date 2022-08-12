import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Umum from "./pages/Umum/Umum";
import PresensiHari from "./pages/PresensiHari/PresensiHari";
import PresensiBulan from "./pages/PresensiBulan/PresensiBulan";
import Karyawan from "./pages/Karyawan/Karyawan";
import Laporan from "./pages/Laporan/Laporan";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route path="login" element={<Login />} />
        <Route path="umum" element={<Umum />} />
        <Route path="presensihari" element={<PresensiHari />} />
        <Route path="presensibulan" element={<PresensiBulan />} />
        <Route path="karyawan" element={<Karyawan />} />
        <Route path="laporan" element={<Laporan />} />
      </Route>
    </Routes>
  );
}

export default App;
