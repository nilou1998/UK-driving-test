export const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`
        rounded-xl
        bg-linear-to-r
        from-indigo-600
        to-violet-600
        px-6 py-3
        font-medium
        text-white
        transition-all duration-300
        hover:scale-[1.02]
        hover:shadow-lg
        hover:shadow-indigo-500/30
        active:scale-[0.98]
        cursor-pointer
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};
