import { PageHeader } from '../components/PageHeader'
import { FadeInSection } from '../components/FadeInSection'

export function Parents() {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-100"> {/* Add padding top for fixed navbar */}
      <PageHeader title="Parents" />
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <FadeInSection>
            <h1 className="text-5xl font-bold text-gray-900 mb-8">Parents</h1>
          </FadeInSection>
          <FadeInSection delay={0.3}>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>This is placeholder content for the Parents page. You can replace this with the actual content later.</p>
              <p>Here you can provide resources, information, and ways for parents to get involved in the PS126X community.</p>
              <p>Include parent resources, volunteer opportunities, communication guidelines, and important forms or documents.</p>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  )
} 