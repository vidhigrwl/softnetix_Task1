import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Update as necessary

export const getRecipes = () => axios.get(`${API_URL}/recipes`);
export const getRecipeById = (id) => axios.get(`${API_URL}/recipes/${id}`);
export const createRecipe = (recipe, token) => axios.post(`${API_URL}/recipes`, recipe, { headers: { Authorization: `Bearer ${token}` } });
export const registerUser = (user) => axios.post(`${API_URL}/auth/register`, user);
export const loginUser = (credentials) => axios.post(`${API_URL}/auth/login`, credentials);
