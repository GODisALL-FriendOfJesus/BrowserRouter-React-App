const servicesList = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Full-stack web applications built with React, JavaScript, and modern APIs.',
  },
  {
    id: 2,
    title: 'UI/UX Design',
    description: 'Clean, intuitive, and mobile-first user interfaces designed for great usability.',
  },
  {
    id: 3,
    title: 'Database & Backend',
    description: 'Structured relational databases and reliable server-side logic.',
  },
];
export default function Services() {
  return (
    <section>
      <div className="hero">
        <h1>Our Services</h1>
        <p>Here is what we offer to help bring your projects to life.</p>
      </div>

      <div className="grid">
        {servicesList.map((service) => (
          <article key={service.id} className="card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}