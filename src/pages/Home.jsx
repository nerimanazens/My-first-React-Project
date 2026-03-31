function Home() {
  return (
    <div className="bg-[#F5F7F9] min-h-screen">

      <section className="max-w-6xl mx-auto px-10 py-24 flex items-center justify-between gap-10">
        <div className="max-w-lg">
          <span className="text-xs font-medium border border-gray-300 px-3 py-1 rounded-full text-gray-500">VOLUME 01 // 2024</span>
          <h1 className="text-6xl font-black mt-6 leading-tight text-gray-900">The Silent Authority.</h1>
          <p className="text-gray-500 mt-6 text-base leading-relaxed">Redefining the digital landscape through intentional asymmetry and tonal layering. We create experiences that speak volumes without raising their voice.</p>
          <div className="flex items-center gap-6 mt-8">
            <button className="bg-[#4C616C] hover:bg-[#3a4f58] text-white px-6 py-3 rounded-lg font-medium">Explore the Portfolio</button>
            <button className="text-gray-500 border-b border-gray-400 pb-1 hover:text-gray-800">Our Methodology</button>
          </div>
        </div>
        <div className="relative">
          <img src="./home2.png" className="rounded-lg w-80 h-96 object-cover" />
          <div className="absolute bottom-0 right-[-60px] bg-white p-5 rounded-lg shadow-md w-56">
            <i className="fa-solid fa-compass text-gray-400 mb-3"></i>
            <p className="text-xs italic text-gray-500">"Design is the intermediary between information and understanding."</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Core Philosophy</h2>
          <div className="w-10 h-0.5 bg-gray-800 mb-12"></div>
          <div className="grid grid-cols-3 gap-6">
            {[
              { icon: "fa-solid fa-sparkles", title: "Intentional Focus", desc: "We remove the noise to highlight the message. Every pixel serves a deliberate purpose in the user's journey." },
              { icon: "fa-solid fa-layer-group", title: "Tonal Layering", desc: "Depth without shadows. We use a sophisticated hierarchy of surfaces to create a natural, intuitive flow." },
              { icon: "fa-solid fa-pen-nib", title: "Digital Editorial", desc: "Bringing the high-end feel of print magazines to the web. Typography is our primary tool for authority." }
            ].map((item) => (
              <div key={item.title} className="bg-[#F5F7F9] rounded-2xl p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-gray-500 mb-6">
                  <i className={item.icon}></i>
                </div>
                <h3 className="font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-10 py-24 flex items-center gap-16">
        <img src="https://placehold.co/400x500/222222/ffffff?text=Room" className="rounded-lg w-72 h-80 object-cover" />
        <div>
          <h2 className="text-5xl font-black text-gray-900 mb-8">Beyond Minimalist.</h2>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-gray-800 mb-2">The Gallery Aesthetic</h4>
              <p className="text-gray-500 text-sm leading-relaxed">Exhibiting content rather than displaying it. Space is our most valuable asset.</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-2">Quiet Performance</h4>
              <p className="text-gray-500 text-sm leading-relaxed">Lightweight structures and optimized typography ensure a seamless, fast experience.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home