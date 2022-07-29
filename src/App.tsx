import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Exercise01 } from '@/components/pages/Exercise01'
import { Exercise02 } from '@/components/pages/Exercise02'
import { Home } from '@/components/pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/01" element={<Exercise01 />} />
        <Route path="/02" element={<Exercise02 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
