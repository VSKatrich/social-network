import { authAPI } from "../api/api";


let SET_USER_DATA = 'SET_USER_DATA'
let SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE'

let initialState = {
  id: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  errorMessage: null as string | null
};

export type initialStateType = typeof initialState;

const authReducer = (state = initialState, action: any): initialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload
      }

    case SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.errorMessage
      }

    default:
      return state;
  }
}

type ErrorMessageActionType = {
  type: typeof SET_ERROR_MESSAGE
  errorMessage: string | null
};
type PayloadType = {
  id: number | null
  email: string | null
  login: string | null
  isAuth: boolean
}
type SetAuthUserDataActionType = {
  type: typeof SET_USER_DATA
  payload: PayloadType
};

export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataActionType => ({
  type: SET_USER_DATA, payload: { id, email, login, isAuth }
});
export const errorMessage = (errorMessage: string | null): ErrorMessageActionType => ({ type: SET_ERROR_MESSAGE, errorMessage })


export const getMyAuth = () => async (dispatch: any) => {
  const response = await authAPI.getMyAuth()
  if (response.data.resultCode === 0) {
    const { id, email, login } = response.data.data;
    dispatch(setAuthUserData(id, email, login, true)); //получаем данные с сервера 
  }
}

export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: any) => {
  const response = await authAPI.login(email, password, rememberMe)
  if (response.data.resultCode === 0) {
    dispatch(getMyAuth());
  } else {
    dispatch(errorMessage(response.data.messages))
  }
}

export const logout = () => async (dispatch: any) => {
  const response = await authAPI.logout()
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
    dispatch(errorMessage(null))
  }
}

export default authReducer;
