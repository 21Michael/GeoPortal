import React from 'react';
import Layout from './hoc/Layout/Layout.js'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './store/reducers/rootReducer.js'
import thunk from 'redux-thunk';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch, faSignInAlt, faSignOutAlt)

const store = createStore(rootReducer, applyMiddleware(thunk))

function App() {
    return (
        <Provider store={store}>
			<BrowserRouter>
			    <div className="App">
			     	<Layout/>
			    </div>
	    	</BrowserRouter>
		</Provider>
    );
}

export default App;