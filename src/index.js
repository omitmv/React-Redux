import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './main/App'
import * as serviceWorker from './serviceWorker'

import { Provider } from 'react-redux'
import configStore from './store/storeConfig'

const store = configStore()

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
)

serviceWorker.unregister()