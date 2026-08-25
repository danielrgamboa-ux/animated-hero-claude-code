import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import ShopPage from './pages/ShopPage'

export default function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
