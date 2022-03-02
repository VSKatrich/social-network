import { profileAPI } from "../api/api";
import { PhotosType, PostsType, ProfileType } from "../types/types";

let ADD_POST = 'ADD-POST'
let SET_USERS_PROFILE = 'SET_USERS_PROFILE'
let SET_USERS_STATUS = 'SET_USERS_STATUS'
let UPDATE_MAIN_PHOTO = 'UPDATE_MAIN_PHOTO'



let initialState = {
  posts: [
    { id: 1, message: 'Hallo! My name is Victoria.', likesCount: 23 },
    { id: 2, message: 'What are you doing now?', likesCount: 34 },
    { id: 3, message: '  ', likesCount: 37 },
  ] as Array<PostsType>,
  profile: null as ProfileType | null,
  status: '' as string
};

export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, { id: 8, message: action.postBody, likesCount: 54 }]
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
        profile: { ...state.profile, photos: action.photo } as ProfileType
      };
    }

    default:
      return state;
  }
}

type AddPostType = {
  type: typeof ADD_POST
  postBody: string
}
export const addPost = (postBody: string): AddPostType => ({ type: ADD_POST, postBody });

type SetUsersProfileType = {
  type: typeof SET_USERS_PROFILE
  profile: ProfileType
}
export const setUsersProfile = (profile: ProfileType): SetUsersProfileType => ({
  type: SET_USERS_PROFILE, profile: profile
});

type SetUsersStatusType = {
  type: typeof SET_USERS_STATUS
  status: string
}
export const setUsersStatus = (status: string): SetUsersStatusType => ({
  type: SET_USERS_STATUS, status: status
});

type UpdatePhotoType = {
  type: typeof UPDATE_MAIN_PHOTO
  photo: PhotosType
}
export const updatePhoto = (photo: PhotosType): UpdatePhotoType => ({ type: UPDATE_MAIN_PHOTO, photo });

export const getUserProfile = (userId: number) => async (dispatch: any) => {
  const response = await profileAPI.getUserProfile(userId)
  dispatch(setUsersProfile(response.data));
}

export const getUserStatus = (userId: number) => async (dispatch: any) => {
  const response = await profileAPI.getUserStatus(userId)
  dispatch(setUsersStatus(response.data));
}

export const updateUserStatus = (status: string) => {
  return async (dispatch: any) => {
    const response = await profileAPI.updateUserStatus(status)
    if (response.data.resultCode === 0) {
      dispatch(setUsersStatus(status));
    }
  }
}

export const updateMainPhoto = (photo: any) => {
  return async (dispatch: any) => {
    const response = await profileAPI.updateMainPhoto(photo)
    if (response.data.resultCode === 0) {
      dispatch(updatePhoto(response.data.data.photos));
    }
  }
}

export const updateUserData = (userData: ProfileType) => async (dispatch: any, getState: any) => {
  const userId = getState().auth.id
  const response = await profileAPI.updateUserData(userData)
  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId));
  }
}

export default profileReducer;
