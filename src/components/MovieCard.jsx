import React ,{useEffect} from "react";
import RatingImdb from "./RatingImdb.jsx"
require("../styles/movieCard.css");


function MovieCard(props) {
  

  useEffect(()=>{
    console.log(props.film.image)
  });

  // const style = {
  //   bg: {
  //     background: `url(${props.film.image})`,
  //   },
    
  // };

  return (
  <div className="card" style={{background: "url(`${props.film.image}`)"}}>
   <RatingImdb rating={props.film.imDbRating}></RatingImdb>
  </div>)
}

export default MovieCard;
