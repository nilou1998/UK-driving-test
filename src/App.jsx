import AppBanner from "./components/AppBanner";
import QuestionView from "./components/QuestionView";
import ResultView from "./components/ResultView";
import TempComponent from "./components/tempComponent";
import { questions } from "./data/questions";
import { quizReducer } from "./state/quizReducer";
import { useReducer } from "react";

const initialState = {
  currentQuestion: 0,
  answers: Array(questions.length).fill(null),
  submitted: false,
  timeLeft: 57 * 60,
};

function App() {
  const [state, dispatch] = useReducer(
    (state, action) => quizReducer(state, action, questions.length),
    initialState,
  );

  const q = questions[state.currentQuestion];

  const handleAnswer = (index) => {
    dispatch({ type: "ANSWER", payload: index });
  };

  const question_view = (
    <QuestionView
    
      q={q}
      currentQuestion={state.currentQuestion}
      totalQuestions={questions.length}
      selectedAnswer={state.answers[state.currentQuestion]}
      onAnswer={handleAnswer}
      timeLeft={state.timeLeft}
      dispatch={dispatch}
    />
  );

  const score = state.answers.reduce((acc, answer, idx) => {
    return answer === questions[idx].correctAnswer ? acc + 1 : acc;
  });

  const result_view = (
    <>
      <ResultView score={score} questions={questions} answers={state.answers} />
    </>
  );

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-indigo-50 to-violet-100">
      <AppBanner />
      <div className="container mx-auto flex items-center justify-center p-4">
        {state.submitted ? result_view : question_view}
      </div>
    </div>
  );
}

export default App;
