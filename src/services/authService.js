import api from "./api";

const authService = {
  login: async (email, password) => {
    const response = await api.post("/login", { email, password });
    return response.data;
  },

  register: async (userData) => {
    const response = await api.post("/register", userData);
    return response.data;
  },

  logout: () => {
    localStorage.removeItem("user");
  },
};

export default authService;