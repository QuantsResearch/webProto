export interface HttpResponse {
    data?:any, // TODO
    error?:any // TODO
}

export interface HttpClient {
    post(path:string, params:Map<string, any /* TODO */>):Promise<HttpResponse>
}
