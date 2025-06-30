import { HeroSection } from '../components/HeroSection'
import { FadeInSection } from '../components/FadeInSection'
import { Button } from '../components/ui/button'
import { School, MapPin, GraduationCap, UserCheck, Heart, ArrowRight, ChevronRight } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function WhatsHappeningSection() {
  const newsArticles = [
    {
      date: "May 05 2025",
      title: "Article 1",
      description: "This is placeholder content for the first news article. You can replace this with actual news content later."
    },
    {
      date: "May 05 2025", 
      title: "Article 2",
      description: "This is placeholder content for the second news article. You can replace this with actual news content later."
    },
    {
      date: "May 05 2025",
      title: "Article 3", 
      description: "This is placeholder content for the third news article. You can replace this with actual news content later."
    }
  ]

  return (
    <section className="relative py-20 bg-blue-50">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section Title */}
        <FadeInSection>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
            What's happening at PS126X
          </h2>
        </FadeInSection>
        
        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsArticles.map((article, index) => (
            <FadeInSection key={index} delay={index * 0.2}>
              <div className="bg-gradient-to-br from-white to-blue-25 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-blue-200 hover:border-blue-300 hover:shadow-blue-100/50">
                {/* Date */}
                <div className="text-sm text-blue-600 mb-4 font-medium">
                  {article.date}
                </div>
                
                {/* Article Content */}
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  {article.title}
                </h3>
                <p className="text-blue-700 leading-relaxed">
                  {article.description}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>
        
        {/* Read More Button */}
        <FadeInSection delay={0.6}>
          <div className="text-center">
            <Link 
              to="/news"
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 group"
            >
              Read More News
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </FadeInSection>
      </div>
      
      {/* Triangular divider protruding into Core Values section */}
      <div className="absolute -top-16 left-0 w-full z-20">
        <div className="w-0 h-0 mx-auto border-l-[50vw] border-r-[50vw] border-b-[64px] border-l-transparent border-r-transparent border-b-blue-50"></div>
      </div>
    </section>
  )
}

function CoreValuesSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const handleLearnMore = () => {
    navigate('/about')
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }

  const roarsData = [
    {
      letter: "R",
      word: "Respect",
      description: "We believe in treating everyone with dignity and kindness. Respect forms the foundation of our school community, where students, teachers, and families work together in harmony. Through respectful interactions, we create an environment where every voice is heard and valued.",
      color: "bg-red-500"
    },
    {
      letter: "O", 
      word: "Ownership",
      description: "We encourage students to take ownership of their learning journey and personal growth. By fostering a sense of responsibility for their actions and choices, students develop independence and accountability that will serve them throughout their lives.",
      color: "bg-orange-500"
    },
    {
      letter: "A",
      word: "Attitude", 
      description: "A positive attitude opens doors to endless possibilities. We cultivate an environment where optimism, resilience, and determination flourish. Students learn that their mindset shapes their experience and success in both academic and personal endeavors.",
      color: "bg-amber-500"
    },
    {
      letter: "R",
      word: "Responsibility",
      description: "Taking responsibility means being accountable for our actions and their consequences. We teach students to be reliable, trustworthy, and committed to doing their best. This value prepares them to be contributing members of their community.",
      color: "bg-green-500"
    },
    {
      letter: "S",
      word: "Safety",
      description: "Safety is paramount in everything we do. We maintain a secure physical and emotional environment where students can learn without fear. Our commitment to safety ensures that every student feels protected and supported in their educational journey.",
      color: "bg-blue-500"
    }
  ]

  // Calculate which card should be active based on scroll progress
  // const activeIndex = useTransform(scrollYProgress, [0, 1], [0, roarsData.length - 1])

  return (
    <div ref={containerRef} className="relative">
      {/* Desktop sticky container */}
      <div className="hidden md:block sticky top-0 h-screen bg-red-50 overflow-hidden" style={{ marginTop: '0px', paddingTop: '120px' }}>
        {/* Fixed heading positioned below navbar */}
        <div className="absolute top-24 left-6 md:left-12 z-20">
          <h2 className="text-5xl md:text-7xl font-black text-gray-800 leading-tight uppercase tracking-wide">
            OUR CORE
            <br />
            VALUES
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mt-6 max-w-lg font-medium italic">
            "Our school ROARS by:"
          </p>
          <div className="mt-8">
            <Button 
              onClick={handleLearnMore}
              variant="outline" 
              size="lg"
              className="bg-white text-gray-800 hover:bg-gray-100 border-gray-300 font-semibold px-6 py-3 text-base group shadow-lg"
            >
              Learn More
              <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
        
        {/* Background Logo */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-0"
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, -400]) // Moves off with the section
          }}
        >
          <img 
            src="https://ps126.org/wp-content/uploads/2023/09/cropped-0-192x192.png"
            alt="PS126 Logo Background"
            className="w-[1200px] h-[1200px] opacity-8 pointer-events-none select-none"
          />
        </motion.div>

        {/* Full-width animated ROARS cards */}
        <div className="relative h-full w-full overflow-hidden z-10">
          {/* Group animation - all cards move together */}
          <motion.div
            className="absolute inset-0 w-full"
            style={{
              y: useTransform(scrollYProgress, [0.05, 0.6], [0, -1500]) // End animation much earlier when S reaches text level
            }}
          >
            {roarsData.map((item, index) => (
              <div
                key={index}
                className="absolute w-full flex items-center justify-end px-6 md:px-12"
                style={{ 
                  top: `${index * 300 + 50}px` // Stack cards vertically, starting from 50px (aligned with mission text)
                }}
              >
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-xl p-8 w-full max-w-4xl h-72 border border-blue-200 relative overflow-hidden ml-80">
                  {/* Background pattern similar to your image */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 left-4 w-16 h-16 bg-white rounded-lg"></div>
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-white rounded-tl-full opacity-50"></div>
                  </div>
                  
                  <div className="relative z-10 h-full flex items-center">
                    <div className="flex items-center w-full">
                      <div className="w-32 h-32 bg-blue-200 rounded-lg flex items-center justify-center mr-8 shadow-lg flex-shrink-0">
                        <span className="text-6xl font-bold text-blue-900">{item.letter}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-3xl font-bold text-gray-800 mb-4">{item.word}</h3>
                        <p className="text-gray-700 leading-relaxed text-base">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile version - normal scrolling */}
      <div className="md:hidden bg-red-50 py-20">
        {/* Header */}
        <div className="text-center px-6 mb-16">
          <h2 className="text-4xl font-black text-gray-800 leading-tight uppercase tracking-wide mb-6">
            OUR CORE VALUES
          </h2>
          <p className="text-lg text-gray-600 font-medium italic mb-8">
            "Our school ROARS by:"
          </p>
          <Button 
            onClick={handleLearnMore}
            variant="outline" 
            size="lg"
            className="bg-white text-gray-800 hover:bg-gray-100 border-gray-300 font-semibold px-6 py-3 text-base group shadow-lg"
          >
            Learn More
            <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* ROARS Cards - Normal scrolling */}
        <div className="px-6 space-y-8">
          {roarsData.map((item, index) => (
            <FadeInSection key={index} delay={index * 0.1}>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-xl p-6 border border-blue-200 relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-lg"></div>
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-tl-full opacity-50"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-blue-200 rounded-lg flex items-center justify-center mr-4 shadow-lg flex-shrink-0">
                      <span className="text-3xl font-bold text-blue-900">{item.letter}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">{item.word}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
      
      {/* Reduced spacer for smoother transition - desktop only */}
      <div className="hidden md:block h-[250vh]" />
    </div>
  )
}

function AtAGlanceSection() {
  const infoCards = [
    {
      icon: <School className="h-8 w-8 text-blue-600" />,
      label: "School Number",
      value: "126X"
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-green-600" />,
      label: "Grades",
      value: "PK, 0K, 01, 02, 03, 04, 05, SE"
    },
    {
      icon: <MapPin className="h-8 w-8 text-red-600" />,
      label: "Geographic District",
      value: "9"
    },
    {
      icon: <MapPin className="h-8 w-8 text-purple-600" />,
      label: "Borough",
      value: "Bronx"
    },
    {
      icon: <UserCheck className="h-8 w-8 text-indigo-600" />,
      label: "Principal",
      value: "Luis Quan"
    },
    {
      icon: <Heart className="h-8 w-8 text-pink-600" />,
      label: "Parent Coordinator",
      value: "Melanie Baez"
    }
  ]

  return (
    <section className="relative py-20 pb-40 bg-yellow-50">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">AT A GLANCE</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key information about PS126X
            </p>
          </div>
        </FadeInSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {infoCards.map((card, index) => (
            <FadeInSection key={index} delay={index * 0.1}>
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-gray-50 rounded-lg">
                    {card.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">
                      {card.label}
                    </h3>
                    <p className="text-lg font-semibold text-gray-900 leading-tight">
                      {card.value}
                    </p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
      
      {/* Triangular divider protruding into next section */}
      <div className="absolute -bottom-16 left-0 w-full z-20">
        <div className="w-0 h-0 mx-auto border-l-[50vw] border-r-[50vw] border-t-[64px] border-l-transparent border-r-transparent border-t-yellow-50"></div>
      </div>
    </section>
  )
}

export function Home() {
  return (
    <div>
      <HeroSection />
      <AtAGlanceSection />
      <CoreValuesSection />
      <WhatsHappeningSection />
    </div>
  )
} 