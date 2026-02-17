import { motion } from "motion/react";
import { BookOpen, ExternalLink, Users } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Publications() {
  const publications = [
    {
      title:
        "Entropy-Gated Branching for Efficient Test-Time Reasoning",
      authors:
        "Xianzhi Li, Ethan Callanan, Abdellah Ghassel, Xiaodan Zhu",
      venue: "EACL 2026",
      description: [
        'Proposed Entropy-Gated Branching (EGB), a method to prune low-quality token-level uncertainty during generation and branches only at high-uncertainty "decision points," then prunes candidates using a lightweight verifier.',
        "Achieved 22.6% accuracy improvement over standard inference while operating 31%-75% faster than test-time beam search on math-heavy small-to-midsize benchmarks.",
        "Demonstrated that 78% of high-entropy token spikes coincide with flawed reasoning steps; showed scale-dependent gains where larger models benefit more from EGB in general math vs. general reasoning tasks.",
      ],
      tags: [
        "Test-Time Compute",
        "LLM Inference",
        "Mathematical Reasoning",
      ],
      images: [
        {
          url: "https://raw.githubusercontent.com/JXL884/Websites/main/EGB_main.png",
          alt: "Entropy and Varentropy analysis graphs showing token-level uncertainty patterns",
        },
        {
          url: "https://raw.githubusercontent.com/JXL884/Websites/main/EGB_intro.png",
          alt: "Comparison of decoding methods showing Greedy Decoding, Beam Search, and Entropy-Gated Branching approaches",
        },
      ],
    },
    {
      title:
        "Detect, Explain, Escalate: Sustainable Dialogue Breakdown Management for LLM Agents",
      authors: "Abdellah Ghassel, Xianzhi Li, Xiaodan Zhu",
      venue:
        "IEEE Trans on Audio, Speech, and Language Processing 2025",
      description: [
        'Introduced a "Detect, Explain, Escalate" framework for managing dialogue breakdowns in LLM-powered agents with resource-efficient operation.',
        "Fine-tuned a compact 8B-parameter model as a real-time breakdown detector, achieving state-of-the-art on DBDC5 and strong results on BETOLD with 7% accuracy improvement; proposed monitor-escalate pipeline reducing inference costs by 34%.",
        "Conducted comprehensive evaluation across English and Japanese dialogues with multiple prompting strategies (few-shot, chain-of-thought, analogical reasoning), establishing new benchmarks for dialogue breakdown detection.",
      ],
      tags: ["LLM Agents", "Dialogue Systems", "NLP"],
      images: [
        {
          url: "https://raw.githubusercontent.com/JXL884/Websites/main/IEEE_main.png",
          alt: "Detect, Explain, Escalate framework for dialogue breakdown management",
        },
      ],
    },
    {
      title:
        "Meta-Learning Reinforcement Learning for Crypto-Return Prediction",
      authors:
        "Junqiao Wang, Zhaopeng Guan, Guangya Liu, Tianze Xia, Xianzhi Li, et al.",
      venue: "Preprint 2025",
      description: [
        "Presented Meta-RL-Crypto, a meta-learning and transformer-based architecture combining meta-learning to create a self-improving trading agent for cryptocurrency markets.",
        "Designed a closed-loop system where the agent alternates between actor, judge, and meta-judge roles, leveraging multi-dimensional on-chain/off-chain and minimal human supervision.",
        "Integrated on-chain metrics (BTC, ETH, SOL), off-chain news via GNews API, and social sentiment signals into structured prompts for multi-dimensional reward-based reinforcement training.",
      ],
      tags: [
        "Reinforcement Learning",
        "Financial NLP",
        "Meta-Learning",
      ],
      images: [
        {
          url: "https://raw.githubusercontent.com/JXL884/Websites/main/CRYPTO_main.png",
          alt: "Detect, Explain, Escalate framework for dialogue breakdown management",
        },
      ],
    },
    {
      title:
        "Fine-Tuning Language Models with Differential Privacy through Adaptive Noise Allocation",
      authors:
        "Xianzhi Li, Ran Zmigrod, Xiaodan Zhu, Zhiqiang Ma, Xiaomo Liu",
      venue: "EMNLP 2024 Findings",
      description: [
        "Proposed ANADP, the first differentially private fine-tuning method that distributes privacy budget non-uniformly based on Transformer parameter sensitivity.",
        "Demonstrated improvements over standard DP fine-tuning approaches on GLUE benchmark across multiple training paradigms; conducted comparative analysis showing ANADP offers robust protection.",
        "Validated compatibility with full fine-tuning, LoRA, and Adapter tuning; showed statistically significant gains with strategic noise allocation favoring lower and final transformer layers.",
      ],
      tags: [
        "Differential Privacy",
        "Fine-Tuning",
        "Privacy-Preserving NLP",
      ],
      images: [
        {
          url: "https://raw.githubusercontent.com/JXL884/Websites/main/ANADP_main.png",
          alt: "Detect, Explain, Escalate framework for dialogue breakdown management",
        },
      ],
    },
    {
      title:
        "Are ChatGPT and GPT-4 General-Purpose Solvers for Financial Text Analytics? A Study on Several Typical Tasks",
      authors:
        "Xianzhi Li, Samuel Chan, Xiaodan Zhu, Yulong Pei, etc.",
      venue: "EMNLP 2023 Industry Track",
      description: [
        "Among the first comprehensive studies of general-purpose LLMs (ChatGPT/GPT-4) on financial NLP tasks (initial preprint released 7 weeks after ChatGPT API went public).",
        "Evaluated performance on eight benchmark datasets across five task categories; reported strong performance vs. domain-specific baselines with detailed practical recommendations.",
        "Found GPT-4 excels at numerical reasoning and sentiment analysis but struggles with structured prediction, providing comparative analysis against FinBERT, BloombergGPT, and FinQANet.",
      ],
      tags: ["Financial NLP", "LLM Evaluation", "ChatGPT"],
    },
    {
      title:
        "ChatGPT as Data Augmentation for Compositional Generalization: A Case Study in Open Intent Detection",
      authors:
        "Yihao Fang, Xianzhi Li, Stephen W. Thomas, Xiaodan Zhu",
      venue: "IJCAI 2023 Workshop on Financial NLP",
      description: [
        "Explored ChatGPT as a data augmentation technique to enhance compositional generalization in open intent detection, addressing limitations of existing benchmarks.",
        "Demonstrated that incorporating ChatGPT-generated synthetic data into training effectively improves model performance, outperforming existing techniques on multiple benchmarks.",
        "Proposed a graph-based pruning method to identify compositionally-similar instances and designed three paraphrase incorporation strategies for iterative BERT training.",
      ],
      tags: [
        "Data Augmentation",
        "Open Intent Detection",
        "ChatGPT",
      ],
      images: [
        {
          url: "https://raw.githubusercontent.com/JXL884/Websites/main/AUGMENT_main.png",
          alt: "Detect, Explain, Escalate framework for dialogue breakdown management",
        },
      ],
    },
    {
      title:
        "Learning Better Intent Representations for Financial Open Intent Classification",
      authors:
        "Xianzhi Li, Will Aitken, Xiaodan Zhu, Stephen W. Thomas",
      venue: "EMNLP 2022 Workshopon Financial NLP",
      description: [
        "Achieved state-of-the-art results by augmenting the ADB open intent classification architecture with prefix-tuning, improving accuracy on the Banking77 benchmark.",
        "Provided ablation studies testing the impact of reparameterization, prefix lengths, fine-tuning different layer groups, and various last-layer components.",
      ],
      tags: [
        "Intent Classification",
        "Financial NLP",
        "Prefix-Tuning",
      ],
    },
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
              <BookOpen className="h-10 w-10 text-blue-600 mr-3" />
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
                Publications
              </h1>
            </div>
            <p className="text-lg text-gray-700 max-w-4xl">
              My research contributions span test-time
              reasoning, privacy-preserving NLP, financial text
              analytics, and LLM agent systems.
            </p>
            <div className="mt-6 flex items-center space-x-4">
              <a
                href="https://scholar.google.com/citations?user=F7B1QQsAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                View on Google Scholar
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Publications List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {pub.title}
                  </h3>
                  <div className="flex items-start text-sm text-gray-600 mb-2">
                    <Users className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                    <p className="italic">{pub.authors}</p>
                  </div>
                  <p className="text-sm font-medium text-blue-600">
                    {pub.venue}
                  </p>
                </div>
                <ul className="space-y-2 mb-4">
                  {pub.description.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-sm text-gray-700"
                    >
                      <span className="mr-2 mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {pub.tags.map((tag, tagIdx) => (
                    <Badge
                      key={tagIdx}
                      variant="outline"
                      className="text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                {pub.images && pub.images.length > 0 && (
                  <div
                    className={`mt-6 grid gap-4 ${pub.images.length === 1 ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`}
                  >
                    {pub.images.map((image, imgIdx) => (
                      <div
                        key={imgIdx}
                        className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200"
                      >
                        <ImageWithFallback
                          src={image.url}
                          alt={image.alt}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Impact */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Research Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">
                7+
              </p>
              <p className="text-gray-700">Publications</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-green-600 mb-2">
                Top Venues
              </p>
              <p className="text-gray-700">
                EACL, EMNLP, IJCAI, IEEE Trans
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-purple-600 mb-2">
                Multiple
              </p>
              <p className="text-gray-700">Research Areas</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}