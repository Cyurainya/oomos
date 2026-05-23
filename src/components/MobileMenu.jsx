import { navItems } from '../data/osmosContent'

export function MobileMenu({ isOpen, onClose }) {
  return (
    <div className={`mobile-panel ${isOpen ? 'is-open' : ''}`}>
      <nav aria-label="Mobile navigation">
        {navItems.map((item) => (
          <a href={item.href} key={item.href} onClick={onClose}>
            {item.label}
          </a>
        ))}
        <a href="mailto:atelier@osmos.com" onClick={onClose}>
          Appointment
        </a>
      </nav>
    </div>
  )
}
