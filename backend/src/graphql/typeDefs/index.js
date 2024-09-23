import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    role: UserRole!
  }

  enum UserRole {
    PROJECT_MANAGER
    TEAM_LEAD
    TEAM_MEMBER
  }

  type Project {
    id: ID!
    name: String!
    description: String!
    dueDate: String!
    status: ProjectStatus!
    teams: [Team!]!
  }

  enum ProjectStatus {
    NOT_STARTED
    IN_PROGRESS
    COMPLETED
  }

  type Team {
    id: ID!
    name: String!
    teamLead: User!
    members: [User!]!
    project: Project!
  }

  type Issue {
    id: ID!
    title: String!
    description: String!
    status: IssueStatus!
    assignedTo: User!
    team: Team!
  }

  enum IssueStatus {
    OPEN
    IN_PROGRESS
    CLOSED
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
    projects: [Project!]!
    project(id: ID!): Project
    teams: [Team!]!
    team(id: ID!): Team
    issues: [Issue!]!
    issue(id: ID!): Issue
  }

  type Mutation {
    createUser(
      username: String!
      email: String!
      password: String!
      role: UserRole!
    ): User!
    updateUser(id: ID!, username: String, email: String, role: UserRole): User!
    deleteUser(id: ID!): Boolean!

    createProject(
      name: String!
      description: String!
      dueDate: String!
    ): Project!
    updateProject(
      id: ID!
      name: String
      description: String
      dueDate: String
      status: ProjectStatus
    ): Project!
    deleteProject(id: ID!): Boolean!

    createTeam(name: String!, teamLeadId: ID!, projectId: ID!): Team!
    updateTeam(id: ID!, name: String, teamLeadId: ID): Team!
    deleteTeam(id: ID!): Boolean!
    addTeamMember(teamId: ID!, userId: ID!): Team!
    removeTeamMember(teamId: ID!, userId: ID!): Team!

    createIssue(
      title: String!
      description: String!
      assignedToId: ID!
      teamId: ID!
    ): Issue!
    updateIssue(
      id: ID!
      title: String
      description: String
      status: IssueStatus
      assignedToId: ID
    ): Issue!
    deleteIssue(id: ID!): Boolean!
  }
`;
