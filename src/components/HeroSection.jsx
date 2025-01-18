import React from 'react'
import hero from './../assets/hero.png'
function HeroSection() {
  return (
    <section id="hero" className="bg-neutral-900 min-h-screen pt-16 flex">
        <div
          className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-20 lg:flex-row items-center justify-between py-12">
          <div className="lg:w-1/2 text-white space-y-8 animate__animated animate__fadeInLeft">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">AI-Powered
                Learning</span>
              <br />
              That Adapts to You
            </h1>
            <p className="text-xl text-gray-300">
              Experience personalized learning enhanced by artificial intelligence and gamification. Master new skills
              while having fun!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 animate__animated animate__pulse animate__infinite">
                Start Learning Free
              </button>
              <button
                className="px-8 py-4 border-2 border-purple-500 rounded-full text-white font-semibold hover:bg-purple-500/10 transition-all duration-300">
                Watch Demo
              </button>
            </div>
            <div className="flex items-center gap-8 pt-6">
              <div className="flex flex-col">
                <span
                  className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">50K+</span>
                <span className="text-gray-400">Active Learners</span>
              </div>
              <div className="flex flex-col">
                <span
                  className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">100+</span>
                <span className="text-gray-400">AI Modules</span>
              </div>
              <div className="flex flex-col">
                <span
                  className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">95%</span>
                <span className="text-gray-400">Success Rate</span>
              </div>
            </div>
          </div>
  
          <div className="lg:w-1/2 mt-12 lg:mt-0 animate__animated animate__fadeInRight">
            <div className="relative">
              <div
                className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-75 animate-pulse">
              </div>
              <div className="relative bg-neutral-800 rounded-lg p-6">
                <div className="aspect-video bg-neutral-700 rounded-lg flex items-center justify-center">
                  <div className="text-white text-opacity-50 text-center">
                    <img src={hero} alt="" />
                    {/* <p className="mt-2">Interactive Learning Platform Preview</p> */}
                  </div>
                </div>
                <div className="mt-4 space-y-3">
                  <div className="h-2 bg-neutral-700 rounded animate-pulse"></div>
                  <div className="h-2 bg-neutral-700 rounded animate-pulse w-3/4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default HeroSection
