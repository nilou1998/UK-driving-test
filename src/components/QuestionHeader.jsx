import formatTime from "../utils/formatTime";

const QuestionHeader = ({ currentQuestion, totalQuestions, timeLeft }) => {
  return (
    <header className="mb-8">
      <div className="mb-4 flex items-center justify-between">
        <span className="rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-700">
          Question {currentQuestion + 1}
        </span>

        <span className="rounded-full bg-red-100 px-4 py-1 text-sm font-semibold text-red-600">
          ⏱ {formatTime(timeLeft)}
        </span>
      </div>


      <div className="h-3 overflow-hidden rounded-full bg-slate-200">
        <div
          style={{
            width: `${((currentQuestion + 1) / totalQuestions) * 100}%`,
          }}
          className="h-full rounded-full bg-linear-to-r from-indigo-600 to-violet-600 transition-all duration-500"
        />
      </div>

      <p className="text-sm text-slate-500">
        Question {currentQuestion + 1} of {totalQuestions}
      </p>
    </header>
  );
};

export default QuestionHeader;
