export interface Issue {
    id: string;
    title: string;
    description: string;
  }
  
  export interface Member {
    _id: string;
    name: string;
    role: string;
    assignedIssues: Issue[];
  }
  
  export interface Team {
    teamName: string;
    members: Member[];
  }
  
  export interface Project {
    _id: string;
    name: string;
    description: string;
    createdAt: string;
    teams: Team[];
  }
  