import { usersAPI } from "../api/api";
import { UsersType } from './../types/types';

let FOLLOW = 'FOLLOW'
let UNFOLLOW = 'UNFOLLOW'
let SET_USERS = 'SET_USERS'
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
let SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
let SET_IS_FETCHING = 'SET_IS_FETCHING'
let SET_IS_FOLLOWING_PROGRESS = 'SET_IS_FOLLOWING_PROGRESS'



let initialState = {
  users: [] as Array<UsersType>,
  pageSize: 100,
  totalCount: 0,
  currentPage: 1,
  isFetching: false,
  isFollowingProgress: [] as Array<number> //array user`s id
}

export type InitialStateType = typeof initialState

const usersReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {

    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {
              ...u, followed: true
            }
          } else {
            return {
              ...u
            }
          }
        })
      }

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {
              ...u, followed: false
            }
          } else {
            return {
              ...u
            }
          }
        })
      }

    case SET_USERS:
      return {
        ...state,
        users: action.users
      }

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      }

    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.count
      }

    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }

    case SET_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        isFollowingProgress: action.isFollowingProgress
          ? [...state.isFollowingProgress, action.userId]
          : state.isFollowingProgress.filter(id => id != action.userId),
      }

    default:
      return state;
  }
}

type FollowSuccessType = {
  type: typeof FOLLOW
  userId: number
}
export const followSuccess = (userId: number): FollowSuccessType => ({ type: FOLLOW, userId });

type UnfollowSuccessType = {
  type: typeof UNFOLLOW
  userId: number
}
export const unfollowSuccess = (userId: number): UnfollowSuccessType => ({ type: UNFOLLOW, userId });

type SetUsersType = {
  type: typeof SET_USERS
  users: Array<UsersType>
}
export const setUsers = (users: Array<UsersType>): SetUsersType => ({ type: SET_USERS, users });

type SetCurrentPageType = {
  type: typeof SET_CURRENT_PAGE
  currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageType => ({
  type: SET_CURRENT_PAGE, currentPage
});

type SetTotalCountType = {
  type: typeof SET_TOTAL_COUNT
  count: number
}
export const setTotalCount = (count: number): SetTotalCountType => ({ type: SET_TOTAL_COUNT, count });

type ToggleIsFetchingType = {
  type: typeof SET_IS_FETCHING
  isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingType => ({
  type: SET_IS_FETCHING, isFetching
});

type ToggleIsFollowingProgressType = {
  type: typeof SET_IS_FOLLOWING_PROGRESS
  isFollowingProgress: boolean
  userId: number
}
export const toggleIsFollowingProgress = (isFollowingProgress: boolean, userId: number): ToggleIsFollowingProgressType => ({
  type: SET_IS_FOLLOWING_PROGRESS, isFollowingProgress, userId
});

export const getUsers = (currentPage: number, pageSize: number) => async (dispatch: any) => {
  dispatch(toggleIsFetching(true));
  const data = await usersAPI.getUsers(currentPage, pageSize)
  dispatch(setUsers(data.items)); //получаем данные с сервера 
  dispatch(toggleIsFetching(false));
  dispatch(setTotalCount(data.totalCount));
}

export const unfollow = (userId: number) => async (dispatch: any) => {
  dispatch(toggleIsFollowingProgress(true, userId))
  const data = await usersAPI.unfollow(userId)
  if (data.resultCode == 0) {
    dispatch(unfollowSuccess(userId))
  }
  dispatch(toggleIsFollowingProgress(false, userId))
}

export const follow = (userId: number) => async (dispatch: any) => {
  dispatch(toggleIsFollowingProgress(true, userId))
  const data = await usersAPI.follow(userId)
  if (data.resultCode == 0) {
    dispatch(followSuccess(userId))
  }
  dispatch(toggleIsFollowingProgress(false, userId))
}

export default usersReducer;
