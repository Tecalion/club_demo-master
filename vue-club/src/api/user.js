import request from "@/utils/request.js";


//提供调用注册接口的函数
export const userRegisterService = (registerData)=>{
    //借助于UrlSearchParams完成传递
    /*
    如果registerData是{ username: 'john', password: 'secret' }，那么循环结束后，params可能会变成类似于username=john&password=secret的字符串。
     */
    const params = new URLSearchParams()
    for(let key in registerData){
        params.append(key,registerData[key]);
    }
    return request.post('/user/register',params);
}
//提供调用登录接口的函数
export const userLoginService = (loginData)=>{
    const params = new URLSearchParams()
    for(let key in loginData){
        params.append(key,loginData[key]);
    }
    // console.log(params+'params'+loginData)
    return request.post('/user/login',params);
}

//获取用户详细信息
export const userInfoService = ()=>{
    return request.get('/user/userInfo')
}

//修改个人信息
export const userInfoUpdateService = (userInfoData)=>{
    return request.put('/user/update',userInfoData)
}

//获取所有用户信息
export const userAllInfoService = ()=>{
    return request.get('/user/userAllInfo')
}

export const userDeleteService = (deleteData)=>{
    return request.delete('/user/delete',deleteData)
}

