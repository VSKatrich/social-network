import { AppStateType } from "./redux-store"

export const getMyId = (state: AppStateType) => {
  return state.auth.id
}

export const getUsersInState = (state: AppStateType) => {
  return state.usersPage.users
}

export const getTotalCount = (state: AppStateType) => {
  return state.usersPage.totalCount
}

export const getPageSize = (state: AppStateType) => {
  return state.usersPage.pageSize
}

export const getCurrentPage = (state: AppStateType) => {
  return state.usersPage.currentPage
}

export const getIsFetching = (state: AppStateType) => {
  return state.usersPage.isFetching
}

export const getIsFollowingProgress = (state: AppStateType) => {
  return state.usersPage.isFollowingProgress
}
