import { motion } from "motion/react";
import { Mail, Phone, MapPin, ExternalLink, GraduationCap, Linkedin } from "lucide-react";
import { Button } from "../components/ui/button";

export function Contact() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Get In Touch</h1>
            <p className="text-lg text-gray-700 max-w-4xl">
              I'm always open to discussing research collaborations, teaching opportunities,
              or interesting projects in AI and machine learning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">Email</p>
                    <a
                      href="mailto:21XL17@queensu.ca"
                      className="text-lg text-blue-600 hover:text-blue-700 font-medium"
                    >
                      21XL17@queensu.ca
                    </a>
                    <br />
                    <a
                      href="mailto:Jasonxlee1999@outlook.com"
                      className="text-lg text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Jasonxlee1999@outlook.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-3 mr-4">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">Phone</p>
                    <p className="text-lg text-gray-900 font-medium">+1 343-363-6860</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-100 rounded-full p-3 mr-4">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">Location</p>
                    <p className="text-lg text-gray-900 font-medium">Kingston, Ontario, Canada</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Connect With Me</h3>
                <div className="space-y-3">
                  <a
                    href="https://scholar.google.com/citations?user=F7B1QQsAAAAJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <GraduationCap className="h-5 w-5 mr-3" />
                    <span className="font-medium">Google Scholar</span>
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                  <a
                    href="https://linkedin.com/in/xianzhi-li-72071923a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <Linkedin className="h-5 w-5 mr-3" />
                    <span className="font-medium">LinkedIn</span>
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Quick Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-lg p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
              <p className="text-gray-600 mb-6">
                Feel free to reach out via email for research inquiries, collaboration opportunities,
                or any questions about my work.
              </p>
              <a href="mailto:21XL17@queensu.ca">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research Interests Summary */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Interested in Collaborating?
          </h2>
          <div className="bg-white rounded-lg p-8 max-w-4xl mx-auto">
            <p className="text-gray-700 mb-4">
              I'm particularly interested in discussing projects or collaborations related to:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2 mt-1">✓</span>
                <span>Test-time compute and efficient reasoning for LLMs</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">✓</span>
                <span>Privacy-preserving NLP and differential privacy</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">✓</span>
                <span>Financial NLP applications</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">✓</span>
                <span>LLM agent systems and dialogue management</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">✓</span>
                <span>Uncertainty-aware inference methods</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">✓</span>
                <span>Teaching and mentoring in ML/AI</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
