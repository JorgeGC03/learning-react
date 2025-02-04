/* eslint-disable no-unused-vars */
import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import "./index.css";
const root = createRoot(document.getElementById('root'));
  // <StrictMode>
  //   <App />
  // </StrictMode>,

  root.render(
    <App />
  )


//https://www.youtube.com/watch?v=7iobxzd_2wY&list=PLUofhDIg_38q4D0xNWp7FEHOTcZhjWJ29