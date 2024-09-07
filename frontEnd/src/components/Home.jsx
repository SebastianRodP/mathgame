import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">
        ¡Bienvenido al Juego de Matemáticas!
      </h1>
      <Link to="/game">
        <button className="bg-green-500 text-white py-2 px-4 rounded-lg text-2xl mt-4">
          Comenzar a Jugar
        </button>
      </Link>
    </div>
  );
}

export default Home;
