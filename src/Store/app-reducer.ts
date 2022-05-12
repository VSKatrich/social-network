import { getMyAuth } from "./auth-reducer";
import { BaseThunkType, InferActionsTypes } from './redux-store';

const initialState = {
  initialization: false
};

export type InitialStateType = typeof initialState;
type ActionType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionType>

const appReducer = (state = initialState, action: ActionType): InitialStateType => {
  switch (action.type) {
    case 'INITIALIZATION_SUCCESS':
      return {
        ...state,
        initialization: true
      }
    default:
      return state;
  }
}

export const actions = {
  setInitialization: () => ({ type: 'INITIALIZATION_SUCCESS' } as const)
}

export const InitializationApp = (): ThunkType => async (dispatch) => {
  const promise = dispatch(getMyAuth())
  promise.then(() => {
    dispatch(actions.setInitialization())
  })
}

export default appReducer;
