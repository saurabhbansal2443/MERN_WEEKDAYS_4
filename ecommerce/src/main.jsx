
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'
import './index.css'


function HEle(){
  return (
    <h1> I am h1 ele </h1>
  )
}

createRoot(document.getElementById('root')).render( <App></App>)
