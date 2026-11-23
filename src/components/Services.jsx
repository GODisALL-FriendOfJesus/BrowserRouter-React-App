import { useFetchAPi } from "./Fetchapi.js";

const DEFAULT_POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

export default function Services() {
  const { data, loading, error } = useFetchAPi(DEFAULT_POSTS_URL);

  if (loading) {
    return (
      <section className="page">
        <p>Loading...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="page">
        <p>Error: {error}</p>
      </section>
    );
  }

  return (
    <section className="page">
      <div className="grid">
        <h2>Services & Posts</h2>
        <ul>
          {data.map((post) => (
            <li key={post.id}>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}