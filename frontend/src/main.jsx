import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.sass'
import App from './app/App'
import store from './app/store'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)
