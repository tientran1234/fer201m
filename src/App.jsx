import { useState } from 'react'
import './App.css'
import Home from './component/home/Home'
import "../src/assets/style.css"
import { Route,Routes } from 'react-router-dom'
import Detail from './component/home/Detail'
import Dashboard from './component/dashboard/Dashboard'

import EditItem from './component/dashboard/Edititem'
import AddItem from './component/dashboard/Additem'

function App() {


  return (
    <>
    <Routes>
            <Route path="/detail/:id" exact element={<Detail/>}></Route>
            <Route path="/" exact element={<Home/>}></Route>
            <Route path="/dashboard" exact element={<Dashboard/>}></Route>
            <Route path="/edit/:id" exact element={<EditItem/>}></Route>
            <Route path="/add" exact element={<AddItem/>}></Route>
            
        </Routes>
        

    </>
  )
}

export default App
