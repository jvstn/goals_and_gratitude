import axios from "axios";
import { IAction } from "../context/userReducer";

export const useFetchItems = (
  type: string,
  date: string,
  dispatch: React.Dispatch<IAction>
) => {
  axios
    .get(`/api/${type}`, { params: { date } })
    .then(({ data }) => {
      dispatch({ type: `SET_${type.toUpperCase()}`, payload: data });
    })
    .catch((err) => {
      console.log(err);
    });
};


