const Card = ({ children, sticky, onClick, className }) => {
  return (
    <div
      className={`bg-white p-6 rounded-2xl shadow-sm ${sticky ? "sticky top-0" : ""} ${className || ""}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
