import { Button } from "./ui/button"
import { ChevronRight } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

export function HeroSection() {
  const navigate = useNavigate()

  const handleLearnMore = () => {
    window.scrollTo({ top: 0, behavior: 'auto' })
    navigate('/about')
  }

  return (
    <motion.section 
      className="relative min-h-screen flex items-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://www.eschoolnews.com/files/2019/02/collaborative-learning.jpg')`
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="relative z-10 text-white text-left max-w-4xl px-6 md:px-16 lg:px-20">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
          Welcome to P.S. 126X
          <br />
          <span className="text-4xl md:text-6xl">
            The Dr. Marjorie H Dunbar School
          </span>
        </h1>
        
        <p className="text-lg md:text-xl max-w-2xl mb-8 leading-relaxed opacity-90">
          Where every student is inspired to learn and achieve 
          their full potential. Explore our programs, meet our staff, 
          and discover the vibrant community that makes PS 126X a 
          special place.
        </p>
        
        <Button 
          onClick={handleLearnMore}
          variant="outline" 
          size="lg"
          className="bg-white text-black hover:bg-gray-100 border-white font-semibold px-8 py-3 text-lg group"
        >
          Learn More
          <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </motion.section>
  )
} 