import axios from "axios";
import { PhotosType, ProfileType, UsersType } from './../types/types';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'a5a23fe8-e454-4299-8884-afa8e0fddd96'
  }
})
export enum ResultCodesEnum {
  Success = 0,
  Error
}
type ResponseType<D = {}, RC = ResultCodesEnum> = {
  data: D
  resultCode: RC
  messages: Array<string>
}
type GetUsersType = {
  items: Array<UsersType>
  totalCount: number
  error: string | null
}

export const usersAPI = {
  getUsers(currentPage: number, pageSize: number) {
    return (
      instance.get<GetUsersType>(`users?page=${currentPage}&count=${pageSize}`).then(res => res.data)
    )
  },

  unfollow(userId: number) {
    return (
      instance.delete<ResponseType>(`follow/${userId}`).then(res => res.data)
    )
  },

  follow(userId: number) {
    return (
      instance.post<ResponseType>(`follow/${userId}`).then(
        response => {
          return response.data
        }
      )
    )
  }
}

type MeDataType = {
  id: number
  email: string
  login: string
}
type LoginLogoutDataType = {
  userId: number
}

export const authAPI = {
  getMyAuth() {
    return instance.get<ResponseType<MeDataType>>(`auth/me`).then(res => res.data)
  },
  login(email: string, password: string, rememberMe: boolean) {
    return instance.post<ResponseType<LoginLogoutDataType>>(`auth/login`, { email, password, rememberMe }).then(res => res.data)
  },
  logout() {
    return instance.delete<ResponseType<LoginLogoutDataType>>(`auth/login`).then(res => res.data)
  }
}

type PhotosDataType = {
  photos: PhotosType
}
export const profileAPI = {
  getUserProfile(UserId: number | null) {
    return (
      instance.get<ProfileType>('profile/' + UserId).then(res => res.data)
    )
  },
  getUserStatus(UserId: number) {
    return (
      instance.get<string>('profile/status/' + UserId).then(res => res.data)
    )
  },
  updateUserStatus(status: string) {
    return (
      instance.put<ResponseType>(`profile/status`, { status }).then(res => res.data)
    )
  },
  updateMainPhoto(photoFile: File) {
    const formData = new FormData();
    formData.append('image', photoFile);

    return (
      instance.put<ResponseType<PhotosDataType>>(`profile/photo`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
    )
  },
  updateUserData(userData: ProfileType) {
    return (
      instance.put<ResponseType<ProfileType>>(`profile`, userData).then(res => res.data)
    )
  }
}
