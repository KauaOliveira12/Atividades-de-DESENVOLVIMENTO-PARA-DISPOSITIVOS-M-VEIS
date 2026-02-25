interface PropsBotao {
    titulo: string;
    ativo?: boolean;
}

function renderizarBotao({ titulo, ativo = true }: PropsBotao): string {
      return ativo ? `[ ${titulo} ]` : `( ${titulo} )`;
}

const botaoSair = renderizarBotao({ titulo: "Sair", ativo: false });
const botaoLogin = renderizarBotao({ titulo: "Login" });
const botaoEnviar = renderizarBotao({ titulo: "Enviar", ativo: true });

console.log("Botão 1:", botaoSair);   
console.log("Botão 2:", botaoLogin);  
console.log("Botão 3:", botaoEnviar); 