import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './components/Card.jsx'
import Card from './components/Card.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Card username = "Loyd"/>
    <Card  post ="Staff Engg."/>
    <Card username ="Boss" post ="Zonke" />
  </React.StrictMode>,
)
