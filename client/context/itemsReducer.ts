import { IAction } from "./userReducer";

export interface IItem {
  text: string;
}

export interface IItemState {
  goals: IItem[];
  grats: IItem[];
}


export const itemsReducer = (state: IItemState, action: IAction) => {
  switch (action.type) {
    case "ADD_GOAL":
      return {
        ...state,
        goals: state.goals.concat(action.payload),
      };
    case "UPDATE_GOAL":
      const goalToUpdate = state.goals.indexOf(action.payload);
      return {
        ...state,
        goals: (state.goals[goalToUpdate] = action.payload),
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