
import Navbar from "../components/Navbar";
// import ContactHeroImg from "../assets/images/contact-hero.webp";
// import LocationIcon from "../assets/icons/location.svg";
// import PhoneIcon from "../assets/icons/phone.svg";
// import EmailIcon from "../assets/icons/email.svg";
// import ClockIcon from "../assets/icons/clock.svg";
import Footer from "../components/Footer";

const ContactPage = () => {
  return (
    <div className="bg-slate-900 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute -inset-6 bg-gradient-to-r from-slate-900 to-slate-700/50 "></div>
        <img 
          src='' 
          alt="Students learning" 
          className="w-full h-96 object-cover"
        />
        <div className="container mx-auto px-4 relative  -mt-52 ">
          <div className="max-w-2xl flex flex-col mx-auto text-center  bg-opacity-90 p-8 rounded-lg">
            <h1 className="text-5xl font-bold text-white mb-4">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Touch</span>
            </h1>
            <p className="text-gray-300 text-lg">
              We're here to answer your questions and help you begin your learning journey.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Contact Information Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div>
            <h2 className="text-4xl font-bold text-white mb-8">
              Contact{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                Information
              </span>
            </h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-cyan-500 p-3 rounded-full mr-4 flex-shrink-0">
                  <img src="" alt="Location" className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    Our Headquarters
                  </h3>
                  <p className="text-gray-300">
                    123 Education Street, Knowledge Park
                    <br />
                    New Delhi, India 110001
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-500 p-3 rounded-full mr-4 flex-shrink-0">
                  <img src="" alt="Phone" className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    Phone & WhatsApp
                  </h3>
                  <p className="text-gray-300">
                    Admissions: +91 98765 43210
                    <br />
                    Support: +91 98765 43211
                    <br />
                    (9:00 AM - 7:00 PM, Monday to Saturday)
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-500 p-3 rounded-full mr-4 flex-shrink-0">
                  <img src="" alt="Email" className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    Email Us
                  </h3>
                  <p className="text-gray-300">
                    Admissions: admissions@learnersvault.com
                    <br />
                    Support: help@learnersvault.com
                    <br />
                    Careers: careers@learnersvault.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-amber-500 p-3 rounded-full mr-4 flex-shrink-0">
                  <img src="" alt="Hours" className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    Working Hours
                  </h3>
                  <p className="text-gray-300">
                    Monday to Friday: 9:00 AM - 7:00 PM
                    <br />
                    Saturday: 9:00 AM - 5:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800 p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-6">
              Send Us a Message
            </h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Full Name*
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email Address*
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-300 mb-2">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div>
                <label htmlFor="course" className="block text-gray-300 mb-2">
                  Course Interested In
                </label>
                <select
                  id="course"
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="">Select a course</option>
                  <option value="jee">JEE Preparation</option>
                  <option value="neet">NEET Preparation</option>
                  <option value="upsc">UPSC Coaching</option>
                  <option value="gate">GATE Coaching</option>
                  <option value="coding">Coding Courses</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Your Message*
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-3 px-4 rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Branches Section */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
              Branches
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-shadow">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="bg-cyan-500 w-6 h-6 rounded-full flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </span>
                Delhi (Head Office)
              </h3>
              <p className="text-gray-300 mb-2">
                123 Education Street, Knowledge Park
              </p>
              <p className="text-gray-300 mb-4">New Delhi, India 110001</p>
              <p className="text-cyan-400 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +91 11 2345 6789
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-shadow">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="bg-blue-500 w-6 h-6 rounded-full flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </span>
                Bangalore
              </h3>
              <p className="text-gray-300 mb-2">
                456 Learning Avenue, Tech District
              </p>
              <p className="text-gray-300 mb-4">Bangalore, India 560001</p>
              <p className="text-blue-400 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +91 80 2345 6789
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg hover:shadow-lg hover:shadow-purple-500/20 transition-shadow">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="bg-purple-500 w-6 h-6 rounded-full flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </span>
                Mumbai
              </h3>
              <p className="text-gray-300 mb-2">
                789 Academic Road, Education Zone
              </p>
              <p className="text-gray-300 mb-4">Mumbai, India 400001</p>
              <p className="text-purple-400 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +91 22 2345 6789
              </p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-16 bg-slate-800 rounded-lg overflow-hidden">
          <h2 className="text-4xl font-bold text-white mb-8 p-8 pb-0">
            Find Us on{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
              Map
            </span>
          </h2>
          <div className="h-96 w-full">
            {/* Replace with your actual map embed code */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.376331381576!2d77.2098653150824!3d28.62873998242389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5e2b0d42e3%3A0x3726b5a1fc1e1b3d!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1629876543210!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              title="Learner's Vault Location"
            ></iframe>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
