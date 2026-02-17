import { motion } from "motion/react";
import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";
import { Badge } from "../components/ui/badge";

export function Experience() {
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
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Experience</h1>
            <p className="text-lg text-gray-700 max-w-4xl">
              My professional journey spans research, teaching, and industry collaborations
              in AI, machine learning, and natural language processing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Briefcase className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Work Experience</h2>
          </div>

          <div className="space-y-8">
            {/* AI Research Intern */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">AI Research Intern</h3>
                  <p className="text-lg text-blue-600 mb-2">Robot Development</p>
                </div>
                <div className="flex flex-col items-start md:items-end space-y-1">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-1" />
                    Aug. 2025 - Apr. 2026
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    Toronto, Canada (Remote)
                  </div>
                </div>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>Built a vision-language pipeline to analyze food donation images, detecting items and filtering non-food labels/packaging using multimodal models.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>Designed and trained models to estimate true food weight from images and flag likely over-/under-estimation versus donor-reported values, enabling more accurate donation tracking.</span>
                </li>
              </ul>
            </motion.div>

            {/* Instructor */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Instructor</h3>
                  <p className="text-lg text-blue-600 mb-2">WeChatData</p>
                </div>
                <div className="flex flex-col items-start md:items-end space-y-1">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-1" />
                    Oct. 2023 - Mar. 2025
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    Toronto, Canada (Remote)
                  </div>
                </div>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>Designed and delivered a modular AI curriculum covering Transformers, reinforcement learning, parameter-efficient fine-tuning, and generative models to industry professionals.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>Led weekly interactive labs and mentored students through real-to-end machine learning projects.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>Developed course materials and assignments aligned with current industry practices and state-of-the-art research.</span>
                </li>
              </ul>
            </motion.div>

            {/* Graduate Research Assistant */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Graduate Research Assistant</h3>
                  <p className="text-lg text-blue-600 mb-2">Queen's University, Ingenuity labs</p>
                </div>
                <div className="flex flex-col items-start md:items-end space-y-1">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-1" />
                    Sept. 2022 - Present
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    Kingston, Canada
                  </div>
                </div>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>Conducting research on efficient and reliable LLM inference and adaptation, spanning test-time compute strategies, privacy-preserving fine-tuning, and rigorous benchmarking on domain-specific tasks such as financial NLP.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>Developing and deploying Ingenuity-Cloud, hosted on Queen's servers to help non-technical staffs streamline workflows (e.g., automating repetitive tasks, drafting scripts, and simplifying data processing).</span>
                </li>
              </ul>
            </motion.div>

            {/* Summer Research Intern */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Summer Research Intern</h3>
                  <p className="text-lg text-blue-600 mb-2">AI Lab, Department of Psychology, Tsinghua University</p>
                </div>
                <div className="flex flex-col items-start md:items-end space-y-1">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-1" />
                    Apr. 2020 - Aug. 2020
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    Beijing, China
                  </div>
                </div>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>Conducted psychological analysis of patients in cabin hospitals during COVID-19 outbreak using NLP techniques.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>Applied text mining and sentiment analysis methods to understand patient mental health patterns.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Teaching Experience */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <GraduationCap className="h-8 w-8 text-green-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Teaching Experience</h2>
          </div>

          <div className="space-y-8">
            {/* Teaching Assistant - ML */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Teaching Assistant</h3>
                  <p className="text-lg text-green-600 mb-2">ELEC 425: Machine Learning and Deep Learning</p>
                  <p className="text-sm text-gray-600">Queen's University</p>
                </div>
                <div className="flex items-center text-sm text-gray-600 mt-2 md:mt-0">
                  <Calendar className="h-4 w-4 mr-1" />
                  2022 - Present
                </div>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>Led tutorials and held office hours covering core ML/DL topics (e.g., regression/classification, optimization, regularization, CNNs, and model evaluation).</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>Supported lab sessions in PyTorch and NumPy/PyTorch, assisted with debugging, and guided students in implementing and analyzing learning algorithms.</span>
                </li>
              </ul>
            </motion.div>

            {/* Teaching Assistant - Data Structures */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Teaching Assistant</h3>
                  <p className="text-lg text-green-600 mb-2">MREN 178: Data Structures and Algorithms</p>
                  <p className="text-sm text-gray-600">Queen's University</p>
                </div>
                <div className="flex items-center text-sm text-gray-600 mt-2 md:mt-0">
                  <Calendar className="h-4 w-4 mr-1" />
                  2026 - Present
                </div>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>Led tutorials for first-year Mechatronics and Robotics Engineering students on foundational data structures (linked lists, trees, heaps, graphs) and algorithms (recursion, sorting, searching) in C/C++.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>Guided students transitioning from Python to C++ on debugging memory management, pointers, and low-level implementation of abstract data types.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>Supported microcontroller-based lab exercises applying data structures and algorithms in Arduino contexts.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Python</Badge>
                <Badge variant="secondary">C</Badge>
                <Badge variant="secondary">MATLAB</Badge>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">ML/DL Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">PyTorch</Badge>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">NLP Tools</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Hugging Face Transformers</Badge>
                <Badge variant="secondary">vLLM</Badge>
                <Badge variant="secondary">OpenAI API</Badge>
                <Badge variant="secondary">LangChain</Badge>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">HPC & Other Tools</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Slurm</Badge>
                <Badge variant="secondary">Multi-GPU Training</Badge>
                <Badge variant="secondary">NVIDIA A100/H100</Badge>
                <Badge variant="secondary">Git</Badge>
                <Badge variant="secondary">Linux</Badge>
                <Badge variant="secondary">LaTeX</Badge>
                <Badge variant="secondary">Docker</Badge>
                <Badge variant="secondary">Weights & Biases</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
