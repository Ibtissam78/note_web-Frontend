import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Styled Components
const PageWrapper = styled.div`
  padding: 40px;
  font-family: 'Segoe UI', sans-serif;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 30px;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  margin: 20px auto;
  padding: 10px 20px;
  background: #00bcd4;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: 0.2s;

  &:hover {
    background: #0097a7;
  }
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
`;

const NoteText = styled.textarea`
  width: 100%;
  border: none;
  background: transparent;
  resize: none;
  font-size: 1rem;
  font-family: inherit;
  outline: none;
  background-color: ${({ $editing }) => ($editing ? "#fffde7" : "transparent")};
  border: ${({ $editing }) => ($editing ? "1px solid #ccc" : "none")};
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const ActionButton = styled.button`
  background: #4caf50;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 6px 10px;
  cursor: pointer;

  &:hover {
    background: #388e3c;
  }
`;

const DeleteButton = styled.button`
  background: #ef5350;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 6px 10px;
  cursor: pointer;

  &:hover {
    background: #d32f2f;
  }
`;

const Home = () => {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    if (!note.trim()) return;
    setNotes([...notes, { id: Date.now(), text: note, isEditing: false }]);
    setNote("");
  };

  const toggleEditNote = (id) => {
    setNotes(notes.map(n => (
      n.id === id ? { ...n, isEditing: !n.isEditing } : n
    )));
  };

  const updateNoteText = (id, newText) => {
    setNotes(notes.map(n => (
      n.id === id ? { ...n, text: newText } : n
    )));
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(n => n.id !== id));
  };

  return (
    <PageWrapper>
      <Title>Bienvenue sur NotesApp 📚</Title>

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
              readOnly={!n.isEditing}
              $editing={n.isEditing}
              onChange={(e) => updateNoteText(n.id, e.target.value)}
            />
            <ButtonGroup>
              <ActionButton onClick={() => toggleEditNote(n.id)}>
                {n.isEditing ? "Enregistrer" : "Modifier"}
              </ActionButton>
              <DeleteButton onClick={() => deleteNote(n.id)}>Supprimer</DeleteButton>
            </ButtonGroup>
          </NoteCard>
        ))}
      </NotesGrid>
    </PageWrapper>
  );
};

export default Home;
