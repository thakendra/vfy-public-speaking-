import { CurriculumSection } from './components/CurriculumSection'
import { GallerySection } from './components/GallerySection'
import { HeroSection } from './components/HeroSection'
import { PartnerFooter } from './components/PartnerFooter'
import { VideoSection } from './components/VideoSection'
import { WhatsAppButton } from './components/WhatsAppButton'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <main>
        <HeroSection />
        <VideoSection />
        <CurriculumSection />
        <GallerySection />
      </main>
      <PartnerFooter />
      <WhatsAppButton />
    </div>
  )
}
