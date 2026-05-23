import { useEffect, useMemo, useState } from 'react'
import { products } from '../data/osmosContent'

const getProductSlugFromHash = () => {
  if (typeof window === 'undefined') {
    return null
  }

  const match = window.location.hash.match(/^#product\/([a-z0-9-]+)$/)
  return match?.[1] ?? null
}

export function useProductRoute() {
  const [selectedSlug, setSelectedSlug] = useState(getProductSlugFromHash)

  useEffect(() => {
    const syncRoute = () => setSelectedSlug(getProductSlugFromHash())

    window.addEventListener('hashchange', syncRoute)
    syncRoute()

    return () => window.removeEventListener('hashchange', syncRoute)
  }, [])

  const selectedProduct = useMemo(
    () => products.find((product) => product.slug === selectedSlug),
    [selectedSlug],
  )

  useEffect(() => {
    if (selectedProduct) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [selectedProduct])

  return selectedProduct
}
