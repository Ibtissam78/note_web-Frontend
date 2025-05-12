import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Styles pour la page Note
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
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-10px);
  }
`;

const NoteTitle = styled.h3`
  font-size: 1.8rem;
  color: #007bff;
  margin-bottom: 10px;
`;

const NoteContent = styled.p`
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
`;

const NoteDate = styled.span`
  font-size: 0.9rem;
  color: #888;
  margin-top: 10px;
  display: block;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 1.2rem;
  margin-top: 20px;
`;

const Note = () => {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState('');

  // Charger les notes depuis le localStorage
  const loadNotes = () => {
    try {
      const storedNotes = localStorage.getItem('notes');
      if (storedNotes) {
        setNotes(JSON.parse(storedNotes));
      }
    } catch (error) {
      setError('Erreur lors du chargement des notes.');
      console.error('Erreur:', error);
    }
  };

  useEffect(() => {
    loadNotes(); // Charger les notes au démarrage de la page
  }, []);

  return (
    <PageWrapper>
      <Title>Liste des Notes</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>} {/* Afficher l'erreur si présente */}
      {notes.length === 0 ? (
        <p>Aucune note disponible pour le moment.</p> // Message lorsqu'il n'y a pas de notes
      ) : (
        notes.map((note, index) => (
          <NoteCard key={index}>
            <NoteTitle>{note.titre}</NoteTitle>
            <NoteContent>{note.contenu}</NoteContent>
            <NoteDate>Créée le: {new Date(note.createdAt).toLocaleDateString()}</NoteDate>
          </NoteCard>
        ))
      )}
    </PageWrapper>
  );
};

export default Note;
