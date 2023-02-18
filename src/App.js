import React from "react";
import {Routes,Route} from 'react-router-dom';
import Home from "./components/Home";
import Amazon from "./components/amazon";
import FlipKart from "./components/flipkart";
import SnapDeal from "./components/snapDeal";
import Login from "./components/Login";
import Signup from "./components/Signup";
function App() {

  return (
    <div className="App" >
   
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={ <Home/>}/>
        <Route path='/amazon' element={<Amazon/>}/>
        <Route path='/flipKart' element={<FlipKart/>}/>
        <Route path='/snapDeal' element={<SnapDeal/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
     
    
     
    </div>
  );
}

export default App;
