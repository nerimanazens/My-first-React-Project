import { useState } from 'react'

export default function ContactSection() {


  const [ad, setAd] = useState("")
  const [email, setEmail] = useState("")
  const [mesaj, setMesaj] = useState("")
  
  // Formanı idarə etmək üçün nümunə funksiya
  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Salam ${ad}! Mesajın göndərildi!`)
    setAd("")
    setEmail("")
    setMesaj("")
  }

  return (
    <section className="bg-[#f8f9fa] py-16 md:py-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">

        {/* Başlıq Hissəsi */}
        <div className="mb-16 max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-800 tracking-tight mb-4 leading-tight">
            Let's start a <br />
            <span className="italic text-slate-600">conversation.</span>
          </h1>
          <p className="text-lg text-slate-600">
            Whether it's a project inquiry, a press request, or just a simple hello, our door is always open to meaningful dialogue.
          </p>
        </div>

        {/* İki Sütunlu Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Sol Sütun: Forma */}
          <div className="bg-white p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-sm">
            <form onSubmit={handleSubmit} className="space-y-8">

              {/* Full Name */}
              <div>
                <label htmlFor="name" className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-3">
                  Full Name
                </label>
                <input type="text" id="name" name="name" placeholder="Who are you?"
                  className="w-full bg-[#eef1f3] text-slate-800 placeholder-gray-400 px-5 py-4 border-none focus:ring-2 focus:ring-slate-300 focus:outline-none rounded-sm transition-all" required />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-3">
                  Email Address
                </label>
                <input type="email" id="email" name="email" placeholder="Where can we reach you?"
                  className="w-full bg-[#eef1f3] text-slate-800 placeholder-gray-400 px-5 py-4 border-none focus:ring-2 focus:ring-slate-300 focus:outline-none rounded-sm transition-all" required />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-3">
                  Your Message
                </label>
                <textarea id="message" name="message" rows="5" placeholder="Tell us everything..."
                  className="w-full bg-[#eef1f3] text-slate-800 placeholder-gray-400 px-5 py-4 border-none focus:ring-2 focus:ring-slate-300 focus:outline-none rounded-sm transition-all resize-none" required></textarea>
              </div>

              {/* Submit Button */}
              <button type="submit"
                className="bg-[#4d606f] hover:bg-[#3b4b57] text-white text-[11px] font-bold uppercase tracking-widest px-8 py-4 transition-colors rounded-sm w-max">
                Send Message
              </button>
            </form>
          </div>

          {/* Sağ Sütun: Məlumatlar */}
          <div className="flex flex-col space-y-10">

            {/* Şəkil (Placeholder) */}
            <div className="w-full h-64 md:h-80 bg-gray-200 rounded-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=2000&auto=format&fit=crop"
                alt="Studio Desk" className="w-full h-full object-cover" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Direct Lines */}
              <div>
                <h3 className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-4">Direct Lines</h3>
                <p className="text-xl font-semibold text-slate-800 mb-1">hello@theeditorial.com</p>
                <p className="text-slate-600">+1 (555) 234 5678</p>
              </div>

              {/* Global Studio */}
              <div>
                <h3 className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-4">Global Studio</h3>
                <div className="text-slate-600 leading-relaxed">
                  <p>1245 Blackwood St.</p>
                  <p>Arts District, Los Angeles</p>
                  <p>CA 90013, USA</p>
                </div>
              </div>
            </div>

            {/* Social Influence */}
            <div>
              <h3 className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-4">Social Influence</h3>
              <div className="flex flex-wrap gap-3">
                <a href="#" className="bg-[#e4ebf0] hover:bg-[#d0dbe3] text-slate-700 text-sm px-5 py-2 rounded-full transition-colors">Instagram</a>
                <a href="#" className="bg-[#e4ebf0] hover:bg-[#d0dbe3] text-slate-700 text-sm px-5 py-2 rounded-full transition-colors">LinkedIn</a>
                <a href="#" className="bg-[#e4ebf0] hover:bg-[#d0dbe3] text-slate-700 text-sm px-5 py-2 rounded-full transition-colors">Twitter (X)</a>
                <a href="#" className="bg-[#e4ebf0] hover:bg-[#d0dbe3] text-slate-700 text-sm px-5 py-2 rounded-full transition-colors">Behance</a>
              </div>
            </div>

            {/* Status Box */}
            <div className="bg-[#f0f4f8] p-6 rounded-sm mt-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
                <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest">Available for projects</h3>
              </div>
              <p className="text-slate-600 text-sm italic ml-5.5">
                We are currently accepting new client partnerships for Q3 2024.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}