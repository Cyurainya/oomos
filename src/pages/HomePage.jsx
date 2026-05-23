import { asset } from '../lib/assets'
import { collections, details, principles, products } from '../data/oomosContent'

export function HomePage() {
  return (
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

      <CollectionsSection />
      <AtelierSection />
      <MaterialStudies />

      <div className="quiet-divider" aria-hidden="true"></div>

      <ProductSection />
      <MotionSection />
      <PrinciplesSection />
      <VisitSection />
    </main>
  )
}

function CollectionsSection() {
  return (
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
  )
}

function AtelierSection() {
  return (
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
  )
}

function MaterialStudies() {
  return (
    <section className="detail-reel" aria-label="oomos material studies">
      {details.map((detail) => (
        <figure className="detail-frame" data-reveal key={detail.label}>
          <img src={asset(detail.image)} alt={`${detail.label} material study`} />
          <figcaption>{detail.label}</figcaption>
        </figure>
      ))}
    </section>
  )
}

function ProductSection() {
  return (
    <section className="product-section" id="shop" data-reveal>
      <div className="section-heading">
        <p className="eyebrow">Ready to Wear</p>
        <h2>Selected Pieces</h2>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard product={product} key={product.name} />
        ))}
      </div>
    </section>
  )
}

function ProductCard({ product }) {
  const ProductFrame = product.slug ? 'a' : 'article'
  const productProps = product.slug
    ? {
        href: `#product/${product.slug}`,
        'aria-label': `View ${product.name}`,
      }
    : {}

  return (
    <ProductFrame
      className={`product-card ${product.slug ? 'product-card-link' : ''}`}
      {...productProps}
    >
      <div className="product-image">
        <img src={asset(product.image)} alt={product.name} />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.material}</p>
        <span>{product.price}</span>
      </div>
    </ProductFrame>
  )
}

function MotionSection() {
  return (
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
        <h2 className="ornate-title">Art Meets Mechanism</h2>
      </div>
    </section>
  )
}

function PrinciplesSection() {
  return (
    <section className="principles-section" data-reveal>
      {principles.map(([number, title]) => (
        <article className="principle-note" key={number}>
          <span>{number}</span>
          <h3>{title}</h3>
        </article>
      ))}
    </section>
  )
}

function VisitSection() {
  return (
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
  )
}
