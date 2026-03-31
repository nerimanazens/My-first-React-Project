function Home() {
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

      <section>

        <div className="flex">
          <img src="/human.png" />

          <div>
            <p>The Visionary</p>
            <h2>Elena Vance</h2>
            <p>Elena is a multidisciplinary designer and editor who believes that "less is not just more—it's everything." With a decade of experience in premium branding, she brings a meticulous eye for typography and spatial hierarchy to every project.</p>
            <p>
              Her philosophy is rooted in the "Silent Authority" principle: creating digital spaces that feel like a premium gallery rather than a chaotic marketplace. When she isn't refining pixel-perfect layouts, she explores the relationship between architectural brutalism and digital interfaces.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home