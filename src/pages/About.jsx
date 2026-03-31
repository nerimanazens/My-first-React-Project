const principles = [
  {
    title: "Intentional Space",
    description: "We utilize generous spacing to create breathing room, ensuring every element is treated like an exhibit.",
    icon: "✦"
  },
  {
    title: "Tonal Layering",
    description: "We replace harsh borders with subtle background shifts, creating a sophisticated sense of depth and hierarchy.",
    icon: "𝖠"
  },
  {
    title: "Textual Authority",
    description: "Typography is our primary tool for storytelling, using high-contrast scales to establish clear entry points.",
    icon: "🖾"
  }
]




function About() {
  return (
    <div>

      <header className="py-6">
        <div className="mx-auto max-w-350 font-medium text-lg text-[#4C616C] mb-4">Our Origin Story</div>
        <div className="mx-auto max-w-350 flex gap-[200px] items-center">
          <div className="">
            <h1 className="text-7xl font-bold m-0">
              Defining the space between <span className="text-[#4C616C]">thought</span> and <i>execution</i>.
            </h1>
            <p className="text-gray-500 mt-6 text-lg font-medium">
              Founded in 2024, The Editorial began as a simple observation: the digital landscape had become too loud. We believed that authority doesn't need to shout to be heard. It requires clarity, precision, and an unwavering commitment to minimalist principles.
            </p>
            <p className="text-gray-500 mt-6 text-lg font-medium">
              Our project explores the intersection of high-end editorial aesthetics and modern functional design. We don't just build interfaces; we curate experiences that prioritize the user's focus, leveraging tonal layering instead of cluttered boundaries to guide the eye.
            </p>
          </div>
          <img className="w-[400px] h-[400px]" src="../home.png" />
        </div>
      </header>

      <section className="bg-[#F1F4F6] py-23">

        <div className="flex mx-auto max-w-300 gap-40 items-center  relative">
          <img src="/human.png" className="w-100 h-100" />

          <div >
            <p className="px-2 bg-[#E2E8F0] w-fit rounded-2xl top-8 absolute">The Visionary</p>
            <h2 className="text-5xl font-bold mb-8">Elena Vance</h2>
            <p>Elena is a multidisciplinary designer and editor who believes that "less is not just more—it's everything." With a decade of experience in premium branding, she brings a meticulous eye for typography and spatial hierarchy to every project.</p>
            <p>
              Her philosophy is rooted in the "Silent Authority" principle: creating digital spaces that feel like a premium gallery rather than a chaotic marketplace. When she isn't refining pixel-perfect layouts, she explores the relationship between architectural brutalism and digital interfaces.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F7F9] py-20 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Core Principles</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-3 gap-6">
        {principles.map((item) => (
          <div key={item.title} className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-gray-500 mb-6">
              {item.icon}
            </div>
            <h3 className="font-bold text-gray-800 mb-3">{item.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
      
    </div>
  )
}

export default About