export interface Issue {
  title: string;
  description?: string;
  status: 'open' | 'in progress' | 'closed';
  githubIssueLink?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Member {
  _id: string;
  name: string;
  role: string;
  assignedIssues: any[];
  createdAt: string;
  updatedAt?: string;
}

export interface Team {
  _id: string;
  teamName: string;
  teamLeadName: string;
  members: Member[];
  createdAt: string;
  updatedAt?: string;
  __v?: number;
}

export interface Project {
  _id: string;
  name: string;
  description: string;
  teams: Team[];
  createdAt: string;
  updatedAt?: string;
  __v?: number;
}

export interface ApiResponse {
  success: boolean;
  data: Project[];
}
