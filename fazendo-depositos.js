const cliente = {
<<<<<<< HEAD
    nome: "Andre",
    idade: 36,
    cpf: "123543652266",
    email: "andre@email.com",
    fones: ["55987456", "5514785697"],
    dependentes: [
        {
            nome: "Sara Silva",
            parantesco: "filha",
            dataNasc: "20/03/2011"},
        {
            nome: "Samia Maria",
            parantesco: "Filha",
            dataNasc: "04/01/2014"
        }
    ],
}
=======
    nome: 'Andre',
    idade: 36,
    cpf: '123543652266',
    email: 'andre@email.com',
    fones: ['55987456', '5514785697'],
    dependentes: [
    {
        nome: 'Sara Silva',
        parantesco: 'filha',
        dataNasc: '20/03/2011'},
    {
        nome: 'Samia Maria',
        parantesco: 'Filha',
        dataNasc: '04/01/2014'
    }
],

    saldo:100,

    depositar: function(valor)
    {
        this.saldo += valor
    }
}

console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)


>>>>>>> 3d97568690086702028f93693fd466b6a8b0fb74
