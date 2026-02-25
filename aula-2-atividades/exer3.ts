interface Usuario {
    id: number;
    nome: string;
    email: string;
    senha: string;
}

type UsuarioSemSenha = Omit<Usuario, "senha">; //Quando usar o Omit ele não mostra oq vc pediu pra não mostrar
type UsuarioAtualizacao = Partial<Usuario>; 

function exibirPerfil(u: UsuarioSemSenha): void {
    console.log("Perfil:", u);
}

function atualizarUsuario(id: number, dados: UsuarioAtualizacao): void {
    console.log("Usuario: ", id,dados);
}