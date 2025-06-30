import { ChevronRight } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'
import { FadeInSection } from '../components/FadeInSection'

export function About() {
  const resources = [
    "ATTENDANCE INFORMATION",
    "WORK-BASED LEARNING", 
    "CALENDAR",
    "ENROLLMENT",
    "SCHOOL MEALS",
    "TRANSPORTATION",
    "TECHNOLOGY FOR FAMILIES",
    "DOE STUDENT ACCOUNTS",
    "TEACHHUB LOGIN",
    "IPAD/LAPTOP APP REQUESTS FOR STUDENTS"
  ]

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-red-100"> {/* Add padding top for fixed navbar */}
      <PageHeader title="About PS126X" />
      <section className="py-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Side - Commitment Card */}
            <FadeInSection direction="left">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                {/* Header to match resources table */}
                <div className="bg-red-600 text-white py-6 px-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-center uppercase tracking-wide">
                    OUR COMMITMENT
                  </h2>
                </div>
                
                {/* Content */}
                <div className="p-8 lg:p-12 space-y-8 text-gray-700 leading-relaxed bg-pink-50">
                  <p className="text-xl md:text-2xl">
                    <span className="font-bold uppercase">Committed to</span> creating and supporting learning environments that reflect diversity. 
                    We believe students benefit from diverse and inclusive schools and classrooms. 
                    We strive to welcome and support students, families, and school staff.
                  </p>
                  
                  <p className="text-xl md:text-2xl">
                    <span className="font-bold uppercase">Committed to</span> providing every child, in every classroom, with a rigorous, inspiring, 
                    and nurturing learning experience regardless of family income, race, nationality, 
                    disability, language spoken at home.
                  </p>
                </div>
              </div>
            </FadeInSection>

            {/* Right Side - Resources Table */}
            <FadeInSection direction="right" delay={0.3}>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Header */}
              <div className="bg-yellow-400 text-white py-6 px-8">
                <h3 className="text-2xl md:text-3xl font-bold text-center">
                  RESOURCES
                </h3>
              </div>
              
              {/* Resources List */}
              <div className="divide-y divide-gray-200">
                {resources.map((resource, index) => {
                  // Create descending yellow shades
                  const yellowShades = [
                    'bg-yellow-100', 'bg-yellow-50', 'bg-yellow-25', 'bg-white',
                    'bg-yellow-50', 'bg-yellow-25', 'bg-white', 'bg-yellow-50',
                    'bg-yellow-25', 'bg-white'
                  ]
                  
                  return (
                    <div 
                      key={index}
                      className={`flex items-center justify-between px-8 py-4 hover:bg-yellow-200 transition-colors cursor-pointer group ${yellowShades[index] || 'bg-white'}`}
                    >
                      <span className="text-gray-800 font-medium text-sm md:text-base">
                        {resource}
                      </span>
                      <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-yellow-600 transition-colors" />
                    </div>
                  )
                })}
              </div>
              
              {/* School Logo at Bottom */}
              <div className="p-8 bg-gray-50 flex justify-center">
                <img 
                  src="https://ps126.org/wp-content/uploads/2023/09/cropped-0-192x192.png"
                  alt="PS126 Logo"
                  className="h-24 w-auto"
                />
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
      </section>
    </div>
  )
} 