import React, { useEffect, useRef, useState } from 'react';
import project1 from './assets/images/rps.webp';
import project2 from './assets/images/blog.webp';
import project3 from './assets/images/budgettracker1.webp';
import project4 from './assets/images/task.webp';
import project5 from './assets/images/school-management-software-hero-image.webp';
import project6 from './assets/images/portfolio.webp';
import { motion } from 'framer-motion';

const projects = [
  {
    image: project1,
    name: 'Rock Paper Scissors',
    sourceCode: 'https://github.com/Kishore298/rock-paper-scissors-game',
    liveDemo: 'https://kishore298.github.io/rock-paper-scissors-game/',
  },
  {
    image: project2,
    name: 'Blog Website',
    sourceCode: 'https://github.com/Kishore298/blog-site',
    liveDemo: 'https://blog-webite.onrender.com',
  },
  {
    image: project3,
    name: 'Budget Tracker',
    sourceCode: 'https://github.com/Kishore298/budget-tracker',
    liveDemo: 'https://expense-tracker-jhel.onrender.com',
  },
  {
    image: project4,
    name: 'Task Manager',
    sourceCode: 'https://github.com/Kishore298/task-manager',
    liveDemo: 'https://task-manager-n90x.onrender.com',
  },
  {
    image: project5,
    name: 'School Management System',
    sourceCode: 'https://github.com/Kishore298/school-crm',
    liveDemo: 'https://school-management-system-3uxv.onrender.com',
  },
  {
    image: project6,
    name: 'My Personal Portfolio',
    sourceCode: 'https://github.com/Kishore298?tab=repositories',
    liveDemo: '#This is my personal portfolio',
  },
];

const Projects = () => {
  const projectRefs = useRef([]);
  const [inView, setInView] = useState(new Array(projects.length).fill(false));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = projectRefs.current.indexOf(entry.target);
          if (entry.isIntersecting) {
            setInView((prev) => {
              const newInView = [...prev];
              newInView[index] = true;
              return newInView;
            });
          } else {
            setInView((prev) => {
              const newInView = [...prev];
              newInView[index] = false;
              return newInView;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="projects" className="bg-white py-10 flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold relative inline-block mb-8">
        Projects
        <span className="absolute left-0 bottom-0 top-10 w-full h-1 bg-orange-500" />
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            ref={(el) => (projectRefs.current[index] = el)}
            className="max-w-xs shadow-lg p-4 transition-transform transform"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: inView[index] ? 1 : 0, y: inView[index] ? 0 : 100 }}
            transition={{ duration: 1.0 }}
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover mb-4"
            />
            <p className="text-lg font-semibold mb-2">{project.name}</p>
            <div className="flex justify-between">
              <a
                href={project.sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Source Code
              </a>
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
              >
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

