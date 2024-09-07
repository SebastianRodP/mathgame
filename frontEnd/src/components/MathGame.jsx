import { useState } from "react";
import Exercise from "./Exercise";

function MathGame() {
  const [correctCount, setCorrectCount] = useState(0);
  const [hasFailed, setHasFailed] = useState(false);

  const handleCorrectAnswer = () => {
    setCorrectCount(correctCount + 1);
    setHasFailed(false);
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Responde las Operaciones</h2>
      <p className="text-xl mb-4">Respuestas correctas: {correctCount}</p>

      <Exercise
        onCorrect={handleCorrectAnswer}
        contador={correctCount}
      />

      {hasFailed && (
        <p className="text-red-500 mt-4">
          ¡Respuesta incorrecta! Intenta de nuevo.
        </p>
      )}
    </div>
  );
}

export default MathGame;
