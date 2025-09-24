import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import profileImage from '../assets/ppush.jpg'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-accent/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-lg text-muted-foreground font-medium">Hello, I'm</p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
                  Shruti Singh
                </h1>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary">
                  Frontend Developer
                </h2>
              </div>

              <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Passionate about creating beautiful, responsive, and user-friendly web applications.
                I specialize in LARAVEL, REACT, JAVASCRIPT and modern web technologies to bring ideas to life.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="group">
                  <a href="#projects" className="flex items-center gap-2">
                    View My Work
                    <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                  </a>
                </Button>
                <Button variant="outline" size="lg">
                  <a href="#contact" className="flex items-center gap-2">
                    Get In Touch
                    <Mail className="w-4 h-4" />
                  </a>
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 justify-center lg:justify-start pt-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-accent hover:bg-accent/80 text-foreground hover:text-primary transition-all duration-200 hover:scale-110"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-accent hover:bg-accent/80 text-foreground hover:text-primary transition-all duration-200 hover:scale-110"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:alex@example.com"
                  className="p-3 rounded-full bg-accent hover:bg-accent/80 text-foreground hover:text-primary transition-all duration-200 hover:scale-110"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img
                  src={profileImage}
                  alt="Alex Johnson - Frontend Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

