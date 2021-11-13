
  export interface IAppState {
    user: {
      name: string;
      email: string;
      [otherProps: string]: any;
    };
    dayToView: Date;
    goals: IItem[];
    grats: IItem[];
}
  
export interface IItem {
  text: string;
  _id?: number;
  createdAt?: Date;
}

export interface IItemState {
  dayToView: Date;
  goals: IItem[];
  grats: IItem[];
}

export interface IAction {
  type: string;
  payload?: any;
}