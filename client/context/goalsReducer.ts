import { IAction } from "./userReducer";

export interface IGoals {
  text: string;
}

export interface IGoalState {
  goals: IGoals[];
}

// const initialState: IGoalState = {goals: []}

export const goalsReducer = (state: IGoalState, action: IAction) => {
  switch (action.type) {
    case "ADD_GOAL":
      return {
        ...state,
        goals: state.goals.concat(action.payload)
      }
    case "UPDATE_GOAL":
      const idxToUpdate = state.goals.indexOf(action.payload);
      return {
        ...state,
        goals: state.goals[idxToUpdate] = action.payload
      }
    case "REMOVE_GOAL":
      const idxToRemove = state.goals.indexOf(action.payload);
      return {
        ...state,
        goals: state.goals.splice(idxToRemove)
      }
    default:
      return state;
  }
}