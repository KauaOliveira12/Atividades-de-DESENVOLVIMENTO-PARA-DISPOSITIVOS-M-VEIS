interface Livro {
    titulo: string;
    autor: string;
    ano:  number;
    disponivel: boolean;
}

const biblioteca: Livro[] = [
    {
        titulo: "Harry Potter e a Pedra Filosofal",
        autor: "J.K. Rowling",
        ano: 1997,
        disponivel: true
    },

    {
        titulo: "Verity",
        autor: "Colleen Hoover",
        ano: 2018,
        disponivel: true
    },

    {
        titulo: "A revolução dos bichos",
        autor: "George Orwell",
        ano: 2007,
        disponivel: false
    }
] 

function listarTitulosDisponiveis(livros: Livro[]): string[] {
    const disponiveis = livros.filter((livro) => livro.disponivel === true); // Primeiro definir o filtro

    const titulos = disponiveis.map((livro) => livro.titulo); // Depois pegar o filtro e usar o "map" para só receber o titulo 

    return titulos; // E retornar os titulos 
}

const resultado = listarTitulosDisponiveis(biblioteca);
console.log("Livros disponíveis:", resultado);