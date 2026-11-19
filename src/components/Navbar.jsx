import { Link, NavLink } from 'react-router';

export default function Navbar() {
  const getLinkClass = ({ isActive }) => (isActive ? 'nav-link active' : 'nav-link');

  return (
    <header className="navbar">
      <Link to="/" className="brand">
        DevStudio
      </Link>
      <nav className="nav-links" aria-label="Primary Navigation">
        <NavLink to="/" end className={getLinkClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={getLinkClass}>
          About
        </NavLink>
        <NavLink to="/services" className={getLinkClass}>
          Services
        </NavLink>
      </nav>
    </header>
  );
}