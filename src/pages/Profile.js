import React, { useState, useEffect } from "react";
import styled from "styled-components";
import cookieService from "../utils/cookieService";

const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  background-color: #fdfdfd;
  text-align: center;
  font-family: 'Segoe UI', sans-serif;
`;


const UploadLabel = styled.label`
  display: inline-block;
  margin-bottom: 20px;
  cursor: pointer;
  color: #00bcd4;
`;

const Input = styled.input`
  display: block;
  width: 80%;
  margin: 10px auto;
  padding: 10px;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  background: ${({ danger }) => (danger ? "#ef5350" : "#00bcd4")};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  margin: 10px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background: ${({ danger }) => (danger ? "#d32f2f" : "#0097a7")};
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 2rem;
  color: #333;
`;

const Profile = () => {
  const [username, setUsername] = useState("Utilisateur");
  const [email, setEmail] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  useEffect(() => {
    const userEmail = cookieService.getCookie("userEmail");
    setEmail(userEmail || "non défini");
  }, []);

 

  const handleLogout = () => {
    cookieService.deleteCookie("userEmail");
    window.location.href = "/login";
  };

  return (
    <Container>
      <Title>Profil</Title>
      

      <Input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Nom d'utilisateur"
      />
      <Input type="email" value={email} readOnly placeholder="Email" />

      <Input
        type={passwordVisible ? "text" : "password"}
        value="motdepassefactice"
        readOnly
      />
      <Button onClick={() => setPasswordVisible(!passwordVisible)}>
        {passwordVisible ? "Masquer" : "Changer le mot de passe"}
      </Button>

      <Button danger onClick={handleLogout}>Déconnexion</Button>
    </Container>
  );
};

export default Profile;
