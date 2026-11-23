import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="nav">
        <NavLink to="/" end className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          About
        </NavLink>
        <NavLink to="/services" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          Services
        </NavLink>
      </nav>
    </header>
  );
}