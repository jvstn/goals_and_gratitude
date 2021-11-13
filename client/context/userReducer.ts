import { IAction } from "./context-types";

export const userReducer = (state: any, action: IAction) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "CLEAR_USER":
      return {
        ...state,
        user: null
      }
    default:
      return state;
  }
};
