var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;

$(document).ready(function(){
    $("bEnviar").click(function() {
        var nome = $("#itnome").val;
        var email = $("#itemail").val;
        var telefone = $("#ittelefone").val;

        if(nome == ""){
            $("#mensagem1").fadeIn();
            return false;
        }
    });
});