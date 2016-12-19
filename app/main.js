// how to build outputs:
// dev        -> webpack -p; splitex/splitex.sh;
// production -> npm run build-production; splitex/splitex.sh;
//import { renderToString, renderToStaticMarkup } from 'react-dom/server'

import React from 'react'
import { render } from 'react-dom'

import { Provider }                       from 'react-redux'
import { createStore }  from 'redux'

import reducers from './reducers'
import App from './components/App/App'

// require all sass files - sub files should be SASS imported in main
import styles from './styles/main.scss';
//require('./styles/main.scss')


// create store
let store = createStore(reducers) //, initialState

// debug store
window.reduxDebug = true;

if (window.reduxDebug === true) {
	// override dispatch for logging: http://redux.js.org/docs/advanced/Middleware.html

	let next = store.dispatch
	store.dispatch = function dispatchAndLog(action) {
		console.log('dispatching', action) // eslint-disable-line
		let result = next(action)
		console.log('next state', store.getState()) // eslint-disable-line
		return result
	}
}

// render application
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)




//console.log('###############', window.console);

// const html = renderToString(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )
//
// document.getElementById('root').innerHTML = html
// console.log('>>>', html)
