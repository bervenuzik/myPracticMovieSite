import React ,{useEffect} from "react";
import RatingImdb from "./RatingImdb.jsx"
var classNames = require("classnames");
require("./movieCard.css");


function MovieCard(props) {
  const classesCard = classNames({
    card: true,
  });

  useEffect(()=>{
    console.log(props.film.image)
  });

  const style = {
    bg: {
      background: `url(${props.film.image})`,
      backgroundRrepeat: "no-repeat",
      backgroundSize: "contain",
      backgroundPosition: "center",
      borderRadius:"5px",
    },
    
  };

  return (
  <div style={style.bg} className={classesCard}>
   <RatingImdb rating={props.film.imDbRating}></RatingImdb>
  </div>)
}

export default MovieCard;
