export const generarNumeroRandom = (numMax, numMin) =>{
    let min = numMin;
    let max = numMax;
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; // Genera un número entre 10 y 20, incluidos ambos extremos
    return randomNumber
}

export const evaluarResultado = (num1, num2, operador, respuesta) =>{

    let resultado = eval(`${num1} ${operador} ${num2}`)
    console.log(resultado);
    
    if(resultado == respuesta){
        return true
    }

    return false 
}