import React from 'react';
import { Github, Linkedin, Mail, Download, ExternalLink, Calendar, ArrowUpRight } from 'lucide-react';
import { Helmet } from 'react-helmet';

const Portfolio = () => {
  const experience = [
    {
      role: "Support Engineer Intern",
      company: "SAP",
      location: "Remote, IN",
      period: "Sep 2023 - Jul 2024",
      description: "Cut OCR processing time by 75% (4 hours down to 1 hour for 4,000+ contracts weekly) by migrating from Apache Airflow to Azure Databricks with parallel processing. Knocked out 50+ production tickets and maintained a database with 100+ variables, reducing data errors by 30%."
    },
    {
      role: "Software Developer Intern",
      company: "AVEVA",
      location: "Hyderabad, IN",
      period: "May 2023 - Jul 2023",
      description: "Built a Python/VBA automation tool that saved 30+ hours per conversion by extracting Excel data into XML schemas for XR simulations. Deployed it as a data bridge between DYNSIM and XR systems, cutting manual data entry by 80%."
    },
    {
      role: "Undergraduate Researcher",
      company: "Manipal University Jaipur",
      location: "Jaipur, IN",
      period: "Oct 2021 - Aug 2022",
      description: "Hit 95.2% accuracy on COVID-19 and pneumonia detection using ensemble CNNs (VGG16, DenseNet, MobileNet) on 4,500+ chest X-rays. Also built an LSTM model for stock forecasting that reached 88.2% prediction accuracy on Yahoo Finance data."
    }
  ];

  const education = [
    {
      degree: "Masters in Computer Science",
      school: "New York University",
      location: "New York City, NY",
      period: "Sep 2024 - May 2026",
      gpa: "3.89",
      coursework: "Machine Learning, Database Systems, Software Engineering, Big Data, Deep Learning, Design and Analysis of Algorithms"
    },
    {
      degree: "B.Tech in Data Science and Engineering",
      school: "Manipal University Jaipur",
      location: "Jaipur, IN",
      period: "Sep 2020 - Jun 2024",
      gpa: "8.72",
      coursework: "Data Structures, Algorithms, OOP, Operating Systems, Computer Vision, NLP, Artificial Intelligence"
    }
  ];

  const skills = {
    "Languages": ["Python", "JavaScript", "TypeScript", "SQL", "Java", "C", "R", "Bash"],
    "AI & ML": ["PyTorch", "TensorFlow", "Scikit-Learn", "LangChain", "RAG", "Hugging Face", "OpenAI API", "Anthropic API", "MLflow"],
    "Frameworks": ["FastAPI", "Django", "Flask", "React", "Node.js", "REST API"],
    "Data Engineering": ["Apache Spark", "Kafka", "PySpark", "Airflow", "Azure Databricks", "Streamlit"],
    "Databases": ["PostgreSQL", "MongoDB", "MySQL", "DynamoDB"],
    "DevOps & Cloud": ["Docker", "Kubernetes", "AWS", "Azure", "GCP", "Terraform", "CI/CD", "GitHub Actions"]
  };

  const projects = [
    {
      title: "F1 RaceFlux",
      description: "Real-time F1 data pipeline processing 60+ GB of telemetry per race with sub-second latency. Built with Kafka, Spark, and MongoDB for live race analysis, plus MLflow for experiment tracking across 10 containerized microservices.",
      tech: ["Kafka", "Spark", "MongoDB", "Docker", "MLflow", "FastAPI"],
      github: "https://github.com/ranjan2601/F1-Race-Flux"
    },
    {
      title: "DealScout",
      description: "AI marketplace where autonomous agents negotiate prices for you. Uses Claude Sonnet 4.5 for multi-turn negotiations with market-aware pricing strategies. Won 3rd place at HackNYU.",
      tech: ["Claude API", "FastAPI", "Next.js", "MongoDB", "SSE"],
      github: "https://github.com/ranjan2601/DealScout"
    },
    {
      title: "PolicyPeak",
      description: "Chrome extension that analyzes privacy policies so you don't have to. Uses RAG and GPT to extract risk scores, red flags, and plain-English summaries from legal jargon.",
      tech: ["React", "AWS Lambda", "OpenAI", "LangChain", "DynamoDB"],
      github: "https://github.com/ranjan2601/PolicyPeak"
    },
    {
      title: "StyleSnap",
      description: "AI fashion assistant that runs entirely on-device. Uses CLIP for visual search and Stable Diffusion for outfit generation, all processed on Qualcomm NPUs for privacy-first styling.",
      tech: ["CLIP", "Stable Diffusion", "FastAPI", "PyTorch", "Gradio"],
      github: "https://github.com/ranjan2601/StyleSnap"
    },
    {
      title: "TicketBot",
      description: "Multi-platform chat bot that creates Jira tickets and Google Tasks from natural language. Integrates Discord and Slack with smart command routing and conversation history.",
      tech: ["Gemini API", "FastAPI", "Discord", "Slack", "Jira", "Docker"],
      github: "https://github.com/ranjan2601/TicketBot"
    },
    {
      title: "HobbyHive",
      description: "Social platform for hobby enthusiasts with posts, events, and community features. Full-stack Django/React app deployed on Azure with 95% test coverage and JWT auth.",
      tech: ["Django", "React", "PostgreSQL", "Azure", "GitHub Actions"],
      github: "https://github.com/ranjan2601/HobbyHive"
    }
  ];

  const publications = [
    {
      title: "Long Short-Term Memory driven Recurrent Neural Network for Real-Time Stock Monitoring and Prediction",
      publisher: "Lecture Notes in Electrical Engineering, Springer",
      date: "May 2023",
      link: "https://link.springer.com/chapter/10.1007/978-981-99-0085-5_66",
      github: "https://github.com/ranjan2601/Stock-Prediction-Using-LSTM-Neural-Network"
    },
    {
      title: "COVID-19 and Pneumonia Classification Using Ensembling with Transfer Learning",
      publisher: "IEEE Xplore",
      date: "Oct 2022",
      link: "https://ieeexplore.ieee.org/abstract/document/9965096",
      github: "https://github.com/ranjan2601/Covid-19-Classification-using-Ensemble-Learning"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Shriranjan Patil | Software Developer & ML Engineer</title>
        <meta name="description" content="Shriranjan Patil - Software Developer & ML Engineer" />
        <meta name="theme-color" content="#F9F9F7" />
      </Helmet>

      <div className="min-h-screen bg-[#F9F9F7] text-[#111111]">
        {/* Newspaper Header */}
        <header className="border-b-4 border-[#111111]">
          <div className="max-w-screen-xl mx-auto px-4">
            {/* Status Bar */}
            <div className="flex justify-center items-center py-2 border-b border-[#111111]">
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22c55e]"></span>
                </span>
                Open to Work — Data Science, ML, SWE Roles
              </span>
            </div>

            {/* Masthead */}
            <div className="py-8 text-center border-b border-[#111111]">
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-8xl font-black tracking-tighter leading-[0.9]">
                Shriranjan Patil
              </h1>
              <p className="font-mono text-xs uppercase tracking-[0.3em] mt-4 text-[#737373]">
                CS Student at NYU
              </p>
            </div>

            {/* Navigation */}
            <nav className="flex flex-wrap justify-center gap-4 sm:gap-8 py-4">
              <a
                href="https://github.com/ranjan2601"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest link-hover"
              >
                <Github className="w-4 h-4" strokeWidth={1.5} />
                <span className="hidden sm:inline">Github</span>
              </a>
              <a
                href="https://linkedin.com/in/shriranjan-patil"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest link-hover"
              >
                <Linkedin className="w-4 h-4" strokeWidth={1.5} />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
              <a
                href="mailto:patilshriranjan@gmail.com"
                className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest link-hover"
              >
                <Mail className="w-4 h-4" strokeWidth={1.5} />
                <span className="hidden sm:inline">Email</span>
              </a>
              <a
                href="https://drive.google.com/file/d/1EDElVKnyBsYAIVF5PprDWGuv73Xt0Z35/view"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-4 py-2 font-mono flex items-center gap-2"
              >
                <Download className="w-4 h-4" strokeWidth={1.5} />
                Resume
              </a>
            </nav>
          </div>
        </header>

        {/* Hero / About Section */}
        <section className="max-w-screen-xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 lg:border-r lg:border-[#111111] lg:pr-8">
              <p className="font-body text-lg lg:text-xl leading-relaxed text-justify drop-cap">
                I like building things that solve real problems. Whether it's an ML pipeline that cuts processing
                time by 75%, an AI agent that negotiates prices for you, or a Chrome extension that reads privacy
                policies so you don't have to — I'm happiest when shipping something useful.
              </p>
              <p className="font-body text-lg lg:text-xl leading-relaxed text-justify mt-6">
                Currently doing my Master's at NYU, previously interned at SAP and AVEVA, and published a couple
                of papers in Springer and IEEE along the way.
              </p>
              <p className="font-body text-lg text-[#737373] mt-6">
                Outside of code: football, basketball, and way too much gaming.
              </p>
            </div>
            <aside className="lg:col-span-4">
              <div className="border border-[#111111] p-6 bg-[#F9F9F7]">
                <h3 className="font-mono text-xs uppercase tracking-widest mb-4 pb-2 border-b border-[#111111]">
                  Quick Facts
                </h3>
                <ul className="space-y-3 font-body text-sm">
                  <li className="flex justify-between">
                    <span className="text-[#737373]">From</span>
                    <span className="font-medium">Hyderabad, India</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-[#737373]">Based in</span>
                    <span className="font-medium">New York City</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-[#737373]">Degree</span>
                    <span className="font-medium">MS CS @ NYU</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-[#737373]">Graduating</span>
                    <span className="font-medium">May 2026</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-[#737373]">Focus</span>
                    <span className="font-medium">ML, Data, SWE</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-[#737373]">Publications</span>
                    <span className="font-medium">2 (Springer, IEEE)</span>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </section>

        {/* Ornamental Divider */}
        <div className="py-4 text-center font-serif text-2xl text-[#A3A3A3] tracking-[1em]">
          &#x2727; &#x2727; &#x2727;
        </div>

        {/* Education Section */}
        <section className="border-t border-[#111111]">
          <div className="max-w-screen-xl mx-auto px-4 py-16">
            <h2 className="font-serif text-4xl lg:text-5xl font-black text-center mb-12 tracking-tight">
              Education
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#111111]">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className={`p-6 lg:p-8 ${index === 0 ? 'md:border-r border-b md:border-b-0' : ''} border-[#111111] hard-shadow-hover bg-[#F9F9F7]`}
                >
                  <div className="font-mono text-xs uppercase tracking-widest text-[#737373] mb-2 flex items-center">
                    <Calendar className="w-3 h-3 mr-2" strokeWidth={1.5} />
                    {edu.period}
                  </div>
                  <h3 className="font-serif text-xl lg:text-2xl font-bold mb-1">{edu.degree}</h3>
                  <p className="font-body text-[#525252] mb-1">{edu.school}</p>
                  <p className="font-mono text-xs text-[#737373] mb-3">{edu.location}</p>
                  {edu.gpa && (
                    <p className="font-mono text-xs text-[#CC0000] mb-2">GPA: {edu.gpa}</p>
                  )}
                  <p className="font-body text-sm text-[#737373]">
                    <span className="text-[#525252]">Coursework:</span> {edu.coursework}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section - Inverted */}
        <section className="inverted-section">
          <div className="max-w-screen-xl mx-auto px-4 py-16">
            <h2 className="font-serif text-4xl lg:text-5xl font-black text-center mb-12 tracking-tight">
              Experience
            </h2>
            <div className="space-y-0">
              {experience.map((job, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 p-6 lg:p-8 ${index !== experience.length - 1 ? 'border-b border-[#404040]' : ''}`}
                >
                  <div className="lg:col-span-4">
                    <div className="font-mono text-xs uppercase tracking-widest text-[#A3A3A3] mb-2">
                      {job.period}
                    </div>
                    <h3 className="font-serif text-xl lg:text-2xl font-bold text-[#F9F9F7]">{job.role}</h3>
                    <p className="font-mono text-sm text-[#CC0000] mt-1">{job.company}</p>
                    <p className="font-mono text-xs text-[#A3A3A3]">{job.location}</p>
                  </div>
                  <div className="lg:col-span-8">
                    <p className="font-body text-[#E5E5E0] leading-relaxed text-justify">
                      {job.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="border-t border-[#111111]">
          <div className="max-w-screen-xl mx-auto px-4 py-16">
            <h2 className="font-serif text-4xl lg:text-5xl font-black text-center mb-12 tracking-tight">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-l border-t border-[#111111]">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="border-r border-b border-[#111111] p-6 bg-[#F9F9F7]">
                  <h3 className="font-mono text-xs uppercase tracking-widest mb-4 pb-2 border-b border-[#E5E5E0] text-[#CC0000]">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, index) => (
                      <span
                        key={index}
                        className="border border-[#111111] px-3 py-1 font-mono text-xs hover:bg-[#111111] hover:text-[#F9F9F7] transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="border-t-4 border-[#111111] bg-[#F5F5F5]">
          <div className="max-w-screen-xl mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <span className="font-mono text-xs uppercase tracking-widest text-[#CC0000]">Portfolio</span>
              <h2 className="font-serif text-4xl lg:text-5xl font-black tracking-tight mt-2">
                Featured Projects
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 border-l border-t border-[#111111]">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="border-r border-b border-[#111111] bg-[#F9F9F7] p-6 lg:p-8 hard-shadow-hover"
                >
                  <div className="flex justify-end items-start mb-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-[#111111] h-10 w-10 flex items-center justify-center hover:bg-[#111111] hover:text-[#F9F9F7] transition-all"
                    >
                      <ArrowUpRight className="w-5 h-5" strokeWidth={1.5} />
                    </a>
                  </div>
                  <h3 className="font-serif text-xl lg:text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="font-body text-sm text-[#525252] leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="font-mono text-xs px-2 py-1 bg-[#E5E5E0]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a
                href="https://github.com/ranjan2601"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-8 py-4 font-mono inline-flex items-center gap-3"
              >
                <Github className="w-5 h-5" strokeWidth={1.5} />
                View All Projects on GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Publications Section */}
        <section className="border-t border-[#111111]">
          <div className="max-w-screen-xl mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <span className="font-mono text-xs uppercase tracking-widest text-[#CC0000]">Research</span>
              <h2 className="font-serif text-4xl lg:text-5xl font-black tracking-tight mt-2">
                Publications
              </h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-0 border border-[#111111]">
              {publications.map((pub, index) => (
                <div
                  key={index}
                  className={`p-6 lg:p-8 ${index !== publications.length - 1 ? 'border-b border-[#111111]' : ''} hard-shadow-hover bg-[#F9F9F7]`}
                >
                  <div className="font-mono text-xs uppercase tracking-widest text-[#737373] mb-2">
                    {pub.publisher} · {pub.date}
                  </div>
                  <h3 className="font-serif text-lg lg:text-xl font-bold leading-snug mb-4">
                    {pub.title}
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline px-4 py-2 font-mono flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" strokeWidth={1.5} />
                      Paper
                    </a>
                    <a
                      href={pub.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline px-4 py-2 font-mono flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" strokeWidth={1.5} />
                      Code
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t-4 border-[#111111]">
          <div className="max-w-screen-xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-[#111111]">
              <div className="md:col-span-6">
                <h3 className="font-serif text-2xl font-bold mb-4">Shriranjan Patil</h3>
                <p className="font-body text-sm text-[#525252] leading-relaxed max-w-md">
                  Software Developer & ML Engineer based in New York City.
                  Currently pursuing Master's in Computer Science at NYU.
                </p>
              </div>
              <div className="md:col-span-3">
                <h4 className="font-mono text-xs uppercase tracking-widest mb-4">Connect</h4>
                <div className="space-y-2">
                  <a href="https://github.com/ranjan2601" target="_blank" rel="noopener noreferrer"
                     className="block font-body text-sm link-hover">GitHub</a>
                  <a href="https://linkedin.com/in/shriranjan-patil" target="_blank" rel="noopener noreferrer"
                     className="block font-body text-sm link-hover">LinkedIn</a>
                  <a href="mailto:patilshriranjan@gmail.com"
                     className="block font-body text-sm link-hover">Email</a>
                </div>
              </div>
              <div className="md:col-span-3">
                <h4 className="font-mono text-xs uppercase tracking-widest mb-4">Quick Links</h4>
                <div className="space-y-2">
                  <a href="https://drive.google.com/file/d/1EDElVKnyBsYAIVF5PprDWGuv73Xt0Z35/view"
                     target="_blank" rel="noopener noreferrer"
                     className="block font-body text-sm link-hover">Resume</a>
                  <a href="https://link.springer.com/chapter/10.1007/978-981-99-0085-5_66"
                     target="_blank" rel="noopener noreferrer"
                     className="block font-body text-sm link-hover">Publications</a>
                </div>
              </div>
            </div>
            <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="font-mono text-xs text-[#737373] uppercase tracking-widest">
                &copy; 2025 Shriranjan Patil. All rights reserved.
              </p>
              <p className="font-mono text-xs text-[#737373] uppercase tracking-widest">
                Edition: Vol 1.0 | Printed in NYC
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Portfolio;
