"use client";

import { useState, useEffect } from "react";

// Curriculum Data
const curriculum = [
  {
    day: 1,
    title: "Python Data Science: Pandas Basics",
    description: "Learn how to manipulate tabular data using Pandas (DataFrames, filtering, group by).",
    topics: ["Series and DataFrames", "Reading/Writing CSVs", "Filtering & Sorting", "GroupBy operations"],
    hours: "~1 hr (video) + 30 min practice",
    youtubeLink: "https://www.youtube.com/watch?v=vmEHCJofslg",
    youtubeTitle: "Pandas Tutorial - Keith Galli"
  },
  {
    day: 2,
    title: "Python Data Science: NumPy & Cleaning",
    description: "Learn array manipulation and handling missing text data effectively.",
    topics: ["NumPy arrays & broadcasting", "Handling NaN values", "Data Type conversions", "Removing duplicates"],
    hours: "~1 hr (video) + 20 min practice",
    youtubeLink: "https://www.youtube.com/watch?v=QUT1VHiLmmI",
    youtubeTitle: "NumPy Tutorial - freeCodeCamp"
  },
  {
    day: 3,
    title: "Data Visualization: Plotting data",
    description: "Understand your data distribution before modeling using Matplotlib & Seaborn.",
    topics: ["Line, Bar, and Scatter plots", "Histograms & distributions", "Customizing plot aesthetics", "Seaborn heatmaps"],
    hours: "~45 min (video) + 20 min practice",
    youtubeLink: "https://www.youtube.com/watch?v=UO98lJQ3QGI",
    youtubeTitle: "Matplotlib - Corey Schafer"
  },
  {
    day: 4,
    title: "Web Scraping Fundamentals",
    description: "Learn to extract text data from HTML pages using BeautifulSoup.",
    topics: ["HTML structure basics", "Finding elements by tag/class/id", "Extracting text and links", "Handling pagination"],
    hours: "~1.5 hrs (video) + 30 min practice",
    youtubeLink: "https://www.youtube.com/watch?v=XVv6mJpFOb0",
    youtubeTitle: "Web Scraping - freeCodeCamp"
  },
  {
    day: 5,
    title: "Working with APIs (Twitter/X)",
    description: "Learn how to connect to REST APIs to collect real-time data.",
    topics: ["Authentication (OAuth/Bearer tokens)", "Making GET requests with requests lib", "Parsing JSON responses", "Rate limiting strategies"],
    hours: "~30 min (video) + 30 min practice",
    youtubeLink: "https://www.youtube.com/watch?v=PjzXh3O4QOM",
    youtubeTitle: "Scraping Twitter - NeuralNine"
  },
  {
    day: 6,
    title: "NLP Fundamentals (NLTK & spaCy)",
    description: "Learn text preprocessing: Tokenization, Stemming, Lemmatization.",
    topics: ["Tokenization (Word/Sentence)", "Stop words removal", "Stemming vs. Lemmatization", "Part-of-Speech tagging"],
    hours: "~1 hr (video) + 30 min practice",
    youtubeLink: "https://www.youtube.com/watch?v=1bECXnMBPKE",
    youtubeTitle: "NLP Tutorial - Codebasics"
  },
  {
    day: 7,
    title: "Machine Learning for Text",
    description: "Use Scikit-Learn for text classification (TF-IDF, Naive Bayes).",
    topics: ["Bag of Words (BoW)", "TF-IDF Vectorizer", "Naive Bayes Classifier", "Train/Test split & accuracy metrics"],
    hours: "~45 min (video) + 30 min practice",
    youtubeLink: "https://www.youtube.com/watch?v=nHIUYwN-5rM",
    youtubeTitle: "Text Classification - Codebasics"
  },
  {
    day: 8,
    title: "Intro to Deep Learning Concepts",
    description: "Understand Neural Networks and backpropagation visually.",
    topics: ["What is a perceptron?", "Activation functions (ReLU, Sigmoid)", "Forward & Backward propagation", "Loss functions"],
    hours: "~1 hr (4 short videos, visual only)",
    youtubeLink: "https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi",
    youtubeTitle: "Neural Networks - 3Blue1Brown"
  },
  {
    day: 9,
    title: "PyTorch Basics & Tensors",
    description: "Learn PyTorch syntax, autograd, and building basic models.",
    topics: ["Creating Tensors", "Tensor operations on GPU/CPU", "Autograd (Automatic Differentiation)", "Building `nn.Module` classes"],
    hours: "~2 hrs (watch first half of video)",
    youtubeLink: "https://www.youtube.com/watch?v=V_xro1bcAuA",
    youtubeTitle: "PyTorch Deep Learning - freeCodeCamp"
  },
  {
    day: 10,
    title: "Building Classification Models",
    description: "Build a neural network for classification in PyTorch.",
    topics: ["Defining NN architecture", "Setting up the training loop", "Optimizers (SGD/Adam)", "Evaluating model performance"],
    hours: "~2 hrs (continue from Day 9)",
    youtubeLink: "https://www.youtube.com/watch?v=V_xro1bcAuA",
    youtubeTitle: "PyTorch DL (Cont.) - freeCodeCamp"
  },
  {
    day: 11,
    title: "Recurrent Neural Networks (RNN/LSTM)",
    description: "Learn how sequences of text are processed for temporal prediction.",
    topics: ["Why RNNs for sequences?", "Vanishing gradient problem", "Understanding LSTMs/GRUs", "Text classification with LSTM"],
    hours: "~1 hr (video) + 30 min practice",
    youtubeLink: "https://www.youtube.com/watch?v=0_PgCWgO9kM",
    youtubeTitle: "PyTorch RNN & LSTM - Python Eng."
  },
  {
    day: 12,
    title: "Transformers Architecture",
    description: "Understand the Attention Mechanism behind BERT and modern LLMs.",
    topics: ["Self-Attention mechanism", "Multi-Head Attention", "Positional Encoding", "Encoder-Decoder vs Encoder-only"],
    hours: "~30 min (video, no coding needed)",
    youtubeLink: "https://www.youtube.com/watch?v=zxQyTK8quyY",
    youtubeTitle: "Attention Explained - StatQuest"
  },
  {
    day: 13,
    title: "Hugging Face Transformers",
    description: "Fine-tune pre-trained language models for sentiment analysis.",
    topics: ["Loading models & tokenizers", "Pipelines for inference", "Fine-tuning with Trainer API", "Saving custom models"],
    hours: "~1.5 hrs (first 3 lessons) + 30 min hands-on",
    youtubeLink: "https://www.youtube.com/playlist?list=PLo2EIpI_JMQvWfQndUesu0nPBAtZ9gP1o",
    youtubeTitle: "Hugging Face Course"
  },
  {
    day: 14,
    title: "Time Series Forecasting",
    description: "Learn how to predict future trends based on past data.",
    topics: ["Time series components", "ARIMA basics", "Forecasting with Prophet", "Formatting data for time series"],
    hours: "~1 hr (video) + 30 min practice",
    youtubeLink: "https://www.youtube.com/watch?v=e8Yw4alG16Q",
    youtubeTitle: "Time Series Analysis - freeCodeCamp"
  },
  {
    day: 15,
    title: "Building an AI Dashboard",
    description: "Integrate your AI models with a web interface (Streamlit/FastAPI).",
    topics: ["Creating a FastAPI backend", "Exposing inference as an API endpoint", "Connecting Next.js to API", "Visualizing predictions"],
    hours: "~45 min (video) + 30 min to wire it up",
    youtubeLink: "https://www.youtube.com/watch?v=Klqn--Mu2pE",
    youtubeTitle: "Build a Web App with FastAPI"
  }
];

export default function Home() {
  const [completedDays, setCompletedDays] = useState<number[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("phdLearningProgress");
    if (saved) {
      try {
        setCompletedDays(JSON.parse(saved));
      } catch (e) {}
    }
  }, []);

  const toggleDay = (day: number) => {
    const newCompleted = completedDays.includes(day)
      ? completedDays.filter(d => d !== day)
      : [...completedDays, day];
    
    setCompletedDays(newCompleted);
    localStorage.setItem("phdLearningProgress", JSON.stringify(newCompleted));
  };

  const progressPercentage = Math.round((completedDays.length / curriculum.length) * 100);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4 tracking-tight">
            PhD Deep Learning Track
          </h1>
          <p className="text-xl text-gray-400">15-Day Accelerated Skill Acquisition Plan</p>
          
          <div className="mt-8 bg-gray-900 rounded-2xl p-6 border border-gray-800 shadow-xl max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-400">Overall Progress</span>
              <span className="text-sm font-bold text-white">{progressPercentage}%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              A curriculum transitioning your Software Engineering expertise into Applied Data Science, NLP, and Deep Learning for your thesis.
            </p>
          </div>
        </header>

        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
          {curriculum.map((item) => {
            const isCompleted = completedDays.includes(item.day);
            return (
              <div key={item.day} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                {/* Timeline dot */}
                <div 
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-4 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow transition-colors duration-300 z-10 ${
                    isCompleted 
                      ? 'bg-purple-500 border-purple-900 text-white' 
                      : 'bg-gray-800 border-gray-900 text-gray-400'
                  }`}
                >
                  {isCompleted ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  ) : (
                    <span className="font-bold text-sm">{item.day}</span>
                  )}
                </div>
                
                {/* Card */}
                <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-5 rounded-xl border backdrop-blur-sm shadow-lg transition-all duration-300 ${
                  isCompleted 
                    ? 'bg-gray-900/40 border-purple-500/20 shadow-purple-500/5 opacity-80' 
                    : 'bg-gray-900 border-gray-800 hover:shadow-blue-500/10 hover:border-blue-500/30'
                }`}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className={`font-bold text-lg ${isCompleted ? 'text-gray-300' : 'text-white'}`}>Day {item.day}: {item.title}</h3>
                    <button 
                      onClick={() => toggleDay(item.day)}
                      className={`px-3 py-1 rounded-full text-xs font-semibold border transition-colors shrink-0 ml-2 ${
                        isCompleted 
                          ? 'bg-purple-500/20 text-purple-400 border-purple-500/30 hover:bg-purple-500/30' 
                          : 'bg-gray-800 text-gray-400 border-gray-700 hover:text-white hover:border-gray-500'
                      }`}
                    >
                      {isCompleted ? 'Completed' : 'Mark Done'}
                    </button>
                  </div>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{item.description}</p>
                  
                  <ul className="mb-5 space-y-1.5">
                    {item.topics.map((topic, idx) => (
                      <li key={idx} className={`flex items-start text-sm ${isCompleted ? 'text-gray-500' : 'text-gray-300'}`}>
                        <svg className={`w-4 h-4 mr-2 mt-0.5 shrink-0 ${isCompleted ? 'text-purple-500/50' : 'text-purple-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        {topic}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-gray-800">
                    <div className="flex items-center text-xs text-gray-400 font-medium bg-gray-800/80 px-2 py-1 rounded">
                      <svg className="w-4 h-4 mr-1 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      {item.hours}
                    </div>
                    <a 
                      href={item.youtubeLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-xs font-medium text-red-400 hover:text-red-300 transition-colors bg-red-400/10 hover:bg-red-400/20 px-3 py-1.5 rounded-lg truncate max-w-[200px] sm:max-w-xs"
                    >
                      <svg className="w-4 h-4 mr-1.5 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                      <span className="truncate">{item.youtubeTitle}</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
