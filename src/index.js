import React from 'react'
import { createRoot } from 'react-dom/client'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import { ticketReducer } from './redux/ticketReducer'
import { transferReducer } from './redux/transferReducer'
import App from './components/App/App'
import './index.scss'

const rootReducer = combineReducers({ ticketReducer, transferReducer })
const store = configureStore({ reducer: rootReducer })
const root = createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
