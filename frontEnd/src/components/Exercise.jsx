import { useEffect, useState } from "react";
import { evaluarResultado, generarNumeroRandom } from "../functions/sumar";

function Exercise({ onCorrect, onIncorrect }) {
  //Definir el operador a utilizar
  const [operadores, setOperadores] = useState(["+", "-", "*", "/"]);

  //Definir numeros que se manejan
  const [num1, setNum1] = useState(" ");
  const [num2, setNum2] = useState(" ");
  const [num3, setNum3] = useState(" ");
  //Definir el operador en el problema
  const [operador, setOperador] = useState("");

  const [dificultad, setDificultad] = useState("Facil");
  const [userAnswer, setUserAnswer] = useState("");

  useEffect(()=>{
    generarRespuesta();
  },[])

  const generarRespuesta = () => {
    let defOperador;
    switch (dificultad) {

      case "Facil":
        setNum1(generarNumeroRandom(10, 1));
        setNum2(generarNumeroRandom(10, 1));

        defOperador = operadores[Math.floor(Math.random() * operadores.length)];
      
        setOperador(defOperador);
        //Eliminar operador
        borrarValorOperador(defOperador);

        setNum3("?");

        break;

      case "Medio":
        setNum1(generarNumeroRandom(99, 11));
        setNum2(generarNumeroRandom(99, 11));
        setNum3("?");

        defOperador = operadores[Math.floor(Math.random() * operadores.length)];
        console.log(defOperador);
        
        setOperador(defOperador);
        //Eliminar operador
        borrarValorOperador(defOperador);


      break;

      case "Dificil":
        setNum1(generarNumeroRandom(99, 11));
        setNum2("?");
        setNum3(generarNumeroRandom(99,11))
        defOperador = operadores[Math.floor(Math.random() * operadores.length)];
        console.log(defOperador);
        
        setOperador(defOperador);
        //Eliminar operador
        borrarValorOperador(defOperador);

        break;
      default:
        break;
    }
  };

  const borrarValorOperador = (value) => {

    let nuevoArray = operadores.filter(item => item !== value);
    setOperadores(nuevoArray)

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let resultado;
    //Revisar respuesta
    if (dificultad == "Facil" || dificultad == "Medio") {
      resultado = evaluarResultado(num1, num2, operador, userAnswer)
    }

    if (dificultad == "Dificil") {
      resultado = evaluarResultado(num1, num3, operador,userAnswer)
    }

    console.log(resultado);
    

    if(resultado){
      onCorrect()
    }else{
      onIncorrect()
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
