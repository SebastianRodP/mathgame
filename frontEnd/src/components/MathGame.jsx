import { useState } from "react";
import Exercise from "./Exercise";

import useSound from "use-sound";

function MathGame() {
  const [correctCount, setCorrectCount] = useState(0);
  const [hasFailed, setHasFailed] = useState(false);
  const [playCorrect] = useSound("../../public/sounds/new_level_Correct", {
    volumen: 1,
  });
  const [playIncorrect] = useSound("../../public/sounds/negative_incorrect", {
    volumen: 1,
  });

  const handleCorrectAnswer = () => {
    setCorrectCount(correctCount + 1);
    setHasFailed(false);
    playCorrect();
  };

  const handleIncorrectAnswer = () => {
    setCorrectCount(0);
    setHasFailed(true);
    playIncorrect();
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Responde las Operaciones</h2>
      <p className="text-xl mb-4">Respuestas correctas: {correctCount}</p>

      <Exercise
        onCorrect={handleCorrectAnswer}
        onIncorrect={handleIncorrectAnswer}
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
