const TempComponent = ({ state, dispatch }) => {
  return (
    <>
      <h1>{state.currentQuestion}</h1>
      <h1>{state.timeLeft}</h1>
      <button onClick={() => console.log(state)}>log state</button>
      <button onClick={() => console.log(state.answers)}>log answer</button>
      <button onClick={() => dispatch({ type: "ANSWER", payload: 0 })}>
        answer 0
      </button>
      <button onClick={() => dispatch({ type: "ANSWER", payload: 1 })}>
        answer 1
      </button>
      <button onClick={() => dispatch({ type: "ANSWER", payload: 2 })}>
        answer 2
      </button>
      <button onClick={() => dispatch({ type: "ANSWER", payload: 3 })}>
        answer 3
      </button>
      <button onClick={() => dispatch({ type: "NEXT" })}>next</button>
      <button onClick={() => dispatch({ type: "PREV" })}>prev</button>
      <button onClick={() => dispatch({ type: "SUBMIT" })}>submit</button>
      <button onClick={() => dispatch({ type: "TICK" })}>tick</button>
    </>
  );
};
export default TempComponent;
