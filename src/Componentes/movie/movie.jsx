import React from "react";
import styles from "./movie.module.css"

export default function Movie({movie, image}){
    return(
        <div>
            <li className={styles.movieCard}>
            <img src={image} className={styles.movieImage}></img>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            
            </li>
            

        </div>
    )
}