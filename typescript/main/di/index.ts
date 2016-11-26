import kernel from "./inversify.config"
import TYPES from "./types";
import Main from "../main";

export function getMain():Main {
    return kernel.get<Main>(TYPES.Main)
}
