import Card from "./ui/Card";

const ScoreSummary = ({ score, total }) => {
  const percentage = Math.round((score / total) * 100);
  const isPassed = percentage >= 70;

  return (
    <Card className="mx-auto max-w-2xl text-center">
      <div className="flex flex-col items-center">
        <div
          className={`
            mb-6 flex h-24 w-24 items-center justify-center
            rounded-full text-4xl
            ${
              isPassed
                ? "bg-emerald-100 text-emerald-600"
                : "bg-red-100 text-red-500"
            }
          `}
        >
          {isPassed ? "🎉" : "❌"}
        </div>

        <h1
          className={`
            text-4xl font-extrabold
            ${isPassed ? "text-emerald-600" : "text-red-500"}
          `}
        >
          {isPassed ? "You Passed!" : "You Failed"}
        </h1>

        <p className="mt-3 text-lg text-slate-600">Your final score</p>

        <div className="mt-6">
          <span className="bg-linear-to-r from-indigo-600 to-violet-600 bg-clip-text text-6xl font-black text-transparent">
            {score}
          </span>

          <span className="mx-2 text-3xl font-bold text-slate-400">/</span>

          <span className="text-4xl font-bold text-slate-500">{total}</span>
        </div>

        <p className="mt-4 text-xl font-semibold text-slate-700">
          {percentage}% Correct Answers
        </p>

        <div className="mt-8 w-full max-w-md">
          <div className="h-4 overflow-hidden rounded-full bg-slate-200">
            <div
              style={{ width: `${percentage}%` }}
              className={`
                h-full rounded-full transition-all duration-1000
                ${
                  isPassed
                    ? "bg-linear-to-r from-emerald-500 to-green-600"
                    : "bg-linear-to-r from-red-500 to-rose-600"
                }
              `}
            />
          </div>
        </div>

        <p className="mt-6 text-slate-500">
          {isPassed
            ? "Excellent work! You are ready for the theory test."
            : "Keep practicing and try again."}
        </p>
      </div>
    </Card>
  );
};

export default ScoreSummary;
