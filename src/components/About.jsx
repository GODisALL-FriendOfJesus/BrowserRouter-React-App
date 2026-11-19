export default function About() {
  return (
    <section>
      <div className="hero">
        <h1>About Us</h1>
        <p>
          We are passionate software developers focused on turning ideas into reliable,
          user-friendly digital products.
        </p>
      </div>

      <div className="grid">
        <article className="card">
          <h3>Our Mission</h3>
          <p>
            To deliver high-quality web solutions that solve real-world problems with simplicity
            and clarity.
          </p>
        </article>
        <article className="card">
          <h3>Our Approach</h3>
          <p>
            We combine clean code practices, responsive design, and continuous learning in every
            project.
          </p>
        </article>
      </div>
    </section>
  );
}