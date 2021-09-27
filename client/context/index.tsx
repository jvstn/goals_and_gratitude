import { createContext, Dispatch, ReactElement, ReactNode, useReducer } from "react";
import { isContext } from "vm";
import { combineReducers } from "../utils/context-utils";
import { goalsReducer, IGoals } from "./goalsReducer";
import { userReducer, IAction } from "./userReducer";

interface IInitialState {
  user?: object;
  goals?: IGoals[];
}

const initialState: IInitialState = {
  user: undefined,
  goals: []
}

export const Context = createContext<{
  state: IInitialState;
  dispatch: Dispatch<IAction>;
}>({
  state: {}, dispatch: () => undefined
});

const combinedReducers = combineReducers(userReducer, goalsReducer);
console.log(combineReducers(userReducer, goalsReducer));

const StateProvider = ({ children }: {children: ReactNode}) => {
  const [state, dispatch] = useReducer(combinedReducers, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  );
};


export default StateProvider;
