import * as axios from 'axios';

let instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:     {
        "API-KEY": '988c14fa-006f-440c-a07b-8e01bdfdbc87'
    }
});

export const authAPI =  {
    isAuth: ()=> {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            });
    },

    login: (email, password, remember=false, captcha=null)=> {
        return instance.post(`auth/login`, {email, password, remember, captcha})
            .then(response=>response.data);
    },

    logout: ()=> {
        return instance.delete(`auth/login`)
            .then(response=>response.data.resultCode===0);
    }
}

export const usersAPI = {
    getUsers: (page=1, pageSize = 100) => {
        return instance.get(`users?page=${page}&count=${pageSize}`)
            .then(response=>{
                return response.data;
            });
    },
    toggleFollowing: (userId, follow) => {
        if (follow) {
            return instance.post(`follow/${userId}`)
                .then (response=> response.data.resultCode === 0);
        } else {
            return instance.delete(`follow/${userId}`)
                .then (response=> response.data.resultCode === 0);
        }
    },

    getProfile: userId=> {
        return  instance.get(`profile/` + userId)
            .then(response =>response.data);
    },

    getStatus: userId=> {
        return instance.get(`profile/status/${userId}`)
            .then(response=> response.data);
    },

    updateStatus: status=> {
        return instance.put(`profile/status`, {status})
            .then(response=>response.data.resultCode===0);
    },

    updatePhoto: photoFile=> {
        const formData = new FormData();
        formData.append("image", photoFile);

        return instance.put(`profile/photo`, formData)
            .then(response=>response.data.resultCode===0 ? response.data.data.photos : false);
    }

}

export const securityAPI =  {
    getCaptchaUrl: ()=> {
        return instance.get(`security/get-captcha-url`)
            .then(response=>response.data.url);
    }

}