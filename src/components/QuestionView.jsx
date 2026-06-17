import Card from "./ui/Card";
import QuestionHeader from "./QuestionHeader";
import QusetionText from "./QusetionText";
import AnswerOptions from "./AnswerOptions";
import MediaDisplay from "./MediaDisplay";
import NavigationControls from "./NavigationControls";

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

      {q.type === "image" && <MediaDisplay type={q.type} image={q.image} />}

      <AnswerOptions
        options={q.options}
        onSelect={onAnswer}
        selectedIndex={selectedAnswer}
      />

      <NavigationControls
        dispatch={dispatch}
        currentQuestion={currentQuestion}
        totalQuestions={totalQuestions}
      />
    </Card>
  );
};
export default QuestionView;
