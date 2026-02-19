import { motion } from "motion/react";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { ArrowRight, BookOpen, Briefcase, Code, Sparkles, Mail, Linkedin, GraduationCap } from "lucide-react";

export function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Hero Section - Dramatic Dark */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(148, 163, 184) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900" />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            {/* Subtitle badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 mb-8"
            >
              <Sparkles className="h-4 w-4 text-blue-400" />
              <span className="text-sm text-blue-300 font-medium">Ph.D. Candidate in AI Research</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
            >
              Xianzhi Jason Li
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl text-blue-200 mb-4 font-light"
            >
              Electrical and Computer Engineering
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base sm:text-lg text-slate-400 mb-12"
            >
              Queen's University · Kingston, Ontario, Canada
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg sm:text-xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed"
            >
              Researching test-time compute and efficient reasoning for large language models,
              with a focus on <span className="text-blue-300 font-medium">adaptation</span>, <span className="text-blue-300 font-medium">uncertainty-aware inference</span>, <span className="text-blue-300 font-medium">privacy-preserving NLP</span>,
              and financial NLP applications.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link to="/about">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 shadow-lg shadow-blue-900/50 hover:shadow-xl hover:shadow-blue-900/60 transition-all">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/publications">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-400/30 text-blue-200 hover:bg-blue-900/30 hover:border-blue-400/50 px-8 bg-slate-900/50 backdrop-blur-sm"
                >
                  View Publications
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Quick Links Section - Redesigned */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Explore My Work</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover my research contributions, professional experience, and technical projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Link to="/publications" className="block group">
                <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 overflow-hidden">
                  {/* Hover gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-indigo-600/0 group-hover:from-blue-600/5 group-hover:to-indigo-600/5 transition-all duration-300" />
                  
                  <div className="relative z-10">
                    <div className="bg-blue-100 rounded-2xl p-4 w-fit mb-6 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                      <BookOpen className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Publications</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Explore my research papers on LLM inference, privacy-preserving NLP, and financial text analytics
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link to="/experience" className="block group">
                <div className="relative bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 rounded-2xl p-8 hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/0 to-teal-600/0 group-hover:from-emerald-600/5 group-hover:to-teal-600/5 transition-all duration-300" />
                  
                  <div className="relative z-10">
                    <div className="bg-emerald-100 rounded-2xl p-4 w-fit mb-6 group-hover:bg-emerald-600 group-hover:scale-110 transition-all duration-300">
                      <Briefcase className="h-8 w-8 text-emerald-600 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">Experience</h3>
                    <p className="text-gray-600 leading-relaxed">
                      View my research and teaching experience at leading universities and tech companies
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Link to="/projects" className="block group">
                <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100 rounded-2xl p-8 hover:shadow-2xl hover:shadow-purple-900/10 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/5 group-hover:to-pink-600/5 transition-all duration-300" />
                  
                  <div className="relative z-10">
                    <div className="bg-purple-100 rounded-2xl p-4 w-fit mb-6 group-hover:bg-purple-600 group-hover:scale-110 transition-all duration-300">
                      <Code className="h-8 w-8 text-purple-600 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">Projects</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Discover my hands-on projects in ML, computer vision, and NLP applications
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Feel free to reach out for collaborations or just a friendly chat
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {/* Email */}
            <a
              href="mailto:li.xianzhi@queensu.ca"
              className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="bg-blue-100 rounded-full p-4 mb-4 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                <Mail className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Email</h3>
              <p className="text-sm text-gray-600 break-all">li.xianzhi@queensu.ca</p>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/xianzhi-li-72071923a"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="bg-blue-100 rounded-full p-4 mb-4 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                <Linkedin className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">LinkedIn</h3>
              <p className="text-sm text-gray-600">xianzhi-li-72071923a</p>
            </a>

            {/* Google Scholar */}
            <a
              href="https://scholar.google.com/citations?user=F7B1QQsAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="bg-blue-100 rounded-full p-4 mb-4 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                <GraduationCap className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Google Scholar</h3>
              <p className="text-sm text-gray-600">View Publications</p>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
