// export const combineReducers = (...reducers: Function[]) => (state: any, action: any) => {
//   for (let reducer of reducers) {
//     state =  reducer(state, action)
//   }
//   return state;
// }

export const combineReducers =
  (...reducers: Function[]) =>
  (state: any, action: any): any => {
    for (let i = 0; i < reducers.length; i++)
      state = reducers[i](state, action);
    return state;
  };