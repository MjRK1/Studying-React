import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY" : "386be8d4-fcbe-49bd-90d7-7f8a442324c5"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        })
    },
    getFollowedUsers(currentPage = 1 , pageSize = 10) {
        let flag = true;
        return instance.get(`/users?friend=${flag}&page=${currentPage}&count=${pageSize}`).then (response => {
            return response.data
        })
    },
    unfollowUser(userId) {
        return instance.delete('/follow/'+userId).then(response => {
            return response.data
        })
    },
    followUser(userId) {
        return instance.post('/follow/'+userId).then(response => {
            return response.data
        })
    }

}

export const headerAPI = {
    getAuthUserData() {
        return instance.get(`auth/me`).then(response => {
            return response.data
        })
    },
}
export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/` + userId).then(response => {
            return response.data
        })
    }
}
