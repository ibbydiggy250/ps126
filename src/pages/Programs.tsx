import { PageHeader } from '../components/PageHeader'
import { FadeInSection } from '../components/FadeInSection'
import { BookOpen, Calculator, Users, Scale, Globe, GraduationCap } from 'lucide-react'

export function Programs() {
  const subjects = [
    {
      icon: <BookOpen className="h-12 w-12 text-white" />,
      title: "English Language Arts",
      description: "Our ultimate goal is to cultivate lifelong readers. We deploy a variety of foundational reading and writing workshops that progressively build our students' appreciation, knowledge, and mastery of essential literacy skills.",
      color: "bg-red-500"
    },
    {
      icon: <Calculator className="h-12 w-12 text-white" />,
      title: "Mathematics", 
      description: "All students learn and apply math-ematical concepts through a variety of strategies. We use collaborative works and math games to introduce concepts, reinforce lessons, and foster mastery of lessons and skills.",
      color: "bg-orange-500"
    },
    {
      icon: <Users className="h-12 w-12 text-white" />,
      title: "Social & Emotional Learning",
      description: "Our classes engage in daily emotional and wellness check ins to help create a positive learning environment. We promote respect and teach awareness and understanding of feelings through our social emotional RULER curriculum.",
      color: "bg-yellow-500"
    },
    {
      icon: <Scale className="h-12 w-12 text-white" />,
      title: "Social Studies",
      description: "Our students research topics utilizing non-fiction reading strategies and note taking skills. Students learn to gather and sketch important ideas in their various topics of study, culminating in project-based activities.",
      color: "bg-green-500"
    },
    {
      icon: <Globe className="h-12 w-12 text-white" />,
      title: "English as New Language",
      description: "We support our new English Language Learners with bilingual education programs. A student in a bilingual program will learn to read, write, and speak in English with support in the student's home language.",
      color: "bg-blue-500"
    },
    {
      icon: <GraduationCap className="h-12 w-12 text-white" />,
      title: "Special Education",
      description: "Our special education professionals support our students on-site with services outlined in their IEP. We provide at least one ICT classroom in each grade level, and also currently house an ACES program.",
      color: "bg-purple-500"
    }
  ]

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-100"> {/* Add padding top for fixed navbar */}
      <PageHeader title="Our Programs" />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          {/* Section Title */}
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Our Curriculum
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-gray-700 leading-relaxed">
                  At PS 126X, our dedicated teachers bring a passion for education to their classrooms each day. 
                  They skillfully design and refine the curriculum to ensure that it remains rigorous, engaging, 
                  and aligned with the goals outlined in our Comprehensive Educational Plan (CEP). We are deeply 
                  committed to creating inclusive learning environments that promote collaboration, understanding, 
                  and a sense of community among all students and staff.
                </p>
              </div>
            </div>
          </FadeInSection>

          {/* Subjects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subjects.map((subject, index) => (
                             <FadeInSection key={index} delay={index * 0.1}>
                 <div className="bg-gray-50 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden cursor-pointer group">
                  {/* Icon Header */}
                  <div className={`${subject.color} p-8 text-center`}>
                    <div className="flex justify-center mb-4">
                      {subject.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {subject.title}
                    </h3>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {subject.description}
                    </p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 