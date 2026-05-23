import { navItems } from '../data/oomosContent'

export function Header({ menuOpen, onMenuToggle }) {
  return (
    <header className="site-header" aria-label="oomos primary navigation">
      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        onClick={onMenuToggle}
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
  )
}
