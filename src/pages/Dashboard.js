import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Styles pour la page Dashboard
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: #f4f7fc;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 30px;
`;

const NoteCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 15px 0;
  width: 100%;
  max-width: 600px;
`;

const NoteTitle = styled.h3`
  font-size: 1.8rem;
  color: #007bff;
`;

const NoteContent = styled.p`
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
`;

const Dashboard = () => {
  const [notes, setNotes] = useState([]);

  // Charger les notes depuis localStorage
  const loadNotes = () => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storedNotes);
  };

  useEffect(() => {
    loadNotes();
  }, []);

  return (
    <PageWrapper>
      <Title>Tableau de Bord</Title>

      {notes.length === 0 ? (
        <p>Aucune note à afficher pour le moment.</p>
      ) : (
        notes.map((note, index) => (
          <NoteCard key={index}>
            <NoteTitle>{note.titre}</NoteTitle>
            <NoteContent>{note.contenu}</NoteContent>
          </NoteCard>
        ))
      )}
    </PageWrapper>
  );
};

export default Dashboard;
