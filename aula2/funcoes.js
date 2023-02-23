const cliente = {
    nome: "José",
    idade: 24,
    email: "jose@mail.com",
    telefone: ["112233", "112244"],
    saldo: 200, 
    efetuaPagamento: function(valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente.")
        }
        else {
            this.saldo -= valor;
            console.log(`Pagamento realizado. Novo saldo ${this.saldo}.`);
        }
    },
};

cliente.efetuaPagamento(25);