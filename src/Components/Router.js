import React from 'react';
import Navbar from './NavBar';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './App';

const Router=()=>{
    return(
        <div>
            <Navbar></Navbar>
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/About' element={<About/>}></Route>
                <Route path='/Contact' element={<Contact/>}></Route>
                </Routes></BrowserRouter>
        </div>
    )
}
 export default Router;