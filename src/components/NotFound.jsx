import { Link } from "react-router";

export default function NotFound() {
  return (
    <section className="page">
      <h1>404 - Page Not Found</h1>
      <p>The requested route does not exist.</p>
      <Link to="/">Return Home</Link>
    </section>
  );
}