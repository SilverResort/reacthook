import React from 'react'
import MovieCard from './MovieCard'
import { moviesData } from '../Constants/moviesData'

const Filter = () => {
  return (
    <div>
        <div>
            <h1 style={{textAlign:'center'}}>Movies</h1>
            <div style={{display:'flex', justifyContent:'space around',flexWrap: 'wrap', }}>
                {
                    moviesData.filter((movie)=>
                    (<MovieCard data={movie} key={movie.id}/>))
                }
            </div>
        </div>

    </div>
  )
}

export default Filter