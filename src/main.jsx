import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const options = {
  position: 'bottom right',
  timeout: 5000,
  offset: '30px',
  transition: 'scale'
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AlertProvider template={AlertTemplate} {...options}>
    <App />
  </AlertProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
