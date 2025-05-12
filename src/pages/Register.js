import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importation de useNavigate
import styled from "styled-components";

// Import de tes composants Button et Input
import Button from "../components/Button";
import Input from "../components/Input";

// Style pour le wrapper du formulaire
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
  padding: 50px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  max-width: 450px;
  margin: 80px auto;
  text-align: center;
  background: linear-gradient(135deg, #e0eafc, #f0f4f8);
  transition: all 0.3s ease-in-out;
  
  &:hover {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }
`;

// Style pour le titre
const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 20px;
  letter-spacing: 1px;
`;

// Style pour le sous-titre
const SubTitle = styled.p`
  font-size: 1.1rem;
  color: #777;
  margin-bottom: 30px;
  font-weight: 400;
  letter-spacing: 0.5px;
`;

// Ajout d'un effet de focus pour les inputs et boutons
const StyledInput = styled(Input)`
  width: 100%;
  padding: 12px;
  margin: 12px 0;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
  background-color: #fefefe;
  transition: all 0.3s ease;

  &:focus {
    border-color: #4d90fe;
    box-shadow: 0 0 8px rgba(77, 144, 254, 0.5);
  }
`;

const StyledButton = styled(Button)`
  width: 100%;
  padding: 14px;
  margin-top: 20px;
  background-color: #4d90fe;
  color: white;
  font-size: 1.2rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #357ae8;
  }

  &:active {
    background-color: #2f6ad3;
  }
`;

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // Utilisation de useNavigate pour rediriger
  const navigate = useNavigate();

  const handleRegister = () => {
    // Vérifier si les champs sont remplis
    if (!email || !password) {
      alert("Veuillez remplir tous les champs !");
      return;
    }

    // Créer un objet d'utilisateur
    const user = {
      email,
      password,
    };

    // Sauvegarder l'utilisateur dans le localStorage
    localStorage.setItem("user", JSON.stringify(user));

    // Afficher un message de succès
    alert("Inscription réussie !");

    // Rediriger vers la page d'accueil (Home)
    navigate("/home");

    // Réinitialiser les champs
    setEmail("");
    setPassword("");
  };

  return (
    <FormWrapper>
      <Title>Créer un compte</Title>
      <SubTitle>Entrez vos informations pour vous inscrire</SubTitle>
      <StyledInput
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <StyledInput
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <StyledInput
        type="Confirmation password"
        placeholder="Mot de passe"
        onChange={(e) => setPassword(e.target.value)}
      />
      <StyledButton onClick={handleRegister}>S'inscrire</StyledButton>
    </FormWrapper>
  );
};

export default Register;
