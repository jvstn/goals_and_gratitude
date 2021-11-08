import { IAction } from "../context/userReducer";

export const useDayChange = (
  direction: "previous" | "next",
  dispatch: React.Dispatch<IAction>
) => {
  direction === "previous"
    ? dispatch({ type: "PREVIOUS_DAY" })
    : dispatch({ type: "NEXT_DAY" });
};
