import { profileAPI } from "../api/api";

let ADD_POST = 'ADD-POST'
let SET_USERS_PROFILE = 'SET_USERS_PROFILE'
let SET_USERS_STATUS = 'SET_USERS_STATUS'
let UPDATE_MAIN_PHOTO = 'UPDATE_MAIN_PHOTO'

let initialState = {
  posts: [
    { id: 1, massage: 'Hallo! My name is Victoria.', likesCount: 23 },
    { id: 2, massage: 'What are you doing now?', likesCount: 34 },
    { id: 3, massage: '  ', likesCount: 37 },
  ],
  profile: null,
  status: ''
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, { id: 8, massage: action.postBody, likesCount: 54 }]
      }

    case SET_USERS_PROFILE: {
      return {
        ...state,
        profile: action.profile
      };
    }

    case SET_USERS_STATUS: {
      return {
        ...state,
        status: action.status
      };
    }

    case UPDATE_MAIN_PHOTO: {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photo }
      };
    }

    default:
      return state;
  }
}

export const addPost = (postBody) => ({ type: ADD_POST, postBody });
export const setUsersProfile = (profile) => ({ type: SET_USERS_PROFILE, profile: profile });
export const setUsersStatus = (status) => ({ type: SET_USERS_STATUS, status: status });
export const updatePhoto = (photo) => ({ type: UPDATE_MAIN_PHOTO, photo });


export const getUserProfile = (userId) => async (dispatch) => {
  const response = await profileAPI.getUserProfile(userId)
  dispatch(setUsersProfile(response.data));
}

export const getUserStatus = (userId) => async (dispatch) => {
  const response = await profileAPI.getUserStatus(userId)
  dispatch(setUsersStatus(response.data));
}

export const updateUserStatus = (status) => {
  return async (dispatch) => {
    const response = await profileAPI.updateUserStatus(status)
    if (response.data.resultCode === 0) {
      dispatch(setUsersStatus(status));
    }
  }
}

export const updateMainPhoto = (photo) => {
  return async (dispatch) => {
    const response = await profileAPI.updateMainPhoto(photo)
    if (response.data.resultCode === 0) {
      dispatch(updatePhoto(response.data.data.photos));
    }
  }
}

export default profileReducer;
