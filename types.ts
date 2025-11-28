export interface Publication {
  id: string;
  authors: string;
  title: string;
  journal: string;
  year: string;
  details?: string;
  link?: string;
}

export interface WorkingPaper {
  id: string;
  title: string;
  authors: string;
  status: string;
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  details: string[];
}

export interface Project {
  period: string;
  title: string;
  role: string;
}
