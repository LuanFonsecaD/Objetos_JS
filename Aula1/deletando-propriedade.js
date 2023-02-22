const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
   }

   delete objPersonagem.aliado

console.log(objPersonagem.aliado) //undefined

//Também é possível:

delete objPersonagem.aliado
delete objPersonagem["status"]

console.log(objPersonagem.aliado) //undefined
console.log(objPersonagem.status) //undefined

//O delete remove do objeto o valor da propriedade, assim como a chave! O objeto agora está assim:

// {
//     nome: "Gandalf",
//     classe: "mago",
//     nivel: "20",
//    }

//O valor de retorno do operador delete é um booleano.

const delProp = delete objPersonagem.aliado
const delPropInexistente = delete objPersonagem["endereco"]

console.log(delProp) //true
console.log(delPropInexistente) //true -> curiosamente  não retornna false, mesmo se tratando de uma propriedade inexistente.
