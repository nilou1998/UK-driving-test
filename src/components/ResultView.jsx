import AnswerFeedback from "./AnswerFeedback";
import ExplanationText from "./ExplanationText";
import MediaDisplay from "./MediaDisplay";
import QusetionText from "./QusetionText";
import ScoreSummary from "./ScoreSummary";
import Card from "./ui/Card";

const ResultView = ({ score, questions, answers }) => {
  return (
    <div className="space-y-8">
      <ScoreSummary score={score} total={questions.length} />

      {questions.map((q, index) => {
        const isCorrect = answers[index] === Number(q.correctAnswer);

        return (
          <Card key={index} className="overflow-hidden">
            <div className="mb-6 flex items-center justify-between">
              <span
                className="
                  rounded-full
                  bg-indigo-100
                  px-4 py-2
                  text-sm font-semibold
                  text-indigo-700
                "
              >
                Question {index + 1}
              </span>

              <span className="text-2xl">{isCorrect ? "✅" : "❌"}</span>
            </div>

            <QusetionText text={q.question} as="h3" />

            {q.type === "image" && <MediaDisplay image={q.image} />}

            <AnswerFeedback
              options={q.options}
              correctAnswer={q.correctAnswer}
              userAnswer={answers[index]}
            />

            <ExplanationText text={q.explanation} />
          </Card>
        );
      })}
    </div>
  );
};

export default ResultView;
