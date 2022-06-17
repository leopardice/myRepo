import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {createStore} from "redux";
import {Provider} from 'react-redux';
import {rootReducer} from "./redux/rootReducer";

const store = createStore(rootReducer);

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <App />
    </Provider>
)
