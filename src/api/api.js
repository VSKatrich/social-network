import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'a5a23fe8-e454-4299-8884-afa8e0fddd96'
  }
})

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return (
      instance.get(`users?page=${currentPage}&count=${pageSize}`).then(
        response => {
          return response.data
        }
      )
    )
  },

  unfollow(userId) {
    return (
      instance.delete(`follow/${userId}`).then(
        response => {
          return response.data
        }
      )
    )
  },

  follow(userId) {
    return (
      instance.post(`follow/${userId}`).then(
        response => {
          return response.data
        }
      )
    )
  }
}

export const authAPI = {
  getMyAuth() {
    return instance.get(`auth/me`)
  },
  login(email, password, rememberMe) {
    return instance.post(`auth/login`, { email, password, rememberMe })
  },
  logout() {
    return instance.delete(`auth/login`)
  }
}

export const profileAPI = {
  getUserProfile(UserId) {
    return (
      instance.get('profile/' + UserId)
    )
  },
  getUserStatus(UserId) {
    return (
      instance.get('profile/status/' + UserId)
    )
  },
  updateUserStatus(status) {
    return (
      instance.put(`profile/status`, { status })
    )
  },
  updateMainPhoto(photoFile) {
    const formData = new FormData();
    formData.append('image', photoFile);

    return (
      instance.put(`profile/photo`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
    )
  },

  updateUserData(userData) {
    return (
      instance.put(`profile`, userData)
    )
  }
}
