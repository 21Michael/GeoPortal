import { combineReducers } from 'redux';
import chooseRiverReducer from './chooseRiver.js';
import mainReducer from './main.js';
import riverDiagramReducer from './riverDiagram.js';
import headerReducer from './header.js';

export default combineReducers({
    main: mainReducer,
    header: headerReducer,
    chooseRiver: chooseRiverReducer,
    riverDiagram: riverDiagramReducer
})