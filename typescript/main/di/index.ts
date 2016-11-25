import kernel from "./inversify.config"
import TYPES from "./types";
import {HttpClient} from "../http/common";
import Main from "../main";

export function httpClient():HttpClient {
    return kernel.get<HttpClient>(TYPES.HttpClient)
}

export function getMain():Main {
    return kernel.get<Main>(TYPES.Main)
}
