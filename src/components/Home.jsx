import { Link } from 'react-router';

export default function Home() {
  return (
    <div>
      <section className="hero">
        <h1>Welcome to DevStudio</h1>
        <p>
          Building fast, accessible, and modern web applications with React and clean architecture.
        </p>
        <Link to="/services" className="btn">
          Explore Our Services
        </Link>
      </section>

      <section className="grid">
        <article className="card">
          <h3>Modern UI</h3>
          <p>Responsive layouts crafted with clean CSS and semantic HTML components.</p>
        </article>
        <article className="card">
          <h3>Fast Routing</h3>
          <p>Instant client-side navigation powered by React Router without full page reloads.</p>
        </article>
        <article className="card">
          <h3>Scalable Code</h3>
          <p>Modular file structure separating pages, reusable components, and styles.</p>
        </article>
      </section>
    </div>
  );
}