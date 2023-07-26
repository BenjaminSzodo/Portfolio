

import React, { useState } from 'react';

const Skills = () => {
  const [skills, setSkills] = useState([
    {
      title: 'HTML',
      percent: '80',
    },
    {
      title: 'CSS',
      percent: '70',
    },
    {
      title: 'Tailwind CSS',
      percent: '60',
    },
    {
      title: 'JavaScript',
      percent: '80',
    },
    {
        title: 'TypeScript',
        percent: '60',
      },
    {
      title: 'React',
      percent: '80',
    },
    {
      title: 'SQL',
      percent: '65',
    },
    {
      title: 'SASS',
      percent: '75',
    },
    {
        title: 'Node',
        percent: '75',
      },
      {
        title: 'GitHub',
        percent: '75',
      },
  ]);

  const [currentSkill, setCurrentSkill] = useState({
    title: 'HTML',
    percent: '80',
  });

  const circumference = 2 * (22 / 7) * 120;

  const handleSkillClick = (skill) => {
    setCurrentSkill(skill);
  };

  return (
    <div>
        <div className='flex justify-center'>
            <h2 className="bg-gradient-to-tr from-sky-500 to-sky-700 bg-clip-text font-sans text-4xl font-semibold leading-tight tracking-normal text-transparent antialiased m-4 mb-20">TECNOLOGIAS</h2>
        </div>
    <div className="grid w-full min-h-screen text-gray-100  place-content-center">
      <section
        className="p-6 space-y-6 bg-gray-800 rounded-xl md:grid md:grid-cols-2 md:gap-4 sm:space-y-0"
        x-data="{ circumference: 2 * 22 / 7 * 120 }"
      >
        <div className="grid grid-cols-2 gap-6">
          {skills.map((skill) => (
            <button
              key={skill.title}
              onClick={() => handleSkillClick(skill)}
              className={`px-4 py-2 text-xl text-gray-100 transition bg-blue-600 rounded-md h-14 w-44 hover:bg-blue-700 ${
                currentSkill.title === skill.title ? 'font-bold ring-2 ring-gray-100' : ''
              }`}
            >
              {skill.title}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-center">
          <svg className="transform -rotate-90 w-72 h-72">
            <circle
              cx="145"
              cy="145"
              r="120"
              stroke="currentColor"
              strokeWidth="30"
              fill="transparent"
              className="text-gray-700"
            />
            <circle
              cx="145"
              cy="145"
              r="120"
              stroke="currentColor"
              strokeWidth="30"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={circumference - (currentSkill.percent / 100) * circumference}
              className="text-green-500"
            />
          </svg>
          <span className="absolute text-5xl">{`${currentSkill.percent}%`}</span>
        </div>
      </section>
    </div>
    </div>
  );
};

export default Skills;
