import { Link } from 'react-router';

export default function Home() {
  return (
    <div>
      <section className="hero">
        <h1>Welcome </h1>
        <p>
           home p1
        </p>
        <Link to="/services" className="btn">
            Services
        </Link>
      </section>

       
    </div>
  );
}