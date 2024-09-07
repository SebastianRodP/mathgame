import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <circle
            className="animate-circle1"
            cx="20"
            cy="20"
            r="15"
            fill="#FFDDC1"
          />
          <circle
            className="animate-circle2"
            cx="80"
            cy="30"
            r="20"
            fill="#FFABAB"
          />
          <circle
            className="animate-circle3"
            cx="40"
            cy="70"
            r="25"
            fill="#FFC3A0"
          />
        </svg>
      </div>
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          ¡Bienvenido al Juego de Matemáticas!
        </h1>
        <Link to="/game">
          <button
            type="submit"
            className="bg-[#a78bfa] text-white py-3 px-6 rounded-full text-2xl font-semibold shadow-lg hover:bg-[#8b5cf6] transition-colors"
          >
            Comenzar a jugar
          </button>
        </Link>
      </div>
      <style>
        {`
          @keyframes move1 {
            0% { transform: translate(0, 0); }
            50% { transform: translate(20px, 20px); }
            100% { transform: translate(0, 0); }
          }

          @keyframes move2 {
            0% { transform: translate(0, 0); }
            50% { transform: translate(-20px, 10px); }
            100% { transform: translate(0, 0); }
          }

          @keyframes move3 {
            0% { transform: translate(0, 0); }
            50% { transform: translate(10px, -15px); }
            100% { transform: translate(0, 0); }
          }

          .animate-circle1 {
            animation: move1 8s infinite ease-in-out;
          }

          .animate-circle2 {
            animation: move2 10s infinite ease-in-out;
          }

          .animate-circle3 {
            animation: move3 12s infinite ease-in-out;
          }
        `}
      </style>
    </div>
  );
}

export default Home;
