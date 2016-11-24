import {ActionType} from "../actions/index"
import { takeEvery, takeLatest, Saga } from 'redux-saga';

export function takeEveryAction(action:ActionType, saga: Saga, ...args: any[]) {
    return takeEvery(action, saga, ...args)
}

export function takeLatestAction(action:ActionType, saga: Saga, ...args: any[]) {
    return takeLatest(action, saga, ...args)
}