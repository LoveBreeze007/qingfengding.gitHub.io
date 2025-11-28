import React from 'react';
import { WorkingPaper } from '../types';

const Research: React.FC = () => {
  const workingPapers: WorkingPaper[] = [
    { id: "1", title: "Alcohol drinking and corporate governance", authors: "with Yulei Rao and Jianxin Wang", status: "Working Paper" },
    { id: "2", title: "Anti-poverty with risk: How targeted poverty alleviation enhances poor households’ risk-taking capacity", authors: "with Yulei Rao, Diqiang Chen and Minyao Huang", status: "Working Paper" },
    { id: "3", title: "Green inspires innovation: Evidence from low-carbon city pilots policy", authors: "with Wenda Zhou and Sheng Liu", status: "Working Paper" },
    { id: "4", title: "Less is more: Information redundancy and stock price crash risk", authors: "with Minyao Huang and Feiyang Cheng", status: "Working Paper" },
    { id: "5", title: "Power of policy synergy: Double wins from broadband china and innovative cities for urban decarbonization", authors: "with Yicheng Zhou", status: "Working Paper" }
  ];

  const workInProgress = [
    { id: "1", title: "Anti-Corruption and Consequences", authors: "with Dong Luo" },
    { id: "2", title: "Climate Risk and Economic Consequences", authors: "with Sheng Liu" },
    { id: "3", title: "Corruption Culture and Corporate Governance", authors: "with Yifei Dai" },
    { id: "4", title: "AI and Economics Development", authors: "with Sheng Liu and Xinao He" }
  ];

  const projects = [
    { year: "2025-2028", name: "NSFC General Project: Impact of Generative AI on Financial Markets under Limited Attention", role: "Participant" },
    { year: "2020-2024", name: "NSFC Key International Cooperation Project: Behavioral Consumer Credit in Internet Environment", role: "Participant" },
    { year: "2016-2018", name: "NSFC General Project: Alcohol, Impulse Control and Managerial Investment Decisions", role: "Participant" }
  ];

  return (
    <div className="animate-fade-in max-w-4xl mx-auto space-y-12">
      
      {/* Working Papers */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-center uppercase tracking-widest text-academic-gray">Working Papers</h2>
        <div className="space-y-6">
          {workingPapers.map((paper, index) => (
            <div key={paper.id} className="flex gap-4 items-baseline">
              <span className="font-bold text-gray-400 font-sans">{index + 1}.</span>
              <div>
                <h3 className="text-lg font-semibold text-black">“{paper.title}”</h3>
                <p className="text-gray-600">({paper.authors})</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Work in Progress */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-center uppercase tracking-widest text-academic-gray mt-12">Work in Progress</h2>
        <div className="space-y-6">
          {workInProgress.map((work, index) => (
            <div key={work.id} className="flex gap-4 items-baseline">
              <span className="font-bold text-gray-400 font-sans">{index + 1}.</span>
              <div>
                <h3 className="text-lg font-semibold text-black">{work.title}</h3>
                <p className="text-gray-600">({work.authors})</p>
              </div>
            </div>
          ))}
        </div>
      </section>

       {/* Grants/Projects */}
       <section>
        <h2 className="text-2xl font-bold mb-6 text-center uppercase tracking-widest text-academic-gray mt-12">Research Grants & Projects</h2>
        <div className="space-y-4">
          {projects.map((proj, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-2 md:gap-4">
              <span className="font-sans text-gray-500 text-sm font-semibold pt-1">{proj.year}</span>
              <div>
                <p className="text-gray-900 font-medium">{proj.name}</p>
                <p className="text-sm text-gray-600 italic">{proj.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Research;
