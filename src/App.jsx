import { useEffect, useState } from 'react'
import './App.css'

const asset = (name) => `/assets/${name}`

const navItems = [
  { label: 'Collections', href: '#collections' },
  { label: 'Atelier', href: '#atelier' },
  { label: 'Visit', href: '#visit' },
]

const collections = [
  {
    title: 'Still Water',
    meta: 'SS26',
    image: 'seaing-02.jpg',
  },
  {
    title: 'Seaing',
    meta: 'Spring Edit',
    image: 'seaing-01.jpg',
  },
  {
    title: 'Pleat Study',
    meta: 'Texture',
    image: 'pleat-01.jpg',
  },
]

const products = [
  {
    name: 'Ripple Dress',
    material: 'Silk cotton',
    price: 'RMB 6,800',
    image: 'weave-light.jpg',
  },
  {
    name: 'Shell Jacket',
    material: 'Wool cotton',
    price: 'RMB 8,900',
    image: 'pleat-04.jpg',
  },
  {
    name: 'Sea Mist Tank',
    material: 'Linen cotton',
    price: 'RMB 3,900',
    image: 'seaing-04.jpg',
  },
  {
    name: 'Pleat Skirt',
    material: 'Soft yarn',
    price: 'RMB 5,200',
    image: 'ripple-01.jpg',
  },
]

const details = [
  { label: 'Light', image: 'pleat-03.jpg' },
  { label: 'Drape', image: 'ripple-02.jpg' },
  { label: 'Skin', image: 'pleat-08.jpg' },
]

const principles = [
  ['01', 'Hand feel'],
  ['02', 'Soft tension'],
  ['03', 'Small editions'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const revealItems = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 },
    )

    revealItems.forEach((item) => observer.observe(item))

    const setHeroShift = () => {
      const shift = Math.min(window.scrollY * 0.12, 64)
      document.documentElement.style.setProperty('--hero-shift', `${shift}px`)
    }

    setHeroShift()
    window.addEventListener('scroll', setHeroShift, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', setHeroShift)
    }
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="site-header" aria-label="oomos primary navigation">
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
        </button>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="brand-mark" href="#top" aria-label="oomos home">
          oomos
        </a>

        <a className="header-action" href="mailto:atelier@oomos.com">
          Appointment
        </a>
      </header>

      <div className={`mobile-panel ${menuOpen ? 'is-open' : ''}`}>
        <nav aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a href={item.href} key={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a href="mailto:atelier@oomos.com" onClick={closeMenu}>
            Appointment
          </a>
        </nav>
      </div>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <video
            className="hero-media"
            src={asset('hero-atelier.mp4')}
            autoPlay
            muted
            loop
            playsInline
            poster={asset('seaing-01.jpg')}
          />
          <div className="hero-shade"></div>
          <div className="hero-copy">
            <p className="eyebrow">SS26 / Still Water</p>
            <h1 id="hero-title">oomos</h1>
            <p className="hero-line">Quiet knitwear, slowly made.</p>
            <a className="text-link light-link" href="#collections">
              Explore
            </a>
          </div>
        </section>

        <section className="intro-section" aria-label="oomos essence" data-reveal>
          <p>Light. Thread. Water. Skin.</p>
        </section>

        <section className="collections-section" id="collections" data-reveal>
          <div className="section-heading">
            <p className="eyebrow">Collections</p>
            <h2>New Season</h2>
          </div>
          <div className="collection-grid">
            {collections.map((collection) => (
              <a className="collection-tile" href="#shop" key={collection.title}>
                <img src={asset(collection.image)} alt={collection.title} />
                <span>
                  <small>{collection.meta}</small>
                  <strong>{collection.title}</strong>
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="atelier-block" id="atelier">
          <div className="atelier-copy" data-reveal>
            <p className="eyebrow">Atelier</p>
            <h2>The fabric comes first.</h2>
            <p>Small runs. Hand-finished texture. A quieter way to dress.</p>
            <a className="text-link" href="#shop">
              Ready to Wear
            </a>
          </div>
          <div className="atelier-media" data-reveal>
            <img src={asset('pleat-02.jpg')} alt="oomos textile detail" />
          </div>
        </section>

        <section className="detail-reel" aria-label="oomos material studies">
          {details.map((detail) => (
            <figure className="detail-frame" data-reveal key={detail.label}>
              <img src={asset(detail.image)} alt={`${detail.label} material study`} />
              <figcaption>{detail.label}</figcaption>
            </figure>
          ))}
        </section>

        <div className="quiet-divider" aria-hidden="true"></div>

        <section className="product-section" id="shop" data-reveal>
          <div className="section-heading">
            <p className="eyebrow">Ready to Wear</p>
            <h2>Selected Pieces</h2>
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.name}>
                <div className="product-image">
                  <img src={asset(product.image)} alt={product.name} />
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.material}</p>
                  <span>{product.price}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="motion-section" aria-label="oomos campaign film">
          <video
            src={asset('motion-02.mp4')}
            autoPlay
            muted
            loop
            playsInline
            poster={asset('seaing-02.jpg')}
          />
          <div className="motion-copy" data-reveal>
            <p className="eyebrow">In Motion</p>
            <h2>Let the garment move first.</h2>
          </div>
        </section>

        <section className="principles-section" data-reveal>
          {principles.map(([number, title]) => (
            <article className="principle-note" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
            </article>
          ))}
        </section>

        <section className="visit-section" id="visit" data-reveal>
          <img src={asset('seaing-03.jpg')} alt="oomos coastal campaign" />
          <div>
            <p className="eyebrow">Private Appointment</p>
            <h2>Visit</h2>
            <p>地址：上海市静安区富民路 183 号 3F。</p>
            <p>Wed - Sun / 12:00 - 19:00</p>
            <a className="text-link" href="mailto:atelier@oomos.com">
              atelier@oomos.com
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>oomos</span>
        <p>Knitwear / Small Editions / Private Appointment</p>
        <a href="#top">Top</a>
      </footer>
    </div>
  )
}

export default App
