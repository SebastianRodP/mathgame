import { useEffect, useState } from "react";
import { evaluarResultado, generarNumeroRandom } from "../functions/sumar";

function Exercise({ onCorrect, contador }) {
  //Definir el operador a utilizar
  const operadoresIniciales = ["+", "-", "*", "/"];
  const [operadores, setOperadores] = useState(operadoresIniciales);

  //Definir numeros que se manejan
  const [num1, setNum1] = useState(" ");
  const [num2, setNum2] = useState(" ");
  const [num3, setNum3] = useState(" ");
  //Definir el operador en el problema
  const [operador, setOperador] = useState("");

  const [dificultad, setDificultad] = useState("Facil");
  const [userAnswer, setUserAnswer] = useState("");
  //const [contadorInt, setContadorInt] = useState(1);

  useEffect(()=>{
    generarRespuesta(true);
  },[])

  // Actualiza operadores al cambiar la dificultad
  useEffect(() => {
    setOperadores(operadoresIniciales); // Restablecer operadores al cambiar la dificultad
    generarRespuesta(true); // Generar una nueva operación
  }, [dificultad]); // Se ejecuta al cambiar la dificultad

  const generarRespuesta = (correct) => {

    if (correct || operadores.length === 0) {
      setOperadores(operadoresIniciales);
      defOperador();
    } 

    switch (dificultad) {

      case "Facil":
        setNum1(generarNumeroRandom(10, 1));
        setNum2(generarNumeroRandom(10, 1));

        setNum3("?");

        break;

      case "Medio":
        setNum1(generarNumeroRandom(99, 11));
        if (operadores == "/"){
          setNum2(generarNumeroRandom(10, 1));  
        }
        setNum2(generarNumeroRandom(99, 11));
        setNum3("?");

      break;

      case "Dificil":
        setNum1(generarNumeroRandom(99, 11));
        setNum2("?");
        setNum3(generarNumeroRandom(99,11))
        
        break;
      default:
        break;
    }    
  };

  const defOperador = () => {
    let operator = operadores[Math.floor(Math.random() * operadores.length)];
    setOperador(operator);
    borrarValorOperador(operator);
  };

  const borrarValorOperador = (value) => {
    setOperadores(prevOperadores => prevOperadores.filter(item => item !== value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let resultado;

    // Revisar respuesta
    if (dificultad === "Facil" || dificultad === "Medio") {
      resultado = evaluarResultado(num1, num2, operador, userAnswer);
    }
    if (dificultad === "Dificil") {
      resultado = evaluarResultado(num1, num3, operador, userAnswer);
    }

    // Si el resultado es correcto
    if (resultado) {
      onCorrect();
      generarRespuesta(true);
    } else {
      generarRespuesta(false);
    }

    cambiarDificultad();
    setUserAnswer("");
    generateNewExercise();
  };

  const cambiarDificultad = () => {
    if (contador === 4) {
      setDificultad("Medio");
    } else if (contador === 8) {
      setDificultad("Dificil");
    }
  };

  return (
    <div className="p-6 rounded-lg bg-[#ede9fe] shadow-md flex flex-col items-center w-full max-w-md mx-auto">
      <h3 className="text-7xl mb-4 font-bold">
        {num1} {operador} {num2} = {num3}
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
