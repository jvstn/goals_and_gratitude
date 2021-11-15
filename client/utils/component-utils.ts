import {Dispatch} from 'react'
import axios from "axios";
import { IAction } from '../context/context-types';

export const changeDay = (
  direction: "previous" | "next",
  dispatch: Dispatch<IAction>
) => {
  direction === "previous"
    ? dispatch({ type: "PREVIOUS_DAY" })
    : dispatch({ type: "NEXT_DAY" });
};

export const fetchItems = (
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