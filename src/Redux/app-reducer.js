import { getMyAuth } from "./auth-reducer";


let INITIALIZATION_SUCCESS = 'INITIALIZATION_SUCCESS'

let initialState = {
  initialization: false
};

const appReducer = (state = initialState, action) => {
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

export const setInitialization = () => ({ type: INITIALIZATION_SUCCESS });


export const InitializationApp = () => (dispatch) => {
  const promise = dispatch(getMyAuth())
  promise.then(() => {
    dispatch(setInitialization())
  })

}

export default appReducer;
