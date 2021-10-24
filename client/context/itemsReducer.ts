import { IAction } from "./userReducer";
import {add, sub} from 'date-fns'

export interface IItem {
  text: string;
}

export interface IItemState {
  dayToView: Date;
  goals: IItem[];
  grats: IItem[];
}


export const itemsReducer = (state: IItemState, action: IAction) => {
  switch (action.type) {
    case "NEXT_DAY":
      const nextDay = add(state.dayToView, { days: 1})
      return {
        ...state,
        dayToView: nextDay
      }
    case "LAST_DAY":
      const lastDay = sub(state.dayToView, { days: 1})
      return {
        ...state,
        dayToView: lastDay
      }
    case "SET_GOALS":
      return {
        ...state,
        goals: action.payload
      }
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
    case "REMOVE_GOAL":
      const goalToRemove = state.goals.indexOf(action.payload);
      return {
        ...state,
        goals: state.goals.splice(goalToRemove),
      };
    case "ADD_GRAT":
      return {
        ...state,
        grats: state.grats.concat(action.payload),
      };
    case "REMOVE_GRAT":
      let gratToRemove = state.grats.indexOf(action.payload);
      return {
        ...state,
        grats: state.grats.splice(gratToRemove),
      };
    case "UPDATE_GRAT":
      let gratToUpdate = state.grats.indexOf(action.payload);
      return {
        ...state,
        grats: (state.grats[gratToUpdate] = action.payload),
      };
    default:
      return state;
  }
}