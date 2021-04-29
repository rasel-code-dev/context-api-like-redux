import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import {BrowserRouter} from "react-router-dom";
import Provider from "./context/Provider";


// Wrap App with Context Provider and a functional component state

const AppContextWrapper = Provider(App)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContextWrapper />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
