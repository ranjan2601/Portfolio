import React from 'react';
import { Github, Linkedin, Mail, Download, ExternalLink, Calendar, Code2 } from 'lucide-react';
import { Helmet } from 'react-helmet';

const Portfolio = () => {
  const publications = [
    {
      title: "Long Short-Term Memory driven Recurrent Neural Network for Real-Time Stock Monitoring and Prediction",
      publisher: "Lecture Notes in Electrical Engineering, Springer (May 2023)",
      link: "https://link.springer.com/chapter/10.1007/978-981-99-0085-5_66",
      github: "https://github.com/ranjan2601/Stock-Prediction-Using-LSTM-Neural-Network"
    },
    {
      title: "COVID-19 and Pneumonia Classification Using Ensembling with Transfer Learning",
      publisher: "IEEE Xplore (October 2022)",
      link: "https://ieeexplore.ieee.org/abstract/document/9965096",
      github: "https://github.com/ranjan2601/Covid-19-Classification-using-Ensemble-Learning"
    }
  ];

  const experience = [
    {
      role: "Support Engineer Intern",
      company: "SAP",
      period: "Sep 23 - Jul 24",
      description: "At SAP, I migrated a machine learning pipeline from Apache Airflow to Azure Databricks, improving OCR processing efficiency by over 50% through threading and job queuing mechanisms. I also automated contract generation by developing and maintaining a database with over 100 variables, enhancing accuracy and reducing recurring issues by 30%."
    },
    {
      role: "Software Developer Intern",
      company: "AVEVA",
      period: "May 23 - Jul 23",
      description: "At AVEVA, I designed a Python and VBA-based tool to automate data collection from Excel and convert it into XML files, reducing manual conversion time by 30 hours per task. I also collaborated with the XR Software team to integrate XML files as a bridge between DYNSIM and XR, streamlining the process and reducing manual input by 80%."
    }
  ];

  const education = [
    {
      degree: "Masters in Computer Science",
      school: "New York University",
      period: "Sep 2024 - Present"
    },
    {
      degree: "Bachelors in Data Science and Engineering",
      school: "Manipal University Jaipur",
      period: "July 2020 - June 2024"
    }
  ];

  const skills = {
    "Core": ["Python", "Java", "C", "JavaScript", "HTML/CSS"],
    "Databases": ["MySQL", "PostgreSQL"],
    "Cloud & DevOps": ["Azure Cloud", "Docker", "Kubernetes", "CI/CD", "Jenkins", "Git"],
    "ML/DL Frameworks": ["TensorFlow", "PyTorch", "Scikit-Learn", "Hugging Face"],
    "Development": ["Django", "Flask", "REST API", "Azure Databricks"],
    "Data Science": ["Pandas", "NumPy", "NLTK", "Tableau"]
  };

  const projects = [
    {
      title: "HobbyHive",
      description: "A full-stack social networking platform for hobby enthusiasts to explore interests, share experiences, and organize events. Built with Django, React, and PostgreSQL, deployed on Azure.",
      tech: ["Django", "React", "PostgreSQL", "Azure", "Jest", "Pytest"],
      github: "https://github.com/ranjan2601/HobbyHive"
    },
    {
      title: "Fake News Detection",
      description: "Multilingual fake news detection system using BERT, achieving 99% accuracy on Hindi-English news articles. Deployed via Flask for third-party integration.",
      tech: ["BERT", "Flask", "NLP", "Python"],
      github: "https://github.com/ranjan2601/Fake-News-Detection-Using-BERT"
    },
    {
      title: "Real-Time Gender Detection",
      description: "Real-time gender detection system using OpenCV and Xception pre-trained model, achieving 96% accuracy across 1,000+ test cases.",
      tech: ["OpenCV", "Xception", "Deep Learning", "Python"],
      github: "https://github.com/ranjan2601/Real-Time-Gender-Recognition"
    },
    {
      title: "Human Activity Recognition",
      description: "LSTM-based activity recognition system analyzing 1M+ data points from WISDM dataset, achieving 80% accuracy with optimized performance.",
      tech: ["LSTM", "Deep Learning", "Python", "TensorFlow"],
      github: "https://github.com/ranjan2601/Human-Activity-Recognition"
    }
  ];

  return (
    <>
    <Helmet>
        <title>Shriranjan Patil</title>
        <meta name="description" content="Shriranjan Patil - Software Developer & ML Engineer" />
        <meta name="theme-color" content="#1F2937" />
      </Helmet>
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Shriranjan Patil
          </h1>
          <h2 className="text-2xl text-gray-400 mb-8">Graduate CS Student at NYU</h2>

          <div className="flex gap-4 mb-8">
            <a href="https://github.com/ranjan2601" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/shriranjan-patil" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:patilshriranjan@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://drive.google.com/file/d/1bf_UEbllejWvDRog5vtxZzLZ63xbaAx1/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-4 py-1 rounded-lg transition-colors text-sm"
            >
              <Download className="w-4 h-4" /> Resume
            </a>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-gray-300 mb-4">
              Hi, I'm Shriranjan Patil, a Master's student in Computer Science at NYU with expertise in software
              development, data science, and machine learning. I've developed impactful automation tools, built real-time
              ML models, and published research in the field of deep learning.
            </p>
            <p className="text-lg text-gray-300">
              When I'm not coding, you can find me playing football, basketball, or enjoying video games.
            </p>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
          <div className="max-w-3xl mx-auto grid gap-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition-colors">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                    <p className="text-gray-300">{edu.school}</p>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    {edu.period}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
        <div className="max-w-3xl mx-auto grid gap-6">
          {experience.map((job, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <h3 className="text-xl font-bold">{job.role} @ {job.company}</h3>
                <div className="flex items-center text-gray-400 whitespace-nowrap">
                  <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                  {job.period}
                </div>
              </div>
              <p className="text-gray-300">{job.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className="bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, index) => (
                    <span key={index} className="bg-gray-600 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Publications Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Publications</h2>
        <div className="max-w-3xl mx-auto grid gap-6">
          {publications.map((pub, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-2">{pub.title}</h3>
              <p className="text-gray-400 mb-4">{pub.publisher}</p>
              <div className="flex gap-4">
                <a
                  href={pub.link}
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4" /> View Publication
                </a>
                <a
                  href={pub.github}
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" /> View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div className="bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-blue-400">{project.title}</h3>
                  <a
                    href={project.github}
                    className="text-gray-400 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-800 px-2 py-1 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* GitHub Profile Link */}
          <div className="mt-8 text-center">
            <a
              href="https://github.com/ranjan2601"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
            >
              <Github className="w-5 h-5" />
              View more projects on GitHub
            </a>
          </div>
        </div>
      </div>


      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2025 Shriranjan Patil. All rights reserved.</p>
        </div>
      </footer>
    </div>
    </>
  );
};

export default Portfolio;