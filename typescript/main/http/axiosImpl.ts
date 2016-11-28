import * as Http from "common"
import * as axios from "axios";
import config from "../config/config";
import {injectable} from "inversify";
import AxiosXHR = Axios.AxiosXHR;
import IPromise = Axios.IPromise;
import {Response} from "../exStorage/exStorage";

function getInstance():Axios.AxiosInstance {
    return axios.create({
        baseURL: config.apiPath,
        timeout: config.apiTimeout
    });
}

@injectable()
export default class AxiosImpl implements Http.HttpClient {
    // TODO
    private handlingResponse(response:IPromise<AxiosXHR<any>>):Promise<Response> {
        return new Promise(function (resolve, reject) {
            response.then(function (response: Axios.AxiosXHR<any>) {
                const data = response.data;
                resolve({data});
            })
            .catch(function (error: any) /* TODO */ {
                reject({error});
            });
        });
    }

    post(path:string, params:Map<string, any /* TODO */>):Promise<Response> {
        return this.handlingResponse(getInstance().post(path, params));
    }

    put(path:string, params:Map<string, any /* TODO */>):Promise<Response> {
        return this.handlingResponse(getInstance().put(path, params));
    }
}

