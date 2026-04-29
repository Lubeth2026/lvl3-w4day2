
import React, { useEffect, useState } from 'react'
import {supabase} from './utils/supabase'

export default function Movies() {
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        async function getMovies() {
            try {
                const {data} = await supabase.from("Movies").select("*");
                console.log(data)
                setMovies(data)
            } catch (error) {
                console.error(error)
            }
        }
        getMovies();
    }, [])

  return (
    <div>
        <h2>Movies DEMO</h2>
        {movies.map(movie =>(
            <div key={movie.id}>
                <p>{movie.title}</p>
                <p>{movie.genre}</p>
                <p>{movie.release_year}</p>
                <p>{movie.rating}</p>
                <p>{movie.description}</p>
            </div>
        ))}
    </div>
  )
}
