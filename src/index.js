import React from 'react'
import { createRoot } from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import { ticketReducer } from './redux/ticketReducer'
import { transferReducer } from './redux/transferReducer'
import { loadReducer } from './redux/loadReducer'
import { loaderReducer } from './redux/loaderReducer'
import App from './components/App/App'
import './index.scss'

const store = configureStore({
  reducer: { ticket: ticketReducer, transfer: transferReducer, load: loadReducer, loader: loaderReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
})
const root = createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
