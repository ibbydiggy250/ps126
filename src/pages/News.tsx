import { PageHeader } from '../components/PageHeader'
import { FadeInSection } from '../components/FadeInSection'
import { ArrowRight, Instagram } from 'lucide-react'

export function News() {
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
    },
    {
      date: "May 05 2025",
      title: "Article 4",
      description: "This is placeholder content for the fourth news article. You can replace this with actual news content later."
    }
  ]

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-cyan-50 via-sky-50 to-blue-100"> {/* Add padding top for fixed navbar */}
      <PageHeader title="News & Updates" />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column - Newsletter */}
            <FadeInSection direction="left">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 h-fit hover:-translate-y-2 hover:scale-105 transform">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Newsletter
                </h3>
                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h4 className="text-lg font-semibold text-blue-900 mb-2">
                    District 9 Newsletter
                  </h4>
                  <p className="text-blue-700 text-sm mb-4">
                    Stay updated with the latest news and announcements from District 9.
                  </p>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center group">
                  Read More
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </FadeInSection>

            {/* Middle Column - News Posts */}
            <FadeInSection>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
                  Latest News
                </h3>
                {newsArticles.map((article, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 cursor-pointer hover:-translate-y-2 hover:scale-105 transform"
                    onClick={() => {
                      // Placeholder click handler - you can add navigation logic here
                      console.log(`Clicked on ${article.title}`)
                    }}
                  >
                    {/* Date */}
                    <div className="text-sm text-gray-500 mb-4">
                      {article.date}
                    </div>
                    
                    {/* Article Content */}
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      {article.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {article.description}
                    </p>
                  </div>
                ))}
              </div>
            </FadeInSection>

            {/* Right Column - Instagram Feed */}
            <FadeInSection direction="right" delay={0.3}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden h-fit">
                {/* Instagram Header */}
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 text-white">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <img 
                        src="https://ps126.org/wp-content/uploads/2023/09/cropped-0-192x192.png"
                        alt="PS126 Logo"
                        className="w-8 h-8"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">marjoriehdunbar126</h4>
                      <p className="text-sm opacity-90">P.S. 126x Dr Marjorie H Dunbar</p>
                    </div>
                    <Instagram className="h-6 w-6 ml-auto" />
                  </div>
                  <div className="mt-4 flex items-center space-x-6">
                    <div className="text-center">
                      <div className="font-bold">401</div>
                      <div className="text-xs opacity-90">followers</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold">334</div>
                      <div className="text-xs opacity-90">posts</div>
                    </div>
                  </div>
                </div>

                {/* Instagram Content */}
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                      <div key={item} className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                        <img 
                          src="https://ps126.org/wp-content/uploads/2023/09/cropped-0-192x192.png"
                          alt="Instagram Post"
                          className="w-8 h-8 opacity-50"
                        />
                      </div>
                    ))}
                  </div>
                  
                  <a 
                    href="https://www.instagram.com/marjoriehdunbar126/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center group"
                  >
                    Follow us on Instagram
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </div>
  )
} 