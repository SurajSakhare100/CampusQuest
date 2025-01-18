import React from 'react'

function AiTechnology() {
  return (
    <section id="aiTechnology" className="bg-neutral-900 py-20">
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 animate__animated animate__fadeIn">
        <h2 className="text-4xl font-bold text-white mb-4">
          Powered by Advanced AI Technology
        </h2>
        <p className="text-xl text-gray-400">
          Experience learning enhanced by cutting-edge artificial intelligence
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate__animated animate__fadeInLeft">
          <div className="bg-neutral-800 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center space-x-4">
              <div className="bg-purple-500/10 rounded-lg p-3">
                <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Adaptive Learning Algorithm</h3>
            </div>
            <p className="mt-4 text-gray-400">Our AI continuously analyzes your learning patterns and adjusts content
              difficulty in real-time.</p>
          </div>

          <div className="bg-neutral-800 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-500/10 rounded-lg p-3">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Smart Assessment Engine</h3>
            </div>
            <p className="mt-4 text-gray-400">Personalized assessments that identify knowledge gaps and provide targeted
              recommendations.</p>
          </div>

          <div className="bg-neutral-800 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center space-x-4">
              <div className="bg-green-500/10 rounded-lg p-3">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Progress Analytics</h3>
            </div>
            <p className="mt-4 text-gray-400">Advanced analytics and insights to track your learning journey and
              optimize performance.</p>
          </div>
        </div>

        <div className="relative animate__animated animate__fadeInRight">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 blur-lg opacity-20 rounded-3xl">
          </div>
          <div className="relative bg-neutral-800 rounded-3xl p-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between bg-neutral-700/50 p-4 rounded-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Learning Speed</h4>
                    <p className="text-gray-400 text-sm">Optimized for you</p>
                  </div>
                </div>
                <div className="h-2 w-24 bg-neutral-600 rounded-full">
                  <div className="h-2 bg-purple-500 rounded-full w-[85%]"></div>
                </div>
              </div>

              <div className="flex items-center justify-between bg-neutral-700/50 p-4 rounded-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Accuracy</h4>
                    <p className="text-gray-400 text-sm">Personalized content</p>
                  </div>
                </div>
                <div className="h-2 w-24 bg-neutral-600 rounded-full">
                  <div className="h-2 bg-blue-500 rounded-full w-[92%]" ></div>
                </div>
              </div>

              <div className="flex items-center justify-between bg-neutral-700/50 p-4 rounded-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Progress Rate</h4>
                    <p className="text-gray-400 text-sm">Continuous improvement</p>
                  </div>
                </div>
                <div className="h-2 w-24 bg-neutral-600 rounded-full">
                  <div className="h-2 bg-green-500 rounded-full w-[78%]" ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default AiTechnology
