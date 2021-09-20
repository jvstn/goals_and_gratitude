export interface IAction {
  type: string,
  payload: any,
}
export const userReducer = (state: any, action: IAction) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
