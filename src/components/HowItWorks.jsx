import React from 'react'

function HowItWorks() {
  return (
    <section id="howItWorks" className="bg-neutral-900 py-20">
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 animate__animated animate__fadeIn">
        <h2 className="text-4xl font-bold text-white mb-4">
          How Our Platform Works
        </h2>
        <p className="text-xl text-gray-400">
          Four simple steps to start your personalized learning journey
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
          <div
            className="w-1 h-full bg-gradient-to-b from-purple-500 to-blue-500 absolute left-1/2 transform -translate-x-1/2">
          </div>
        </div>

        <div className="space-y-16">
          <div className="flex flex-col md:flex-row items-center animate__animated animate__fadeInLeft">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <div className="bg-neutral-800 p-8 rounded-2xl relative">
                <div
                  className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  1</div>
                <h3 className="text-2xl font-bold text-white mb-4">Create Your Profile</h3>
                <p className="text-gray-400">Sign up and complete your learning profile. Our AI analyzes your goals,
                  current knowledge, and learning style preferences.</p>
              </div>
            </div>
            <div className="md:w-1/2"></div>
          </div>

          <div className="flex flex-col md:flex-row items-center animate__animated animate__fadeInRight">
            <div className="md:w-1/2"></div>
            <div className="md:w-1/2 mb-8 md:mb-0 md:pl-12">
              <div className="bg-neutral-800 p-8 rounded-2xl relative">
                <div
                  className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  2</div>
                <h3 className="text-2xl font-bold text-white mb-4">Receive Personalized Path</h3>
                <p className="text-gray-400">Our AI generates a customized learning pathway tailored to your specific
                  needs and objectives.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center animate__animated animate__fadeInLeft">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <div className="bg-neutral-800 p-8 rounded-2xl relative">
                <div
                  className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  3</div>
                <h3 className="text-2xl font-bold text-white mb-4">Engage in Interactive Learning</h3>
                <p className="text-gray-400">Participate in gamified lessons, complete challenges, and earn rewards
                  while mastering new concepts.</p>
              </div>
            </div>
            <div className="md:w-1/2"></div>
          </div>

          <div className="flex flex-col md:flex-row items-center animate__animated animate__fadeInRight">
            <div className="md:w-1/2"></div>
            <div className="md:w-1/2 mb-8 md:mb-0 md:pl-12">
              <div className="bg-neutral-800 p-8 rounded-2xl relative">
                <div
                  className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  4</div>
                <h3 className="text-2xl font-bold text-white mb-4">Track Progress & Adapt</h3>
                <p className="text-gray-400">Monitor your progress through detailed analytics while our AI continuously
                  adapts your learning path.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <button
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 animate__animated animate__pulse animate__infinite">
            Start Your Learning Journey
          </button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default HowItWorks
