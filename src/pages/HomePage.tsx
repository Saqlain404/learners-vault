import Navbar from "../components/Navbar";
import HeaderImg from "../assets/images/3D-email.webp";
import CardImg1 from "../assets/images/card1.png";
import About from "../assets/images/about.png" 
import Footer from "../components/Footer";
import { FaArrowRight, FaChalkboardTeacher } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import { motion } from "framer-motion";
import Image3DCard from "../components/Image3DCard";

const HomePage = () => {
  const aiProducts = [
    {
      id: 1,
      name: "Lesson Plan Generator",
      description: "AI-powered tool that creates customized lesson plans in seconds",
      price: "$9.99/month",
      icon: <FaChalkboardTeacher className="text-3xl md:text-4xl text-purple-500" />,
      popular: true,
    },
    {
      id: 2,
      name: "Auto-Grading Assistant",
      description: "Automatically grades assignments with detailed analytics",
      price: "$14.99/month",
      icon: <AiOutlineDashboard className="text-3xl md:text-4xl text-blue-500" />,
      popular: false,
    },
    {
      id: 3,
      name: "Student Engagement Analyzer",
      description: "Tracks and analyzes student participation",
      price: "$12.99/month",
      icon: <BsGraphUp className="text-3xl md:text-4xl text-green-500" />,
      popular: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row items-center justify-between py-8 md:py-12 lg:py-24 gap-8 ">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Unlock Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Potential
              </span>{" "}
              with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Expert-Led
              </span>{" "}
              Learning
            </h1>
            <p className="text-gray-300 text-base md:text-lg mt-4 mb-6">
              Join India's Premier Coaching Institute for Competitive Exams, Skill Development, and Career Growth.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-sm md:text-base flex items-center justify-center space-x-2 mx-auto lg:mx-0"
            >
              <span>FREE DEMO CLASS</span>
              <FaArrowRight className="text-sm" />
            </motion.button>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full max-w-md">
              <Image3DCard
                imageUrl={HeaderImg}
                title=""
                description=""
                shadow="none"
                bgColor="transparent" width={""} height={""}              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-12 md:py-16 backdrop-blur-sm">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                Why Thousands{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Trust Us
                </span>
              </h2>
              <p className="text-gray-300 text-base md:text-lg mb-6">
                At Learners Vault, we're revolutionizing education through innovative teaching methodologies and cutting-edge technology.
              </p>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  { value: "10,000+", label: "Students Trained", color: "text-cyan-400" },
                  { value: "95%", label: "Success Rate", color: "text-cyan-400" },
                  { value: "50+", label: "Expert Faculty", color: "text-cyan-400" },
                  { value: "15+", label: "Years Experience", color: "text-cyan-400" },
                ].map((stat, index) => (
                  <div key={index} className="bg-gray-800/50 p-3 sm:p-4 rounded-lg border border-gray-700">
                    <h3 className={`${stat.color} text-xl sm:text-2xl font-bold`}>{stat.value}</h3>
                    <p className="text-gray-300 text-xs sm:text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <Image3DCard
                imageUrl={About}
                title=""
                description="" bgColor={""} shadow={""} width={""} height={""}              />
            </div>
          </div>
        </section>

        {/* AI Marketplace Section */}
        <section className="py-12 md:py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://assets.codepen.io/9394943/dots-bg.svg')] opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 md:mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                AI Teaching Assistants
              </span>
            </h2>
            <p className="text-gray-400 text-center text-sm md:text-base max-w-2xl mx-auto mb-8 md:mb-12 px-4">
              Automate your teaching tasks with our cutting-edge AI solutions
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {aiProducts.map((product) => (
                <div
                  key={product.id}
                  className={`relative rounded-xl overflow-hidden border ${
                    product.popular
                      ? "border-cyan-400 shadow-lg shadow-cyan-500/20"
                      : "border-gray-700"
                  } bg-gray-800/50 transition-all hover:scale-[1.02]`}
                >
                  {product.popular && (
                    <div className="absolute top-0 right-0 bg-cyan-500 text-gray-900 px-3 py-1 text-xs sm:text-sm font-bold rounded-bl-lg">
                      POPULAR
                    </div>
                  )}
                  <div className="p-4 sm:p-6">
                    <div className="flex justify-between items-start mb-4 sm:mb-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-700 rounded-lg flex items-center justify-center">
                        {product.icon}
                      </div>
                      <div className="text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                        {product.price}
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2">{product.name}</h3>
                    <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">{product.description}</p>
                    <button
                      className={`w-full py-2 sm:py-3 rounded-lg font-medium text-sm sm:text-base ${
                        product.popular
                          ? "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
                          : "bg-gray-700 hover:bg-gray-600"
                      } transition-colors`}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-12 md:py-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
            Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
              Programs
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {[
              {
                title: "Competitive Exams",
                description: "Prepare for exams like JEE, NEET, UPSC with our expert faculty",
                color: "bg-emerald-500 hover:bg-emerald-600"
              },
              {
                title: "Skill Development",
                description: "Enhance skills in coding, data science, and digital marketing",
                color: "bg-purple-500 hover:bg-purple-600"
              },
              {
                title: "Career Growth",
                description: "Guidance on career planning, resume building, and interviews",
                color: "bg-blue-500 hover:bg-blue-600"
              }
            ].map((program, index) => (
              <div key={index} className="bg-white text-black p-4 sm:p-6 rounded-lg shadow-lg space-y-4 sm:space-y-6 hover:scale-[1.02] transition-transform">
                <img
                  src={CardImg1}
                  alt={program.title}
                  className="w-full max-w-xs mx-auto"
                />
                <h3 className="text-lg sm:text-xl font-bold text-center">{program.title}</h3>
                <p className="text-center text-sm sm:text-base">{program.description}</p>
                <button className={`w-full py-2 rounded-md font-medium text-white ${program.color} transition-colors`}>
                  Enroll Now
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 md:py-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
            What Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
              Students Say
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {[
              {
                name: "Rahul Sharma",
                course: "JEE Advanced",
                quote: "Learner's Vault helped me crack JEE with their personalized attention and excellent study material.",
                color: "bg-cyan-400"
              },
              {
                name: "Priya Patel",
                course: "NEET",
                quote: "The NEET crash course was a game-changer. The teachers explain concepts so clearly.",
                color: "bg-purple-400"
              },
              {
                name: "Arjun Mehta",
                course: "UPSC",
                quote: "The comprehensive UPSC program covered everything from current affairs to answer writing.",
                color: "bg-amber-400"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-800/50 border border-gray-600 p-4 sm:p-6 rounded-lg">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 ${testimonial.color} rounded-full mr-3 sm:mr-4`}></div>
                  <div>
                    <h4 className="text-white font-bold text-sm sm:text-base">{testimonial.name}</h4>
                    <p className="text-gray-300 text-xs sm:text-sm">{testimonial.course}</p>
                  </div>
                </div>
                <p className="text-gray-200 text-xs sm:text-sm">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 md:py-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
            Our Unique{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
              Features
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {[
              {
                title: "Expert Faculty",
                description: "Learn from IIT/NIT alumni and industry experts",
                iconColor: "bg-cyan-500",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                )
              },
              {
                title: "Study Material",
                description: "Curated content to maximize your learning potential",
                iconColor: "bg-purple-500",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                )
              },
              {
                title: "Doubt Resolution",
                description: "24/7 doubt support with dedicated mentors",
                iconColor: "bg-amber-500",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              {
                title: "Performance Analytics",
                description: "Detailed reports to track your progress",
                iconColor: "bg-blue-500",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                )
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-800/50 border border-gray-600 p-4 sm:p-5 rounded-lg text-center">
                <div className={`${feature.iconColor} w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-3`}>
                  {feature.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-xs sm:text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="my-12 md:my-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg p-6 sm:p-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
            Ready to Transform Your Career?
          </h2>
          <p className="text-gray-100 text-sm sm:text-base mb-5 sm:mb-6">
            Join thousands of successful students who trusted Learner's Vault for their preparation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <button className="bg-white text-cyan-600 font-bold rounded-full px-5 py-2 sm:px-6 sm:py-2 text-sm sm:text-base hover:bg-gray-100 transition-colors">
              Enroll Now
            </button>
            <button className="bg-transparent border border-white text-white font-bold rounded-full px-5 py-2 sm:px-6 sm:py-2 text-sm sm:text-base hover:bg-white hover:text-cyan-600 transition-colors">
              Speak with Counselor
            </button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;