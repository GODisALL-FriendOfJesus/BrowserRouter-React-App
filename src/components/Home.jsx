import React from "react";
import Navbar from '../components/Navbar';
import { BrowserRouter,Routes,Route } from "react-router";


export default function Home(){ 
return(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Navbar/>}/>
    </Routes>
    </BrowserRouter>
)
}