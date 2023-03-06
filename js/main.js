$('#telefone').mask('(00) 00000-0000')

$('#cpf').mask('000-000-000-00')

$('#cep').mask('00-000-000')

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
    },
    messages: {
        cpf: 'Por favor, insira o seu cpf certo!'
    },
    messages: {
        cep: 'Por favor, insira o seu cep certo!'
    }

})