const AnswerOptions = ({ options, onSelect, selectedIndex }) => {
  return (
    <div className="mt-8 space-y-4">
      {options.map((option, index) => {
        const isSelected = selectedIndex === index;

        return (
          <button
            key={index}
            onClick={() => onSelect(index)}
            className={`
              group
              relative
              w-full
              overflow-hidden
              rounded-2xl
              border
              p-5
              text-left
              transition-all
              duration-300
              cursor-pointer
              
              ${
                isSelected
                  ? `
                    border-indigo-300
                    bg-white
                    shadow-lg
                    shadow-indigo-200/60
                    scale-[1.02]
                  `
                  : `
                    border-white/50
                    bg-white/70
                    backdrop-blur-sm
                    hover:bg-white
                    hover:shadow-lg
                    hover:shadow-slate-200/50
                    hover:-translate-y-1
                  `
              }
            `}
          >
            <div className="flex items-center gap-4">
              <div
                className={`
                  flex h-10 w-10 items-center justify-center
                  rounded-xl font-semibold
                  transition-all
                  
                  ${
                    isSelected
                      ? "bg-linear-to-r from-indigo-600 to-violet-600 text-white"
                      : "bg-slate-100 text-slate-600 group-hover:bg-indigo-100"
                  }
                `}
              >
                {String.fromCharCode(65 + index)}
              </div>

              <span
                className={`
                  flex-1 text-base font-medium
                  ${isSelected ? "text-slate-900" : "text-slate-700"}
                `}
              >
                {option}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
};
export default AnswerOptions;
