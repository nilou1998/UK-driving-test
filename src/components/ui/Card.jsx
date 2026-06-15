const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`
        rounded-3xl
        border border-white/20
        bg-white/80
        backdrop-blur-md
        p-8
        shadow-xl shadow-slate-200/50
        ${className}
      `}
    >
      {children}
    </div>
  );
};
export default Card;
