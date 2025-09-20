import { Calendar, MapPin, Building, Award } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: "Front-End Designer & Developer",
      company: "Fillip Technologies",
      location: "Patna, Bihar",
      period: "Aug 2023 - May 2024",
      type: "Full-time",
      description: "Designed and developed responsive, user-friendly websites for diverse clients. Collaborated with cross-functional teams to deliver SEO-optimized, mobile-friendly, and high-performance websites.",
      achievements: [
        "Designed and delivered responsive websites using HTML, CSS, JavaScript, and Tailwind CSS",
        "Developed the complete frontend for the Patna Zoo website with optimized design and performance",
        "Contributed to the Rajgir Zoo Safari project (not live) with responsive and interactive UI",
        "Ensured seamless cross-device compatibility and fast load times",
        "Enhanced user engagement by adding interactive elements and improving accessibility",
        "Collaborated with team members to optimize site navigation and performance"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Tailwind CSS", "React.js", "Next.js", "WordPress", "SQL", "Git", "GitHub"]
    },

    {
      title: "SEO Executive",
      company: "Techie Squad",
      location: "Patna, Bihar",
      period: "2022 - 2023",
      type: "Full-time",
      description: "Handled on-page and off-page SEO strategies to improve client website rankings and traffic. Worked closely with development teams to ensure SEO-friendly site structures and optimized performance.",
      achievements: [
        "Performed on-page and off-page optimization including meta tags, keyword research, and backlink strategies",
        "Conducted SEO audits and implemented strategies that improved website traffic and SERP rankings",
        "Collaborated with developers to integrate SEO best practices in website design",
        "Achieved measurable improvements in client KPIs through effective digital strategies"
      ],
      technologies: ["SEO Tools", "Google Analytics", "Google Search Console", "Keyword Research Tools", "Backlink Analysis", "HTML", "CSS", "JavaScript"]
    }


  ]

  const education = [
    {
      degree: "Bachelor of Computer Application (B.C.A)",
      school: "M.G.M College of IT and Management",
      location: "Patna, Bihar",
      period: "2019 - 2022",
      gpa: "65%",
      relevant: [
        "Web Development (HTML, CSS, JavaScript, React, Next.js)",
        "Database Management (SQL)",
        "Software Engineering Fundamentals",
        "UI/UX Design Principles",
        "Computer Networks"
      ]
    },
    {
      degree: "Intermediate",
      school: "Jamuhar High School",
      location: "Dehri, Bihar",
      period: "2017 - 2019",
      gpa: "76%",
      relevant: [
        "Mathematics",
        "Physics",
        "Chemistry"
      ]
    },
    {
      degree: "Matriculation",
      school: "Sun Beam Public School",
      location: "Dehri, Bihar",
      period: "2015 - 2017",
      gpa: "9.2 CGPA",
      relevant: [
        "General Science",
        "Mathematics",
        "English",
        "Social Studies"
      ]
    }

  ]



  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Experience & Education
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey, educational background, and continuous learning through certifications.
            </p>
          </div>

          {/* Work Experience */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
              <Building className="w-6 h-6 text-primary" />
              Work Experience
            </h3>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg border border-border p-6 hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-foreground mb-2">
                        {exp.title}
                      </h4>
                      <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-3">
                        <div className="flex items-center gap-2">
                          <Building className="w-4 h-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="grid lg:grid-cols-2 gap-6">
                    {/* Achievements */}
                    <div>
                      <h5 className="text-sm font-semibold text-foreground mb-3">Key Achievements:</h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h5 className="text-sm font-semibold text-foreground mb-3">Technologies Used:</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 text-xs font-medium bg-accent/50 text-foreground rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
              <Award className="w-6 h-6 text-primary" />
              Education
            </h3>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg border border-border p-6"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-foreground mb-2">
                        {edu.degree}
                      </h4>
                      <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-3">
                        <div className="flex items-center gap-2">
                          <Building className="w-4 h-4" />
                          <span className="font-medium">{edu.school}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="px-3 py-1 text-sm font-medium bg-green-100 text-green-800 rounded-full">
                        GPA: {edu.gpa}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-sm font-semibold text-foreground mb-3">Relevant Coursework:</h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.relevant.map((course, courseIndex) => (
                        <span
                          key={courseIndex}
                          className="px-2 py-1 text-xs font-medium bg-accent/50 text-foreground rounded-md"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}

export default Experience

