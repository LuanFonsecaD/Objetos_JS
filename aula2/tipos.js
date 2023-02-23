const cliente = {
    nome: "José",
    idade: 24,
    email: "jose@mail.com",
    telefone: ["112233", "112244"], //com array
};

//aninhados
cliente.endereco = {
    rua: "R. qualquer",
    numero: 123,
    apartamento: true,
    complemento: "ap. 934",
};

console.log(cliente);
console.log(cliente.endereco);

// //outra notação:
// console.log(cliente["endereco"]);


