import { add, sub } from "date-fns";
import { IAction, IItemState } from "./context-types";



export const itemsReducer = (state: IItemState, action: IAction) => {
  switch (action.type) {
    case "NEXT_DAY":
      const nextDay = add(state.dayToView, { days: 1 });
      return {
        ...state,
        dayToView: nextDay,
      };
    case "PREVIOUS_DAY":
      const prevDay = sub(state.dayToView, { days: 1 });
      return {
        ...state,
        dayToView: prevDay,
      };
    case "SET_GOALS":
      return {
        ...state,
        goals: action.payload,
      };
    case "ADD_GOAL":
      return {
        ...state,
        goals: state.goals.concat(action.payload),
      };
    case "UPDATE_GOAL":
      state.goals[action.payload.idx].text = action.payload.text;
      return {
        ...state,
      };
    case "DELETE_GOAL":
      return {
        ...state,
        goals: [
          ...state.goals.slice(0, action.payload.idx),
          ...state.goals.slice(action.payload.idx + 1),
        ],
      };
    case "SET_GRATS":
      return {
        ...state,
        grats: action.payload,
      };
    case "ADD_GRAT":
      return {
        ...state,
        grats: state.grats.concat(action.payload),
      };
    case "DELETE_GRAT":
      return {
        ...state,
        grats: [
          ...state.grats.slice(0, action.payload.idx),
          ...state.grats.slice(action.payload.idx + 1),
        ],
      };
    case "UPDATE_GRAT":
      state.grats[action.payload.idx].text = action.payload.text;
      return {
        ...state,
      };
    default:
      return state;
  }
};
