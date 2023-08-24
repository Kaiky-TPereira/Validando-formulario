
function validarFormulario() {
    var campoA = parseInt(document.getElementById("campoA").value);
    var campoB = parseInt(document.getElementById("campoB").value);

    if (campoB > campoA) {
        document.getElementById("mensagem").innerHTML = "Formulário válido! B é maior que A.";
    } 
    else {
        document.getElementById("mensagem").innerHTML = "Formulário inválido! B deve ser maior que A.";
    }
}