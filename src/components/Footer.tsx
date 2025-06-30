import { ExternalLink } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Left Side - School Name and Logos */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">
              P.S.126: Dr Marjorie H Dunbar
            </h3>
            
            {/* School and District Logos Side by Side */}
            <div className="flex items-center space-x-4">
              <img 
                src="https://ps126.org/wp-content/uploads/2023/09/cropped-0-192x192.png"
                alt="PS126 Logo"
                className="h-16 w-auto"
              />
              <img 
                src="https://ps126.org/wp-content/uploads/2019/08/logo225x158.png"
                alt="District 9 Logo" 
                className="h-16 w-auto"
              />
            </div>
            
            {/* NYC Public Schools Logo Below */}
            <div>
              <img 
                src="https://ps126.org/wp-content/uploads/2019/08/nycps-logo.png"
                alt="NYC Public Schools Logo"
                className="h-12 w-auto"
              />
            </div>
          </div>

          {/* Middle - School Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">
              School Information
            </h3>
            
            <div className="space-y-2 text-gray-300">
              <div>
                <span className="font-medium text-white">Location:</span>
                <br />
                175 West 166 Street, Bronx, NY 10452
              </div>
              
              <div>
                <span className="font-medium text-white">Phone:</span>
                <br />
                <a href="tel:718-681-6120" className="hover:text-white transition-colors">
                  718-681-6120
                </a>
              </div>
              
              <div>
                <span className="font-medium text-white">Fax:</span>
                <br />
                718-681-6131
              </div>
              
              <div>
                <span className="font-medium text-white">Email:</span>
                <br />
                <a 
                  href="mailto:09x126@schools.nyc.gov" 
                  className="hover:text-white transition-colors"
                >
                  09x126@schools.nyc.gov
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Instagram Button */}
          <div className="flex justify-start md:justify-end">
            <a
              href="https://www.instagram.com/marjoriehdunbar126/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 group"
            >
              Follow us on Instagram
              <ExternalLink className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
        
        {/* Bottom Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; 2025 P.S.126: Dr Marjorie H Dunbar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 