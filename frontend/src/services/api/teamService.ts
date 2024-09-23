import axios from "axios";

const BASE_URL = 'http://localhost:5001/api';

export async function getTeams(projectId: string) {
  try {
    const response = await axios.get(`${BASE_URL}/project/${projectId}/teams`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch teams:', error);
    throw error;
  }
}
