// Skills.js
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaHtml5, FaCss3, FaJs, FaSass, FaReact, FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss } from "react-icons/si";
import "../../Styling/Skills.scss"

const Sill = () => {
  const skillsData = [
    { icon: <FaHtml5 />, name: 'HTML', level: 95 },
    { icon: <FaCss3 />, name: 'CSS', level: 90 },
    { icon: <FaJs />, name: 'JavaScript', level: 90 },
    { icon: <FaSass />, name: 'SASS', level: 90 },
    { icon: <FaReact />, name: 'ReactJS', level: 80 },
    { icon: <FaBootstrap />, name: 'Bootstrap', level: 80 },
    { icon: <SiTailwindcss />, name: 'Tailwind CSS', level: 80 },
  ];

  const controls = useAnimation();

  useEffect(() => {
    const animateSkills = async () => {
      await controls.start((i) => ({
        width: `${skillsData[i].level}%`,
        transition: { duration: 1, delay: i * 0.2 },
      }));
    };

    animateSkills();
  }, [controls, skillsData]);

  return (
    <div className="Skills">
    <div className="skills-container">
      <ul>
        {skillsData.map((skill, index) => (
          <li key={index}>

            <span className="icon">{skill.icon}</span>
              <div className="name">{skill.name}
              <div className="progress-bar">
                <motion.div
                  animate={controls}
                  custom={index}
                  style={{ width: '0%' }}
                  data-level={skill.level}
                ></motion.div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default Sill;
