import { CHANGE_INPUT } from '../actions/actionTypes.js'

const initialState = {
    title: ' Ukrainian GeoPortal of Water Pollution',
    navList: [{
            text: 'main',
            to: '/'
        },
        {
            text: 'rivers',
            to: '/rivers'
        },
        {
            text: 'information',
            to: '/information'
        },
        {
            text: 'news',
            to: '/news'
        }
    ],
    search: {
        name: 'search',
        value: '',
        type: 'text',
        placeholder: 'Search:',
        valid: '',
        changed: false,
        disabled: true
    },
    signButtons: {
        signIn: {
            icon: 'sign-in-alt',
            to: '/signIn',
        },
        signOut: {
            icon: 'sign-out-alt',
            disabled: true
        }
    }
}

export default function headerReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_INPUT:
            return { ...state,  search: { ...action.input }  }
        default:
            return state
    }
}