import { Building, Ruler, Paintbrush, FileCheck, Briefcase, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Ruler,
    title: "Structural Design",
    description: "Expert RCC and steel structural designs with detailed analysis, ensuring safety and efficiency for residential and commercial buildings.",
    features: ["Load Analysis", "RCC Design", "Steel Structures", "Foundation Design"],
  },
  {
    icon: Building,
    title: "Construction",
    description: "End-to-end construction of multi-storey buildings with quality materials, skilled workforce, and timely delivery.",
    features: ["Multi-storey Buildings", "Quality Materials", "Skilled Labor", "Timeline Adherence"],
  },
  {
    icon: Paintbrush,
    title: "Interior Works",
    description: "Transform spaces with modern interior solutions including modular kitchens, false ceilings, flooring, and custom furniture.",
    features: ["Modular Kitchens", "False Ceilings", "Custom Furniture", "Flooring Solutions"],
  },
  {
    icon: FileCheck,
    title: "Municipality Approvals",
    description: "Complete assistance with building plan approvals, occupancy certificates, and all municipal documentation.",
    features: ["Plan Sanctions", "Occupancy Certificates", "NOC Processing", "Documentation"],
  },
  {
    icon: Briefcase,
    title: "Project Management",
    description: "Comprehensive project execution from concept to completion with dedicated supervision and quality control.",
    features: ["Planning & Scheduling", "Cost Management", "Quality Control", "Site Supervision"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Our Expertise
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Comprehensive Engineering Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From initial design to final handover, we provide complete construction 
            and engineering services tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl p-8 shadow-subtle hover:shadow-elevated transition-all duration-500 border border-border hover:border-accent/30"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-gradient group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
