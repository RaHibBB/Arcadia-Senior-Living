import WashougalHeader from './washougal/WashougalHeader'
import WashougalFooter from './washougal/WashougalFooter'
import ScrollToTop from '@/components/scroll-to-top'

export default function WashougalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <WashougalHeader />
      {children}
      <WashougalFooter />
      <ScrollToTop />
    </>
  )
}
