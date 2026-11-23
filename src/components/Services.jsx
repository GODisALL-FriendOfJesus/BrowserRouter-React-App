import { useState } from "react";
import { Link } from "react-router";

const SERVICES = [
  { slug: "web-apps", title: "Web Applications", category: "engineering", summary: "Responsive interfaces built with React." },
  { slug: "ui-systems", title: "UI Component Systems", category: "design", summary: "Reusable components and layout patterns." },
  { slug: "api-integration", title: "API Integration", category: "engineering", summary: "Connecting frontend views to backend data." },
];

export default function Services() {
  const [filter, setFilter] = useState("all");

  const visibleServices =
    filter === "all" ? SERVICES : SERVICES.filter((item) => item.category === filter);

  return (
    <section className="page">
      
      <div className="grid">
   Hello this is Services page
         </div>
    </section>
  );
}