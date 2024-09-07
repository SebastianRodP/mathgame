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
    <div className="p-6 rounded-lg bg-[#ede9fe] shadow-md flex flex-col items-center w-full max-w-md mx-auto">
      <h3 className="text-7xl mb-4 font-bold">
        {num1} {operation} {num2} = ?
      </h3>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-full"
      >
        <input
          type="number"
          step="0.01"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          className="text-center text-3xl w-full py-3 border-b-2 border-gray-500 mb-4 rounded-md"
          placeholder="?"
        />
        <button
          type="submit"
          className="bg-[#a78bfa] text-white py-3 px-6 rounded-full text-2xl font-semibold shadow-lg hover:bg-[#8b5cf6] transition-colors"
        >
          Verificar
        </button>
      </form>
    </div>
  );
}

export default Exercise;
