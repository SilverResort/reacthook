import React from 'react'
import MovieCard from './MovieCard'
import { moviesData } from '../Constants/moviesData'



const MovieList = () => {
    return (
        <div>
            <h1 style={{textAlign:'center'}}>Movies</h1>
            <div style={{display:'flex', justifyContent:'space around',flexWrap: 'wrap', }}>
                {
                    moviesData.map((movie)=>
                    (<MovieCard data={movie} key={movie.id}/>))
                }
            </div>
        </div>
    )
}

export default MovieList