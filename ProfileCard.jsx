import React from 'react';
import { Github, Linkedin, Twitter, Award, Book, Code } from 'lucide-react';

const ProfileCard = () => {
  const personalInfo = {
    name: "Your Name",
    title: "Your Professional Title",
    bio: "A brief description about yourself and your expertise.",
    avatar: "https://allroundclub.com/blog/wp-content/uploads/2021/10/how-to-draw-pikachu.png", 
  };

  const contributions = [
    { icon: <Code size={20} />, title: "Open Source", value: "50+ projects" },
    { icon: <Book size={20} />, title: "Articles", value: "20+ published" },
    { icon: <Award size={20} />, title: "Awards", value: "5 received" },
  ];

  const socialLinks = [
    { icon: <Github size={20} />, url: "https://github.com/yourusername" },
    { icon: <Linkedin size={20} />, url: "https://linkedin.com/in/yourusername" },
    { icon: <Twitter size={20} />, url: "https://twitter.com/yourusername" },
  ];

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img className="h-48 w-full object-cover md:h-full md:w-48" src={personalInfo.avatar} alt={personalInfo.name} />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{personalInfo.title}</div>
          <h1 className="block mt-1 text-lg leading-tight font-medium text-black">{personalInfo.name}</h1>
          <p className="mt-2 text-slate-500">{personalInfo.bio}</p>
          
          <div className="mt-4">
            <h2 className="text-md font-semibold text-gray-700">Contributions</h2>
            <div className="mt-2 flex flex-wrap gap-4">
              {contributions.map((item, index) => (
                <div key={index} className="flex items-center">
                  {item.icon}
                  <span className="ml-2 text-sm text-gray-600">{item.title}: <strong>{item.value}</strong></span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-4 flex space-x-4">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.url} className="text-gray-400 hover:text-gray-500" target="_blank" rel="noopener noreferrer">
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
