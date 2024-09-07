export const realizarOperacion = (nums) =>{
    
    console.log(nums);

    let operacion = `${nums.num1} + ${nums.num2} * ${nums.num3}`
    let resultado = eval(operacion)
    console.log(resultado);
    

}

export const generarNumeroRandom = (numMax, numMin) =>{
    
    let min = numMin;
    let max = numMax;
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; // Genera un número entre 10 y 20, incluidos ambos extremos
    console.log(randomNumber);


}