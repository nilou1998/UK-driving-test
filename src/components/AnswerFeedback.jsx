const AnswerFeedback = ({ options, correctAnswer, userAnswer }) => {
  console.log({
    userAnswer,
    correctAnswer,
    options,
  });
  return (
    <div className="mt-6 space-y-3">
      {options.map((option, index) => {
        const isUserAnswer = Number(userAnswer) === index;
        const isCorrectAnswer = option === correctAnswer;
        const isWrongAnswer = isUserAnswer && !isCorrectAnswer;

        return (
          <div
            key={index}
            className={`
              flex items-center justify-between
              rounded-2xl border p-4
              transition-all

              ${
                isCorrectAnswer
                  ? "border-emerald-200 bg-emerald-50"
                  : isWrongAnswer
                    ? "border-red-200 bg-red-50"
                    : "border-slate-200 bg-white"
              }
            `}
          >
            <div className="flex items-center gap-3">
              <div
                className="
                  flex h-8 w-8 items-center justify-center
                  rounded-lg bg-slate-100
                  text-sm font-bold text-slate-600
                "
              >
                {String.fromCharCode(65 + index)}
              </div>

              <span className="font-medium text-slate-700">{option}</span>
            </div>

            <div className="text-xl">
              {isCorrectAnswer && "✅"}
              {isWrongAnswer && "❌"}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AnswerFeedback;
