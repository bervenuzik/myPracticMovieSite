import React from 'react';
import logo from "./images/logo.png"

function Navigation(){

const style = {
    navigaton:{
        height:"60px",
        width:"100%",
        backgroundColor:"rgb(19, 19, 19)",
        position:"fixed",
        left:"0",
        top:"0",
        zIndex:"1000"

        
    },
    container:{
        margin:"auto",
        display:"flex",
        justifyContent:"space-beetwen",
        alignItems:"center",
        height:"100%",
        maxWidth:"1000px"
    },
    image:{
        height:"100%",
        padding:"8px"
    }
}

return(
    <div style={style.navigaton}>
        <div style={style.container}>
            <img style={style.image} src={logo} alt="logo" />
            <div>

            </div>
        </div>
       
    </div>
)

}

export default Navigation
