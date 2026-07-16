'use client';

import React, { useState } from 'react';
import { 
  Code2, Briefcase, GraduationCap, Award, Mail, 
  ChevronRight, User, Terminal, Cpu, CheckCircle2, Send, 
  Phone, MapPin, ArrowUp, Sparkles, ShieldAlert, FileText, Globe, Star
} from 'lucide-react';

export default function Portfolio() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const techSkills = [
    "Python (Basic)", "C++", "Data Analysis (Basic)", "Database Concepts (Basic)", 
    "HTML (Basic)", "Software Requirement Engineering (SRS)", "Microsoft Office", "Problem Solving"
  ];

  const softSkills = [
    "Communication Skills", "Teamwork", "Time Management", 
    "Adaptability", "Quick Learner", "Critical Thinking"
  ];

  const certifications = [
    { title: "Digital Marketing", provider: "DigiSkills Training Program", status: "Certified" },
    { title: "Freelancing", provider: "DigiSkills Training Program", status: "Certified" },
    { title: "Foundations: Data, Data, Everywhere", provider: "Google (Coursera)", status: "Certified" },
    { title: "Prepare Data for Exploration", provider: "Google (Coursera)", status: "Certified" }
  ];

  const projects = [
    {
      title: "Crime Reporting System",
      category: "Software Solution & Management",
      description: "Designed a software solution for reporting and managing crime-related information with a focus on user-friendly design and efficient record management.",
      features: [
        "User-friendly interface design",
        "Efficient record management",
        "Structured crime data processing"
      ],
      tech: ["Software Design", "Database Concepts", "UI/UX"],
      icon: <ShieldAlert className="w-8 h-8 text-blue-400" />
    },
    {
      title: "Stepper Motor Interfacing & Control",
      category: "Hardware Engineering",
      description: "Developed and tested a stepper motor control system using Intel 8086 microprocessor as part of a university hardware project.",
      features: [
        "Intel 8086 microprocessor control",
        "Hardware and software interfacing",
        "Precision motor movement testing"
      ],
      tech: ["Intel 8086", "Microprocessor", "Hardware Interfacing"],
      icon: <Cpu className="w-8 h-8 text-cyan-400" />
    },
    {
      title: "Software Requirement Specification (SRS)",
      category: "Software Engineering Documentation",
      description: "Prepared a complete SRS document including requirement gathering, functional and non-functional requirements, use cases, and system analysis.",
      features: [
        "Detailed functional & non-functional requirements",
        "Comprehensive Use Case analysis",
        "System architecture & flow modeling"
      ],
      tech: ["SRS Documentation", "Requirement Gathering", "System Analysis"],
      icon: <FileText className="w-8 h-8 text-indigo-400" />
    }
  ];

  const validateForm = () => {
    let errs = {};
    if (!formData.name.trim()) errs.name = "Full Name is required";
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Invalid email format";
    }
    if (!formData.phone.trim()) errs.phone = "Phone number is required";
    if (!formData.subject.trim()) errs.subject = "Subject is required";
    if (!formData.message.trim()) errs.message = "Message is required";
    
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setErrors({});
      }, 4000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500 selection:text-white scroll-smooth">
      
      {/* 1. NAVIGATION BAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
          <a href="#" className="text-xl font-bold tracking-wider text-blue-400 font-mono flex items-center gap-2">
            <Code2 className="w-6 h-6 text-blue-500" /> &lt;Umme Rubab /&gt;
          </a>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
            <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
          <a 
            href="#contact" 
            className="hidden sm:inline-flex items-center gap-2 bg-blue-600/20 text-blue-400 border border-blue-500/40 px-5 py-2 rounded-full font-medium text-sm hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-lg shadow-blue-500/10"
          >
            Hire Me
          </a>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section id="home" className="relative py-20 md:py-28 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping"></span>
            Seeking Remote Internship Opportunities
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4 text-slate-100">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">Umme Rubab</span>
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-300 mb-6 font-mono">
            Software Engineering Student
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mb-8 leading-relaxed">
            Motivated and enthusiastic BS Software Engineering student with a CGPA of 3.45 at Lahore College for Women University (LCWU). Passionate about software development, Python programming, and data analysis.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a 
              href="#projects" 
              className="bg-blue-600 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-blue-500 transition-all duration-300 shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2"
            >
              View Projects <ChevronRight className="w-4 h-4" />
            </a>
            <a 
              href="#contact" 
              className="bg-slate-900 border border-slate-700/80 text-slate-200 font-medium px-7 py-3.5 rounded-xl hover:bg-slate-800 hover:border-slate-600 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* PROFILE PICTURE FRAME */}
        <div className="relative flex justify-center items-center">
          <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 blur-2xl opacity-30 animate-pulse"></div>
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full border-4 border-blue-500/30 bg-slate-900/90 backdrop-blur-xl p-2 flex flex-col items-center justify-center text-center shadow-2xl overflow-hidden">
            <img 
              src="/profile.jpg.jpeg" 
              alt="Umme Rubab" 
              className="w-full h-full rounded-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling.style.display = 'flex';
              }}
            />
            <div className="hidden w-full h-full rounded-full bg-slate-950/80 border border-slate-800 flex-col items-center justify-center p-6">
              <User className="w-20 h-20 text-blue-400 mb-2" />
              <span className="text-slate-200 font-bold text-lg">Umme Rubab</span>
              <span className="text-blue-400 text-xs font-mono">LCWU Student</span>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHT STATS BAR */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-slate-900/60 border border-slate-800/80 backdrop-blur-md rounded-2xl shadow-xl">
          <div className="text-center p-3 border-r border-slate-800/80 last:border-0">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-blue-400 font-mono">3.45</h3>
            <p className="text-xs text-slate-400 uppercase tracking-wider mt-1">Current CGPA</p>
          </div>
          <div className="text-center p-3 border-r border-slate-800/80 last:border-0">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono">3</h3>
            <p className="text-xs text-slate-400 uppercase tracking-wider mt-1">Academic Projects</p>
          </div>
          <div className="text-center p-3 border-r border-slate-800/80 last:border-0">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-indigo-400 font-mono">4</h3>
            <p className="text-xs text-slate-400 uppercase tracking-wider mt-1">Certifications</p>
          </div>
          <div className="text-center p-3">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">2024-28</h3>
            <p className="text-xs text-slate-400 uppercase tracking-wider mt-1">BS Software Eng.</p>
          </div>
        </div>
      </section>

      {/* 3. ABOUT SECTION */}
      <section id="about" className="py-20 bg-slate-900/40 border-y border-slate-800/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex justify-center items-center gap-2 text-blue-400 font-mono text-xs uppercase tracking-widest mb-2">
              <User className="w-4 h-4" /> Professional Profile
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">About Me</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-slate-900/60 border border-slate-800/80 backdrop-blur-md rounded-2xl p-8 shadow-xl flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-slate-100 mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-blue-400" /> Career Objective
                </h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Motivated and enthusiastic BS Software Engineering student with a <strong className="text-slate-200">CGPA of 3.45</strong> at Lahore College for Women University (LCWU). Passionate about software development, Python programming, data analysis, and emerging technologies. Seeking a remote internship where I can apply my academic knowledge, strengthen my technical skills, and contribute to real-world software projects while continuously learning and growing.
                </p>
              </div>

              <div className="space-y-3 pt-6 border-t border-slate-800">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <Star className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span><strong>Strengths:</strong> Dedicated, Organized, Self-Motivated, Always eager to learn.</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <Star className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span><strong>Interests:</strong> Programming, Data Analysis, UI/UX Design, Problem Solving.</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800/80 backdrop-blur-md rounded-2xl p-8 shadow-xl flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-blue-400" /> Education
                </h3>
                <div className="border-l-2 border-blue-500/50 pl-6 space-y-3 relative">
                  <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 inline-block">
                    2024 – 2028
                  </span>
                  <h4 className="text-xl font-bold text-slate-100">Bachelor of Science in Software Engineering</h4>
                  <p className="text-blue-300 font-medium text-sm">Lahore College for Women University (LCWU), Lahore, Pakistan</p>
                  <p className="text-slate-200 font-semibold text-sm">
                    CGPA: 3.45 / 4.0
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400 font-mono">
                <span>Location: Lahore, Pakistan</span>
                <span>Languages: English, Urdu</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SKILLS & CERTIFICATIONS SECTION */}
      <section id="skills" className="py-20 max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex justify-center items-center gap-2 text-blue-400 font-mono text-xs uppercase tracking-widest mb-2">
            <Cpu className="w-4 h-4" /> Technical Profile
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">Skills & Certifications</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-900/50 border border-slate-800/80 backdrop-blur-md rounded-2xl p-8 shadow-xl">
            <h3 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-2">
              <Terminal className="text-blue-400 w-5 h-5" /> Technical Skills
            </h3>
            <div className="space-y-3">
              {techSkills.map((skill, index) => (
                <div key={index} className="bg-slate-950/70 border border-slate-800 rounded-xl p-3 flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span className="text-slate-200 text-sm font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/50 border border-slate-800/80 backdrop-blur-md rounded-2xl p-8 shadow-xl">
            <h3 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-2">
              <Award className="text-cyan-400 w-5 h-5" /> Soft Skills
            </h3>
            <div className="space-y-3">
              {softSkills.map((skill, index) => (
                <div key={index} className="bg-slate-950/70 border border-slate-800 rounded-xl p-3 flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span className="text-slate-200 text-sm font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/50 border border-slate-800/80 backdrop-blur-md rounded-2xl p-8 shadow-xl">
            <h3 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-2">
              <Award className="text-indigo-400 w-5 h-5" /> Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-slate-950/70 border border-slate-800 rounded-xl p-4">
                  <div className="flex justify-between items-start gap-2">
                    <h4 className="text-slate-100 text-sm font-bold">{cert.title}</h4>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">{cert.status}</span>
                  </div>
                  <p className="text-xs text-blue-400 font-mono mt-1">{cert.provider}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROJECTS SECTION */}
      <section id="projects" className="py-20 bg-slate-900/40 border-t border-slate-800/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex justify-center items-center gap-2 text-blue-400 font-mono text-xs uppercase tracking-widest mb-2">
              <Briefcase className="w-4 h-4" /> Academic Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">Academic Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((proj, idx) => (
              <div 
                key={idx} 
                className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-blue-500/50 transition-all duration-300 shadow-xl hover:-translate-y-1 group"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {proj.icon}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-blue-400 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {proj.description}
                  </p>

                  <div className="space-y-2 mb-6 border-t border-slate-800/80 pt-4">
                    <h4 className="text-xs font-mono text-slate-300 font-semibold uppercase">Highlights:</h4>
                    {proj.features.map((feat, fIdx) => (
                      <p key={fIdx} className="text-xs text-slate-400 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                        {feat}
                      </p>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/80">
                    {proj.tech.map((t, tIdx) => (
                      <span key={tIdx} className="text-xs font-mono text-blue-300 bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CONTACT SECTION */}
      <section id="contact" className="py-20 max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex justify-center items-center gap-2 text-blue-400 font-mono text-xs uppercase tracking-widest mb-2">
            <Mail className="w-4 h-4" /> Connect With Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">Get In Touch</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-100 mb-2">Contact Information</h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              I am seeking remote internship opportunities where I can apply my skills and grow. Feel free to contact me directly!
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <Mail className="text-blue-400 w-5 h-5 flex-shrink-0" />
                <div>
                  <span className="text-xs font-mono text-slate-500 block uppercase">Email</span>
                  <a href="mailto:ummerubab2024168@gmail.com" className="text-slate-200 text-sm hover:text-blue-400 font-medium">ummerubab2024168@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <Phone className="text-blue-400 w-5 h-5 flex-shrink-0" />
                <div>
                  <span className="text-xs font-mono text-slate-500 block uppercase">Phone</span>
                  <a href="tel:03298804745" className="text-slate-200 text-sm hover:text-blue-400 font-medium">0329-8804745</a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <Globe className="text-blue-400 w-5 h-5 flex-shrink-0" />
                <div>
                  <span className="text-xs font-mono text-slate-500 block uppercase">LinkedIn</span>
                  <a href="https://www.linkedin.com/in/umme-rubab-aaaa42370" target="_blank" rel="noopener noreferrer" className="text-slate-200 text-sm hover:text-blue-400 font-medium truncate block max-w-[260px] sm:max-w-full">
                    linkedin.com/in/umme-rubab-aaaa42370
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <MapPin className="text-blue-400 w-5 h-5 flex-shrink-0" />
                <div>
                  <span className="text-xs font-mono text-slate-500 block uppercase">Location</span>
                  <span className="text-slate-200 text-sm font-medium">Lahore, Pakistan</span>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="bg-slate-900/80 border border-slate-800 backdrop-blur-md rounded-2xl p-8 shadow-2xl">
            {submitted ? (
              <div className="p-8 text-center text-emerald-400 flex flex-col items-center gap-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400" />
                <h4 className="text-xl font-bold text-slate-100">Message Sent Successfully!</h4>
                <p className="text-slate-400 text-sm">Thank you for reaching out. I will respond soon.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Full Name *</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Your Name"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 text-sm focus:outline-none focus:border-blue-500 transition"
                  />
                  {errors.name && <span className="text-xs text-red-400 mt-1 block">{errors.name}</span>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">Email Address *</label>
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="name@example.com"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 text-sm focus:outline-none focus:border-blue-500 transition"
                    />
                    {errors.email && <span className="text-xs text-red-400 mt-1 block">{errors.email}</span>}
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">Phone Number *</label>
                    <input 
                      type="text" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="0300-0000000"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 text-sm focus:outline-none focus:border-blue-500 transition"
                    />
                    {errors.phone && <span className="text-xs text-red-400 mt-1 block">{errors.phone}</span>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Subject *</label>
                  <input 
                    type="text" 
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    placeholder="Internship Inquiry"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 text-sm focus:outline-none focus:border-blue-500 transition"
                  />
                  {errors.subject && <span className="text-xs text-red-400 mt-1 block">{errors.subject}</span>}
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Message *</label>
                  <textarea 
                    rows="4" 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Write your message here..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 text-sm focus:outline-none focus:border-blue-500 transition"
                  ></textarea>
                  {errors.message && <span className="text-xs text-red-400 mt-1 block">{errors.message}</span>}
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2"
                >
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="bg-slate-950 border-t border-slate-800/80 py-10 relative">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs font-mono text-center sm:text-left">
            © {new Date().getFullYear()} Umme Rubab. Software Engineering Student @ LCWU. Built with Next.js & Tailwind CSS.
          </p>

          <div className="flex items-center gap-6 text-slate-400">
            <a href="https://www.linkedin.com/in/umme-rubab-aaaa42370" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition"><Globe className="w-5 h-5" /></a>
            <a href="mailto:ummerubab2024168@gmail.com" className="hover:text-blue-400 transition"><Mail className="w-5 h-5" /></a>
          </div>

          <button 
            onClick={scrollToTop} 
            className="p-3 bg-slate-900 border border-slate-800 rounded-full hover:bg-slate-800 hover:text-blue-400 transition"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </footer>

    </div>
  );
}