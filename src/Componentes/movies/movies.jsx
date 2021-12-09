import movies from "../../movies.json"
import React from "react"
import Movie from "../movie/movie"
import styles from "./movies.module.css"

export default function Movies(){
    
    return(
        <div>
            <ul className={styles.moviesGrid}>
            {movies.map(movie =>(
                <Movie key={movie.id} movie={movie} image={`http:/image.tmdb.org/t/p/w300${movie.poster_path}`}/>
            ))}
            </ul>
        </div>
    )
}