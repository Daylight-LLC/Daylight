import { User } from "../../models/User.model.js";
import { Project } from "../../models/Project.model.js";
import { Team } from "../../models/Team.model.js";
import { Issue } from "../../models/Issue.model.js";
import bcrypt from "bcryptjs";

export const resolvers = {
  Query: {
    users: async () => await User.find(),
    user: async (_, { id }) => await User.findById(id),
    projects: async () => await Project.find(),
    project: async (_, { id }) => await Project.findById(id),
    teams: async () => await Team.find(),
    team: async (_, { id }) => await Team.findById(id),
    issues: async () => await Issue.find(),
    issue: async (_, { id }) => await Issue.findById(id),
  },
  Mutation: {
    createUser: async (_, { username, email, password, role }) => {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({
        username,
        email,
        password: hashedPassword,
        role,
      });
      return await user.save();
    },
    updateUser: async (_, { id, ...rest }) => {
      return await User.findByIdAndUpdate(id, rest, { new: true });
    },
    deleteUser: async (_, { id }) => {
      await User.findByIdAndDelete(id);
      return true;
    },

    createProject: async (_, { name, description, dueDate }) => {
      const project = new Project({ name, description, dueDate });
      return await project.save();
    },
    updateProject: async (_, { id, ...rest }) => {
      return await Project.findByIdAndUpdate(id, rest, { new: true });
    },
    deleteProject: async (_, { id }) => {
      await Project.findByIdAndDelete(id);
      return true;
    },

    createTeam: async (_, { name, teamLeadId, projectId }) => {
      const team = new Team({
        name,
        teamLead: teamLeadId,
        project: projectId,
        members: [teamLeadId],
      });
      return await team.save();
    },
    updateTeam: async (_, { id, ...rest }) => {
      return await Team.findByIdAndUpdate(id, rest, { new: true });
    },
    deleteTeam: async (_, { id }) => {
      await Team.findByIdAndDelete(id);
      return true;
    },
    addTeamMember: async (_, { teamId, userId }) => {
      return await Team.findByIdAndUpdate(
        teamId,
        { $addToSet: { members: userId } },
        { new: true }
      );
    },
    removeTeamMember: async (_, { teamId, userId }) => {
      return await Team.findByIdAndUpdate(
        teamId,
        { $pull: { members: userId } },
        { new: true }
      );
    },

    createIssue: async (_, { title, description, assignedToId, teamId }) => {
      const issue = new Issue({
        title,
        description,
        assignedTo: assignedToId,
        team: teamId,
      });
      return await issue.save();
    },
    updateIssue: async (_, { id, ...rest }) => {
      return await Issue.findByIdAndUpdate(id, rest, { new: true });
    },
    deleteIssue: async (_, { id }) => {
      await Issue.findByIdAndDelete(id);
      return true;
    },
  },
};
