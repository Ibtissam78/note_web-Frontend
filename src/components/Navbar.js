import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white py-4 px-6 flex justify-between">
      <h1 className="text-xl font-bold">NotesApp 📚</h1>
      <div>
        <Link to="/" className="px-4">Accueil</Link>
        <Link to="/dashboard" className="px-4">Tableau de bord</Link>
        <Link to="/profile" className="px-4">Profil</Link>
      </div>
    </nav>
  );
};

export default Navbar;