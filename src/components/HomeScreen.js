import React from "react";
import '../componentsCss/HomeScreen.css'
import Nav from "./Nav";
import Banner from "./Banner"
import Row from"./Row"
import requests from "../Requests";
function HomeScreen() {
    return (
        <div className="homeScreen">
            {/*{Navbar }*/}
        <Nav/>


            {/*{Banner }*/}
        <Banner/>

            <Row
            title="Netflix Originals"
            baseURL={requests.fetchNetflixOriginals}
            isLargeRow
            />
            <Row
                title="Trending Now"
                baseURL={requests.fetchTrending}

            />
            <Row
                title="Top-Rated"
                baseURL={requests.fetchTopRated}

            />
            <Row
                title="Action"
                baseURL={requests.fetchActionMovies}

            />
            <Row
                title="Comedy"
                baseURL={requests.fetchComedyMovies}

            />
            <Row
                title="Documentries"
                baseURL={requests.fetchDocumentaries}

            />
            <Row
                title="Horror"
                baseURL={requests.fetchHorrorMovies}

            />
            <Row
                title="Romance"
                baseURL={requests.fetchRomanceMovies}

            />



        </div>
    )
}

export default HomeScreen;