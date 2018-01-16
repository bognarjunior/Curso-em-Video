function mudaFoto(foto)
{
    document.getElementById("icone").src = foto;
}

function calc_total() {
    var qtd = parseInt(document.getElementById('cQtd').value);
    var total = qtd * 1500;
    document.getElementById('cTot').value = total;
}