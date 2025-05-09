import axios from 'axios';

// Destructuring in function params + API call response
export const getUserProfile = async (userId) => {
  const { data: { user } } = await axios.get(`/api/users/${userId}`);
  return user;
};
export const updateUserProfile = async ({ id, name, email }) => {
  const response = await axios.put(`/api/users/${id}`, { name, email });
  return response.data;
};

// Bonus: Using optional chaining and nullish coalescing
export const getUserTheme = (user) => {
  const theme = user?.settings?.preferences?.theme ?? 'light';
  return theme;
};
