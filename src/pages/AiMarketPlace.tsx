import { AiOutlineDashboard } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import { FaChalkboardTeacher, FaRobot } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { RiSecurePaymentLine } from "react-icons/ri";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Image3DCard from "../components/Image3DCard";
import HeroAi from "../assets/images/HeroAiBanner.svg";

const AiMarketPlace = () => {
  const aiProducts = [
    {
      id: 1,
      name: "Lesson Plan Generator",
      description: "AI-powered tool that creates customized lesson plans in seconds based on curriculum standards",
      price: "$9.99/month",
      features: [
        "Saves 5+ hours weekly",
        "Standards-aligned",
        "Customizable templates",
        "Share with colleagues",
      ],
      icon: <FaChalkboardTeacher className="text-3xl sm:text-4xl text-purple-500" />,
      popular: true,
    },
    {
      id: 2,
      name: "Auto-Grading Assistant",
      description: "Automatically grades assignments and provides detailed student performance analytics",
      price: "$14.99/month",
      features: [
        "Supports multiple question types",
        "Instant feedback",
        "Plagiarism detection",
        "Learning gap analysis",
      ],
      icon: <AiOutlineDashboard className="text-3xl sm:text-4xl text-blue-500" />,
      popular: false,
    },
    {
      id: 3,
      name: "Student Engagement Analyzer",
      description: "Tracks and analyzes student participation to help improve classroom dynamics",
      price: "$12.99/month",
      features: [
        "Real-time analytics",
        "Participation scoring",
        "Intervention suggestions",
        "Parent report generation",
      ],
      icon: <BsGraphUp className="text-3xl sm:text-4xl text-green-500" />,
      popular: true,
    },
    {
      id: 4,
      name: "Parent Communication Automator",
      description: "Automates routine parent communications with personalized updates",
      price: "$7.99/month",
      features: [
        "Custom message templates",
        "Scheduled sends",
        "Translation support",
        "Read receipts",
      ],
      icon: <FiClock className="text-3xl sm:text-4xl text-amber-500" />,
      popular: false,
    },
    {
      id: 5,
      name: "Plagiarism Detection Pro",
      description: "Advanced AI that detects copied content with unprecedented accuracy",
      price: "$19.99/month",
      features: [
        "Deep web scanning",
        "Paraphrase detection",
        "Citation validation",
        "Similarity reports",
      ],
      icon: <RiSecurePaymentLine className="text-3xl sm:text-4xl text-red-500" />,
      popular: false,
    },
    {
      id: 6,
      name: "AI Teaching Assistant",
      description: "Virtual assistant that handles administrative tasks and student queries",
      price: "$24.99/month",
      features: [
        "24/7 availability",
        "Natural language processing",
        "Calendar management",
        "Resource recommendations",
      ],
      icon: <FaRobot className="text-3xl sm:text-4xl text-cyan-500" />,
      popular: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <header className="relative overflow-hidden mt-16 py-12 sm:py-16 md:py-32">
        <div className="absolute inset-0 bg-[url('https://assets.codepen.io/9394943/star-bg.jpg')] opacity-20"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 ">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6">
                <span className="text-white">AI-Powered</span>{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-bl from-cyan-400 to-purple-500">
                  Teaching Automation Suite
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 mb-6 md:mb-8">
                Revolutionize your teaching workflow with our cutting-edge AI tools designed specifically for educators.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <button className="px-6 py-3 sm:px-8 sm:py-3 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-purple-500/30 text-sm sm:text-base">
                  Explore Tools
                </button>
                <button className="px-6 py-3 sm:px-8 sm:py-3 border-2 border-cyan-400 text-cyan-400 rounded-full font-bold hover:bg-cyan-400 hover:text-gray-900 transition-colors text-sm sm:text-base">
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative w-full ">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl opacity-30 blur-3xl"></div>
                <div className="relative">
                  <Image3DCard 
                    imageUrl={HeroAi} 
                    title="" 
                    description="" 
                    bgColor="transparent" 
                    shadow="" 
                    width="" 
                    height=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Grid */}
      <section className="py-12 sm:py-16 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 sm:mb-16">
            How It{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Works
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                title: "Select Your Tools",
                description: "Choose from our suite of specialized AI tools designed for every aspect of teaching.",
                color: "border-cyan-400",
                bg: "bg-cyan-500/10",
                text: "text-cyan-400",
                number: "1"
              },
              {
                title: "Integrate Seamlessly",
                description: "Connect with your existing platforms in minutes. No technical skills required.",
                color: "border-purple-400",
                bg: "bg-purple-500/10",
                text: "text-purple-400",
                number: "2"
              },
              {
                title: "Reclaim Your Time",
                description: "Watch as hours of repetitive work are handled automatically each week.",
                color: "border-blue-400",
                bg: "bg-blue-500/10",
                text: "text-blue-400",
                number: "3"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className={`bg-gray-800/50 p-6 sm:p-8 rounded-2xl border border-gray-700 hover:${feature.color} transition-all hover:scale-[1.02]`}
              >
                <div className={`w-12 h-12 ${feature.bg} rounded-full flex items-center justify-center mb-4 sm:mb-6`}>
                  <div className={`${feature.text} text-xl sm:text-2xl font-bold`}>{feature.number}</div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{feature.title}</h3>
                <p className="text-gray-400 text-sm sm:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Products Marketplace */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
            Automation{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Solutions
            </span>
          </h2>
          <p className="text-base sm:text-lg text-center text-gray-400 mb-8 sm:mb-12 max-w-3xl mx-auto">
            Discover specialized AI tools designed to streamline every aspect of your teaching workflow.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {aiProducts.map((product) => (
              <div
                key={product.id}
                className={`relative rounded-xl sm:rounded-2xl overflow-hidden border ${
                  product.popular
                    ? "border-cyan-400 shadow-lg shadow-cyan-500/20"
                    : "border-gray-700"
                } bg-gray-800/50 hover:scale-[1.02] transition-transform`}
              >
                {product.popular && (
                  <div className="absolute top-0 right-0 bg-cyan-500 text-gray-900 px-3 py-1 text-xs sm:text-sm font-bold rounded-bl-lg">
                    POPULAR
                  </div>
                )}
                <div className="p-4 sm:p-6 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-700 rounded-lg flex items-center justify-center">
                      {product.icon}
                    </div>
                    <div className="text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                      {product.price}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{product.name}</h3>
                    <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">{product.description}</p>
                    <ul className="space-y-2 mb-6 sm:mb-8">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-sm sm:text-base">
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    className={`w-full py-2 sm:py-3 rounded-lg font-bold text-sm sm:text-base ${
                      product.popular
                        ? "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
                        : "bg-gray-700 hover:bg-gray-600"
                    } transition-colors`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
            Trusted by{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500">
              Educators Worldwide
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                name: "Sarah Johnson",
                role: "High School English Teacher",
                quote: "The lesson plan generator has saved me at least 10 hours per week. I can now focus on actual teaching instead of paperwork.",
                color: "bg-purple-500",
                stars: 5
              },
              {
                name: "Michael Chen",
                role: "University Professor",
                quote: "The auto-grading system is revolutionary. It's like having a teaching assistant that works 24/7 without getting tired.",
                color: "bg-blue-500",
                stars: 5
              },
              {
                name: "Emma Rodriguez",
                role: "Middle School Principal",
                quote: "We've implemented these tools across our school and seen teacher satisfaction increase by 40% while saving thousands of hours.",
                color: "bg-cyan-500",
                stars: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-800/50 p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-gray-700">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 ${testimonial.color} rounded-full mr-3 sm:mr-4`}></div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base">{testimonial.name}</h4>
                    <p className="text-gray-400 text-xs sm:text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic text-sm sm:text-base mb-4 sm:mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex text-amber-400">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Ready to Transform Your Teaching Experience?
            </h2>
            <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
              Join thousands of educators who are saving time and enhancing their teaching with AI automation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <button className="px-6 py-3 sm:px-8 sm:py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-cyan-500/30 text-sm sm:text-base">
                Start Free Trial
              </button>
              <button className="px-6 py-3 sm:px-8 sm:py-3 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-gray-900 transition-colors text-sm sm:text-base">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AiMarketPlace;