import Card from "./ui/Card";
import QuestionHeader from "./QuestionHeader";
import QusetionText from "./QusetionText";

const QuestionView = ({
  q,
  currentQuestion,
  totalQuestions,
  selectedAnswer,
  onAnswer,
  timeLeft,
  dispatch,
}) => {
  return (
    <Card>
      <QuestionHeader
        currentQuestion={currentQuestion}
        totalQuestions={totalQuestions}
        timeLeft={timeLeft}
      />

      <QusetionText text={q.question} />
    </Card>
  );
};
export default QuestionView;
