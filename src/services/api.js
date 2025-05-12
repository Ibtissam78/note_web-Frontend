const App = () => {
  const [notes, setNotes] = useState([]);

  // Récupérer les notes
  const fetchNotes = async () => {
    try {
      const response = await api.get("/notes"); // Appel à l'endpoint "/notes"
      setNotes(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des notes:", error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []); // Lancer au démarrage de l'application

  return (
    <div>
      <h1>Liste des notes</h1>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.titre}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
import React, { useState, useEffect } from "react";
import axios from "axios";  
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // Remplacez par l'URL de votre API
  headers: {
    "Content-Type": "application/json",
  },
});
import { handleApiError } from "../utils/apiHelpers"; // Assurez-vous que ce chemin est correct
import { useSelector } from "react-redux";


const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;
const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const StyledInput = styled.input`
  width: 300px;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
`;


const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
const ErrorMessage = styled.div`
  color: red;
  margin-top: 10px;
`;



const Profile = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    // Récupérer les informations de l'utilisateur
    api
      .get("/user")
      .then((response) => {
        setUsername(response.data.username);
        setEmail(response.data.email);
      })
      .catch((error) => {
        handleApiError(error);
      });
  }, []);
  const handleUpdateProfile = () => {
    api
      .put("/user", { username, email, password })
      .then((response) => {
        dispatch(setUser(response.data
        ));
        history.push("/home");
      }
      )
      .catch((error) => {
        setError("Erreur lors de la mise à jour du profil");
        handleApiError(error);
      });
  }
  const handleLogout = () => {
    api
      .post("/logout")
      .then(() => {
        dispatch(setUser(null));
        history.push("/login");
      })
      .catch((error) => {
        setError("Erreur lors de la déconnexion");
        handleApiError(error);
      });
  };

  return (
    <PageWrapper>
      <Title>Profil</Title>
      <StyledInput
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Nom d'utilisateur"
      />
      <StyledInput
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <StyledInput
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Mot de passe"
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <StyledButton onClick={handleUpdateProfile}>Mettre à jour</StyledButton>
      <StyledButton onClick={handleLogout}>Déconnexion</StyledButton>
    </PageWrapper>
  );  
}