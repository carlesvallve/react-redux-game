// require all sass files - sub files should be SASS imported in main
import styles from './styles/main.scss';

import React 												from 'react'
import { render } 									from 'react-dom'
import { Provider }                 from 'react-redux'
import { createStore }  						from 'redux'
import reducers 										from './reducers'
import { getLanguage, getDevice }   from './utils/utils'
import { setLanguage, setDevice }   from './actions'
import App 													from './components/App/App'
import Simple from './components/Three/Simple'


// create store
let store = createStore(reducers) //, initialState

// debug store
window.reduxDebug = false;
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

// initialize settings
store.dispatch(setLanguage(getLanguage()))
store.dispatch(setDevice(getDevice()))

// render application
render(
  <Provider store={store}>
    <Simple />
  </Provider>,
  document.getElementById('root')
)


// NOTE: how to build outputs:
// dev        -> webpack -p; splitex/splitex.sh;
// production -> npm run build-production; splitex/splitex.sh;
//import { renderToString, renderToStaticMarkup } from 'react-dom/server'


//console.log('###############', window.console);
// const html = renderToString(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )
// document.getElementById('root').innerHTML = html
// console.log('>>>', html)
