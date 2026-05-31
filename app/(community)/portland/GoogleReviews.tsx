'use client'

import { useEffect } from 'react'

export default function GoogleReviews() {
  useEffect(() => {
    // Load Elfsight platform script once
    if (!document.querySelector('script[src*="elfsightcdn.com/platform.js"]')) {
      const script = document.createElement('script')
      script.src = 'https://static.elfsight.com/platform/platform.js'
      script.async = true
      document.head.appendChild(script)
    }
  }, [])

  return (
    <div
      className="elfsight-app-cc38ab1d-356c-4364-8d06-d09807f2ae26"
      data-elfsight-app-lazy=""
    />
  )
}
