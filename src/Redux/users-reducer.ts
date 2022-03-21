import { AnyAction } from 'redux';
import { ResultCodesEnum, usersAPI } from "../api/api";
import { UsersType } from './../types/types';
import { BaseThunkType, InferActionsTypes } from './redux-store';

const initialState = {
  users: [] as Array<UsersType>,
  pageSize: 100,
  totalCount: 0,
  currentPage: 1,
  isFetching: false,
  isFollowingProgress: [] as Array<number> //array user`s id
}

export type InitialStateType = typeof initialState
type ActionType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<AnyAction>
const usersReducer = (state = initialState, action: ActionType): InitialStateType => {
  switch (action.type) {

    case 'FOLLOW':
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

    case 'UNFOLLOW':
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

    case 'SET_USERS':
      return {
        ...state,
        users: action.users
      }

    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.currentPage
      }

    case 'SET_TOTAL_COUNT':
      return {
        ...state,
        totalCount: action.count
      }

    case 'SET_IS_FETCHING':
      return {
        ...state,
        isFetching: action.isFetching
      }

    case 'SET_IS_FOLLOWING_PROGRESS':
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

export const actions = {
  followSuccess: (userId: number) => ({ type: 'FOLLOW', userId } as const),
  unfollowSuccess: (userId: number) => ({ type: 'UNFOLLOW', userId } as const),
  setUsers: (users: Array<UsersType>) => ({ type: 'SET_USERS', users } as const),
  setCurrentPage: (currentPage: number) => ({ type: 'SET_CURRENT_PAGE', currentPage } as const),
  setTotalCount: (count: number) => ({ type: 'SET_TOTAL_COUNT', count } as const),
  toggleIsFetching: (isFetching: boolean) => ({ type: 'SET_IS_FETCHING', isFetching } as const),
  toggleIsFollowingProgress: (isFollowingProgress: boolean, userId: number) => ({
    type: 'SET_IS_FOLLOWING_PROGRESS', isFollowingProgress, userId
  } as const)
}

export const getUsers = (currentPage: number, pageSize: number): ThunkType => async (dispatch) => {
  dispatch(actions.toggleIsFetching(true));
  const data = await usersAPI.getUsers(currentPage, pageSize)
  dispatch(actions.setUsers(data.items)); //получаем данные с сервера 
  dispatch(actions.toggleIsFetching(false));
  dispatch(actions.setTotalCount(data.totalCount));
}

export const unfollow = (userId: number): ThunkType => async (dispatch) => {
  dispatch(actions.toggleIsFollowingProgress(true, userId))
  const data = await usersAPI.unfollow(userId)
  if (data.resultCode == ResultCodesEnum.Success) {
    dispatch(actions.unfollowSuccess(userId))
  }
  dispatch(actions.toggleIsFollowingProgress(false, userId))
}

export const follow = (userId: number): ThunkType => async (dispatch) => {
  dispatch(actions.toggleIsFollowingProgress(true, userId))
  const data = await usersAPI.follow(userId)
  if (data.resultCode == ResultCodesEnum.Success) {
    dispatch(actions.followSuccess(userId))
  }
  dispatch(actions.toggleIsFollowingProgress(false, userId))
}

export default usersReducer;
