import { useState } from 'react';

const servicesList = [
  {
    id: 1,
    title: 'Web Development',
    category: 'Development',
    description: 'Full-stack web applications built with React, JavaScript, and modern APIs.',
  },
  {
    id: 2,
    title: 'UI/UX Design',
    category: 'Design',
    description: 'Clean, intuitive, and mobile-first user interfaces designed for great usability.',
  },
  {
    id: 3,
    title: 'Database & Backend',
    category: 'Development',
    description: 'Structured relational databases and reliable server-side logic.',
  },
  {
    id: 4,
    title: 'Mobile App Prototyping',
    category: 'Design',
    description: 'Interactive wireframes and clickable prototypes in Figma before development.',
  },
  {
    id: 5,
    title: 'Security & Performance Audit',
    category: 'Consulting',
    description: 'Code reviews, speed optimization, and browser data security checks.',
  },
];

const categories = ['All', 'Development', 'Design', 'Consulting'];

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = servicesList.filter((service) => {
    const matchesCategory =
      selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section>
      <div className="hero">
        <h1>Our Services</h1>
        <p>Filter by category or search to find the exact service you need.</p>
      </div>

      {/* Filter Controls */}
      <div className="filter-bar">
        <div className="">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category ? 'filter-btn active' : 'filter-btn'
              }
            >
              {category}
            </button>
          ))}
        </div>

         <input     
          type="search"
              placeholder="Search services..."
   value={searchQuery}
onChange={(e) => setSearchQuery(e.target.value)}
           className="search-input"
           aria-label="Search services"
         />
                </div> */}

//       {/* Filtered Results */}
//       {/* {filteredServices.length > 0 ? (
//         <div className="grid">
//           {filteredServices.map((service) => (
//             <article key={service.id} className="card">
//               <span className="badge">{service.category}</span>
//               <h3>{service.title}</h3>
//               <p>{service.description}</p>
//             </article>
//           ))}
//         </div>
//       ) : (
//         <div className="empty-state">
//           <p>No services match your filter. Try another category or keyword.</p>
//           <button
//             type="button"
//             className="btn"
//             onClick={() => {
//               setSelectedCategory('All');
//               setSearchQuery('');
//             }}
//           >
//             Reset Filters
//           </button>
//         </div> */}
//      // )}
//    // </section>
//   );
// }