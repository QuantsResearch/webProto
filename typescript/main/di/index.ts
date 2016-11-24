import kernel from "./inversify.config"
import {DataStorage} from "../storage/storage";
import TYPES from "./types";

export function storage():DataStorage {
    return kernel.get<DataStorage>(TYPES.DataStorage)
}

