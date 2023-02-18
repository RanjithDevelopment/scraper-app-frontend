import "../css/NavbarStyles.css";
import React ,{useState}from 'react'
import { Link } from "react-router-dom";
import {FaBars,FaTimes} from "react-icons/fa";

function Navbar(){
 
const [click,setClick]=useState(false);
const handleClick =()=>setClick(!click);
const [color,setColor]=useState(false);
const changeColor=()=>{
  if(window.scrollY >=100 ){
    setColor(true);
}else{
  setColor(false);
}
}; 
window.addEventListener("scroll",changeColor);
  return (
    <div className={color ? "header header-bg":"header" }>
      <Link to='/' >
      
      <h1>Scrapper</h1>
      </Link>
      <ul className={click ? "nav-menu active" :"nav-menu"}>
        <li>
            <Link to='/home'>Home</Link>
        </li>
        <li>
            <Link to='/amazon'>amazon</Link>
        </li>
        <li>
            <Link to='/flipKart'>flipKart</Link>
        </li>
        <li>
            <Link to='/snapDeal'>Snapdeal</Link>
        </li>
        <li>
            <Link to='/'>Login</Link>
        </li>
        <li>
            <Link to='/signup'>SignUp !</Link>
        </li>
        {/* <li>
       
        <input type="text" name="searchText"value={searchText} onChange={(e)=>setSearchText(e.target.value)}/><button className="btn">Search</button>

        </li> */}

      </ul>
     
      <div className="hamburger" onClick={handleClick}>
        {
click ? ( <FaTimes size={20} style={{color:"#fff"}}/>) :(<FaBars size={20} style={{color:"#fff"}}/>)
        }
       
      
      </div>
    
    </div>
  )
}
  
export default Navbar
