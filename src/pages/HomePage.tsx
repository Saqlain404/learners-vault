
import Navbar from "../components/Navbar";
import HeaderImg from "../assets/images/3D-email.webp";
import AboutImg from "../assets/images/about.png";
import CardImg1 from "../assets/images/card1.png";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="bg-slate-900 min-h-screen">
      <Navbar />
      <div className="container mx-auto mt-16 px-4 md:p-4">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 py-12 md:my-24">
          <div className="text-center md:text-left space-y-6 md:space-y-8 w-full md:w-1/2">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold text-white">
              Unlock Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 font-bold">
                Potential
              </span>{" "}
              with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 font-bold">
                Expert-Led
              </span>{" "}
              Learning
            </h1>
            <p className="text-gray-200 text-lg md:text-xl">
              Join India's Premier Coaching Institute for Competitive Exams,
              <br className="hidden sm:block" /> Skill Development, and Career Growth.
            </p>
            <button className="bg-amber-600 text-white rounded-full px-6 py-3 md:p-4 hover:bg-cyan-500 hover:text-slate-900 hover:scale-105 hover:shadow-lg hover:shadow-gray-300 transition-all duration-300 mx-auto md:mx-0">
              FREE DEMO CLASS
            </button>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <img src={HeaderImg} alt="" className="w-full max-w-md mx-auto" />
          </div>
        </div>

        {/* About Section */}
        <div className="flex flex-col md:flex-row gap-8 mt-16">
          <div className="w-full md:w-1/2">
            <img src={AboutImg} alt="" className="w-full rounded-lg" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col space-y-4 md:space-y-6">
            <h2 className="text-3xl md:text-5xl font-semibold text-white text-center md:text-left">
              Why Thousands{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 font-bold">
                Trust Learner's Vault
              </span>
            </h2>
            <p className="text-gray-200 text-base md:text-lg text-center md:text-left">
              At Learners Vault, we are dedicated to empowering students and
              professionals with the knowledge and skills they need to excel in
              their careers. Our expert-led courses cover a wide range of topics,
              from competitive exam preparation to skill development and career
              advancement.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 my-12 md:my-24">
          <div className="bg-slate-800 p-4 rounded-lg">
            <h3 className="text-cyan-400 text-xl font-bold">10,000+</h3>
            <p className="text-gray-300 text-sm md:text-base">Students Trained</p>
          </div>
          <div className="bg-slate-800 p-4 rounded-lg">
            <h3 className="text-cyan-400 text-xl font-bold">95%</h3>
            <p className="text-gray-300 text-sm md:text-base">Success Rate</p>
          </div>
          <div className="bg-slate-800 p-4 rounded-lg">
            <h3 className="text-cyan-400 text-xl font-bold">50+</h3>
            <p className="text-gray-300 text-sm md:text-base">Expert Faculty</p>
          </div>
          <div className="bg-slate-800 p-4 rounded-lg">
            <h3 className="text-cyan-400 text-xl font-bold">15+</h3>
            <p className="text-gray-300 text-sm md:text-base">Years Experience</p>
          </div>
        </div>

        {/* Programs Section */}
        <div className="my-12 md:my-16">
          <h2 className="text-3xl md:text-5xl text-white font-semibold mb-8 md:mb-16 text-center">
            Our Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-6 md:mt-8">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg space-y-6 hover:scale-105 transition-transform">
              <img src={CardImg1} alt="Competitive Exams" className="w-full max-w-xs mx-auto" />
              <h3 className="text-xl md:text-2xl font-bold text-center">Competitive Exams</h3>
              <p className="text-center">
                Prepare for exams like JEE, NEET, UPSC, and more with our expert
                faculty.
              </p>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-input shadow-sm h-9 px-4 py-2 w-full mb-2 bg-emerald-500 hover:bg-emerald-600 text-white hover:text-white border-0">
                Enroll Now
              </button>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg space-y-6 hover:scale-105 transition-transform">
              <img src={CardImg1} alt="Skill Development" className="w-full max-w-xs mx-auto" />
              <h3 className="text-xl md:text-2xl font-bold text-center">Skill Development</h3>
              <p className="text-center">
                Enhance your skills in areas like coding, data science, and
                digital marketing.
              </p>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-input shadow-sm h-9 px-4 py-2 w-full mb-2 bg-purple-500 hover:bg-purple-600 text-white hover:text-white border-0">
                Enroll Now
              </button>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg space-y-6 hover:scale-105 transition-transform">
              <img src={CardImg1} alt="Career Growth" className="w-full max-w-xs mx-auto" />
              <h3 className="text-xl md:text-2xl font-bold text-center">Career Growth</h3>
              <p className="text-center">
                Get guidance on career planning, resume building, and interview
                preparation.
              </p>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-input shadow-sm h-9 px-4 py-2 w-full mb-2 bg-blue-500 hover:bg-blue-600 text-white hover:text-white border-0">
                Enroll Now
              </button>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="my-12 md:my-16 bg-slate-800 rounded-lg p-6 md:p-8">
          <h2 className="text-3xl md:text-5xl text-white font-semibold mb-8 md:mb-16 text-center">
            What Our Students Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-slate-700 p-4 md:p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-cyan-400 rounded-full mr-3 md:mr-4"></div>
                <div>
                  <h4 className="text-white font-bold">Rahul Sharma</h4>
                  <p className="text-gray-300 text-sm md:text-base">JEE Advanced</p>
                </div>
              </div>
              <p className="text-gray-200 text-sm md:text-base">
                "Learner's Vault helped me crack JEE with their personalized
                attention and excellent study material. The faculty is truly
                exceptional!"
              </p>
            </div>
            <div className="bg-slate-700 p-4 md:p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-400 rounded-full mr-3 md:mr-4"></div>
                <div>
                  <h4 className="text-white font-bold">Priya Patel</h4>
                  <p className="text-gray-300 text-sm md:text-base">NEET</p>
                </div>
              </div>
              <p className="text-gray-200 text-sm md:text-base">
                "The NEET crash course was a game-changer for me. The teachers
                explain concepts so clearly and the mock tests were exactly like
                the real exam."
              </p>
            </div>
            <div className="bg-slate-700 p-4 md:p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-400 rounded-full mr-3 md:mr-4"></div>
                <div>
                  <h4 className="text-white font-bold">Arjun Mehta</h4>
                  <p className="text-gray-300 text-sm md:text-base">UPSC</p>
                </div>
              </div>
              <p className="text-gray-200 text-sm md:text-base">
                "The comprehensive UPSC program covered everything from current
                affairs to answer writing. I couldn't have cleared prelims
                without their guidance."
              </p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="my-12 md:my-16">
          <h2 className="text-3xl md:text-5xl text-white font-semibold mb-8 md:mb-16 text-center">
            Our Unique Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-slate-800 p-4 md:p-6 rounded-lg text-center">
              <div className="bg-cyan-500 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 md:h-8 md:w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                Expert Faculty
              </h3>
              <p className="text-gray-300 text-sm md:text-base">
                Learn from IIT/NIT alumni and industry experts with proven track
                records.
              </p>
            </div>
            <div className="bg-slate-800 p-4 md:p-6 rounded-lg text-center">
              <div className="bg-purple-500 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 md:h-8 md:w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                Study Material
              </h3>
              <p className="text-gray-300 text-sm md:text-base">
                Curated content designed by experts to maximize your learning
                potential.
              </p>
            </div>
            <div className="bg-slate-800 p-4 md:p-6 rounded-lg text-center">
              <div className="bg-amber-500 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 md:h-8 md:w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                Doubt Resolution
              </h3>
              <p className="text-gray-300 text-sm md:text-base">
                24/7 doubt support with dedicated mentors for every student.
              </p>
            </div>
            <div className="bg-slate-800 p-4 md:p-6 rounded-lg text-center">
              <div className="bg-blue-500 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 md:h-8 md:w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                Performance Analytics
              </h3>
              <p className="text-gray-300 text-sm md:text-base">
                Detailed reports to track your progress and identify improvement
                areas.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="my-12 md:my-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg p-6 md:p-8 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Career?
          </h2>
          <p className="text-gray-100 text-lg md:text-xl mb-6 md:mb-8">
            Join thousands of successful students who trusted Learner's Vault for
            their preparation.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-4">
            <button className="bg-white text-cyan-600 font-bold rounded-full px-6 py-2 md:px-8 md:py-3 hover:bg-gray-100 hover:scale-105 transition-transform">
              Enroll Now
            </button>
            <button className="bg-transparent border-2 border-white text-white font-bold rounded-full px-6 py-2 md:px-8 md:py-3 hover:bg-white hover:text-cyan-600 hover:scale-105 transition-transform">
              Speak with Counselor
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;