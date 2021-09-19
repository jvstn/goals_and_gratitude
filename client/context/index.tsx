import { createContext, Dispatch, ReactElement, ReactNode, useReducer } from "react";
import { isContext } from "vm";
import { userReducer, IAction } from "./userReducer";

interface IContext {
  state: any,
  disptach: any
}
interface IInitialState {
  user?: object 
}

const initialState: IInitialState = {
  user: undefined
}

export const Context = createContext<{
  state: object;
  dispatch: Dispatch<IAction>;
}>({
  state: {}, dispatch: () => undefined
});

const StateProvider = ({ children }: {children: ReactNode}) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  );
};


export default StateProvider;
