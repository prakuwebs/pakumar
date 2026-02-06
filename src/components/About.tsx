import { Users, Target, Award, CheckCircle } from "lucide-react";

const founders = [
  {
    name: "Rajesh Kumar",
    role: "Co-Founder & Structural Engineer",
    bio: "15+ years of experience in structural design and construction management. Specialized in RCC and steel structures for high-rise buildings.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Suresh Patel",
    role: "Co-Founder & Project Director",
    bio: "Expert in project execution and interior solutions with a strong background in architecture and construction supervision.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
  },
];

const values = [
  {
    icon: CheckCircle,
    title: "Quality First",
    description: "We never compromise on materials or workmanship",
  },
  {
    icon: Target,
    title: "On-Time Delivery",
    description: "Committed to meeting project timelines",
  },
  {
    icon: Award,
    title: "Client Focused",
    description: "Your satisfaction is our priority",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled engineers and craftsmen",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            About Us
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Meet the Team Behind ChathurDisha
          </h2>
          <p className="text-muted-foreground text-lg">
            Founded by two passionate engineers, we bring decades of combined experience 
            in structural engineering, construction, and project management.
          </p>
        </div>

        {/* Founders */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-500 border border-border"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                {/* Photo */}
                <div className="relative">
                  <div className="w-28 h-28 rounded-xl overflow-hidden border-4 border-accent/20 group-hover:border-accent transition-colors">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent-gradient rounded-lg flex items-center justify-center shadow-copper">
                    <Award className="w-4 h-4 text-accent-foreground" />
                  </div>
                </div>

                {/* Info */}
                <div className="text-center sm:text-left flex-1">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                    {founder.name}
                  </h3>
                  <p className="text-accent font-medium text-sm mb-3">
                    {founder.role}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {founder.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="bg-hero-gradient rounded-2xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
              Our Core Values
            </h3>
            <p className="text-primary-foreground/70 max-w-xl mx-auto">
              The principles that guide every project we undertake
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-primary-foreground/15 transition-colors"
              >
                <div className="w-12 h-12 bg-accent-gradient rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h4 className="font-semibold text-primary-foreground mb-2">
                  {value.title}
                </h4>
                <p className="text-primary-foreground/70 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 flex-wrap justify-center">
            <div className="px-6 py-3 bg-secondary rounded-lg">
              <span className="text-muted-foreground text-sm">Established</span>
              <p className="font-display font-bold text-foreground text-lg">2020</p>
            </div>
            <div className="px-6 py-3 bg-secondary rounded-lg">
              <span className="text-muted-foreground text-sm">Team Size</span>
              <p className="font-display font-bold text-foreground text-lg">25+</p>
            </div>
            <div className="px-6 py-3 bg-secondary rounded-lg">
              <span className="text-muted-foreground text-sm">Head Office</span>
              <p className="font-display font-bold text-foreground text-lg">Bangalore</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
