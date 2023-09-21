import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './style.css'

import Store from './context/context'

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <Store>
        <App />
    </Store>
)