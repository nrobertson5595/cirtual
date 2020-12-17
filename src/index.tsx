import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './Reducers'
import thunk from 'redux-thunk';



const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA




// import React from 'react';
// import ReactDOM from 'react-dom';
// import { applyMiddleware, createStore } from "redux";
// import { Provider } from "react-redux";
// import { BrowserRouter } from 'react-router-dom';

// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import RootReducer, { ApplicationState } from "./Reducers/RootReducer";
// import { ActionType, middleware } from "./Reducers/ActionTypes";

// import './index.css';

// export const store = createStore<ApplicationState, ActionType, {}, {}>(RootReducer, applyMiddleware(...middleware));

// ReactDOM.render(
//     <BrowserRouter>
//         <Provider store={store}>
//             <App />
//         </Provider>
//     </BrowserRouter>,
//     document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
