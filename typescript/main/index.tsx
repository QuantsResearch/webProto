import * as React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { createStore, applyMiddleware, Middleware  } from "redux"
import todoApp from "./reducers"
import App from "./components/App"
import {TodoState} from "./model/index"
import "../../scss/app.scss";
import createSagaMiddleware from "redux-saga"
import {apiSaga} from "./saga/api"
import createLogger from "./logger/logger"
import {storage as getStorage} from "./di/index"
import {DataStorage} from "./storage/storage";

class Main {
    private readonly dataKey:string = "data";
    private storage:DataStorage;

    constructor() {
        this.storage = getStorage();
    }

    init():void {
        // restore data from storage
        const initial:TodoState | undefined = (() => {
            let data = this.storage.getItem(this.dataKey) || undefined;
            return data && JSON.parse(data);
        })();

        // setup redux and redux-saga
        const sagaMiddleware = createSagaMiddleware();
        const middlewares:Middleware[] = [sagaMiddleware];
        const logger = createLogger();
        if(logger){middlewares.push(logger);}
        const store:Redux.Store<TodoState | any> = createStore(todoApp, initial, applyMiddleware(...middlewares));
        store.subscribe(() => {
                console.log("state updated:" + JSON.stringify(store.getState()));
                this.storage.setItem(this.dataKey, JSON.stringify(store.getState()));
            }
        );
        sagaMiddleware.run(apiSaga);

        // render dom
        const rootNode = document.getElementById("root")
        if(rootNode){
            render(
                <Provider store={store}>
                    <App />
                </Provider>,
                rootNode
            );
        }
    }
}

new Main().init();
