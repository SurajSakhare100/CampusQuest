import React, { useState } from 'react';

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the answer visibility
  };

  return (
    <section id="faq" className="bg-neutral-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-400">
            Get answers to common questions about our AI learning platform
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {/* FAQ 1 */}
          <div className="bg-neutral-50 rounded-xl overflow-hidden animate__animated animate__fadeInUp">
            <button
              className="faq-button w-full px-6 py-4 flex justify-between items-center"
              onClick={() => toggleAnswer(0)}
            >
              <span className="text-lg font-semibold text-gray-900">How does the AI personalization work?</span>
              <svg
                className={`w-6 h-6 text-gray-500 transform transition-transform duration-200 ${activeIndex === 0 ? 'rotate-45' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  className="vertical"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v12"
                ></path>
                <path
                  className="horizontal"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 12h12"
                ></path>
              </svg>
            </button>
            <div className={`faq-answer px-6 py-4 bg-white ${activeIndex === 0 ? '' : 'hidden'}`}>
              <p className="text-gray-600">
                Our AI system analyzes your learning patterns, progress, and preferences in real-time. It then
                adjusts the difficulty, pacing, and content delivery to match your unique learning style and needs.
              </p>
            </div>
          </div>

          {/* FAQ 2 */}
          <div className="bg-neutral-50 rounded-xl overflow-hidden animate__animated animate__fadeInUp">
            <button
              className="faq-button w-full px-6 py-4 flex justify-between items-center"
              onClick={() => toggleAnswer(1)}
            >
              <span className="text-lg font-semibold text-gray-900">What kind of courses are available?</span>
              <svg
                className={`w-6 h-6 text-gray-500 transform transition-transform duration-200 ${activeIndex === 1 ? 'rotate-45' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  className="vertical"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v12"
                ></path>
                <path
                  className="horizontal"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 12h12"
                ></path>
              </svg>
            </button>
            <div className={`faq-answer px-6 py-4 bg-white ${activeIndex === 1 ? '' : 'hidden'}`}>
              <p className="text-gray-600">
                We offer a wide range of courses including programming, data science, business, marketing, design,
                and more. All courses are regularly updated and enhanced with AI-powered learning tools.
              </p>
            </div>
          </div>

          {/* FAQ 3 */}
          <div className="bg-neutral-50 rounded-xl overflow-hidden animate__animated animate__fadeInUp">
            <button
              className="faq-button w-full px-6 py-4 flex justify-between items-center"
              onClick={() => toggleAnswer(2)}
            >
              <span className="text-lg font-semibold text-gray-900">How does the gamification system work?</span>
              <svg
                className={`w-6 h-6 text-gray-500 transform transition-transform duration-200 ${activeIndex === 2 ? 'rotate-45' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  className="vertical"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v12"
                ></path>
                <path
                  className="horizontal"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 12h12"
                ></path>
              </svg>
            </button>
            <div className={`faq-answer px-6 py-4 bg-white ${activeIndex === 2 ? '' : 'hidden'}`}>
              <p className="text-gray-600">
                Our platform includes points, badges, leaderboards, and challenges. You earn rewards for completing
                lessons, maintaining streaks, and achieving learning milestones. These elements make learning more
                engaging and motivating.
              </p>
            </div>
          </div>

          {/* FAQ 4 */}
          <div className="bg-neutral-50 rounded-xl overflow-hidden animate__animated animate__fadeInUp">
            <button
              className="faq-button w-full px-6 py-4 flex justify-between items-center"
              onClick={() => toggleAnswer(3)}
            >
              <span className="text-lg font-semibold text-gray-900">Can I switch between different plans?</span>
              <svg
                className={`w-6 h-6 text-gray-500 transform transition-transform duration-200 ${activeIndex === 3 ? 'rotate-45' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  className="vertical"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v12"
                ></path>
                <path
                  className="horizontal"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 12h12"
                ></path>
              </svg>
            </button>
            <div className={`faq-answer px-6 py-4 bg-white ${activeIndex === 3 ? '' : 'hidden'}`}>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Your progress and achievements will be
                preserved when switching between plans.
              </p>
            </div>
          </div>

          {/* FAQ 5 */}
          <div className="bg-neutral-50 rounded-xl overflow-hidden animate__animated animate__fadeInUp">
            <button
              className="faq-button w-full px-6 py-4 flex justify-between items-center"
              onClick={() => toggleAnswer(4)}
            >
              <span className="text-lg font-semibold text-gray-900">Is there a mobile app available?</span>
              <svg
                className={`w-6 h-6 text-gray-500 transform transition-transform duration-200 ${activeIndex === 4 ? 'rotate-45' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  className="vertical"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v12"
                ></path>
                <path
                  className="horizontal"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 12h12"
                ></path>
              </svg>
            </button>
            <div className={`faq-answer px-6 py-4 bg-white ${activeIndex === 4 ? '' : 'hidden'}`}>
              <p className="text-gray-600">
                Yes, our platform is available on both iOS and Android devices. The mobile app includes all features
                from the web version, allowing you to learn on the go.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
