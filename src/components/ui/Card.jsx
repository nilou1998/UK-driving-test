const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`
        relative
        overflow-hidden
        rounded-4xl
        border border-white/30
        bg-white/70
        backdrop-blur-xl
        p-2 md:p-10
        shadow-[0_20px_60px_-15px_rgba(99,102,241,0.25)]
        
        before:absolute
        before:inset-0
        before:bg-linear-to-br
        before:from-white/40
        before:to-transparent
        before:pointer-events-none
        
        ${className}
      `}
    >
      {children}
    </div>
  );
};
export default Card;
