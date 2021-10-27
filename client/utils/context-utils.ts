
export const combineReducers =
  (...reducers: Function[]) =>
  (prevState: any, value: any, ...args: any[]) =>
    reducers.reduce(
      (newState, reducer) => reducer(newState, value, ...args),
      prevState
    );