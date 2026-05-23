import { useEffect, useState } from 'react'
import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { MobileMenu } from './components/MobileMenu'
import { useProductRoute } from './hooks/useProductRoute'
import { useRevealEffects } from './hooks/useRevealEffects'
import { HomePage } from './pages/HomePage'
import { ProductDetailPage } from './pages/ProductDetailPage'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const selectedProduct = useProductRoute()

  useRevealEffects(selectedProduct?.slug ?? 'home')

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false)

    window.addEventListener('hashchange', closeMenu)
    return () => window.removeEventListener('hashchange', closeMenu)
  }, [])

  return (
    <div className="site-shell">
      <Header menuOpen={menuOpen} onMenuToggle={() => setMenuOpen((open) => !open)} />
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {selectedProduct ? <ProductDetailPage product={selectedProduct} /> : <HomePage />}

      <Footer />
    </div>
  )
}

export default App
