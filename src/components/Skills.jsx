import {
  Code2,
  Palette,
  Database,
  Wrench,
  Globe,
  Smartphone,
  GitBranch,
  TestTube
} from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      icon: Code2,
      skills: [
        { name: "JavaScript (ES6+)", level: "Good" },

        { name: "React.js", level: "Beginner" },
        { name: "Next.js", level: "Beginner" },

        { name: "HTML5", level: "Expert" },
        { name: "CSS5", level: "Beginner" }

      ]
    },
    {
      title: "Styling & Design",
      icon: Palette,
      skills: [
        { name: "Tailwind CSS", level: "Expert" },
        { name: "Bootstrap", level: "Advanced" },


        { name: "Figma", level: "Intermediate" },
        { name: "Adobe XD", level: "Intermediate" },
        { name: "Responsive Design", level: "Expert" },

      ]
    },
    {
      title: "Backend & Database",
      icon: Database,
      skills: [
        { name: "Node.js", level: "Intermediate" },
        { name: "Laravel", level: "Intermediate" }

      ]
    },
    {
      title: "Tools & Workflow",
      icon: Wrench,
      skills: [
        { name: "Git & GitHub", level: "Advanced" },

        { name: "VS Code", level: "Expert" },

      ]
    },
    // {
    //   title: "Web Technologies",
    //   icon: Globe,
    //   skills: [
    //     { name: "Progressive Web Apps", level: "Advanced" },
    //     { name: "Web Performance", level: "Advanced" },
    //     { name: "SEO Optimization", level: "Intermediate" },
    //     { name: "Web Accessibility", level: "Advanced" },
    //     { name: "Browser Compatibility", level: "Advanced" },
    //     { name: "Web Security", level: "Intermediate" },
    //     { name: "Service Workers", level: "Intermediate" },
    //     { name: "WebSockets", level: "Beginner" }
    //   ]
    // },
    // {
    //   title: "Mobile & Cross-Platform",
    //   icon: Smartphone,
    //   skills: [
    //     { name: "React Native", level: "Intermediate" },
    //     { name: "Expo", level: "Intermediate" },
    //     { name: "Ionic", level: "Beginner" },
    //     { name: "Cordova/PhoneGap", level: "Beginner" },
    //     { name: "Mobile-First Design", level: "Advanced" },
    //     { name: "Touch Interactions", level: "Advanced" },
    //     { name: "App Store Deployment", level: "Intermediate" },
    //     { name: "Mobile Performance", level: "Advanced" }
    //   ]
    // },
    // {
    //   title: "Version Control & Collaboration",
    //   icon: GitBranch,
    //   skills: [
    //     { name: "Git Workflows", level: "Advanced" },
    //     { name: "GitHub Actions", level: "Intermediate" },
    //     { name: "Code Reviews", level: "Advanced" },
    //     { name: "Agile/Scrum", level: "Advanced" },
    //     { name: "Jira", level: "Intermediate" },
    //     { name: "Slack", level: "Advanced" },
    //     { name: "Team Leadership", level: "Intermediate" },
    //     { name: "Documentation", level: "Advanced" }
    //   ]
    // },
    // {
    //   title: "Testing & Quality",
    //   icon: TestTube,
    //   skills: [
    //     { name: "Jest", level: "Advanced" },
    //     { name: "React Testing Library", level: "Advanced" },
    //     { name: "Cypress", level: "Intermediate" },
    //     { name: "Playwright", level: "Beginner" },
    //     { name: "Unit Testing", level: "Advanced" },
    //     { name: "Integration Testing", level: "Intermediate" },
    //     { name: "E2E Testing", level: "Intermediate" },
    //     { name: "Test-Driven Development", level: "Intermediate" }
    //   ]
    // }
  ]

  const getLevelColor = (level) => {
    switch (level) {
      case 'Expert':
        return 'bg-green-100 text-green-800 border-green-200'
      case 'Advanced':
        return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'Beginner':
        return 'bg-gray-100 text-gray-800 border-gray-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and proficiency levels across various technologies and tools.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon
              return (
                <div
                  key={categoryIndex}
                  className="bg-card rounded-lg border border-border p-6 hover:shadow-lg transition-shadow duration-200"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-center justify-between p-3 bg-accent/5 rounded-lg border border-border/50 hover:bg-accent/10 transition-colors duration-200"
                      >
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full border ${getLevelColor(skill.level)}`}
                        >
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>


        </div>
      </div>
    </section>
  )
}

export default Skills

