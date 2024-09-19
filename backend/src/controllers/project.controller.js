import { Project } from '../models/Project';

export const projectController = {
  createProject: async (req, res) => {
    try {
      const { name, description, dueDate } = req.body;
      const project = new Project({ name, description, dueDate });
      await project.save();
      res.status(201).json(project);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getProjects: async (req, res) => {
    try {
      const projects = await Project.find().populate('teams');
      res.json(projects);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateProjectStatus: async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
      const project = await Project.findByIdAndUpdate(id, { status }, { new: true });
      res.json(project);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
