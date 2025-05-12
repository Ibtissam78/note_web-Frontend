import api from "./api";

const noteService = {
  getNotes: async () => {
    const response = await api.get("/notes");
    return response.data;
  },

  addNote: async (noteData) => {
    const response = await api.post("/notes", noteData);
    return response.data;
  },

  deleteNote: async (noteId) => {
    await api.delete(`/notes/${noteId}`);
  },
};

export default noteService;