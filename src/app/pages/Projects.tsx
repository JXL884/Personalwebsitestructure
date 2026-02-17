import { motion } from "motion/react";
import { Code, Calendar, MapPin } from "lucide-react";
import { Badge } from "../components/ui/badge";

export function Projects() {
  const projects = [
    {
      title: "Capstone Project",
      subtitle: "Intelligent Mechanical and Electrical Equipment Laboratory, BJUT",
      location: "Beijing, China",
      date: "Mar. 2020 - Dec. 2020",
      description: [
        "Developed a sentiment analysis system for Chinese social media, crawling public posts from Weibo using the Weibo API and web scraping techniques.",
        "Fine-tuned BERT for sentiment classification; conducted comparative experiments against LSTM and TextCNN baselines, achieving improved F1 scores on the collected dataset."
      ],
      tags: ["NLP", "Sentiment Analysis", "BERT", "Web Scraping", "Python"]
    },
    {
      title: "Keystone Project",
      subtitle: "Intelligent Mechanical and Electrical Equipment Laboratory, BJUT",
      location: "Beijing, China",
      date: "Sept. 2018 - Jan. 2019",
      description: [
        "Built a news article classification system to automatically categorize articles into topics (e.g., sports, technology, finance, entertainment) using the THUCNews dataset.",
        "Implemented and compared traditional machine learning approaches (TF-IDF + SVM, Naive Bayes) with a TextCNN model; achieved 90%+ accuracy on the multi-class classification task."
      ],
      tags: ["Machine Learning", "Text Classification", "SVM", "TextCNN", "Python"]
    },
    {
      title: "Cornerstone Project",
      subtitle: "Intelligent Mechanical and Electrical Equipment Laboratory, BJUT",
      location: "Beijing, China",
      date: "Jun. 2018 - Aug. 2018",
      description: [
        "Built an eye-gaze controlled vehicle system using computer vision and embedded hardware.",
        "Implemented a real-time pupil tracking pipeline with OpenCV: face detection, eye region localization, and circular Hough transform for pupil detection; calculated displacement to generate directional control signals.",
        "Interfaced the vision system with an Arduino-based car via serial communication, enabling hands-free navigation through eye movements."
      ],
      tags: ["Computer Vision", "OpenCV", "Arduino", "Embedded Systems", "Python", "C++"]
    }
  ];

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
            <div className="flex items-center mb-4">
              <Code className="h-10 w-10 text-blue-600 mr-3" />
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">Projects</h1>
            </div>
            <p className="text-lg text-gray-700 max-w-4xl">
              Hands-on projects from my undergraduate studies, showcasing applications
              in NLP, machine learning, computer vision, and embedded systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-lg text-blue-600 mb-3">{project.subtitle}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0 text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {project.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.date}
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 mb-4">
                  {project.description.map((point, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <span className="mr-2 mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <Badge key={tagIdx} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Project Timeline</h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200"></div>
            <div className="space-y-8">
              <div className="relative pl-12">
                <div className="absolute left-2 top-1 w-4 h-4 bg-blue-600 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium text-blue-600 mb-1">Mar. 2020 - Dec. 2020</p>
                  <p className="font-semibold text-gray-900">Capstone Project</p>
                  <p className="text-sm text-gray-600">Sentiment Analysis System for Social Media</p>
                </div>
              </div>
              <div className="relative pl-12">
                <div className="absolute left-2 top-1 w-4 h-4 bg-blue-600 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium text-blue-600 mb-1">Sept. 2018 - Jan. 2019</p>
                  <p className="font-semibold text-gray-900">Keystone Project</p>
                  <p className="text-sm text-gray-600">News Article Classification System</p>
                </div>
              </div>
              <div className="relative pl-12">
                <div className="absolute left-2 top-1 w-4 h-4 bg-blue-600 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium text-blue-600 mb-1">Jun. 2018 - Aug. 2018</p>
                  <p className="font-semibold text-gray-900">Cornerstone Project</p>
                  <p className="text-sm text-gray-600">Eye-Gaze Controlled Vehicle System</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
