import { useState } from "react";
import { MapPin, Building2, ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Sunrise Apartments",
    category: "Residential",
    location: "Bangalore",
    description: "G+4 residential complex with modern amenities and earthquake-resistant design",
    area: "45,000 sq.ft",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Tech Park Tower",
    category: "Commercial",
    location: "Hyderabad",
    description: "Modern commercial building with sustainable design and smart building features",
    area: "1,20,000 sq.ft",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Green Valley Villas",
    category: "Residential",
    location: "Chennai",
    description: "Premium villa project with contemporary architecture and landscaped gardens",
    area: "32,000 sq.ft",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Royal Interiors",
    category: "Interior",
    location: "Mumbai",
    description: "Luxury apartment interior with custom furniture and premium finishes",
    area: "3,500 sq.ft",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    title: "City Center Mall",
    category: "Commercial",
    location: "Pune",
    description: "Multi-level shopping complex with modern structural design",
    area: "2,00,000 sq.ft",
    image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    title: "Harmony Heights",
    category: "Residential",
    location: "Bangalore",
    description: "G+8 apartment complex with clubhouse and recreational facilities",
    area: "75,000 sq.ft",
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=600&h=400&fit=crop",
  },
];

const categories = ["All", "Residential", "Commercial", "Interior"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Our Portfolio
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Projects That Inspire
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our diverse portfolio of completed projects showcasing our 
            expertise in construction, design, and project execution.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                activeCategory === category
                  ? "bg-accent-gradient text-accent-foreground shadow-copper"
                  : "bg-card text-foreground hover:bg-secondary border border-border"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-card rounded-xl overflow-hidden shadow-subtle hover:shadow-elevated transition-all duration-500 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                  <button className="w-10 h-10 bg-primary-foreground rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <ArrowUpRight className="w-5 h-5 text-primary" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Building2 className="w-4 h-4" />
                    {project.area}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
