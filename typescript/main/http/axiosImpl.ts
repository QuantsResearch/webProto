import * as Http from "common"
import * as axios from "axios";
import config from "../config/config";

function getInstance():Axios.AxiosInstance {
    return axios.create({
        baseURL: config.apiPath,
        timeout: config.apiTimeout
    });
}

export default class AxiosImpl implements Http.HttpClient {
    post(path:string, params:Map<string, any /* TODO */>):Promise<Http.HttpResponse> {
        return new Promise(function (resolve, reject) {
            getInstance().post(path, params).then(function (response: Axios.AxiosXHR<any>) {
                const data = response.data;
                resolve({data});
            })
            .catch(function (error: any) /* TODO */ {
                reject({error});
            });
        });
    }
}

