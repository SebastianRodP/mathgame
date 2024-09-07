import { generarNumeroRandom, realizarOperacion } from "./functions/sumar"

const Prueba = () => {
        
    realizarOperacion({num1 : 1, num2 : 2, num3 : 3});

    generarNumeroRandom(20, 10);

    return (
        <div>pruebas</div>
    )
}

export default Prueba