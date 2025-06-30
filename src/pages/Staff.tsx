import { PageHeader } from '../components/PageHeader'
import { FadeInSection } from '../components/FadeInSection'
import { Mail } from 'lucide-react'

export function Staff() {
  const staffSections = [
    {
      title: "Administration",
      staff: [
        {
          name: "(Name here)",
          role: "Principal",
          email: "(email here)"
        },
        {
          name: "(Name here)",
          role: "Assistant Principal",
          email: "(email here)"
        },
        {
          name: "(Name here)",
          role: "School Secretary",
          email: "(email here)"
        }
      ]
    },
    {
      title: "Pre-K",
      staff: [
        {
          name: "(Name here)",
          role: "Pre-K Teacher",
          email: "(email here)"
        },
        {
          name: "(Name here)",
          role: "Pre-K Teacher",
          email: "(email here)"
        },
        {
          name: "(Name here)",
          role: "Pre-K Paraprofessional",
          email: "(email here)"
        }
      ]
    },
    {
      title: "Kindergarten",
      staff: [
        {
          name: "(Name here)",
          role: "Kindergarten Teacher",
          email: "(email here)"
        },
        {
          name: "(Name here)",
          role: "Kindergarten Teacher",
          email: "(email here)"
        },
        {
          name: "(Name here)",
          role: "Kindergarten Paraprofessional",
          email: "(email here)"
        }
      ]
    }
  ]

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100"> {/* Add padding top for fixed navbar */}
      <PageHeader title="Staff Directory" />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Meet Our Team
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our dedicated staff members work together to create an exceptional learning environment 
                for all students at PS126X.
              </p>
            </div>
          </FadeInSection>

          {/* Staff Sections */}
          {staffSections.map((section, sectionIndex) => (
            <div key={section.title} className="mb-16">
              <FadeInSection delay={sectionIndex * 0.2}>
                <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
                  {section.title}
                </h3>
              </FadeInSection>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.staff.map((member, memberIndex) => (
                  <FadeInSection key={member.name} delay={(sectionIndex * 0.2) + (memberIndex * 0.1)}>
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                      {/* Profile Image */}
                      <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 flex justify-center">
                        <img 
                          src="https://ps126.org/wp-content/uploads/2023/09/cropped-0-192x192.png"
                          alt="PS126 Logo"
                          className="w-24 h-24 rounded-full bg-white p-3 shadow-md"
                        />
                      </div>
                      
                      {/* Staff Info */}
                      <div className="p-6 text-center">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          {member.name}
                        </h4>
                        <p className="text-blue-600 font-medium mb-4">
                          {member.role}
                        </p>
                        <div className="flex items-center justify-center space-x-2 text-gray-600">
                          <Mail className="h-4 w-4" />
                          <a 
                            href={`mailto:${member.email}`}
                            className="text-sm hover:text-blue-600 transition-colors"
                          >
                            {member.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  </FadeInSection>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
} 