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
  };

  const cambiarDificultad = () => {
    if (contador === 4) {
      setDificultad("Medio");
    } else if (contador === 8) {
      setDificultad("Dificil");
    }
  };

  return (
    <div>
      <h3 className="text-3xl mb-4">
        {num1} {operador} {num2} = {num3}
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
