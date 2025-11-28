import React from 'react';
import { EducationItem } from '../types';

const CV: React.FC = () => {
  const education: EducationItem[] = [
    {
      period: "2021 – 2026",
      degree: "Ph.D. in Applied Economics",
      institution: "Central South University",
      details: ["Advisor: Yulei Rao", "Research Areas: Behavioral Finance, Corporate Finance, Digital Economy, Environmental Economics"]
    },
    {
      period: "2018 – 2021",
      degree: "Master in Applied Economics",
      institution: "Central South University",
      details: ["Advisor: Yulei Rao"]
    },
    {
      period: "2012 – 2016",
      degree: "Bachelor in International Economics and Trade",
      institution: "Anhui University of Finance and Economics",
      details: ["Advisor: Qingliang Zhang"]
    }
  ];

  const skills = [
    "Stata", "R", "Python", "Text Analysis", "LaTeX", "English", "Calligraphy", "Badminton"
  ];

  return (
    <div className="animate-fade-in max-w-4xl mx-auto space-y-12">
      
      {/* Education */}
      <section>
        <h2 className="text-xl font-bold border-b-2 border-academic-gray mb-6 pb-2 uppercase tracking-wide">Education</h2>
        <div className="space-y-8">
          {education.map((edu, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-2">
              <div className="font-sans font-semibold text-gray-600">{edu.period}</div>
              <div>
                <h3 className="text-lg font-bold text-black">{edu.institution}</h3>
                <p className="text-gray-800 italic">{edu.degree}</p>
                <ul className="mt-2 text-gray-600 text-sm list-disc pl-4 space-y-1">
                  {edu.details.map((d, i) => <li key={i}>{d}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Awards */}
      <section>
        <h2 className="text-xl font-bold border-b-2 border-academic-gray mb-6 pb-2 uppercase tracking-wide">Honors & Awards</h2>
        <ul className="space-y-2 text-gray-800 list-disc pl-5">
            <li>Outstanding Student Leader, Central South University</li>
            <li>Outstanding Student, Central South University</li>
            <li>Outstanding Youth Volunteer for Epidemic Prevention and Control, CSU Business School</li>
            <li>3rd Place, "Shareholders are Coming" (Hunan Bureau of CSRC)</li>
            <li>National Second Prize, National Business College Skills Competition (International Trade)</li>
        </ul>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-xl font-bold border-b-2 border-academic-gray mb-6 pb-2 uppercase tracking-wide">Skills & Interests</h2>
        <div className="flex flex-wrap gap-2">
            {skills.map(skill => (
                <span key={skill} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-sans border border-gray-200">
                    {skill}
                </span>
            ))}
        </div>
      </section>

    </div>
  );
};

export default CV;
