import {WebStorage, DataStorage} from "../storage/storage";
import TYPES from "./types";
import { Kernel } from "inversify";

const kernel = new Kernel();
kernel.bind<DataStorage>(TYPES.DataStorage).to(WebStorage);

export default kernel