const cliente = {
    nome: "José",
    idade: 24,
    email: "jose@mail.com",
    telefone: ["112233", "112244"], //com array
};

cliente.enderecos = [ //array de objetos 
  {
    rua: "R. Qualquer",
    numero: 123,
    apartamento: true,
    complemento: "ap. 934",
  },
];

cliente.enderecos.push({
    rua: "R. Aleatória",
    numero: 321,
    apartamento: false,
    complemento: "",
});

//Fazer uma nova lista a partir desses usando o método FILTER:

const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
);

console.log(listaApenasApartamentos);