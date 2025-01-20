
import { baseApi } from "../../api/baseApi";



const authApi=baseApi.injectEndpoints({
endpoints:(builder)=>({
    login:builder.mutation({
        query:(userInfo)=>({
            url:'auth/login',
            method:"POST",
            body:userInfo,
        })
    }),
    SignUp:builder.mutation({
        query:(userinfo)=>({
            url:'auth/singUp',
            method:'POST',
            body:userinfo
        })
    })
})
})
export const {useLoginMutation ,useSignUpMutation}=authApi;