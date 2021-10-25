import axios from "axios";
import qs from "qs";
//axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded,application/json';
export function setTokenHeader(token){
 if(token)
 axios.defaults.headers.common["Authorization"]=`Bearer ${token}`;
 else{
     delete axios.defaults.headers["Authorization"];
 }
}
export function apiCall(method,url,data){
    
    const options = {
        method,
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.stringify(data),
        url,
      };
    return new Promise((resolve,reject)=>{
        return axios(options).then(res=>{
            //console.log(res);
            return resolve(res.data);
        }).catch(err=>{
            //console.log(err);
            return reject(err.response.data.error);
        });
    });
    //     return axios[method](path,data).then(res=>{
    //         return resolve(res.data);
    //     }).catch(err=>{
    //         return reject(err.response.data.error);
    //     });
    // });
}

