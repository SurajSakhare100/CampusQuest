import React from 'react'

function Footer() {
  return (
    <footer id="footer" className="bg-neutral-900 text-white">
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-6">
          <div
            className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            CampusQuest
          </div>
          <p className="text-gray-400">
            Transforming education through AI-powered personalized learning experiences.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497 -3.753C20.18 7.773 21.692 5.25 22 4.009z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.819-.26.819-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.217.694.825.577C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li><a href="#hero" className="text-gray-400 hover:text-purple-500 transition-colors">Home</a></li>
            <li><a href="#features" className="text-gray-400 hover:text-purple-500 transition-colors">Features</a></li>
            <li><a href="#howItWorks" className="text-gray-400 hover:text-purple-500 transition-colors">How It Works</a>
            </li>
            <li><a href="#pricing" className="text-gray-400 hover:text-purple-500 transition-colors">Pricing</a></li>
            <li><a href="#testimonials"
                className="text-gray-400 hover:text-purple-500 transition-colors">Testimonials</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">Blog</a></li>
            <li><a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">Documentation</a></li>
            <li><a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">Community</a></li>
            <li><a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">Support</a></li>
            <li><a href="#faq" className="text-gray-400 hover:text-purple-500 transition-colors">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
          <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and features.</p>
          <form className="space-y-4">
            <div>
              <input type="email" placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-neutral-800 border border-neutral-700 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"/>
            </div>
            <button type="submit"
              className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-neutral-800">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 LearnAI. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer
