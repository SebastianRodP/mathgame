import { useState } from "react";
import useSound from "use-sound";

function Exercise({ onCorrect, onIncorrect }) {
  const operations = ["+", "-", "*", "/"];
  const [num1, setNum1] = useState(Math.floor(Math.random() * 10) + 1);
  const [num2, setNum2] = useState(Math.floor(Math.random() * 10) + 1);
  const [operation, setOperation] = useState(
    operations[Math.floor(Math.random() * operations.length)]
  );
  const [userAnswer, setUserAnswer] = useState("");

  const [playCorrect] = useSound("/sounds/new_level_Correct.mp3", {
    volume: 1,
  });
  const [playIncorrect] = useSound("/sounds/negative_incorrect.mp3", {
    volume: 1,
  });

  const correctAnswer = eval(`${num1} ${operation} ${num2}`).toFixed(2);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseFloat(userAnswer) === parseFloat(correctAnswer)) {
      onCorrect();
      playCorrect();
    } else {
      onIncorrect();
      playIncorrect();
    }
    setUserAnswer("");
    generateNewExercise();
  };

  const generateNewExercise = () => {
    setNum1(Math.floor(Math.random() * 10) + 1);
    setNum2(Math.floor(Math.random() * 10) + 1);
    setOperation(operations[Math.floor(Math.random() * operations.length)]);
  };

  return (
    <div className="border-2 p-4 rounded-lg">
      <h3 className="text-3xl mb-4">
        {num1} {operation} {num2} = ?
      </h3>
      <form onSubmit={handleSubmit} className="flex flex-col justify-cente">
        <input
          type="number"
          step="0.01"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          className="text-center text-2xl w-full py-2 border-b-2 border-gray-500 mb-4"
          placeholder="?"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg text-2xl"
        >
          Verificar
        </button>
      </form>
    </div>
  );
}

export default Exercise;
