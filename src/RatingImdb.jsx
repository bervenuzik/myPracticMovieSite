import React ,{useEffect} from "react";
var classNames = require("classnames");
require("./movieCard.css");

function RatingImdb(props) {
  const classesRating = classNames({
    display: !props.rating,
  });


  const style = {
    ratingImdb:{
      position:"absolute",
      padding:"4px 12px",
      margin:"7px 7px",
      borderRadius:"15px",
      backgroundColor:"orange",
      left:"0",
      bottom:"0",
      fontSize:"0.8em"
    }
  };

  return (
  
   <div className={classesRating} style={style.ratingImdb}>{"imDb "+ props.rating}</div>
  
   )
}

export default RatingImdb;
