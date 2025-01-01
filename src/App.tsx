import React from "react";
import { StarField } from "./components/StarField";
import { ParticleCanvas } from "./components/ParticleCanvas.tsx";
import { ProjectCard } from "./components/ProjectCard";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { SectionTitle } from "./components/SectionTitle";
import { Github, Linkedin, Mail } from "lucide-react";
import profile from "./assets/1730545458840.jpg";
import { useRef } from "react";
import emailjs from '@emailjs/browser'

function App() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_h6ji5pi', 'template_1pq3mtu', form.current, {
        publicKey: '1854hCZNviXsZxaPS',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send message. Please try again.');
        },
      );
  };



  const projects = [
    {
      title: "My Resume",
      description: 'Get In Touch "MY-RESUME"',
      image:
        "https://i.pinimg.com/736x/1a/f3/e8/1af3e8034520dd94342cd576ff47152a.jpg",
      github: "https://github.com/sanjeet9798/Resume",
      demo: "https://sanjeet9798.github.io/Resume/",
      tags: ["HTML5", "CSS", "JS"],
    },
    {
      title: "Beauty Store",
      description: "We Know Your Beauty Secrets !",
      image:
        "https://i.pinimg.com/736x/85/ef/dd/85efdd4b2e6a7977fe593b686cc0b115.jpg",
      github: "https://github.com/sanjeet9798/Beauty-Salon",
      demo: "https://sanjeet9798.github.io/Beauty-Salon/",
      tags: ["HTML5", "CSS"],
    },
    {
      title: "Blockchain Explorer",
      description: "Advanced blockchain visualization and analysis tool",
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800",
      github: "#",
      demo: "#",
      tags: ["TypeScript", "Web3.js", "Node.js"],
    },
    {
      title: "Smart Home IoT Dashboard",
      description: "Centralized control system for IoT devices",
      image:
        "https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/5992673/cover_image/retina_1708x683/1005_Design-Patterns-in-React_Cover-44247834a5b31e8d08e5bbbdac4a6750.png",
      github: "#",
      demo: "#",
      tags: ["React", "IoT", "MQTT", "GraphQL"],
    },
    {
      title: "Food Delevery In 15min",
      description: "Fresh and good food availabe",
      image:
        "https://img.freepik.com/premium-psd/free-food-service-arrangement-with-background-mock-up_23-2148421299.jpg?semt=ais_hybrid",
      github: "#",
      demo: "#",
      tags: ["React", "IoT", "MQTT", "GraphQL"],
    },
    {
      title: "Electronics Services",
      description: "Centralized control system for IoT devices",
      image:
        "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=800",
      github: "#",
      demo: "#",
      tags: ["React", "Node JS", "MongoDB"],
    },
  ];


  

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-[#0B1120] to-black text-white">
      <StarField />
      <ParticleCanvas />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-4">
        <div className="text-center z-10">
          <div className="mb-8 relative inline-block">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white/10 glow-effect">
              <img
                src={profile}
                alt="Profile"
                className="w-full h-full object-cover scale-115"
              />
            </div>
          </div>
          <h1 className="text-6xl font-bold mb-6 gradient-text">Mr. Sanjeet</h1>
          <p className="text-2xl text-gray-400 mb-8">
            Full Stack Developer & Designer
          </p>

          <div className="flex justify-center gap-6">
            {[
              { Icon: Github, link: "https://github.com/sanjeet9798" },
              {
                Icon: Linkedin,
                link: "https://www.linkedin.com/in/sanjeet-kumar-4a3110300/",
              },
              { Icon: Mail, link: "https://mail.google.com/mail/u/0/#inbox" },
            ].map(({ Icon, link }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass hover:glow-effect transition-all duration-300"
              >
                <Icon size={24} className="text-gray-300 hover:text-blue-400" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="About Me"
            subtitle="Fueling innovation through dynamic and user-focused web applications"
          />
          <AboutSection />
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Skills & Expertise"
            subtitle="Technologies and tools I work with"
          />
          <SkillsSection />
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Featured Projects"
            subtitle="Some of my recent work"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Get in Touch"
            subtitle="Let's discuss your next project"
          />

          <form className="max-w-xl mx-auto glass p-8 rounded-xl" ref={form} onSubmit={sendEmail}>
            <div className="mb-6">  
              <input
                name="userName"
                type="text"
                placeholder="Name"
                className="w-full bg-transparent border border-gray-700 rounded-lg p-3 focus:border-blue-400 focus:glow-effect transition-all duration-300"
              />
            </div>
            <div className="mb-6">
              <input
                name="userEmail"
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border border-gray-700 rounded-lg p-3 focus:border-purple-400 focus:glow-effect transition-all duration-300"
              />
            </div>
            <div className="mb-6">
              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                className="w-full bg-transparent border border-gray-700 rounded-lg p-3 focus:border-pink-400 focus:glow-effect transition-all duration-300"
              />
            </div>
            <button
              type="submit"
              value="Send"
              className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-white font-semibold hover:bg-gradient-to-br hover:shadow-[0_4px_20px_rgba(255,105,180,0.6)] transition-all duration-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
