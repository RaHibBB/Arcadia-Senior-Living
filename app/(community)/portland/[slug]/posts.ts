const WP = 'https://arcadiaretirement.com/portland/wp-content/uploads/sites/4'

export interface PortlandPost {
  slug: string
  title: string
  date: string
  image: string
  imageAlt: string
  excerpt: string
  content: string
}

export const posts: PortlandPost[] = [
  {
    slug: 'farmers-market-open-house',
    title: "You're Invited: Farmers Market Open House at Arcadia Portland!",
    date: 'April 20, 2026',
    image: `${WP}/2026/04/ARCADIA-SENIOR-LIVING-1-pdf.jpg`,
    imageAlt: 'Farmers Market Open House at Arcadia Senior Living Portland',
    excerpt: "Join us for a special Farmers Market Open House — fun, food, baby goats, and community tours. Come experience the Arcadia Advantage firsthand.",
    content: `
      <p>Are you in the market for your "forever home"? Whether you are just beginning your search or looking for a vibrant community to call your own, we invite you to join us for a special afternoon of fun, food, and connection at <strong>Arcadia Senior Living in Portland</strong>.</p>
      <p>We are opening our doors for a <strong>Farmers Market Open House</strong>, and there is truly something for everyone to enjoy. Come experience the "Arcadia Advantage" firsthand while exploring our beautiful campus.</p>
      <h3>Event Highlights</h3>
      <ul>
        <li><strong>Delicious Treats:</strong> Sample homemade baked goods prepared right here in our community.</li>
        <li><strong>Local Artistry:</strong> Browse unique, resident-made crafts that showcase the talent and creativity of our neighbors.</li>
        <li><strong>Meet the "Kids":</strong> We are thrilled to host a special visit from <strong>baby goats!</strong></li>
        <li><strong>Community Tours:</strong> Take a look at our living spaces and learn more about our personalized care and purposeful living programs.</li>
      </ul>
      <h3>When &amp; Where</h3>
      <ul>
        <li><strong>Date:</strong> Thursday, April 30th</li>
        <li><strong>Time:</strong> 2:00 pm – 5:00 pm</li>
        <li><strong>Location:</strong> 13031 SE Foster Rd, Portland, OR 97236</li>
      </ul>
      <p>We can't wait to show you all that Arcadia has to offer. Whether you're here for the snacks, the crafts, or the goats, we look forward to welcoming you home!</p>
      <p><strong>Need more information before you visit?</strong> Check out our <a href="/portland">Portland community page</a> to learn more about our assisted living and respite care services.</p>
    `,
  },
  {
    slug: 'new-chapter-extra-support-join-arcadia-this-april',
    title: 'New Chapter, Extra Support: Join Arcadia This April',
    date: 'April 9, 2026',
    image: `${WP}/2026/04/April-Promo-Arcadia-SL-Portland.jpg`,
    imageAlt: 'April move-in promotion at Arcadia Senior Living Portland',
    excerpt: "Arcadia Senior Living is offering up to $1,000 toward moving costs for new residents who move in during April. Discover what makes our boutique community special.",
    content: `
      <p>Making the move to senior living is about more than just a new address — it's about choosing a life filled with <strong>care, purpose, and happiness</strong>. We know that while the destination is exciting, the logistics of moving can feel overwhelming.</p>
      <p>To help you or your loved one transition smoothly into our boutique community, <strong>Arcadia Senior Living is offering up to $1,000 toward moving costs</strong> for new residents who move in during the month of April.</p>
      <h3>Why Choose Arcadia Portland?</h3>
      <p>Our community is designed to feel like home, offering a level of personalized attention that only a locally owned, boutique setting can provide.</p>
      <ul>
        <li><strong>Intimate Setting:</strong> With only 68 apartments, our staff truly knows every resident.</li>
        <li><strong>Professional Care:</strong> Licensed nurses are on-site 24/7 to provide peace of mind.</li>
        <li><strong>Vibrant Lifestyle:</strong> From chef-crafted dining to local excursions, there is always a reason to smile.</li>
      </ul>
      <h3>Start Your Journey Today</h3>
      <p>This special promotion is a limited-time opportunity to join our family with a little extra wind in your sails. Let us handle a portion of the heavy lifting so you can focus on what matters: enjoying your new community.</p>
      <p><strong>Ready to see the Arcadia difference?</strong> <a href="/portland/tour">Schedule a tour today</a> or call us at <a href="tel:+15032068930">(503) 206-8930</a> to learn more about our April move-in special.</p>
    `,
  },
  {
    slug: 'happy-st-patricks-day',
    title: "Happy St. Patrick's Day from Arcadia Senior Living!",
    date: 'March 17, 2026',
    image: `${WP}/2026/03/St.-Patricks-2026.png`,
    imageAlt: "St. Patrick's Day celebration at Arcadia Senior Living Portland",
    excerpt: "Feeling lucky? This St. Patrick's Day we're celebrating with a word scramble contest, available floor plans, and an open invitation to discover Arcadia.",
    content: `
      <p>Feeling lucky? This St. Patrick's Day, we are celebrating with more than just green décor — we're opening our doors to new neighbors and offering you a chance to win!</p>
      <h3>Test Your Luck: Word Scramble</h3>
      <p>Do you have a sharp eye for a "lucky" prize? Solve the word scramble below and respond with the correct answer for your chance to win! The winner will be notified Wednesday afternoon.</p>
      <p><strong>CNPLAERUEH</strong></p>
      <h3>Find Your Home at Arcadia</h3>
      <p>We currently have a few select floor plans available in our boutique community. Whether you are looking for a cozy studio or a spacious one-bedroom with a view, we have a place for you:</p>
      <ul>
        <li><strong>1 Studio</strong> (350 sq ft)</li>
        <li><strong>3 One-bedrooms</strong> (645 sq ft)</li>
        <li><strong>1 One-bedroom with Balcony</strong> (750 sq ft)</li>
      </ul>
      <p>At Arcadia, we focus on <strong>personalized care, purposeful living, and happy residents.</strong> Our small size allows us to truly know every resident — right down to your favorite salt shaker or your preferred sun-facing room.</p>
      <p><strong>Ready to see for yourself?</strong> For additional information or to refer a friend, please call us at <a href="tel:+15032068930">(503) 206-8930</a>.</p>
    `,
  },
  {
    slug: 'arcadia-senior-living-to-host-2026-kickoff-networking-event',
    title: 'Arcadia Senior Living to Host 2026 Kickoff Networking Event',
    date: 'January 6, 2026',
    image: `${WP}/2026/01/Happy-Valley-Business-Alliance.png`,
    imageAlt: 'Happy Valley Business Alliance networking event at Arcadia Portland',
    excerpt: "Arcadia Senior Living is proud to host the first Happy Valley Business Alliance networking event of the year — an evening of connection for local professionals.",
    content: `
      <p>Arcadia Senior Living is proud to host the first <strong>Happy Valley Business Alliance (HVBA)</strong> networking event of the year! Local professionals and business owners are invited to join us for an evening of connection and community as we ring in 2026.</p>
      <h3>Event Details</h3>
      <ul>
        <li><strong>What:</strong> Happy Hour Networking Mixer</li>
        <li><strong>When:</strong> Wednesday, January 14, 2026</li>
        <li><strong>Where:</strong> Arcadia Senior Living, 13031 SE Foster Rd, Portland, OR</li>
        <li><strong>Goal:</strong> Build new connections with local businesses from Happy Valley and the surrounding areas.</li>
      </ul>
      <h3>How to Attend</h3>
      <p>Space is limited. To RSVP or to learn more about the event, please contact <strong>Cassia McIntyre</strong>, Community Relations Director, at <a href="mailto:Admissions@ArcadiaRetirement.com">Admissions@ArcadiaRetirement.com</a>.</p>
      <p><a href="https://www.linkedin.com/events/happyvalleybusinessalliancenetw7412990342301679617/" target="_blank" rel="noopener noreferrer">See this event on LinkedIn</a>.</p>
    `,
  },
  {
    slug: 'autumn-orchard-dinner',
    title: 'Join Us for Our Autumn Orchard Dinner and Show at Arcadia Senior Living Portland!',
    date: 'November 17, 2025',
    image: `${WP}/2025/11/1763168086375.jpeg`,
    imageAlt: 'Autumn Orchard Dinner and Show at Arcadia Senior Living Portland',
    excerpt: "Join us for a festive Autumn Orchard Dinner and Show — three courses, live entertainment, and special prizes. Open to residents, families, and friends.",
    content: `
      <p>As the season of gratitude arrives, it's the perfect time to gather together and celebrate the wonderful community we share. At Arcadia, we are thankful for the incredible residents, families, and friends who make this place feel like home. This year, we are excited to bring everyone together for a festive evening filled with delicious food, entertainment, and plenty of fun.</p>
      <ul>
        <li><strong>Date:</strong> November 22, 2025</li>
        <li><strong>Time:</strong> 3:30 PM</li>
        <li><strong>Location:</strong> Arcadia Senior Living Portland, 13031 SE Foster Rd, Portland, OR 97236</li>
      </ul>
      <p>Join us for our <strong>Autumn Orchard Dinner and Show</strong>, featuring a three-course dinner, live entertainment, and special prizes. It's the perfect way to enjoy the warmth of the season and cheer each other on as members of our community showcase their hidden talents.</p>
      <p>This event is open to residents, families, and friends. We would love to celebrate with you.</p>
      <p><strong>RSVP:</strong> <a href="tel:+15032068930">(503) 206-8930</a></p>
      <p><strong>Cost:</strong> Only $15 for the full dinner, show, and prizes.</p>
      <p>We look forward to spending this festive autumn evening together!</p>
    `,
  },
]

export function getPostBySlug(slug: string): PortlandPost | undefined {
  return posts.find(p => p.slug === slug)
}
