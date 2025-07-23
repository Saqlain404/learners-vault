
import Navbar from "../components/Navbar";
import CoursesHeroImg from "../assets/images/courses-hero.jpeg";
// import CompetitiveIcon from "../assets/icons/competitive.svg";
// import SkillDevIcon from "../assets/icons/skill-dev.svg";
// import CareerIcon from "../assets/icons/career.svg";
// import OnlineIcon from "../assets/icons/online.svg";
// import TestSeriesIcon from "../assets/icons/test-series.svg";
// import CrashCourseIcon from "../assets/icons/crash-course.svg";
import Footer from "../components/Footer";
import { FaComputer } from "react-icons/fa6";
import { GiGrowth, GiSkills } from "react-icons/gi";
import { MdClass } from "react-icons/md";
import { FcDocument } from "react-icons/fc";
import { SiCoursera } from "react-icons/si";

const CoursesPage = () => {
  const courses = [
    {
      id: 1,
      category: "Competitive Exams",
      title: "JEE Main & Advanced",
      description: "Comprehensive preparation for engineering entrance exams with IIT alumni faculty.",
      duration: "12 Months",
      batches: "Weekday & Weekend",
      icon: <FaComputer className="h-6 w-6 text-white" />,
      color: "bg-cyan-500",
      features: [
        "1000+ hours of intensive training",
        "Personalized doubt solving",
        "10 full-length mock tests",
        "Study material & question banks"
      ]
    },
    {
      id: 2,
      category: "Competitive Exams",
      title: "NEET UG Preparation",
      description: "Complete medical entrance preparation with experienced faculty and proven results.",
      duration: "12 Months",
      batches: "Weekday & Weekend",
      icon: <FaComputer className="h-6 w-6 text-white" />,
      color: "bg-blue-500",
      features: [
        "Biology, Physics, Chemistry coverage",
        "Regular performance analysis",
        "Previous year paper solutions",
        "Special focus on NCERT"
      ]
    },
    {
      id: 3,
      category: "Competitive Exams",
      title: "UPSC Civil Services",
      description: "Holistic preparation for UPSC with current affairs focus and answer writing practice.",
      duration: "18 Months",
      batches: "Weekday & Weekend",
      icon: <FaComputer className="h-6 w-6 text-white" />,
      color: "bg-purple-500",
      features: [
        "GS, CSAT, Optional subjects",
        "Daily current affairs updates",
        "Essay and answer writing practice",
        "Interview guidance"
      ]
    },
    {
      id: 4,
      category: "Skill Development",
      title: "Full Stack Development",
      description: "Master front-end and back-end technologies to become job-ready developer.",
      duration: "6 Months",
      batches: "Weekday & Weekend",
      icon: <GiSkills className="h-6 w-6 text-white" />,
      color: "bg-amber-500",
      features: [
        "HTML, CSS, JavaScript, React",
        "Node.js, Express, MongoDB",
        "Real-world projects",
        "Placement assistance"
      ]
    },
    {
      id: 5,
      category: "Skill Development",
      title: "Data Science & AI",
      description: "Learn Python, ML algorithms and data analysis tools from industry experts.",
      duration: "8 Months",
      batches: "Weekday & Weekend",
      icon: <GiSkills className="h-6 w-6 text-white" />,
      color: "bg-green-500",
      features: [
        "Python programming",
        "Machine learning fundamentals",
        "Data visualization",
        "Capstone project"
      ]
    },
    {
      id: 6,
      category: "Career Growth",
      title: "Resume & Interview Prep",
      description: "Craft winning resumes and master interview techniques for your dream job.",
      duration: "1 Month",
      batches: "Weekend",
      icon: <GiGrowth className="h-6 w-6 text-white" />,
      color: "bg-red-500",
      features: [
        "Resume building workshops",
        "Mock interviews",
        "HR round preparation",
        "LinkedIn profile optimization"
      ]
    }
  ];

  const specialPrograms = [
    {
      id: 1,
      title: "Online Live Classes",
      description: "Attend classes from anywhere with interactive live sessions.",
      icon: <MdClass className="h-6 w-6 text-white" />,
      color: "bg-cyan-500"
    },
    {
      id: 2,
      title: "Test Series",
      description: "Comprehensive test series with detailed performance analysis.",
      icon: <FcDocument className="h-6 w-6 text-white" />,
      color: "bg-purple-500"
    },
    {
      id: 3,
      title: "Crash Courses",
      description: "Last-minute revision programs before major exams.",
      icon: <SiCoursera className="h-6 w-6 text-white" />,
      color: "bg-amber-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white ">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 md:-inset-6 bg-gradient-to-r from-slate-900 to-slate-700/50 "></div>
        <img 
          src={CoursesHeroImg}
          alt="Students learning" 
          className="w-full h-96 object-cover object-center md:object-right"
        />
        <div className="container mx-auto px-4 relative  -mt-52 ">
          <div className="max-w-2xl flex flex-col mx-auto text-center  bg-opacity-90 p-8 rounded-lg">
            <h1 className="text-5xl font-bold text-white mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Courses</span>
            </h1>
            <p className="text-gray-300 text-lg">
              Discover programs designed to unlock your potential and achieve academic excellence.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Course Categories */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Explore by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Category</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-8 rounded-lg text-center hover:shadow-lg hover:shadow-cyan-500/20 transition-shadow hover:-translate-y-2">
              <div className="bg-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaComputer className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Competitive Exams</h3>
              <p className="text-gray-300 mb-6">
                Comprehensive preparation for JEE, NEET, UPSC, GATE and other national level exams.
              </p>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-input shadow-sm h-9 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white hover:text-white border-0">
                View Courses
              </button>
            </div>
            
            <div className="bg-slate-800 p-8 rounded-lg text-center hover:shadow-lg hover:shadow-purple-500/20 transition-shadow hover:-translate-y-2">
              <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <GiSkills className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Skill Development</h3>
              <p className="text-gray-300 mb-6">
                Master in-demand skills like coding, data science, digital marketing and more.
              </p>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-input shadow-sm h-9 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white hover:text-white border-0">
                View Courses
              </button>
            </div>
            
            <div className="bg-slate-800 p-8 rounded-lg text-center hover:shadow-lg hover:shadow-amber-500/20 transition-shadow hover:-translate-y-2">
              <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <GiGrowth className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Career Growth</h3>
              <p className="text-gray-300 mb-6">
                Programs to enhance your career prospects with resume building and interview skills.
              </p>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-input shadow-sm h-9 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white hover:text-white border-0">
                View Courses
              </button>
            </div>
          </div>
        </div>

        {/* All Courses Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            All <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Courses</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="bg-slate-800 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-cyan-500/10 transition-shadow">
                <div className={`${course.color} h-3`}></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`${course.color} p-2 rounded-lg mr-4`}>
                      {course.icon} 
                    </div>
                    <span className="text-sm font-medium text-gray-300">{course.category}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{course.title}</h3>
                  <p className="text-gray-300 mb-4">{course.description}</p>
                  
                  <div className="flex items-center text-sm text-gray-400 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="mr-4">{course.duration}</span>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{course.batches}</span>
                  </div>
                  
                  <div className="border-t border-slate-700 pt-4 mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">COURSE HIGHLIGHTS</h4>
                    <ul className="space-y-2">
                      {course.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-cyan-400 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-input shadow-sm h-9 px-4 py-2 bg-transparent border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white">
                      View Details
                    </button>
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-input shadow-sm h-9 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:from-blue-700 hover:to-cyan-600 border-0">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-transparent border-2 border-cyan-500 text-cyan-400 font-bold rounded-full px-8 py-3 hover:bg-cyan-500 hover:text-white transition-colors">
              View All Courses
            </button>
          </div>
        </div>

        {/* Special Programs */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Special <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Programs</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialPrograms.map((program) => (
              <div key={program.id} className="bg-slate-800 rounded-lg p-6 flex items-start hover:shadow-lg hover:shadow-cyan-500/10 transition-shadow">
                <div className={`${program.color} p-3 rounded-lg mr-4 flex-shrink-0`}>
                  {program.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{program.title}</h3>
                  <p className="text-gray-300">{program.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-slate-800 rounded-lg p-8 mb-16">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Our Courses</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-700 p-6 rounded-lg text-center">
              <div className="bg-cyan-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Expert Faculty</h3>
              <p className="text-gray-300">
                Learn from IIT/NIT alumni and industry experts with proven track records.
              </p>
            </div>
            
            <div className="bg-slate-700 p-6 rounded-lg text-center">
              <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Study Material</h3>
              <p className="text-gray-300">
                Comprehensive, updated and exam-focused study material provided.
              </p>
            </div>
            
            <div className="bg-slate-700 p-6 rounded-lg text-center">
              <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Doubt Solving</h3>
              <p className="text-gray-300">
                Dedicated doubt solving sessions with faculty and teaching assistants.
              </p>
            </div>
            
            <div className="bg-slate-700 p-6 rounded-lg text-center">
              <div className="bg-amber-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Performance Tracking</h3>
              <p className="text-gray-300">
                Regular tests and detailed analytics to track your progress.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Still Confused About Which Course to Choose?
          </h2>
          <p className="text-gray-100 text-xl mb-8">
            Our education counselors will help you select the perfect program based on your goals.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-white text-cyan-600 font-bold rounded-full px-8 py-3 hover:bg-gray-100 hover:scale-105 transition-transform">
              Speak with Counselor
            </button>
            <button className="bg-transparent border-2 border-white text-white font-bold rounded-full px-8 py-3 hover:bg-white hover:text-cyan-600 hover:scale-105 transition-transform">
              Call Now: +91 98765 43210
            </button>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default CoursesPage;