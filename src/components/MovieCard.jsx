import React ,{useEffect} from "react";
import RatingImdb from "./RatingImdb.jsx"
import defaultImg from "../images/default.png"

require("../styles/movieCard.css");


function MovieCard(props) {
  

  useEffect(()=>{
  });

  const style = {
    bg: {
      // background: props.film.image ? `no-repeat center/contain url(${props.film.image})` : ` center / contain no-repeat url(${defaultImg})` ,
      background: `url(${props.film.image})`,
    },
    
  };

  return (
  <div style={style.bg} className="card"  >
   <RatingImdb rating={props.film.imDbRating}></RatingImdb>
  </div>)
}

export default MovieCard;
