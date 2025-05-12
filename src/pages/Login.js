import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importation du hook useNavigate
import cookieService from '../utils/cookieService';
import styled from "styled-components";

// Styled components
const LoginWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(to right, #4facfe, #00f2fe);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginBox = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;
  
  &:focus {
    border-color: #00f2fe;
    box-shadow: 0 0 10px rgba(0, 242, 254, 0.3);
  }
`;

const StyledButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #4facfe;
  color: white;
  font-size: 1.1rem;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #00f2fe;
  }
`;

const RegisterLink = styled.p`
  font-size: 0.9rem;
  color: #555;
  margin-top: 15px;
  
  span {
    color: #4facfe;
    cursor: pointer;
    font-weight: bold;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  
  // Utilisation du hook useNavigate pour rediriger
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simule la connexion
    cookieService.setCookie("userEmail", email, 7); // Stocke l'email pour 7 jours
    alert(`Utilisateur enregistré : ${cookieService.getCookie("userEmail")}`);

    // Redirige l'utilisateur vers la page d'accueil après la connexion
    navigate("/"); // Ici, tu rediriges vers la page Home
  };

  return (
    <LoginWrapper>
      <LoginBox>
        <Title>Connexion</Title>
        <StyledInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <StyledInput
          type="password"
          placeholder="Mot de passe"
          value={motDePasse}
          onChange={(e) => setMotDePasse(e.target.value)}
        />
        <StyledButton onClick={handleLogin}>Se connecter</StyledButton>
        <RegisterLink>
          Vous n'avez pas de compte ? 
          <span onClick={() => navigate("/register")}>Créez-en un ici.</span>
        </RegisterLink>
      </LoginBox>
    </LoginWrapper>
  );
};

export default Login;
