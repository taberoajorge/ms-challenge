/* eslint-disable react-hooks/exhaustive-deps */

import './assets/styles.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

const URL = 'https://yts.lt/api/v2/list_movies.json'

export const Exercise02 = () => {
  const [movies, setMovies] = useState([])
  const [fetchCount, setFetchCount] = useState(0)
  const [loading, setLoading] = useState(false)

  const handleMovieFetch = async () => {
    setLoading(true)
    const response = await axios.get(URL, {
      params: {
        limit: 50,
        page: fetchCount + 1,
        },
        })
    setMovies([...movies, ...response.data.data.movies])
    setFetchCount(fetchCount + 1)
    setLoading(false)
  }
  
  useEffect(() => {
    handleMovieFetch()
  }, [])

  return (
    <section className="movie-library">
      <h1 className="movie-library__title">Movie Library</h1>
      <div className="movie-library__actions">
        <select name="genre" placeholder="Search by genre...">
          <option value="genre1">Genre 1</option>
        </select>
        <button>Order Descending</button>
      </div>
      {loading ? (
        <div className="movie-library__loading">
          <p>Loading...</p>
          <p>Fetched {fetchCount} times</p>
        </div>
      ) : (
        <ul className="movie-library__list">
          {movies.map(movie => (
            <li key={movie.id} className="movie-library__card">
              <img src={movie.posterUrl} alt={movie.title} />
              <ul>
                <li>ID: {movie.id}</li>
                <li>Title: {movie.title}</li>
                <li>Year: {movie.year}</li>
                <li>Runtime: {movie.runtime}</li>
                <li>Genres: {movie.genres.join(', ')}</li>
              </ul>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
