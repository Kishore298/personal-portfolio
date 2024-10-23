import React, { useRef, useEffect, useState } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faComments, faUsers, faLightbulb, faClock } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Skills = () => {
  const techRef = useRef(null);
  const softRef = useRef(null);
  const [isTechInView, setIsTechInView] = useState(false);
  const [isSoftInView, setIsSoftInView] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === techRef.current) {
            setIsTechInView(true);
          } else if (entry.target === softRef.current) {
            setIsSoftInView(true);
          }
        } else {
          if (entry.target === techRef.current) {
            setIsTechInView(false);
          } else if (entry.target === softRef.current) {
            setIsSoftInView(false);
          }
        }
      });
    }, options);

    if (techRef.current) observer.observe(techRef.current);
    if (softRef.current) observer.observe(softRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const techSkills = [
    { name: "HTML", icon: faHtml5, color: "#E34F26" },
    { name: "CSS", icon: faCss3Alt, color: "#1572B6" },
    { name: "JavaScript", icon: faJsSquare, color: "#F7DF1E" },
    { name: "React.js", icon: faReact, color: "#61DAFB" },
    { name: "Node.js", icon: faNodeJs, color: "#8CC84B" },
    { name: "Express.js", icon: faNodeJs, color: "#000000" },
    { name: "MongoDB", icon: faDatabase, color: "#47A248" },
    { name: "MySQL", icon: faDatabase, color: "#00758F" },
  ];

  const softSkills = [
    { name: "Communication", icon: faComments, color: "#4A90E2" },
    { name: "Teamwork", icon: faUsers, color: "#E6B300" },
    { name: "Problem-Solving", icon: faLightbulb, color: "#F7C74A" },
    { name: "Adaptability", icon: faClock, color: "#F2A900" },
    { name: "Leadership", icon: faUsers, color: "#FF6F61" },
    { name: "Work Ethic", icon: faLightbulb, color: "#009B77" },
    { name: "Fast Learner", icon: faLightbulb, color: "#FFB8B1" },
    { name: "Time Management", icon: faClock, color: "#6B8E23" },
  ];

  return (
    <section id="skills" className="bg-white p-5 flex flex-col items-center justify-center w-full max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 relative inline-block">
        Skills
        <span className="absolute left-0 bottom-0 top-10 w-full h-1 bg-orange-500" />
      </h2>
      
      <div className="flex flex-col lg:flex-row w-full gap-14">
        <motion.div 
          ref={techRef}
          className="w-full lg:w-2/3" 
          initial={{ y: 100, opacity: 0 }} 
          animate={{ y: isTechInView ? 0 : 100, opacity: isTechInView ? 1 : 0 }} 
          transition={{ duration: 1.0 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-center lg:text-left">
            Technical Skills
            <span className="block w-full h-1 bg-orange-500 mt-1" />
          </h3>
          <div className="grid grid-cols-2 gap-6"> 
            {techSkills.map(({ name, icon, color }) => (
              <div key={name} className="skill text-white text-lg p-4 rounded shadow-md flex items-center justify-between" style={{ backgroundColor: color }}>
                <FontAwesomeIcon icon={icon} className="text-3xl " /> 
                {name}
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div 
          ref={softRef}
          className="w-full lg:w-2/3"
          initial={{ y: 100, opacity: 0 }} 
          animate={{ y: isSoftInView ? 0 : 100, opacity: isSoftInView ? 1 : 0 }} 
          transition={{ duration: 1.0 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-center lg:text-left">
            Soft Skills
            <span className="block w-full h-1 bg-orange-500 mt-1" />
          </h3>
          <div className="grid grid-cols-2 gap-6">  
  {softSkills.map(({ name, icon, color }) => (
    <div
      key={name}
      className="skill text-white text-lg p-4 rounded shadow-md flex items-center justify-between flex-col items-center gap-2 md:flex-row md:items-start"
      style={{ backgroundColor: color }}
    >
      <FontAwesomeIcon icon={icon} className="text-3xl mb-2 md:mb-0" /> 
      <span className="break-words">{name}</span>
    </div>
  ))}
</div>

        </motion.div>
      </div>
    </section>
  );
};

export default Skills;


















