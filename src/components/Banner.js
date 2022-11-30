import React, {useEffect, useState} from "react";
import "../componentsCss/Banner.css"
import requests from "../Requests";
import axios from "../axios"
function Banner() {

    const [movie,setMovie]=useState([]);
    useEffect(()=>{
        async function fetchData(){
            const request=await axios.get(requests.fetchNetflixOriginals)
            setMovie(
                request.data.results[
                    Math.floor(Math.random()*request.data.results.length-1)
                    ]
            );
            return request;

        }
        fetchData();

    },[])
    console.log(movie);


function truncate(string,n){
    return string.length>n ? string.substr(0,n-1) +'...' :string;
}
    return (
        <header
            className="banner"
            style={{
             backgroundSize:"cover",
             backgroundImage:`url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
             backgroundPosition:"center center",
    }} >
        <div className="banner_content">
            <h1 className="banner_title">
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className="banner_buttons">
                <button className="banner_button"> Play</button>
                <button className="banner_button">My List</button>
            </div>
            <h1 className="banner_description">
                {/*use movie.overview for description */}
                {truncate("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at deleniti dolore, doloremque eligendi eveniet exercitationem explicabo, fugiat in laudantium maiores natus nostrum optio pariatur quibusdam rem tempore voluptate voluptates?",150)}
            </h1>
        </div>

            <div className="banner_fadeButton"/>
    </header>

    )

}

export default Banner