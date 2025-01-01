import React from 'react';
import { Calendar, MapPin, Briefcase, Award } from 'lucide-react';
import pic from "../assets/1730545458840.jpg"
import resume from "../assets/Resume.pdf"

const stats = [
  { icon: <Calendar size={20} />, label: 'Years Experience', value: '2.5+' },
  { icon: <Briefcase size={20} />, label: 'Projects Completed', value: '10+' },
  { icon: <Award size={20} />, label: 'Awards Won', value: '3' },
  { icon: <MapPin size={20} />, label: 'Countries Worked', value: '2' },
];

export const AboutSection: React.FC = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="relative">
        <div className="aspect-square rounded-2xl overflow-hidden">
          <img
            src={pic}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-2xl -z-10 blur-2xl opacity-50" />
      </div>
      
      <div>
        <h3 className="text-3xl font-bold mb-6">
        Transforming Ideas into Functional and Elegant {' '}
          <span className="gradient-text">Digital Solutions</span>
        </h3>
        
        <p className="text-gray-300 mb-8 leading-relaxed">
          With over 2.5 years of experience in full-stack development, I specialize in
          building scalable applications and innovative solutions. My passion lies in
          creating seamless user experiences while maintaining robust backend
          architectures.
        </p>

        <div className="grid grid-cols-2 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass p-4 rounded-xl text-center floating"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-2 text-blue-400">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        <button className="py-3 px-8 rounded-lg bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-white font-semibold hover:glow-effect transition-all duration-300">
            <a href={resume} download className="no-underline text-white">
              Download Resume
            </a>
        </button>

      </div>
    </div>
  );
};