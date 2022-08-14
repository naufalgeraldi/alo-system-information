import { useEffect } from "react";
import Papa from "papaparse";
import { useSelector, useDispatch } from "react-redux";
import { addProducts, addCategory } from "../lib/redux/bulanSlice";

const url =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQb32pxnnUWgCQTT8gArlWGNPq5Va0q-2XhqVaVTeBD2dFSW6j0xJQ2EwV66VERq5SKSVaIK3PPD9QQ/pub?gid=2089610044&single=true&output=csv";

function useQuery2() {
  const bulan = useSelector((state) => state.bulan.list);
  const dispatch = useDispatch();

  useEffect(() => {
    Papa.parse(url, {
      download: true,
      header: true,
      complete: (result) => {
        result.data.map((item) => {
          dispatch(
            addProducts({
              ...item,
              selected: false,
            })
          );
          dispatch(addCategory(item.category));
          return 0;
        });
      },
      error: (err) => {
        console.log(err);
        return err;
      },
    });
  }, [dispatch]);

  return bulan;
}

export default useQuery2;
