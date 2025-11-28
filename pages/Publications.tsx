import React from 'react';
import { Publication } from '../types';

const Publications: React.FC = () => {
  const publications: Publication[] = [
    {
      id: "1",
      authors: "Q. Ding, Y. Rao, and Y. Dai",
      title: "Can digital financial inclusion alleviate energy poverty? evidence from China",
      journal: "Energy, p. 137 533",
      year: "2025",
      details: "(First Author & Corresponding Author)"
    },
    {
      id: "2",
      authors: "Liang Zhang, Yuling Liao, Siying Hong, and Qingfeng Ding",
      title: "Empirical Research on the Impact of Confucian Culture on Corporate Management Fees (儒家文化对企业管理费用影响的实证研究)",
      journal: "Finance & Economics (财务与金融), vol. 39, no. 01, pp. 1–13",
      year: "2024",
      details: "(Corresponding Author)"
    },
    {
      id: "3",
      authors: "Yulei Rao, Qingfeng Ding, and Diqiang Chen",
      title: "Confucian Culture and Executive-Employee Pay Gap: A Power Distance Perspective (儒家文化与公司高管-员工薪酬差距——基于权力距离的视角)",
      journal: "Journal of Xiamen University (Arts & Social Sciences) (厦门大学学报), vol. 72, no. 02, pp. 47–60",
      year: "2022",
      details: "(Second Author, Supervisor is First Author)"
    }
  ];

  return (
    <div className="animate-fade-in max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-8 text-center uppercase tracking-widest text-academic-gray">Publications</h2>
      <div className="space-y-8">
        {publications.map((pub) => (
          <div key={pub.id} className="pl-4 border-l-2 border-gray-100 hover:border-academic-red transition-colors">
            <h3 className="text-lg font-bold text-black mb-1">“{pub.title}”</h3>
            <p className="text-gray-800 mb-1">{pub.authors}</p>
            <p className="text-gray-600 italic">
              {pub.journal}, {pub.year}. <span className="text-xs not-italic text-gray-500 ml-2">{pub.details}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publications;
