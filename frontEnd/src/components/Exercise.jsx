import { useState } from "react";

function Exercise({ onCorrect, onIncorrect }) {
  const operations = ["+", "-", "*", "/"];
  const [num1, setNum1] = useState(Math.floor(Math.random() * 10) + 1);
  const [num2, setNum2] = useState(Math.floor(Math.random() * 10) + 1);
  const [operation, setOperation] = useState(
    operations[Math.floor(Math.random() * operations.length)]
  );
  const [userAnswer, setUserAnswer] = useState("");

  const correctAnswer = eval(`${num1} ${operation} ${num2}`).toFixed(2);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseFloat(userAnswer) === parseFloat(correctAnswer)) {
      onCorrect();
      generateNewExercise();
    } else {
      onIncorrect();
    }
    setUserAnswer("");
  };

  const generateNewExercise = () => {
    setNum1(Math.floor(Math.random() * 10) + 1);
    setNum2(Math.floor(Math.random() * 10) + 1);
    setOperation(operations[Math.floor(Math.random() * operations.length)]);
  };

  return (
    <div>
      <h3 className="text-3xl mb-4">
        {num1} {operation} {num2} = ?
      </h3>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          step="0.01"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          className="text-center text-2xl w-20 py-2 border-b-2 border-gray-500 mb-4"
          placeholder="?"
        />
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg text-2xl">
          Verificar
        </button>
      </form>
    </div>
  );
}

export default Exercise;
