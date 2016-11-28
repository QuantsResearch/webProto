import kernel from "../../main/di/inversify.config"
import TYPES from "../../main/di/types";
import {MainSaga} from "../../main/saga/main";
import {ExStorage} from "../../main/exStorage/exStorage";

export function getMainSaga():MainSaga {
    return kernel.get<MainSaga>(TYPES.MainSaga)
}

export function getExStorage():ExStorage {
    return kernel.get<ExStorage>(TYPES.ExStorage)
}
