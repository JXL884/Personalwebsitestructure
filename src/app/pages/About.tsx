import { motion } from "motion/react";
import { Brain, Shield, TrendingUp, Users } from "lucide-react";

export function About() {
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
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">About Me</h1>
            <p className="text-lg text-gray-700 max-w-4xl">
              I'm a Ph.D. candidate at Queen's University, focusing on advancing the capabilities
              of large language models through efficient and privacy-preserving methods.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research Interests */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Research Interests</h2>
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <p className="text-gray-700 leading-relaxed mb-6">
              My research focuses on <span className="font-semibold">test-time compute and efficient reasoning</span> for large language models,
              with an emphasis on closing the gap between what models learn during training and how we extract
              that knowledge at inference. I am particularly interested in:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span>Adaptation and uncertainty-aware inference methods that improve reasoning quality without wasting compute</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span>Learning from test-time trajectories</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span>Privacy-preserving NLP (e.g., differential privacy)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span>Financial NLP applications</span>
              </li>
            </ul>
          </div>

          {/* Research Areas Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white border border-gray-200 rounded-lg p-6"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 rounded-full p-3 mr-4">
                  <Brain className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Test-Time Reasoning</h3>
              </div>
              <p className="text-gray-600">
                Developing methods for efficient test-time compute and uncertainty-aware inference
                to improve model reasoning without excessive computational overhead.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white border border-gray-200 rounded-lg p-6"
            >
              <div className="flex items-center mb-4">
                <div className="bg-green-100 rounded-full p-3 mr-4">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Privacy-Preserving NLP</h3>
              </div>
              <p className="text-gray-600">
                Researching differential privacy techniques and privacy budget allocation
                for fine-tuning language models while protecting sensitive information.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white border border-gray-200 rounded-lg p-6"
            >
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 rounded-full p-3 mr-4">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Financial NLP</h3>
              </div>
              <p className="text-gray-600">
                Applying LLMs to financial text analysis, including sentiment analysis,
                open intent detection, and financial reasoning tasks.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white border border-gray-200 rounded-lg p-6"
            >
              <div className="flex items-center mb-4">
                <div className="bg-orange-100 rounded-full p-3 mr-4">
                  <Users className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">LLM Agent Systems</h3>
              </div>
              <p className="text-gray-600">
                Designing frameworks for managing dialogue breakdowns and improving
                agent-human interaction in LLM-powered systems.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Education</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Queen's University</h3>
                  <p className="text-gray-700">Ph.D. Candidate, Electrical and Computer Engineering</p>
                </div>
                <div className="text-sm text-gray-600 mt-2 md:mt-0">
                  <p>Kingston, Ontario, Canada</p>
                  <p>Sept. 2021 - Present</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-medium">Expected Graduation:</span> 2026
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-medium">Research Focus:</span> Large language models, test-time compute,
                mathematical reasoning, and differential privacy
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Advisor:</span> Prof. Xiaodan Zhu
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Beijing University of Technology</h3>
                  <p className="text-gray-700">B.Eng. in Automation (Honors), Fan Gongqin Honors College</p>
                </div>
                <div className="text-sm text-gray-600 mt-2 md:mt-0">
                  <p>Beijing, China</p>
                  <p>Sept. 2017 - Jul. 2021</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Graduated with honors from the Fan Gongqin Honors College, with a focus on
                automation, control systems, and artificial intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hobbies */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Beyond Research</h2>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8">
            <p className="text-gray-700 mb-4">
              When I'm not working on research, I enjoy:
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-white px-4 py-2 rounded-full text-gray-700 shadow-sm">
                🎵 Kpop/Hip-hop Dance
              </span>
              <span className="bg-white px-4 py-2 rounded-full text-gray-700 shadow-sm">
                🍳 Cooking
              </span>
              <span className="bg-white px-4 py-2 rounded-full text-gray-700 shadow-sm">
                🎲 Board Games
              </span>
              <span className="bg-white px-4 py-2 rounded-full text-gray-700 shadow-sm">
                🥾 Hiking
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
