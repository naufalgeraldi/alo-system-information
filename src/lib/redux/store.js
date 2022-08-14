import { configureStore } from "@reduxjs/toolkit";
import umumReducer from "./umumSlice";
import bulanReducer from "./bulanSlice";
import karyawanReducer from "./karyawanSlice";

export const store = configureStore({
  reducer: {
    umum: umumReducer,
    bulan: bulanReducer,
    karyawan: karyawanReducer,
  },
});
