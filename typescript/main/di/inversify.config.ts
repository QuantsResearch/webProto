import {WebStorage, DataStorage} from "../storage/storage";
import TYPES from "./types";
import { Kernel } from "inversify";
import AxiosImpl from "../http/axiosImpl";
import {HttpClient} from "../http/common";
import Main from "../main";
import {MainSaga} from "../saga/main";
import {ExStorage, HttpStorage} from "../exStorage/exStorage";

const kernel = new Kernel();
kernel.bind<ExStorage>(TYPES.ExStorage).to(HttpStorage).inSingletonScope();
kernel.bind<DataStorage>(TYPES.DataStorage).to(WebStorage).inSingletonScope();
kernel.bind<HttpClient>(TYPES.HttpClient).to(AxiosImpl).inSingletonScope();
kernel.bind<MainSaga>(TYPES.MainSaga).to(MainSaga).inSingletonScope();
kernel.bind<Main>(TYPES.Main).to(Main).inSingletonScope();

export default kernel