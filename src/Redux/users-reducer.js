import { usersAPI } from "../api/api"

let FOLLOW = 'FOLLOW'
let UNFOLLOW = 'UNFOLLOW'
let SET_USERS = 'SET_USERS'
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
let SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
let SET_IS_FETCHING = 'SET_IS_FETCHING'
let SET_IS_FOLLOWING_PROGRESS = 'SET_IS_FOLLOWING_PROGRESS'

let initialState = {
  users: [],
  pageSize: 100,
  totalCount: 0,
  currentPage: 1,
  isFetching: false,
  isFollowingProgress: []
}

const usersReducer = (state = initialState, action) => {
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

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalCount = (count) => ({ type: SET_TOTAL_COUNT, count });
export const toggleIsFetching = (isFetching) => ({ type: SET_IS_FETCHING, isFetching });
export const toggleIsFollowingProgress = (isFollowingProgress, userId) => ({ type: SET_IS_FOLLOWING_PROGRESS, isFollowingProgress, userId });

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  const data = await usersAPI.getUsers(currentPage, pageSize)
  dispatch(setUsers(data.items)); //получаем данные с сервера 
  dispatch(toggleIsFetching(false));
  dispatch(setTotalCount(data.totalCount));
}

export const unfollow = (userId) => async (dispatch) => {
  dispatch(toggleIsFollowingProgress(true, userId))
  const data = await usersAPI.unfollow(userId)
  if (data.resultCode == 0) {
    dispatch(unfollowSuccess(userId))
  }
  dispatch(toggleIsFollowingProgress(false, userId))
}

export const follow = (userId) => async (dispatch) => {
  dispatch(toggleIsFollowingProgress(true, userId))
  const data = await usersAPI.follow(userId)
  if (data.resultCode == 0) {
    dispatch(followSuccess(userId))
  }
  dispatch(toggleIsFollowingProgress(false, userId))
}

export default usersReducer;
