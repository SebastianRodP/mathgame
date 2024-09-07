import { useState } from "react";
import Exercise from "./Exercise";
import useSound from "use-sound";

function MathGame() {
  const [correctCount, setCorrectCount] = useState(0);
  const [hasFailed, setHasFailed] = useState(false);
  const [difficulty, setDifficulty] = useState("Fácil"); // Ejemplo de dificultad
  const [playCorrect] = useSound("/sounds/new_level_Correct.mp3", {
    volume: 1,
  });
  const [playIncorrect] = useSound("/sounds/negative_incorrect.mp3", {
    volume: 1,
  });

  const handleCorrectAnswer = () => {
    setCorrectCount(correctCount + 1);
    setHasFailed(false);
    playCorrect();

    if (correctCount + 1 >= 5) {
      // Cambiar dificultad y color al completar 5 respuestas correctas
      setDifficulty("Medio"); // Cambiar a dificultad media
      setCorrectCount(0); // Reiniciar la puntuación si es necesario
    }
  };

  const handleIncorrectAnswer = () => {
    setCorrectCount(0);
    setHasFailed(true);
    playIncorrect();
  };

  // Generar estrellas en función del puntaje correcto
  const stars = Array.from({ length: 5 }, (_, index) => (
    <svg
      key={index}
      className={`w-6 h-6 ${
        index < correctCount ? "text-yellow-500" : "text-gray-300"
      }`}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 .587l3.668 7.425 8.192 1.185-5.91 5.754 1.392 8.124L12 18.896l-7.342 3.875 1.392-8.124-5.91-5.754 8.192-1.185L12 .587z" />
    </svg>
  ));

  return (
    <div className="bg-[#fee2e2] min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
        <div className="flex justify-between mb-6 items-center">
          <div className="flex items-center space-x-1 text-xl font-bold">
            <h1>Puntuación:</h1>
            {stars}
          </div>
          <div
            className="text-xl font-bold px-4 py-2 rounded-lg w-40 flex justify-center"
            style={{
              backgroundColor:
                difficulty === "Fácil"
                  ? "rgba(255, 235, 59, 0.5)"
                  : difficulty === "Medio"
                  ? "rgba(255, 193, 7, 0.5)"
                  : "rgba(255, 87, 34, 0.8)",
            }}
          >
            <span
              style={{
                color:
                  difficulty === "Fácil"
                    ? "#FBC02D"
                    : difficulty === "Medio"
                    ? "#f59e0b"
                    : "#FF5722",
              }}
            >
              {difficulty}
            </span>
          </div>
        </div>

        <Exercise
          onCorrect={handleCorrectAnswer}
          onIncorrect={handleIncorrectAnswer}
        />
        <div className="w-full flex justify-center">
          {hasFailed && (
            <p className="text-red-500 mt-4 text-xl">
              ¡Respuesta incorrecta! Intenta de nuevo.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default MathGame;
