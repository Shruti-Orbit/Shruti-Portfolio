import { ExternalLink, Github, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import largeImg from "../assets/large.jpg";
import shreeMilletImg from "../assets/shree-millet.png";
import bacebharatImg from "../assets/bacebharat.png";
import skyhooksImg from "../assets/skyhooks.png";
import collinsImg from "../assets/collins.png";
import bscImg from "../assets/bsc.png";



const Projects = () => {
  const projects = [
    {
      title: "WEDDINGS72.IN",
      description: "A responsive wedding services platform designed to showcase and manage wedding-related offerings with modern UI and smooth user experience.",
      technologies: ["HTML", "CSS", "Tailwind CSS", "Laravel"],
      features: [
        "Responsive and mobile-friendly design",
        "SEO-optimized structure for better search visibility",
        "Dynamic content management with Laravel",
        "Modern UI built with Tailwind CSS",
        "Cross-browser compatibility"
      ],
      githubUrl: "",
      liveUrl: "https://wedding72.fillipsoftware.com/",
      imageUrl: largeImg
    },

    {
      title: "SHRI MILLETS",
      description: "An eCommerce platform for millet-based products, built with a modern frontend and responsive design for smooth shopping experiences.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Laravel"],
      features: [
        "Product catalog with categories",
        "Shopping cart functionality",
        "Responsive and mobile-friendly design",
        "SEO-optimized structure",
        "Fast loading with optimized assets"
      ],
      githubUrl: "",
      liveUrl: "https://shreemillet.fillipsoftware.com/",
      imageUrl: shreeMilletImg  // ✅ specific image
    },

    {
      title: "BACE BHARAT",
      description: "BACE BHARAT is a professional organization dedicated to advancing the science and practice of clinical embryology in India. The association focuses on improving assisted reproductive technology (ART) outcomes through education, research, and ethical standards.",
      technologies: ["Bootstrap", "PHP", "JavaScript"],
      features: [
        "Member registration and management",
        "Educational resources and publications",
        "Workshops and training programs",
        "Conference and event updates",
        "Networking opportunities for embryologists"
      ],
      githubUrl: "", // (no repo link provided)
      liveUrl: "https://bacebharat.com/",
      imageUrl: bacebharatImg
    },

    {
      title: "Skyhooks Construction",
      description: "Skyhooks Construction is a trusted construction company delivering high-quality residential, commercial, and infrastructure projects with modern technology and professional expertise.",
      technologies: ["Laravel", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
      features: [
        "Residential and commercial construction",
        "Infrastructure development",
        "Modern design and planning",
        "Quality assurance and safety standards",
        "Client-focused project delivery"
      ],
      githubUrl: "", // No GitHub repo for company site
      liveUrl: "https://skyhookscons.com/",
      imageUrl: skyhooksImg
    },
    {
      title: "Collins Kids",
      description: "An educational and e-learning platform designed for kids, providing interactive lessons, engaging content, and user-friendly navigation for better learning experiences.",
      technologies: ["HTML", "CSS", "Tailwind", "Laravel", "JavaScript"],
      features: [
        "Kid-friendly UI/UX",
        "Interactive learning content",
        "Responsive design",
        "Secure backend with Laravel",
        "Easy navigation for students and parents"
      ],
      githubUrl: "", // add if you have one
      liveUrl: "https://colllins-kids.fillipsoftware.com/",
      imageUrl: collinsImg
    },

    {
      title: "BSC Academy",
      description: "An educational platform for competitive exam preparation, offering study materials, practice tests, results, and a seamless online learning experience.",
      technologies: ["HTML", "CSS", "Tailwind", "JavaScript", "Laravel"],
      features: [
        "User-friendly student dashboard",
        "Online study materials and notes",
        "Practice tests and mock exams",
        "Result management system",
        "Responsive design with Tailwind CSS"
      ],
      githubUrl: "", // add link if available
      liveUrl: "https://bscacademy.fillipsoftware.com/",
      imageUrl: bscImg
    }

  ]

  return (
    <section id="projects" className="py-20 bg-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work, demonstrating various skills and technologies in real-world applications.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Project Image Placeholder */}
                <div className="h-48 w-full overflow-hidden rounded-t-lg">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>


                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-foreground mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-foreground mb-2">Key Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                      {project.features.length > 3 && (
                        <li className="text-xs text-muted-foreground/70">
                          +{project.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="flex-1">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" className="flex-1">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Want to see more of my work or discuss a potential project?
            </p>
            <Button size="lg">
              <a href="#contact" className="flex items-center gap-2">
                Get In Touch
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects

