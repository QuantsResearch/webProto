import {injectable} from "inversify";
import Cookies from "js-cookie"
import "reflect-metadata";

export interface DataStorage {
    clear(): void;
    getItem(key: string): any;
    removeItem(key: string): void;
    setItem(key: string, data: string): void;
}

@injectable()
export class CookieStorage implements DataStorage {
    private readonly expires:number = 365 * 100; // 約100年
    clear(){
        Object.keys(Cookies.get()).forEach(key => Cookies.remove(key))
    };
    getItem = Cookies.get;
    removeItem = Cookies.remove;
    setItem(key: string, data: string){
        Cookies.set(key, data, { expires: this.expires })
    };
}

@injectable()
export class WebStorage implements DataStorage {
    private readonly storage:Storage = localStorage;
    clear(){
        this.storage.clear();
    };
    getItem(key: string){
        return this.storage.getItem(key);
    };
    removeItem(key: string){
        this.storage.removeItem(key);
    };
    setItem(key: string, data: string){
        this.storage.setItem(key, data);
    };
}
