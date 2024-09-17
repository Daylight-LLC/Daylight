import axios from 'axios';

const BASE_URL = 'http://localhost:5001/api';

export const getProjects = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/project`);
    return response.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return null;
  }
};
