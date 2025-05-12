const Card = ({ title, content }) => {
  return (
    <div className="border p-4 rounded shadow-lg bg-white">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mt-2">{content}</p>
    </div>
  );
};

export default Card;