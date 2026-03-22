

const services = [
  { 
    id: 1, 
    name: 'Wash & Fold', 
    price: 'Ksh 150', 
    unit: 'per kg',
    description: 'Everyday laundry, perfectly washed, dried, and neatly folded.', 
    image: 'https://images.unsplash.com/photo-1582735689146-2856db8c1059?auto=format&fit=crop&q=80&w=800',
    icon: (
      <svg className="w-8 h-8 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  { 
    id: 2, 
    name: 'Ironing Only', 
    price: 'Ksh 50', 
    unit: 'per item',
    description: 'Crisp and wrinkle-free finishing for your clean clothes.', 
    image: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&q=80&w=800',
    icon: (
      <svg className="w-8 h-8 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  },
  { 
    id: 3, 
    name: 'Dry Cleaning', 
    price: 'Ksh 450', 
    unit: 'per item',
    description: 'Specialized premium care for your delicate garments.', 
    image: 'https://images.unsplash.com/photo-1612453676150-59dc62a26c48?auto=format&fit=crop&q=80&w=800',
    icon: (
      <svg className="w-8 h-8 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
      </svg>
    )
  },
  { 
    id: 4, 
    name: 'Bedding & Duvets', 
    price: 'Ksh 800', 
    unit: 'per piece',
    description: 'Deep cleaning for fresh, cozy, and hygienic nights.', 
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800',
    icon: (
      <svg className="w-8 h-8 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    )
  },
];

function App() {
  const whatsappNumber = "254757952937"; // Setup your actual number here
  const whatsappMessage = "Hello Alchemist Laundry! I would like to request a laundry service.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-slate-50 font-['Outfit'] overflow-hidden selection:bg-brand-200">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 transition-all duration-300 backdrop-blur-md bg-white/70 border-b border-white/20 shadow-sm rounded-b-2xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-tr from-brand-600 to-brand-400 rounded-xl flex items-center justify-center text-white shadow-lg animate-float">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="font-bold text-2xl tracking-tight text-slate-800">
                Alchemist <span className="text-brand-600">Laundry</span>
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-slate-600 hover:text-brand-600 font-medium transition-colors">Home</a>
              <a href="#services" className="text-slate-600 hover:text-brand-600 font-medium transition-colors">Services</a>
              <a href="#location" className="text-slate-600 hover:text-brand-600 font-medium transition-colors">Location</a>
            </div>
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noreferrer"
              className="hidden md:inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-semibold rounded-full text-white bg-brand-600 hover:bg-brand-700 shadow-md hover:shadow-lg transition-all"
            >
              Book Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Decorative background blobs */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-brand-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block py-1 px-3 rounded-full bg-brand-100 text-brand-600 text-sm font-semibold mb-6 shadow-sm border border-brand-200">
              Premium Care around Kisii University
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight mb-8">
              Fresh clothes, <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-purple-600">
                Zero effort.
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Experience the magic of Alchemist Laundry. We transform your dirty loads into crisp, fresh, and perfectly folded garments. Pick-up and drop-off available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#services"
                className="px-8 py-4 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-colors shadow-xl shadow-slate-900/20 w-full sm:w-auto text-center"
              >
                View Pricing
              </a>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-full font-semibold outline outline-1 outline-slate-200 hover:bg-slate-50 transition-all shadow-sm w-full sm:w-auto text-center"
              >
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                Message on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services and Pricing */}
      <section id="services" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Services & Pricing</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Transparent and affordable pricing for premium laundry care. Choose the perfect service for your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="group bg-white rounded-3xl border border-slate-100 hover:border-brand-200 hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-500 relative overflow-hidden flex flex-col"
              >
                <div className="h-56 w-full overflow-hidden relative">
                  <img src={service.image} alt={service.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 p-2.5 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg group-hover:-translate-y-1 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow bg-white relative z-10">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{service.name}</h3>
                  <p className="text-slate-600 text-sm mb-6 flex-grow">{service.description}</p>
                  <div className="flex items-baseline gap-1 mt-auto border-t border-slate-100 pt-6">
                    <span className="text-3xl font-extrabold text-brand-600">{service.price}</span>
                    <span className="text-sm text-slate-500 font-medium">/{service.unit}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Subtle background gradient pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-500 rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-brand-400 font-semibold tracking-wider uppercase text-sm mb-2 block">Our Location</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Conveniently located near <span className="text-brand-400">Kisii University</span>.</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Drop by our laundry center on your way to class or back home. We are right in the student hub, making it easy for you to drop off your clothes and pick them up looking brand new.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                     <svg className="w-6 h-6 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1">Kisii University Area</h4>
                    <p className="text-slate-400">Main Campus Road, Kisii, Kenya</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                     <svg className="w-6 h-6 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1">Opening Hours</h4>
                    <p className="text-slate-400">Mon - Sat: 8:00 AM - 7:00 PM<br/>Sun: 10:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square md:aspect-[4/3] bg-slate-800 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10 relative group">
                {/* Map Placeholder Graphic */}
                <div className="absolute inset-0 bg-slate-800 flex flex-col items-center justify-center p-8 text-center group-hover:scale-105 transition-transform duration-700">
                  <svg className="w-24 h-24 text-slate-700 mb-6" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <p className="text-slate-400 font-medium">Interactive map coming soon.</p>
                  <p className="text-brand-400 text-xl font-bold mt-2">Find us near the main gate.</p>
                </div>
              </div>
              {/* Floating element on map */}
              <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 px-6 py-4 rounded-2xl shadow-xl flex items-center gap-3 animate-float animation-delay-2000">
                 <span className="relative flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-brand-500"></span>
                </span>
                <span className="font-bold">We are open now!</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-800">
              Alchemist <span className="text-brand-600">Laundry</span>
            </span>
          </div>
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Alchemist Laundry. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={whatsappLink} 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg shadow-green-500/30 hover:scale-110 hover:shadow-xl hover:shadow-green-500/40 transition-all duration-300 group"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute hidden group-hover:flex items-center right-16 top-1/2 -translate-y-1/2 bg-white text-slate-800 text-sm font-semibold py-2 px-4 rounded-xl shadow-lg whitespace-nowrap">
          Order Now 👋
        </span>
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
}

export default App;
