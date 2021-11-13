import {
  createContext,
  Dispatch,
  ReactNode,
  useReducer,
} from "react";
import { combineReducers } from "../utils/context-utils";
import { IAction, IAppState } from "./context-types";
import { itemsReducer } from "./itemsReducer";
import { userReducer } from "./userReducer";



const initialState: IAppState = {
  user: {
    name: "",
    email: ""
  },
  dayToView: new Date(),
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
