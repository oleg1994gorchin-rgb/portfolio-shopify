import { memo } from "react";

/**
 * About Component
 * Displays personal profile information with a photo, bio, skill tags, experience history,
 * and a button to open a contact form popup.
 *
 * @component
 * @returns {JSX.Element} About section UI
 */
function About() {

  const tags = [
    "Shopify 2.0",
    "Theme Development",
    "Admin API",
    "Shopify Plus",
    "Shopify Liquid",
    "Shopify Functions",
    "Technical SEO",
    "Page Speed Optimization",
    "AJAX Cart API",
  ];

  const experiences = [
    ["Programmer", "Canon Hong Kong Co.Ltd", "Oct 2018 - Apr 2020"],
    ["Shopify Developer", "Card Hero Limited", "Aug 2020 - Apr 2022"],
    ["Senior Shopify Developer", "Tidal Commerce", "Nov 2022 - Feb 2026"],
  ];

  return (
    <section
      id="personal-info"
      className="bg-black text-white px-4 py-16"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Left Section - Profile Card */}
        <article
          className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg w-full lg:w-1/2"
          aria-label="Profile Information"
        >
          <div className="relative w-full overflow-hidden rounded-xl">
            <img
              src="/images/photo.png"
              alt="Portrait of Jony Leung"
              className="rounded-xl w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <span
              className="absolute bottom-2 left-2 bg-black/70 px-3 py-1 text-xs rounded-full text-green-400"
              role="status"
              aria-live="polite"
            >
              ● Available for work
            </span>
          </div>
          <h2 id="about-heading" className="mt-6 text-2xl font-semibold">
            Hello, I am <span className="text-gray-300">Jony Leung</span>
          </h2>
          <p className="text-gray-400 mt-2">
            Senior Shopify Developer Based in Greater Toronto Area, CA.
          </p>

          {/* Connect Button */}
          <button
            className="mt-6 bg-gradient-to-r from-neutral-800 to-black px-6 py-3 border border-gray-700 rounded-full font-medium hover:opacity-90 transition"
            aria-haspopup="dialog"
            aria-controls="contact-form"
          >
            <a href="#contact-info">Connect with me</a>
          </button>
        </article>

        {/* Right Section - Bio, Skills, Experience */}
        <article
          className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg w-full lg:w-1/2"
          aria-label="About Jony Leung"
        >
          <p className="mb-4 text-gray-300">
            I'm Jony Leung, a senior Shopify developer with 7+ years of experience architecting and scaling
            high-performance eCommerce platforms for fast-growing brands and enterprise businesses.
            Specialized in solving complex Shopify challenges including theme scalability, Shopify Plus customization,
            conversion optimization, headless commerce, legacy platform migration, app conflicts, and performance bottlenecks.
            Proven track record of building revenue-driven storefronts that improve conversion rate, page speed,
            operational efficiency, and customer experience.
            Strong expertise in Shopify Liquid, Javascript, React, GraphQL, Node.js, AWS, and modern commerce infrastructure.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-6" role="list">
            {tags.map((tag) => (
              <span
                key={tag}
                role="listitem"
                className="bg-black/50 border border-white/10 text-white text-sm px-3 py-1 rounded-full backdrop-blur-md"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Experience Table */}
          <div className="space-y-3 text-sm" role="table" aria-label="Work experience">
            <p className="mb-4 text-gray-300">
              Experience
            </p>
            {experiences.map(([role, company, year]) => (
              <div
                key={`${role}-${company}-${year}`}
                role="row"
                className="flex justify-between bg-black/50 border border-white/10 px-4 py-3 rounded-xl text-gray-300 backdrop-blur-md"
              >
                <span role="cell">{role}</span>
                <span role="cell">{company}</span>
                <span role="cell">{year}</span>
              </div>
            ))}
          </div>
        </article>
      </div>


      {/* Contact Info */}
      <div id='contact-info'>
        <div className="max-w-6xl mx-auto px-4 my-10">
          <h2 className="text-md md:text-2xl font-light tracking-tight leading-tight">
            Email: leungdev7774@outlook.com
          </h2>
        </div>
        <div className="max-w-6xl mx-auto px-4 my-10">
          <h2 className="text-md md:text-2xl font-light tracking-tight leading-tight">
            Phone: +1 (647) 382-5714
          </h2>
        </div>
      </div>
    </section>
  );
}

export default memo(About);
