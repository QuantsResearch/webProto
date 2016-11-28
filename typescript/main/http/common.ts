import {Response} from "../exStorage/exStorage";
export interface HttpClient {
    post(path:string, params:Map<string, any /* TODO */>):Promise<Response>
    put(path:string, params:Map<string, any /* TODO */>):Promise<Response>
}
