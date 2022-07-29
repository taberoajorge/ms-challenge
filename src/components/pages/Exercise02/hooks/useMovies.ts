import { useState } from 'react'
import data from '../assets/db.json'

// Custom Hooks
export const useMovies = (itemName, initialValue) => {
  const [movies, setMovies] = useState(itemName)
  const [fetchCount, setFetchCount] = useState(0)
  const [loading, setLoading] = useState(false)

  const handleMovieFetchData = (genre: string) => {
    setLoading(true)
    setMovies(data.movies.filter(movie => movie.genres.includes(genre)))
    setLoading(false)
    setFetchCount(fetchCount + 1)
  }
  const orderDescending = () => setMovies(movies.sort((a, b) => parseInt(b.year) - parseInt(a.year)))

  return {
    movies,
    handleMovieFetchData,
    orderDescending,
    loading,
    data,
    fetchCount
  }
}
