import { Code, Coffee, Lightbulb, Users } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following best practices"
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Analytical thinking to solve complex problems with creative solutions"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively with cross-functional teams and stakeholders"
    },
    {
      icon: Coffee,
      title: "Continuous Learning",
      description: "Staying updated with latest technologies and industry trends"
    }
  ]

  return (
    <section id="about" className="py-20 bg-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get to know more about my background, skills, and what drives my passion for frontend development.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                Crafting Digital Experiences
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate frontend developer with 1.5+ years of experience
                  building responsive and user-friendly web applications. My journey
                  in web development began with curiosity about how websites work,
                  and it has grown into a strong dedication to crafting seamless and
                  engaging digital experiences.
                </p>
                <p>
                  I specialize in modern JavaScript frameworks, particularly React
                  and Next.js, and have a solid foundation in HTML, CSS, JavaScript,
                  Bootstrap, and Tailwind CSS. My expertise includes translating UI/UX
                  designs into dynamic, SEO-friendly websites, optimizing performance,
                  and ensuring accessibility across devices and browsers.
                </p>
                <p>
                  I've contributed to projects like <strong>Patna Zoo</strong>,
                  <strong> Rajgir Zoo Safari</strong>, and <strong>Tax Protect</strong>,
                  where I focused on delivering clean interfaces and smooth user
                  experiences. Beyond coding, I enjoy exploring new technologies,
                  contributing to open-source projects, and sharing knowledge with
                  the developer community. I'm always excited to take on new challenges
                  and collaborate on innovative projects.
                </p>
              </div>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-background rounded-lg shadow-sm border border-border">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-background rounded-lg shadow-sm border border-border">
                <div className="text-3xl font-bold text-primary mb-2">1+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-background rounded-lg shadow-sm border border-border">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
              <div className="text-center p-6 bg-background rounded-lg shadow-sm border border-border">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-background rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow duration-200"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {highlight.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

