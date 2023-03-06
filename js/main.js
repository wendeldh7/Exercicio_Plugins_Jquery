var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;

$(document).ready(function(){
    $("bEnviar").click(function() {
        var nome = $("#itnome").val;
        var email = $("#itemail").val;
        var telefone = $("#ittelefone").val;
        var cpf = $("#itcpf").val;
        var endereco = $("#itendereco").val;
        var cep = $("#itcep").val;

        if(nome == ""){
            $("#mensagem1").fadeIn();
            return false;
        }else{
            $("#mensagem1").fadeOut();
        }
        
        if(email == ""){
            $("#mensagem2").fadeIn();
            return false;
        }

        
        if(telefone == ""){
            $("#mensagem3").fadeIn();
            return false;
        }

        
        if(cpf == ""){
            $("#mensagem4").fadeIn();
            return false;
        }

        
        if(endereco == ""){
            $("#mensagem5").fadeIn();
            return false;
        }

        
        if(cep == ""){
            $("#mensagem6").fadeIn();
            return false;
        }

    });
});