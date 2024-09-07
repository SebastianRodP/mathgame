import { Link } from "react-router-dom";
const Prueba = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-8 text-blue-600">
        ¡Bienvenido al Juego de Matemáticas!
      </h1>
      <Link
        to="/select-operation"
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-xl transition duration-300"
      >
        ¡Comenzar a jugar!
      </Link>
    </div>
  );
};

export default Prueba;
