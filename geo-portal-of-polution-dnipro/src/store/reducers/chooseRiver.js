import { CHANGE_INPUT } from '../actions/actionTypes.js'

const initialState = {
    data: [1,2,3]
}

export default function chooseRiverReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_INPUT:
            return { ...state}
        default:
            return state
    }
}