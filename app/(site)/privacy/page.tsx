import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Arcadia Senior Living Communities',
  description: 'Arcadia Senior Living privacy policy. We are committed to protecting the privacy and security of your personal information.',
}

export default function PrivacyPage() {
  return (
    <main>

      {/* ── PAGE HEADER ── */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="font-serif text-3xl font-bold text-[#4a7c7e] mb-2">Privacy Policy</h1>
          <p className="text-gray-400 text-sm">August 2, 2025</p>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-4">
          <div className="prose prose-gray max-w-none [&_h2]:font-serif [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-[#333] [&_h2]:mt-8 [&_h2]:mb-3 [&_h3]:font-serif [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-[#4a7c7e] [&_p]:text-gray-600 [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_li]:text-gray-600 [&_li]:mb-2 [&_a]:text-[#4a7c7e] [&_a]:underline [&_strong]:font-semibold [&_strong]:text-[#333]">

            <h2>Privacy Policy</h2>
            <p><strong>Last Updated:</strong> Updated 5/1/2026</p>
            <p>Arcadia Senior Living ("we," "us," or "our") operates the website arcadiaretirement.com and provides senior living services at our communities in Portland, Oregon, and Washougal, Washington. We are committed to protecting the privacy and security of the personal information of our residents, their families, and visitors to our website.</p>

            <h2>1. Information We Collect</h2>
            <p>We collect information that identifies, relates to, or could reasonably be linked to you ("Personal Information").</p>
            <ul>
              <li><strong>Information You Provide:</strong> When you fill out a contact form, schedule a tour, or subscribe to our newsletter, we may collect your name, email address, phone number, and mailing address.</li>
              <li><strong>Health-Related Inquiries:</strong> If you provide information regarding care needs or health status to help us determine the appropriate level of care (Assisted Living vs. Independent Living), this is treated with heightened sensitivity.</li>
              <li><strong>Automated Information:</strong> When you visit our site, we automatically collect technical data such as your IP address, browser type, and how you interact with our pages via cookies and analytics tools.</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and schedule tours of our Portland or Washougal properties.</li>
              <li>Provide personalized information about our care services and floor plans.</li>
              <li>Send periodic marketing emails or SMS updates (where you have opted in).</li>
              <li>Improve our website functionality and user experience.</li>
              <li>Comply with legal obligations and ensure the safety of our residents and staff.</li>
            </ul>

            <h2>3. Sharing Your Information</h2>
            <p>We do not sell, trade, or rent your Personal Information to third parties. We may share your data with:</p>
            <ul>
              <li><strong>Service Providers:</strong> Trusted vendors who assist us in operating our website or conducting our business (e.g., email service providers), provided they agree to keep this information confidential.</li>
              <li><strong>Legal Requirements:</strong> If required by law, we may disclose information to comply with legal processes or protect the rights and safety of Arcadia Senior Living.</li>
            </ul>

            <h2>4. SMS and Mobile Communication</h2>
            <p>If you opt-in to receive SMS notifications from us:</p>
            <ul>
              <li>You may receive updates regarding admissions, marketing, or employment inquiries.</li>
              <li><strong>Opt-Out:</strong> You can reply "STOP" at any time to unsubscribe.</li>
              <li>Your SMS consent and phone number will not be shared with outside third parties or affiliates for marketing purposes.</li>
            </ul>

            <h2>5. Washington and Oregon Residents</h2>
            <ul>
              <li><strong>Washington My Health My Data Act:</strong> For our Washington visitors and residents (Arcadia at Lookout Ridge), we take extra care with "Consumer Health Data." We only collect health-related information necessary to provide the services you request and do so with your explicit consent where required by law.</li>
              <li><strong>Security:</strong> We implement industry-standard physical, technical, and administrative security measures to protect your data.</li>
            </ul>

            <h2>6. Your Choices and Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>Request a copy of the personal data we hold about you.</li>
              <li>Request that we correct or delete your personal information.</li>
              <li>Opt-out of marketing communications by clicking the "unsubscribe" link in emails.</li>
            </ul>

            <h2>7. Third-Party Links</h2>
            <p>Our website may contain links to external sites (such as social media or resident portals). We are not responsible for the privacy practices of these third-party sites.</p>

            <h2>8. Updates to This Policy</h2>
            <p>We may update this Privacy Policy from time to time to reflect changes in our practices or for legal reasons. The "Last Updated" date at the top of this page will indicate when the latest changes were made.</p>

            <h2>9. Contact Us</h2>
            <p>If you have questions about this Privacy Policy or our data practices, please contact us at: <a href="/contact-us">arcadiaretirement.com/contact-us</a></p>

            <h2>Arcadia Senior Living Properties</h2>
            <ul>
              <li><strong>Arcadia Senior Living – Portland, OR</strong>
                <ul>
                  <li>Address: 13031 SE Foster Rd, Portland, OR 97236</li>
                </ul>
              </li>
              <li><strong>Arcadia at Lookout Ridge – Washougal, WA</strong>
                <ul>
                  <li>Address: 2300 W 9th St, Washougal, WA 98671</li>
                </ul>
              </li>
            </ul>

          </div>
        </div>
      </section>

    </main>
  )
}
