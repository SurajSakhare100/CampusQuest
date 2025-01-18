import React from 'react'

function Testimonials() {
  return (
    <section id="testimonials" className="bg-neutral-900 py-20">
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 animate__animated animate__fadeIn">
        <h2 className="text-4xl font-bold text-white mb-4">
          Success Stories from Our Learners
        </h2>
        <p className="text-xl text-gray-400">
          See how our AI-powered platform is transforming education
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          className="bg-neutral-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate__animated animate__fadeInUp">
          <div className="flex items-center mb-6">
            <div
              className="w-14 h-14 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
              SK
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-semibold">Sarah Kennedy</h4>
              <p className="text-gray-400">Software Developer</p>
            </div>
          </div>
          <div className="mb-6">
            <div className="flex text-yellow-400 mb-2">
              ★★★★★
            </div>
            <p className="text-gray-700">"The AI-powered personalization is incredible. It's like having a personal
              tutor who knows exactly what I need to learn and how I learn best. My coding skills improved
              dramatically in just 3 months!"</p>
          </div>
          <div className="flex items-center text-purple-600">
            <span className="font-semibold">Skills gained:</span>
            <span className="ml-2 text-sm bg-purple-100 px-3 py-1 rounded-full">Python</span>
            <span className="ml-2 text-sm bg-purple-100 px-3 py-1 rounded-full">AI</span>
          </div>
        </div>

        <div
          className="bg-neutral-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate__animated animate__fadeInUp"
          style={{"animationDelay": "0.2s"}}>
          <div className="flex items-center mb-6">
            <div
              className="w-14 h-14 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
              MR
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-semibold">Michael Rodriguez</h4>
              <p className="text-gray-400">Business Student</p>
            </div>
          </div>
          <div className="mb-6">
            <div className="flex text-yellow-400 mb-2">
              ★★★★★
            </div>
            <p className="text-gray-700">"The gamification elements make learning addictive! I've never been so
              motivated to study. The competitive aspects and rewards system really keep me engaged and pushing for
              more."</p>
          </div>
          <div className="flex items-center text-purple-600">
            <span className="font-semibold">Skills gained:</span>
            <span className="ml-2 text-sm bg-purple-100 px-3 py-1 rounded-full">Marketing</span>
            <span className="ml-2 text-sm bg-purple-100 px-3 py-1 rounded-full">Analytics</span>
          </div>
        </div>

        <div
          className="bg-neutral-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate__animated animate__fadeInUp"
          style={{"animationDelay": "0.4s"}}>
          <div className="flex items-center mb-6">
            <div
              className="w-14 h-14 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
              AL
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-semibold">Amy Liu</h4>
              <p className="text-gray-400">Data Scientist</p>
            </div>
          </div>
          <div className="mb-6">
            <div className="flex text-yellow-400 mb-2">
              ★★★★★
            </div>
            <p className="text-gray-700">"The adaptive learning system is phenomenal. It identified my knowledge gaps
              and created a custom curriculum that helped me master machine learning concepts faster than I thought
              possible."</p>
          </div>
          <div className="flex items-center text-purple-600">
            <span className="font-semibold">Skills gained:</span>
            <span className="ml-2 text-sm bg-purple-100 px-3 py-1 rounded-full">ML</span>
            <span className="ml-2 text-sm bg-purple-100 px-3 py-1 rounded-full">Statistics</span>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center animate__animated animate__fadeIn">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-2">
            <span className="text-4xl font-bold text-purple-600">98%</span>
            <div className="text-left">
              <p className="text-gray-400">Learner</p>
              <p className="text-gray-400">Satisfaction</p>
            </div>
          </div>
          <div className="h-px w-24 bg-purple-200"></div>
          <p className="text-gray-400 max-w-md">Join thousands of satisfied learners who have transformed their skills
            with our AI-powered platform</p>
          <button
            className="mt-4 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300">
            Start Learning Today
          </button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Testimonials
