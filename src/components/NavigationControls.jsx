import { Button } from "./ui/Button";

const NavigationControls = ({ dispatch, currentQuestion, totalQuestions }) => {
  const isLastQuestion = currentQuestion === totalQuestions - 1;

  return (
    <div className="mt-8 flex lg:flex-row flex-col items-center justify-between gap-4">
      <Button
        onClick={() => dispatch({ type: "PREV" })}
        disabled={currentQuestion === 0}
        className={`
          min-w-30
          ${currentQuestion === 0 ? "cursor-not-allowed opacity-40" : ""}
        `}
      >
        ← Previous
      </Button>

      <div className="rounded-xl bg-white/60 px-4 py-2 backdrop-blur-md shadow-sm">
        <span className="font-medium text-slate-600">
          {currentQuestion + 1}
        </span>
        <span className="mx-1 text-slate-400">/</span>
        <span className="text-slate-500">{totalQuestions}</span>
      </div>

      <Button
        onClick={() =>
          dispatch({
            type: isLastQuestion ? "SUBMIT" : "NEXT",
          })
        }
        className={`min-w-30 ${isLastQuestion ? "from-emerald-500! to-green-600!" : ""}`}
      >
        {isLastQuestion ? "✓ Submit" : "Next →"}
      </Button>
    </div>
  );
};

export default NavigationControls;
