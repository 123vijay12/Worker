import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function droupDwon() {
  return (
    <div>
       <BrowserRouter>
            <Routes>
            <Route path='/page1' component={Page1} />
            <Route path='/page2' component={Page2} />
            </Routes>
      </BrowserRouter>
    </div>
  )
}
