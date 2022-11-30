import React, {useEffect, useState} from "react";
import "../componentsCss/Row.css"

import axios from "../axios"


function Row({title,baseURL,isLargeRow=false}) {

    const [movies,setmovies]=useState([]);
    const base_url="https://image.tmdb.org/t/p/original/";
    useEffect(()=>{
        async function fetchData(){
            const request=await axios.get(baseURL)
            setmovies(request.data.results)
            return request;
        }
        fetchData();
    },[baseURL])

    console.log(movies);
    return(
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
            {movies.map((movie)=>(
                <img className={`row_poster  ${isLargeRow &&" row_large_poster"}`} src={`${base_url}${
                    isLargeRow ? movie.poster_path :movie.backdrop_path}`}
                     key={movie.id}
                     alt="movie.name"/>
            ))}
            </div>
        </div>
    )

}

export default Row