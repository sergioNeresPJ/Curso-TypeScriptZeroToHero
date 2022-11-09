// Variaveis
let nome: String = "Sergio Junior";
console.log(nome);

//Arrays
let animais: String[] = ['Elefante', 'Cachorro', 'Gato'];
console.log(animais);

//objetos
let carro:{
    nome: String;
    ano: number;
    preco: number;
};

carro={nome: 'Toyota Corolla', ano: 2022, preco: 150000};
console.log(carro);

//functions
function multiplicarNumeros(num1: number, num2: number){
    return num1 * num2;
}

console.log(multiplicarNumeros(1, 5));