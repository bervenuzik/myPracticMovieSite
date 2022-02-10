import React ,{useState,useEffect,useMemo} from 'react';
import axios from "../axios.js"
import API_KEY from "../API_KEY.js"
import MovieCard from "./MovieCard.jsx"


function MostPopular() {
    const [mostPopularFilms, setMostPopularFilms] = useState([])
    
    useEffect(
       ()=>{
        getData();
      },[]
    )
    
    
    const getData = async ()=>{
      const data = await axios.get(`MostPopularMovies/${API_KEY}/?_limit=20`);
      let movies = data.data.items;
      console.log(movies)
      setMostPopularFilms(movies);
     }
     
      return (
        
          <div className={'movie-panel'}>
              {
                mostPopularFilms.map((film,index)=>{
                  if(index < 21){
                    return <MovieCard key={film.id} film={film}></MovieCard>;
                  }
              })
              }
          </div>
      );
    }
    
    export default MostPopular;