import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? "text-academic-red font-bold" : "text-gray-500 hover:text-academic-red transition-colors";
  };

  const navItems = [
    { label: "HOME", path: "/" },
    { label: "PUBLICATIONS", path: "/publications" },
    { label: "WORKING PAPERS", path: "/research" },
    { label: "CV", path: "/cv" },
    // { label: "TEACHING", path: "/teaching" }, // Not provided in source CV
    { label: "中文简介", path: "/cn" },
  ];

  return (
    <nav className="w-full py-6 border-b border-gray-100 mb-8">
      <ul className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm uppercase tracking-widest font-sans">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link to={item.path} className={isActive(item.path)}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
