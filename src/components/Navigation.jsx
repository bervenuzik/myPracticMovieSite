import React,{useRef,useEffect} from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
require("../styles/Navigation.css");

function Navigation() {

const menuSmallScreen = useRef();
const searchInput = useRef()
let shown = false;

// useEffect(()=>{
//     document.body.addEventListener("click", close)
// },[])

function show(){
        menuSmallScreen.current.style.transform = "translateX(-100%)"
        searchInput.current.style.opacity = "100%"
        searchInput.current.disabled = false
        shown = !shown;
        console.log(shown)
}
function close(){
    
        menuSmallScreen.current.style.transform = "translateX(0)"
        searchInput.current.style.opacity = "0%"
        searchInput.current.disabled = true
        shown = !shown
        console.log(shown)
    }

function showNavigation(){
    if(shown){
        show();
        return
    }
    if(!shown){
        close()
        return
    }
    
}

  return (
    <div className="navigation">
      <div className="wrapper">
        <img className="logo" src={logo} alt="logo" />
        <div className="nav-bar">
          <input ref={searchInput} className="search-input" type="text" placeholder="Search" />
        
          <ul ref={menuSmallScreen} id="menu">
          <button className="btn-show-menu" onClick={showNavigation}><div></div></button>
            <li>
              <Link to={"/"}>Most popular</Link>
            </li>
            <li>
              <Link to={"/"}>Top 250</Link>
            </li>
            <li>
              <Link to={"/"}>Coming Soon</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
