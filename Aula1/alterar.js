const pessoa = {
    nome: "Luma",
    profissão: "Engenheira",
};

console.log(pessoa.nome);
console.log(pessoa.telefone); //undefined: propriedade inexistente

//É possível definir e adicionar a propriedade depois:

pessoa.telefone = "11 99998888";
console.log(pessoa.telefone);

pessoa.nome = "Luma Silva"; //campo de valor alterado
console.log(pessoa.nome);
