import { authAPI } from "../api/api";


let SET_USER_DATA = 'SET_USER_DATA'
let SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE'

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  errorMessage: null
};

const authReducer = (state = initialState, action) => {
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

export const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { id, email, login, isAuth } });
export const errorMassage = (errorMessage) => ({ type: SET_ERROR_MESSAGE, errorMessage })


export const getMyAuth = () => async (dispatch) => {
  const response = await authAPI.getMyAuth()
  if (response.data.resultCode === 0) {
    const { id, email, login } = response.data.data;
    dispatch(setAuthUserData(id, email, login, true)); //получаем данные с сервера 
  }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
  const response = await authAPI.login(email, password, rememberMe)
  if (response.data.resultCode === 0) {
    dispatch(getMyAuth());
  } else {
    dispatch(errorMassage(response.data.messages))
  }
}

export const logout = () => async (dispatch) => {
  const response = await authAPI.logout()
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
    dispatch(errorMassage(null))
  }
}

export default authReducer;
