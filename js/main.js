$('#telefone').mask('(00) 00000-0000')

$('form').validate({
    rules: {
        nome: {
            required: true,
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true,
        },
        cpf: {
            required: true,
        },
        endereco: {
            required: true,
        },
        cep: {
            required: true,
        }
    },
    messages: {
        nome: 'Por favor, insira o seu nome!'
    }

})