import React, { useState } from "react";
import styled from "styled-components";

// Styled Components
const BoardWrapper = styled.div`
  min-height: 100vh;
  background: #f9f9f9;
  padding: 40px;
  font-family: 'Segoe UI', sans-serif;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 30px;
`;

const NoteInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 30px;
`;

const NoteInput = styled.textarea`
  width: 60%;
  padding: 15px;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  resize: none;
  height: 100px;
  outline: none;

  &:focus {
    border-color: #00bcd4;
    box-shadow: 0 0 5px rgba(0, 188, 212, 0.4);
  }
`;

const AddButton = styled.button`
  padding: 15px 20px;
  font-size: 1rem;
  background: #00bcd4;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  height: 100px;

  &:hover {
    background: #0097a7;
  }
`;

const NotesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
`;

const NoteCard = styled.div`
  background: #fff9c4;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const NoteText = styled.textarea`
  width: 100%;
  border: none;
  background: transparent;
  resize: none;
  font-size: 1rem;
  font-family: inherit;
  outline: none;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  gap: 10px;
`;

const ActionButton = styled.button`
  font-size: 0.85rem;
  padding: 5px 10px;
  background: ${({ variant }) => (variant === "delete" ? "#ef5350" : "#4caf50")};
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: ${({ variant }) => (variant === "delete" ? "#d32f2f" : "#388e3c")};
  }
`;

const NotesBoard = () => {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    if (!note.trim()) return;
    setNotes([...notes, { id: Date.now(), text: note }]);
    setNote("");
  };

  const updateNote = (id, newText) => {
    setNotes(notes.map(n => (n.id === id ? { ...n, text: newText } : n)));
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(n => n.id !== id));
  };

  return (
    <BoardWrapper>
      <Title>📝 Mes Notes</Title>
      <NoteInputWrapper>
        <NoteInput
          value={note}
          placeholder="Écris ta note ici..."
          onChange={(e) => setNote(e.target.value)}
        />
        <AddButton onClick={addNote}>Ajouter</AddButton>
      </NoteInputWrapper>

      <NotesGrid>
        {notes.map((n) => (
          <NoteCard key={n.id}>
            <NoteText
              value={n.text}
              onChange={(e) => updateNote(n.id, e.target.value)}
            />
            <ButtonGroup>
              <ActionButton variant="delete" onClick={() => deleteNote(n.id)}>Supprimer</ActionButton>
            </ButtonGroup>
          </NoteCard>
        ))}
      </NotesGrid>
    </BoardWrapper>
  );
};

export default NotesBoard;
