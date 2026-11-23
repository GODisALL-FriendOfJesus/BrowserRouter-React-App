import { useState,useEffect } from "react";

 

export default function Services() {
   

  



 

const DEFAULT_POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

// export function useFetchAPi(url = DEFAULT_POSTS_URL) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    const controller = new AbortController();
    setLoading(true);
    setError(null);

    fetch(url, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        return response.json();
      })
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setError(err.message);
          setLoading(false);
        }
      });

    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
//   return (
//     <section className="page">
      
//       <div className="grid">
//    Hello this is Services page
//          </div>
//     </section>
//   );

}