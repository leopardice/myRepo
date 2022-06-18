import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {createStore} from "redux";
import {Provider} from 'react-redux';
import {rootReducer} from "./redux/rootReducer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HelpPage from "./components/HelpPage/HelpPage";

const store = createStore(rootReducer);

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
            <Route path='/' element={<App />}/>
            <Route path='/help' element={<HelpPage/>}/>
            </Routes>
        </BrowserRouter>
    </Provider>
)
