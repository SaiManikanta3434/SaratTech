import { useState, useEffect } from 'react'
import React from 'react'
import logo from '../assets/logo.png'

const navigation = [
  { name: 'About Us', href: '#' },
  { name: 'Services', href: '#' },
  { name: 'Industries', href: '#' },
  { name: 'Products', href: '#' },
  {name: 'Careers', href:'#'},
  {name:'Contact Us', href:'#'}
]

// Custom hook for typewriter effect
function useTypewriter(text, speed = 50) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed])

  return displayText
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showCompanyName, setShowCompanyName] = useState(false)
  
  const mainText = "Innovation meets intelligence at"
  const typedText = useTypewriter(mainText, 60)
  
  // Show company name after main text is complete
  useEffect(() => {
    if (typedText === mainText) {
      const timer = setTimeout(() => setShowCompanyName(true), 300)
      return () => clearTimeout(timer)
    }
  }, [typedText, mainText])

  return (
    <div className="bg-gray-900">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 group">
              <span className="sr-only">Your Company</span>
                 <img src={logo} alt="" className='w-auto h-14' />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200 hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="text-sm font-semibold text-white relative group transition-all duration-300 hover:text-indigo-300 py-2"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a 
              href="#" 
              className="text-sm font-semibold text-white hover:text-indigo-300 transition-all duration-300 group"
            >
              Log in <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </a>
          </div>
        </nav>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="fixed inset-0 z-50 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10 transform transition-transform duration-300">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <div className="h-8 w-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">ST</span>
                  </div>
                </a>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-200 hover:text-white hover:bg-white/10 transition-all duration-200"
                >
                  <span className="sr-only">Close menu</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-white/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item, index) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/10 transition-all duration-300 transform hover:translate-x-2 hover:scale-105"
                        style={{
                          animationDelay: `${index * 100}ms`,
                          animation: mobileMenuOpen ? 'slideInLeft 0.3s ease-out forwards' : 'none'
                        }}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-white hover:bg-white/10 transition-all duration-300 transform hover:translate-x-2 hover:scale-105"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] animate-pulse"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm text-gray-400 ring-1 ring-white/10 hover:ring-white/20 transition-all duration-300 hover:scale-105 hover:bg-white/5 group cursor-pointer">
              Announcing our next round of funding.{' '}
              <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300 transition-colors duration-300">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="justify-center text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-pink-500 to-blue-400 bg-clip-text text-transparent min-h-[2em]">
              {typedText}
              {typedText === mainText && (
                <span className="inline-block w-0.5 h-16 bg-white ml-1 animate-pulse"></span>
              )}
              {showCompanyName && (
                <p className='mt-4 bg-gradient-to-b from-blue-500 to-gray-800 bg-clip-text text-transparent opacity-0 animate-fadeInUp' style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
                  SARAT TECH
                </p>
              )}
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-400 sm:text-xl opacity-0 animate-fadeInUp" style={{animationDelay: '2s', animationFillMode: 'forwards'}}>
              We are Leading Tech Company in the field of Software Development, Web Development, Mobile App Development, and Digital Marketing. We help businesses to grow by providing them with the best solutions.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 opacity-0 animate-fadeInUp" style={{animationDelay: '2.5s', animationFillMode: 'forwards'}}>
              <a
                href="#"
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25 active:scale-95 transform"
              >
                Get started
              </a>
              <a 
                href="#" 
                className="text-sm font-semibold text-white hover:text-indigo-300 transition-all duration-300 group relative overflow-hidden px-3 py-2 rounded-md"
              >
                <span className="relative z-10">Learn more</span>
                <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-1 relative z-10 ml-1">→</span>
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-md"></span>
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] animate-pulse"
          />
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
    </div>
  )
}