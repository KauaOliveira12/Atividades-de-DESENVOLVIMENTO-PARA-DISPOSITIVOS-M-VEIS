function obterPrimeiro<T>(lista: T[]): T {
    return lista[0];
}

const carro = ["Camaro", "Civic", "Onix", "HB20"];
const primeiroCarro = obterPrimeiro(carro);
console.log("Primeiro carro: ", primeiroCarro);

const numeros = [3, 4, 6, 10, 13];
const primeiroNumero = obterPrimeiro(numeros);
console.log("O primeiro número é: ", primeiroNumero);

interface Produto {
    nome: string;
    preco: number;
}

const estoque: Produto[] = [
    {
        nome: "SINTRA FAST VONIXX",
        preco: 26,
    },

    {
        nome: "V-FLOC VONIXX",
        preco: 26,
    },

    {
        nome: "IMPACT 1,5L VONIXX",
        preco: 35
    }

]

const primeiroProduto = obterPrimeiro(estoque);
console.log("Primeiro produtor do estoque: ", primeiroProduto);