/* eslint-disable react-hooks/exhaustive-deps */

import './assets/styles.css'
import { useEffect, useState } from 'react'
import { useMovies } from './hooks/useMovies'

export const Exercise02 = () => {
  const [genre, setGenre] = useState('Comedy')
  const {
    movies,
    loading,
    handleMovieFetchData,
    orderDescending,
    data,
    fetchCount,
  } = useMovies([], genre)

  useEffect(() => {
    handleMovieFetchData(genre)
  }, [genre])

  return (
    <section className="movie-library">
      <h1 className="movie-library__title">Movie Library</h1>
      <div className="movie-library__actions">
        <select
          name="genre"
          placeholder="Search by genre..."
          onChange={e => {
            setGenre(e.target.value)
          }}
        >
          {data.genres.map(genre => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
        <button
          onClick={() => {
            orderDescending()
          }}
        >
          Order Descending
        </button>
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
