$("#formulario_contato").validate({
    rules: {
        nome: {
            required: true,
            minlength: 3,
            maxlength: 30
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true,
            required: true,
            minlength: 1,
            maxlength: 11
        },
        cpf: {
            required: true,
            minlength: 1,
            maxlength: 11
        },
        endereco: {
            required: true
        },
        cep: {
            required: true,
            minlength: 1,
            maxlength: 8
        }
    }
})

$("#enviar").click(function(){
    if($("#formulario_contato").valid() == false) {
        return;
    }
    let nome = $("#nome").val();
    let email = $("#email").val();
    let telefone = $("·telefone").val();
    let cpf = $("#cpf").val();
    let endereco = $("#endereco").val();
    let cep = $("#cep").val(); 

    
})