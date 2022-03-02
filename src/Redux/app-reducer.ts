import { type } from "os";
import { getMyAuth } from "./auth-reducer";

let INITIALIZATION_SUCCESS = 'INITIALIZATION_SUCCESS'

let initialState = {
  initialization: false
};

export type InitialStateType = typeof initialState;

const appReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case INITIALIZATION_SUCCESS:
      return {
        ...state,
        initialization: true
      }

    default:
      return state;
  }
}

type SetInitializationActionType = {
  type: typeof INITIALIZATION_SUCCESS
}

export const setInitialization = (): SetInitializationActionType => ({ type: INITIALIZATION_SUCCESS });

export const InitializationApp = () => (dispatch: any) => {
  const promise = dispatch(getMyAuth())
  promise.then(() => {
    dispatch(setInitialization())
  })

}

export default appReducer;
