import { CHANGE_INPUT } from './actionTypes.js';
import isNumeric from 'validator/es/lib/isNumeric';
import isLength from 'validator/es/lib/isLength';

export function onChangeInput(input, value) {
    input.value = value;
    if (value) {
        input.changed = true;
        if (input.changed) {
            input.valid = !!value.search(/\d/g) && isLength(value, { min: 5, max: 15 });
        }
        if (input.valid) {
            input.disabled = false;
        } else {
            input.disabled = true;
        }
    } else {
        input.changed = false;
        input.valid = '';
        input.disabled = true;
    }
    return { type: CHANGE_INPUT, input: input }
}