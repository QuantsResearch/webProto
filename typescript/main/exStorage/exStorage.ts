import {injectable, inject} from "inversify";
import "reflect-metadata";
import {Todo} from "../model/reducerModel";
import {HttpClient} from "../http/common";
import TYPES from "../di/types";

export interface Response {
    data?:any, // TODO
    error?:any // TODO
}

export interface ExStorage {
    createTodo(todo:Todo):Promise<Response>;
    updateTodo(todo:Todo):Promise<Response>
}

@injectable()
export class HttpStorage implements ExStorage {
    private httpClient: HttpClient;
    constructor(
        @inject(TYPES.HttpClient) httpClient_: HttpClient
    ) {
        this.httpClient = httpClient_;
    }

    createTodo(todo: Todo): Promise<Response> {
        return this.httpClient.post("api/", <any>todo)
    }

    updateTodo(todo: Todo): Promise<Response> {
        return this.httpClient.put("api/", <any>todo)
    }
}

