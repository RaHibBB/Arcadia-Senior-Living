import CommunityHeader from './CommunityHeader'
import CommunityFooter from './CommunityFooter'
import ScrollToTop from '@/components/scroll-to-top'

export default function CommunityLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CommunityHeader />
      {children}
      <CommunityFooter />
      <ScrollToTop />
    </>
  )
}
