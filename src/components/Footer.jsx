import { Heart, ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Shruti Singh
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
                Frontend Developer passionate about creating beautiful, responsive,
                and user-friendly web applications. Always excited to take on new
                challenges and collaborate on innovative projects.
              </p>

            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Quick Links
              </h4>
              <nav className="space-y-3">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Get In Touch
              </h4>
              <div className="space-y-3 text-muted-foreground">
                <p>Dehri On Sone, Rohtas, Bihar</p>
                <a
                  href="mailto:scdhr21@gmail.com"
                  className="block hover:text-primary transition-colors duration-200"
                >
                  scdhr21@gmail.com
                </a>
                <a
                  href="tel:9608926069"
                  className="block hover:text-primary transition-colors duration-200"
                >
                  9608926069
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              © {currentYear} Shruti Singh. All rights reserved.
            </p>

            <div className="flex items-center gap-4">
              <div className="flex gap-4 text-sm text-muted-foreground">
                <a href="#" className="hover:text-primary transition-colors duration-200">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-primary transition-colors duration-200">
                  Terms of Service
                </a>
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={scrollToTop}
                className="group"
              >
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                <span className="sr-only">Back to top</span>
              </Button>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer

