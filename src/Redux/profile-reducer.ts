import { profileAPI, ResultCodesEnum } from "../api/api";
import { PhotosType, PostsType, ProfileType } from "../types/types";
import { BaseThunkType, InferActionsTypes } from './redux-store';

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
type ActionType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionType>

const profileReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case 'ADD_POST':
      return {
        ...state,
        posts: [...state.posts, { id: 8, message: action.postBody, likesCount: 54 }]
      }
    case 'SET_USERS_PROFILE': {
      return {
        ...state,
        profile: action.profile
      };
    }
    case 'SET_USERS_STATUS': {
      return {
        ...state,
        status: action.status
      };
    }
    case 'UPDATE_MAIN_PHOTO': {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photo } as ProfileType
      };
    }
    default:
      return state;
  }
}

export const actions = {
  addPost: (postBody: string) => ({ type: 'ADD_POST', postBody } as const),
  setUsersProfile: (profile: ProfileType) => ({ type: 'SET_USERS_PROFILE', profile: profile } as const),
  setUsersStatus: (status: string) => ({ type: 'SET_USERS_STATUS', status: status } as const),
  updatePhoto: (photo: PhotosType) => ({ type: 'UPDATE_MAIN_PHOTO', photo } as const),
}

export const getUserProfile = (userId: number | null): ThunkType => async (dispatch) => {
  const data = await profileAPI.getUserProfile(userId)
  dispatch(actions.setUsersProfile(data));
}
export const getUserStatus = (userId: number): ThunkType => async (dispatch) => {
  const data = await profileAPI.getUserStatus(userId)
  dispatch(actions.setUsersStatus(data));
}

export const updateUserStatus = (status: string): ThunkType => {
  return async (dispatch) => {
    const data = await profileAPI.updateUserStatus(status)
    if (data.resultCode === ResultCodesEnum.Success) {
      dispatch(actions.setUsersStatus(status));
    }
  }
}

export const updateMainPhoto = (photo: File): ThunkType => {
  return async (dispatch) => {
    const response = await profileAPI.updateMainPhoto(photo)
    if (response.data.resultCode === 0) {
      dispatch(actions.updatePhoto(response.data.data.photos));
    }
  }
}

export const updateUserData = (userData: ProfileType): ThunkType => async (dispatch, getState) => {
  const userId = getState().auth.id
  const data = await profileAPI.updateUserData(userData)
  if (data.resultCode === ResultCodesEnum.Success) {
    dispatch(getUserProfile(userId));
  }
}

export default profileReducer;
