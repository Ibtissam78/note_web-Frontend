export const handleApiError = (error) => {
  if (error.response) {
    console.error("Erreur API :", error.response.data.message);
    return error.response.data.message;
  } else {
    console.error("Erreur inconnue :", error.message);
    return "Une erreur s'est produite.";
  }
};