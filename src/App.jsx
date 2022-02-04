
import './App.css';
import React, { useState,useEffect } from "react";
import axios from "./axios.js"
import API_KEY from "./API_KEY.js"
import MovieCard from "./movieCard.jsx"
import Navigation from "./Navigation.jsx"



function App() {
const [mostPopularFilms, setMostPopularFilms] = useState([])

useEffect(
  ()=>{
    getData();
  }
)


const getData = async ()=>{
  const data = await axios.get(`MostPopularMovies/${API_KEY}/?_limit=20`);
  let movies = data.data.items;
  //console.log(movies)
  //await getPosters(movies);
  setMostPopularFilms(movies);
    
  
  
  //console.log(mostPopularFilms)
 }

//  const getPosters = async (movies)=>{
//   let link
//   for(let i = 0; i < 1; ++i){
    
//     link = await axios.get(`Posters/${API_KEY}/${movies[i].id}/?_limit=1`)
//     console.log(link)
    
//   }
    // movies.map((movie,index)=>{
    
    //   let link = await axios.get(`Posters/${API_KEY}/${movie.id}`)
    //   console.log(link);
    // })
    
    
 

  return (
    <div >
      <Navigation></Navigation>
      <div className={'movie-panel'}>
          {
            mostPopularFilms.map((film,index)=>{
            return <MovieCard key={film.id} film={film}></MovieCard>;
          })
          }
      </div>
    </div>
  );
}

export default App;
