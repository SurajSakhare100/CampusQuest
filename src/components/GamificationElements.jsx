import React from 'react'

function GamificationElements() {
  return (
    <section id="gamificationElements" className="bg-neutral-900 py-20">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold text-white mb-4">
            Gamification Elements
          </h2>
          <p className="text-xl text-gray-400">
            Learn while having fun with our engaging gamification features
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-neutral-50 rounded-2xl p-8 shadow-lg animate__animated animate__fadeInLeft">
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stopColor="round" strokeLinejoin="round" strokeWidth="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold ml-4">Achievement System</h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-purple-600 font-semibold">Quick Learner</span>
                  <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div className="h-2 bg-gray-200 rounded">
                  <div className="h-2 bg-purple-500 rounded W-3/4" ></div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-blue-600 font-semibold">Problem Solver</span>
                  <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div className="h-2 bg-gray-200 rounded">
                  <div className="h-2 bg-blue-500 rounded W-2/3" ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-neutral-50 rounded-2xl p-8 shadow-lg animate__animated animate__fadeInRight">
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 bg-green-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stopColor="round" strokeLinejoin="round" strokeWidth="2"
                    d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold ml-4">Leaderboard</h3>
            </div>

            <div className="space-y-4">
              <div
                className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold">
                  1</div>
                <div className="ml-4 flex-grow">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Sarah K.</span>
                    <span className="text-purple-600 font-bold">2,450 pts</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded mt-2">
                    <div className="h-2 bg-yellow-400 rounded w-[95%]"></div>
                  </div>
                </div>
              </div>

              <div
                className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold">2
                </div>
                <div className="ml-4 flex-grow">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Mike R.</span>
                    <span className="text-purple-600 font-bold">2,290 pts</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded mt-2">
                    <div className="h-2 bg-gray-300 rounded W-[85%]" ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-neutral-50 rounded-2xl p-8 shadow-lg animate__animated animate__fadeInLeft">
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stopColor="round" strokeLinejoin="round" strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold ml-4">Experience Points</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold">Current Level: 15</span>
                  <span className="text-purple-600 font-bold">4,250 / 5,000 XP</span>
                </div>
                <div className="h-4 bg-gray-200 rounded-full">
                  <div className="h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full W-[85%]" ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-neutral-50 rounded-2xl p-8 shadow-lg animate__animated animate__fadeInRight">
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 bg-red-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stopColor="round" strokeLinejoin="round" strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold ml-4">Rewards Store</h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div
                className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <div className="text-center">
                  <span className="block font-semibold text-gray-800">Premium Course</span>
                  <span className="text-purple-600 font-bold">5,000 points</span>
                </div>
              </div>
              <div
                className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <div className="text-center">
                  <span className="block font-semibold text-gray-800">1-on-1 Mentoring</span>
                  <span className="text-purple-600 font-bold">10,000 points</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GamificationElements