import { authAPI, ResultCodesEnum } from "../api/api";
import { BaseThunkType, InferActionsTypes } from './redux-store';

let initialState = {
  id: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  errorMessage: null as Array<string> | null
};

export type initialStateType = typeof initialState;
type ActionType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionType>

const authReducer = (state = initialState, action: ActionType): initialStateType => {
  switch (action.type) {
    case 'SET_USER_DATA':
      return {
        ...state,
        ...action.payload
      }

    case 'SET_ERROR_MESSAGE':
      return {
        ...state,
        errorMessage: action.errorMessage
      }

    default:
      return state;
  }
}

export const actions = {
  setAuthUserData: (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: 'SET_USER_DATA', payload: { id, email, login, isAuth }
  }) as const,
  errorMessage: (errorMessage: Array<string> | null) => ({ type: 'SET_ERROR_MESSAGE', errorMessage }) as const
}

export const getMyAuth = (): ThunkType => async (dispatch) => {
  const data = await authAPI.getMyAuth()
  if (data.resultCode === ResultCodesEnum.Success) {
    const { id, email, login } = data.data;
    dispatch(actions.setAuthUserData(id, email, login, true)); //получаем данные с сервера 
  }
}

export const login = (email: string, password: string, rememberMe: boolean): ThunkType => async (dispatch) => {
  const data = await authAPI.login(email, password, rememberMe)
  if (data.resultCode === ResultCodesEnum.Success) {
    dispatch(getMyAuth());
  } else {
    dispatch(actions.errorMessage(data.messages))
  }
}

export const logout = (): ThunkType => async (dispatch) => {
  const data = await authAPI.logout()
  if (data.resultCode === ResultCodesEnum.Success) {
    dispatch(actions.setAuthUserData(null, null, null, false));
    dispatch(actions.errorMessage(null))
  }
}

export default authReducer;



// type ErrorMessageActionType = {
//   type: typeof SET_ERROR_MESSAGE
//   errorMessage: Array<string> | null
// };
// type PayloadType = {
//   id: number | null
//   email: string | null
//   login: string | null
//   isAuth: boolean
// }
// type SetAuthUserDataActionType = {
//   type: typeof SET_USER_DATA
//   payload: PayloadType
// };


// export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataActionType => ({
//   type: SET_USER_DATA, payload: { id, email, login, isAuth }
// });
// export const errorMessage = (errorMessage: Array<string> | null): ErrorMessageActionType => ({ type: SET_ERROR_MESSAGE, errorMessage })
