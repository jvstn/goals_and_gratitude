import {
  createContext,
  Dispatch,
  ReactNode,
  useReducer,
} from "react";
import { combineReducers } from "../utils/context-utils";
import { IItem, itemsReducer } from "./itemsReducer";
import { userReducer, IAction } from "./userReducer";

export interface IAppState {
  user?: object;
  goals: IItem[];
  grats: IItem[];
}

const initialState: IAppState = {
  user: undefined,
  goals: [],
  grats: [],
};

export const Context = createContext<{
  state: IAppState;
  dispatch: Dispatch<IAction>;
}>({
  state: initialState,
  dispatch: () => undefined,
});

const combinedReducers = combineReducers(userReducer, itemsReducer);
const StateProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(combinedReducers, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default StateProvider;
