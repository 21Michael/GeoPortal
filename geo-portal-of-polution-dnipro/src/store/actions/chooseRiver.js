import { CHANGE_INPUT } from './actionTypes.js';

export function onChangeInput(value) {
    return { type: CHANGE_INPUT, value: value}
}

