import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

const projects = [
    {
      title: "Medical Search Engine",
      content: {
        github: "https://github.com/EinarGatc/Medical-Search-Engine",
        description: "A specialized search engine focused on medical information retrieval.",
        project_image: "src/images/MedicalSearchEngine.png",
        features: [
          {
            description: "9000+ medical documents indexed",
          },
          {
            description: "Sub-300ms query response time",
          },
          {
            description: "Full-stack implementation",
          }
        ]
      }
    },
    {
      title: "BuddyCam",
      content: {
        github: "",
        description: "Smart home security monitoring solution using cloud-based image recognition.",
        project_image: "src/images/BuddyCam.png",
        features: [
          {
            description: "Amazon Rekognition integration",
          },
          {
            description: "ESP32-Cam hardware implementation",
          },
          {
            description: "AWS cloud storage and processing",
          }
        ]
      }
    },
    {
      title: "Multi-Agent AI",
      content: {
        github: "https://github.com/eddie100971/soccer-twos-working",
        description: "Advanced reinforcement learning implementation for multi-agent environments.",
        project_image: "src/images/MPE.gif",
        features: [
          {
            description: "Soccer-Twos environment modeling",
          },
          {
            description: "Sample Dropout Variance Reduction",
          },
          {
            description: "MAPPO, RMAPPO, IPPO algorithm implementation",
          }
        ]
      }
    }
]

export const Projects = () => {

  const [activeTab, setActiveTab] = useState(0);
  const [direction, setDirection] = useState(0);
  
  const handleTabChange = (index) => {
    setDirection(index > activeTab ? 1 : -1);
    setActiveTab(index);
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
        <div className="flex w-full gap-8 mb-8">
            {projects.map((project, index) => (
            <button
                key={index}
                className={`flex-1 py-2 px-6 text-center font-medium rounded-md text-sm uppercase tracking-wide transition-colors duration-200 ${
                activeTab === index
                    ? 'bg-[#F6BD60] text-black'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                onClick={() => handleTabChange(index)}
            >
                {project.title}
            </button>
            ))}
        </div>

        <div className="bg-[#F6BD60] text-black p-12 rounded-lg min-h-[500px] overflow-hidden relative">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={activeTab}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 300 : -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -300 : 300 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-full"
          >
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/2">
                <motion.h1 
                  className="text-5xl font-bold mb-8 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {activeTab === 0 && "Find and analyze medical information"}
                  {activeTab === 1 && "Monitor your home with AI-powered security"}
                  {activeTab === 2 && "Implement advanced AI learning models"}
                </motion.h1>
                <motion.div 
                  className="flex flex-col gap-6 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <button className="bg-black text-white py-3 px-6 rounded-md font-medium w-fit hover:bg-gray-800 transition-colors">
                    Get started for free
                  </button>
                </motion.div>
              </div>

              <div className="lg:w-1/2">
                <ul className="space-y-6">
                    <motion.div 
                    className="flex flex-col gap-6 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    >
                        <img src={projects[activeTab].content.project_image} alt="" />
                    </motion.div>
                    {projects[activeTab].content.features.map((feature, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-center gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                        <div className="p-2 bg-white rounded-md mt-1">
                            <svg 
                            className="w-6 h-6 text-black" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            {index === 0 && (
                                <path d="M12 4.75L19.25 9L12 13.25L4.75 9L12 4.75Z" stroke="currentColor" strokeWidth="1.5" />
                            )}
                            {index === 1 && (
                                <circle cx="12" cy="12" r="7.25" stroke="currentColor" strokeWidth="1.5" />
                            )}
                            {index === 2 && (
                                <rect x="4.75" y="4.75" width="14.5" height="14.5" stroke="currentColor" strokeWidth="1.5" />
                            )}
                            </svg>
                        </div>
                        <div>
                            <p className="text-lg font-medium">{feature.description}</p>
                        </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};