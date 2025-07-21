import Navbar from "../components/Navbar";
import AboutHeroImg from "../assets/images/about-hero.jpg";
import FounderImg from "../assets/images/moaz-sir.jpg";
// import MissionImg from "../assets/images/mission.jpg";
// import ValuesImg from "../assets/images/values.jpg";
import Footer from "../components/Footer";


const AboutPage = () => {
  return (
    <div className="bg-slate-900 min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute -inset-6 bg-gradient-to-r from-slate-900 to-slate-700/50 "></div>
        <img 
          src={AboutHeroImg} 
          alt="Students learning" 
          className="w-full h-96 object-cover"
        />
        <div className="container mx-auto px-4 relative -mt-64 md:-mt-52 ">
          <div className="max-w-2xl flex flex-col mx-auto text-center  bg-opacity-90 p-8 rounded-lg">
            <h1 className="md:text-5xl text-4xl font-bold text-white mb-4">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Learner's Vault</span>
            </h1>
            <p className="text-gray-300 md:text-lg">
              Empowering students with quality education and personalize guidance since 2010.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Our Story Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Journey</span>
            </h2>
            <p className="text-gray-300 mb-4">
              Founded in 2020 by Moaz Sir, Learner's Vault began as a small coaching center with a single classroom and a vision to transform education. What started as a passion project to help local students prepare for competitive exams has now grown into one of India's premier coaching institutes.
            </p>
            <p className="text-gray-300 mb-4">
              Over the past decade, we've helped over 10,000 students achieve their academic dreams, with many securing top ranks in JEE, NEET, UPSC, and other prestigious examinations.
            </p>
            <p className="text-gray-300">
              Our success stems from our unwavering commitment to quality education, personalized attention, and innovative teaching methodologies that adapt to each student's unique learning style.
            </p>
          </div>
          <div className="flex-1">
            <div className="bg-slate-800 p-2 rounded-lg shadow-xl">
              <img 
                src={AboutHeroImg} 
                alt="Our first classroom" 
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div className="bg-slate-800 p-8 rounded-lg">
            <div className="flex items-center mb-6">
              <div className="bg-cyan-500 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Our Mission</h3>
            </div>
            <p className="text-gray-300">
              To democratize quality education by making expert guidance accessible to all students, regardless of their background. We aim to nurture not just academic excellence but also critical thinking, problem-solving skills, and lifelong learning habits.
            </p>
          </div>
          <div className="bg-slate-800 p-8 rounded-lg">
            <div className="flex items-center mb-6">
              <div className="bg-blue-500 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Our Vision</h3>
            </div>
            <p className="text-gray-300">
              To become India's most trusted learning partner, recognized for transforming education through innovative pedagogy, technology integration, and a student-centric approach that prepares learners not just for exams, but for life's challenges.
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-lg hover:translate-y-2 transition-transform">
              <div className="bg-amber-500 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-2">Excellence</h3>
              <p className="text-gray-300 text-center">
                We strive for the highest standards in teaching, curriculum, and student outcomes, continuously improving our methods.
              </p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg hover:translate-y-2 transition-transform">
              <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-2">Integrity</h3>
              <p className="text-gray-300 text-center">
                We maintain honesty, transparency, and ethical practices in all our interactions with students, parents, and staff.
              </p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg hover:translate-y-2 transition-transform">
              <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-2">Innovation</h3>
              <p className="text-gray-300 text-center">
                We embrace creative teaching methods and technologies to make learning more effective, engaging, and accessible.
              </p>
            </div>
          </div>
        </div>

        {/* Founder Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-24 bg-slate-800 rounded-lg p-8">
          <div className="flex-1">
            <img 
              src={FounderImg} 
              alt="Er. Moaz Sir, Founder" 
              className="rounded-lg w-full max-w-md mx-auto shadow-xl"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-white mb-4">
              Message from Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Founder</span>
            </h2>
            <p className="text-gray-300 mb-6 italic text-lg">
              "Education is not just about passing exams; it's about empowering young minds to think critically, solve problems creatively, and contribute meaningfully to society."
            </p>
            <p className="text-gray-300 mb-4">
              Dr. Amit Sharma, an IIT Delhi alumnus and former professor with 15+ years of teaching experience, founded Learner's Vault with a simple belief: every student deserves access to quality education tailored to their unique learning needs.
            </p>
            <p className="text-gray-300">
              Under his leadership, our institute has pioneered several innovative teaching methodologies that have helped thousands of students achieve academic success beyond their expectations.
            </p>
          </div>
        </div>

        {/* Milestones Section */}
       <div className="mb-24 px-4">
  <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 md:mb-12 text-center">
    Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Milestones</span>
  </h2>
  
  <div className="relative">
    {/* Timeline line - visible on all screens */}
    <div className="absolute left-4 md:left-1/2 h-full w-0.5 md:w-1 bg-gradient-to-b from-cyan-500 to-blue-600 -ml-0.5 z-0"></div>
    
    {/* Timeline items */}
    <div className="space-y-8 pl-10 md:pl-0">
      {/* Item 1 */}
      <div className="flex flex-col md:flex-row items-start md:items-center relative">
        {/* Mobile dot */}
        <div className="absolute -left-8 md:hidden w-4 h-4 rounded-full bg-cyan-500 z-10 border-2 border-slate-900 top-4"></div>
        
        <div className="flex-1 md:text-right md:pr-8  order-1 md:order-1">
          <h3 className="text-xl md:text-2xl font-bold text-white">2010</h3>
          <p className="text-gray-300 text-sm md:text-base">Founded with 1 center and 12 students</p>
        </div>
        
        {/* Desktop dot */}
        <div className="hidden md:block w-4 h-4 rounded-full bg-cyan-500 z-10 border-2 border-slate-900 order-2 md:order-2"></div>
        
        <div className="flex-1 md:pl-8 py-4 order-3 md:order-3"></div>
      </div>
      
      {/* Item 2 */}
      <div className="flex flex-col md:flex-row items-start md:items-center relative">
        {/* Mobile dot */}
        <div className="absolute -left-8 md:hidden w-4 h-4 rounded-full bg-blue-500 z-10 border-2 border-slate-900 top-4"></div>
        
        <div className="flex-1 md:pl-8  order-1 md:order-3">
          <h3 className="text-xl md:text-2xl font-bold text-white">2014</h3>
          <p className="text-gray-300 text-sm md:text-base">Expanded to 5 centers across Delhi NCR</p>
        </div>
        
        {/* Desktop dot */}
        <div className="hidden md:block w-4 h-4 rounded-full bg-blue-500 z-10 border-2 border-slate-900 order-2 md:order-2"></div>
        
        <div className="flex-1 md:text-right md:pl-8 py-4 order-3 md:order-1"></div>
      </div>
      
      {/* Item 3 */}
      <div className="flex flex-col md:flex-row items-start md:items-center relative">
        {/* Mobile dot */}
        <div className="absolute -left-8 md:hidden w-4 h-4 rounded-full bg-purple-500 z-10 border-2 border-slate-900 top-4"></div>
        
        <div className="flex-1 md:text-right md:pr-8  order-1 md:order-1">
          <h3 className="text-xl md:text-2xl font-bold text-white">2017</h3>
          <p className="text-gray-300 text-sm md:text-base">Launched online learning platform</p>
        </div>
        
        {/* Desktop dot */}
        <div className="hidden md:block w-4 h-4 rounded-full bg-purple-500 z-10 border-2 border-slate-900 order-2 md:order-2"></div>
        
        <div className="flex-1 md:pl-8 py-4 order-3 md:order-3"></div>
      </div>
      
      {/* Item 4 */}
      <div className="flex flex-col md:flex-row items-start md:items-center relative">
        {/* Mobile dot */}
        <div className="absolute -left-8 md:hidden w-4 h-4 rounded-full bg-amber-500 z-10 border-2 border-slate-900 top-4"></div>
        
        <div className="flex-1 md:pl-8  order-1 md:order-3">
          <h3 className="text-xl md:text-2xl font-bold text-white">2020</h3>
          <p className="text-gray-300 text-sm md:text-base">10,000+ students trained milestone</p>
        </div>
        
        {/* Desktop dot */}
        <div className="hidden md:block w-4 h-4 rounded-full bg-amber-500 z-10 border-2 border-slate-900 order-2 md:order-2"></div>
        
        <div className="flex-1 md:text-right md:pl-8 py-4 order-3 md:order-1"></div>
      </div>
      
      {/* Item 5 */}
      <div className="flex flex-col md:flex-row items-start md:items-center relative">
        {/* Mobile dot */}
        <div className="absolute -left-8 md:hidden w-4 h-4 rounded-full bg-green-500 z-10 border-2 border-slate-900 top-4"></div>
        
        <div className="flex-1 md:text-right md:pr-8  order-1 md:order-1">
          <h3 className="text-xl md:text-2xl font-bold text-white">2023</h3>
          <p className="text-gray-300 text-sm md:text-base">National recognition with 15+ centers across India</p>
        </div>
        
        {/* Desktop dot */}
        <div className="hidden md:block w-4 h-4 rounded-full bg-green-500 z-10 border-2 border-slate-900 order-2 md:order-2"></div>
        
        <div className="flex-1 md:pl-8 py-4 order-3 md:order-3"></div>
      </div>
    </div>
  </div>
</div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Expert Faculty</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-800 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-cyan-500/20 transition-shadow">
              <div className="h-64 bg-cyan-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">Dr. Neha Gupta</h3>
                <p className="text-cyan-400 mb-3">Physics Department Head</p>
                <p className="text-gray-300 text-sm">IIT Bombay PhD, 12+ years teaching experience</p>
              </div>
            </div>
            <div className="bg-slate-800 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-blue-500/20 transition-shadow">
              <div className="h-64 bg-blue-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">Prof. Rajesh Iyer</h3>
                <p className="text-blue-400 mb-3">Mathematics Mentor</p>
                <p className="text-gray-300 text-sm">ISI Kolkata, 15+ years JEE coaching experience</p>
              </div>
            </div>
            <div className="bg-slate-800 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-purple-500/20 transition-shadow">
              <div className="h-64 bg-purple-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">Dr. Priya Singh</h3>
                <p className="text-purple-400 mb-3">Chemistry Expert</p>
                <p className="text-gray-300 text-sm">NISER PhD, specializes in organic chemistry</p>
              </div>
            </div>
            <div className="bg-slate-800 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-amber-500/20 transition-shadow">
              <div className="h-64 bg-amber-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">Ankit Verma</h3>
                <p className="text-amber-400 mb-3">UPSC Mentor</p>
                <p className="text-gray-300 text-sm">IAS officer, 7 years mentoring experience</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="bg-transparent border-2 border-cyan-500 text-cyan-400 font-bold rounded-full px-8 py-3 hover:bg-cyan-500 hover:text-white transition-colors">
              View All Faculty Members
            </button>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default AboutPage;