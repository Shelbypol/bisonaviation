import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './store'
import './bootstrap.min.css'
import './style/global.css'
import App from './App'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <Provider store={store}>
        <div className=' global_bg-overlay'>
                <App/>
        </div>
    </Provider>,
    document.getElementById('root')
);

reportWebVitals();
