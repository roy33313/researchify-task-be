import * as ProjectService from '../services/project.service.js';

const createProject = async (req, res) => {
  try {
    const { name, description } = req.body;
    const userId = req.user._id;
    const project = await ProjectService.createProject(name, description, userId);
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ message: 'Project creation failed' });
  }
};

const getProjects = async (req, res) => {
  try {
    const userId = req.user._id;
    const projects = await ProjectService.getProjectsByUserId(userId);
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Fetching projects failed' });
  }
};

export { createProject, getProjects };
