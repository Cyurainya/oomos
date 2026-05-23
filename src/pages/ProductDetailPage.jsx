import { useState } from 'react'
import { asset } from '../lib/assets'

export function ProductDetailPage({ product }) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[1])
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  const purchaseMeta = [
    ['Price', product.price],
    ['Color', product.color],
    ['Material', product.material],
  ]

  const detailMeta = [
    ['Composition', product.composition],
    ['Fit', product.fit],
    ['Lead time', product.leadTime],
  ]

  return (
    <main className="product-detail-page" id="top">
      <section className="purchase-page" aria-labelledby="product-detail-title">
        <ProductGallery product={product} />

        <aside className="purchase-panel">
          <p className="eyebrow">{product.series}</p>
          <h1 id="product-detail-title">{product.name}</h1>
          <p className="purchase-description">{product.description}</p>

          <dl className="purchase-meta">
            {purchaseMeta.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>

          <fieldset className="size-picker">
            <legend>Size</legend>
            <div>
              {product.sizes.map((size) => (
                <button
                  className={selectedSize === size ? 'is-selected' : ''}
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </fieldset>

          <div className="quantity-row" aria-label="Quantity selector">
            <span>Quantity</span>
            <div>
              <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))}>
                -
              </button>
              <strong>{quantity}</strong>
              <button type="button" onClick={() => setQuantity((value) => value + 1)}>
                +
              </button>
            </div>
          </div>

          <button className="purchase-button" type="button" onClick={() => setAdded(true)}>
            {added ? 'Added to bag' : 'Add to Bag'}
          </button>

          <a className="appointment-link" href="mailto:atelier@oomos.com">
            Book a private fitting
          </a>
        </aside>
      </section>

      <ProductStory product={product} detailMeta={detailMeta} />
    </main>
  )
}

function ProductGallery({ product }) {
  const heroImages = product.gallery.slice(0, 2)

  return (
    <div className="purchase-gallery">
      <a className="back-link" href="#shop">
        Back to selection
      </a>
      <div className="purchase-gallery-pair" aria-label="Product gallery">
        {heroImages.map((image, index) => (
          <figure className="purchase-gallery-frame" key={image}>
            <img src={asset(image)} alt={`${product.name} detail`} />
            <figcaption>{index === 0 ? 'Front detail' : 'Back detail'}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}

function ProductStory({ product, detailMeta }) {
  return (
    <section className="product-story" aria-labelledby="product-story-title" data-reveal>
      <div className="product-story-heading">
        <p className="eyebrow">Garment Notes</p>
        <h2 id="product-story-title">Ivory texture, slowly composed.</h2>
      </div>

      <div className="product-story-content">
        <dl className="product-spec-list">
          {detailMeta.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>

        <div className="product-story-grid">
          {product.detailSections.map((section) => (
            <article className="product-story-card" key={section.title}>
              <span>{section.title}</span>
              <p>{section.text}</p>
            </article>
          ))}
        </div>

        <ul className="purchase-notes product-detail-notes">
          {product.notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </div>

      <ProductImageStories product={product} />
    </section>
  )
}

function ProductImageStories({ product }) {
  return (
    <div className="product-image-stories" aria-label="Additional product detail images">
      {product.imageStories.map((story, index) => (
        <article className="product-image-story" key={story.image}>
          <div className="product-image-copy">
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{story.title}</h3>
            <p>{story.text}</p>
          </div>
          <figure>
            <img src={asset(story.image)} alt={`${product.name} ${story.title}`} />
          </figure>
        </article>
      ))}
    </div>
  )
}
