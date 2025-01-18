import React from 'react'

function Pricing() {
  return (
    <section id="pricing" className="bg-neutral-900 py-20">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold text-white mb-4">
            Choose Your Learning Journey
          </h2>
          <p className="text-xl text-gray-400">
            Flexible plans designed for every learning need
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div
            className="bg-neutral-800 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeInLeft">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Basic</h3>
              <div className="flex justify-center items-baseline">
                <span className="text-5xl font-bold text-white">Free</span>
              </div>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Basic AI-powered learning
              </li>
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Limited course access
              </li>
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Basic progress tracking
              </li>
            </ul>
            <button
              className="w-full py-3 px-6 rounded-full bg-white text-neutral-900 font-semibold hover:bg-gray-100 transition-colors duration-300">
              Get Started
            </button>
          </div>

          <div
            className="bg-gradient-to-b from-purple-600 to-blue-600 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 relative animate__animated animate__fadeInUp">
            <div
              className="absolute top-0 right-0 bg-yellow-400 text-neutral-900 px-3 py-1 rounded-bl-lg rounded-tr-xl text-sm font-bold">
              POPULAR
            </div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Pro</h3>
              <div className="flex justify-center items-baseline">
                <span className="text-5xl font-bold text-white">$29</span>
                <span className="text-xl text-gray-200 ml-2">/month</span>
              </div>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-white">
                <svg className="w-5 h-5 text-yellow-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Advanced AI personalization
              </li>
              <li className="flex items-center text-white">
                <svg className="w-5 h-5 text-yellow-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Full course library access
              </li>
              <li className="flex items-center text-white">
                <svg className="w-5 h-5 text-yellow-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Advanced analytics
              </li>
              <li className="flex items-center text-white">
                <svg className="w-5 h-5 text-yellow-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Premium gamification features
              </li>
            </ul>
            <button
              className="w-full py-3 px-6 rounded-full bg-white text-neutral-900 font-semibold hover:bg-gray-100 transition-colors duration-300">
              Start Pro Trial
            </button>
          </div>

          <div
            className="bg-neutral-800 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeInRight">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="flex justify-center items-baseline">
                <span className="text-5xl font-bold text-white">$99</span>
                <span className="text-xl text-gray-400 ml-2">/month</span>
              </div>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Custom AI solutions
              </li>
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Dedicated support team
              </li>
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Custom reporting
              </li>
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                API access
              </li>
            </ul>
            <button
              className="w-full py-3 px-6 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:from-purple-700 hover:to-blue-700 transition-colors duration-300">
              Contact Sales
            </button>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">All plans include:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-neutral-800 rounded-full text-gray-300 text-sm">24/7 Support</span>
            <span className="px-4 py-2 bg-neutral-800 rounded-full text-gray-300 text-sm">Mobile Access</span>
            <span className="px-4 py-2 bg-neutral-800 rounded-full text-gray-300 text-sm">Progress Certificates</span>
            <span className="px-4 py-2 bg-neutral-800 rounded-full text-gray-300 text-sm">Community Access</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
