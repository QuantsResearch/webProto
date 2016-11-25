import {WebStorage, DataStorage} from "../storage/storage";
import TYPES from "./types";
import { Kernel } from "inversify";
import AxiosImpl from "../http/axiosImpl";
import {HttpClient} from "../http/common";
import Main from "../main";

const kernel = new Kernel();
kernel.bind<DataStorage>(TYPES.DataStorage).to(WebStorage).inSingletonScope();
kernel.bind<Main>(TYPES.Main).to(Main);
kernel.bind<HttpClient>(TYPES.HttpClient).to(AxiosImpl);


export default kernel