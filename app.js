function calcularImc(){
    let altura = parseInt(parseFloat(document.getElementById("altura").value));
    let peso = parseInt(document.getElementById("peso").value);
    altura = altura / 100;
    let imc = calculaImc(altura,peso);
    let resultado = document.getElementById("resultadoDoImc");
    document.getElementById("resultadoDoImc").innerHTML = `RESULTADO ${imc.toFixed(1)}`
    var tabela = "";
    if(imc > 18.5 && imc < 24.9) {
        alteraCorTabela(normal);
    }else{
        if(imc > 25 && imc < 29.9){
            alteraCorTabela(sobrepeso);
        }else{
            if(imc > 30 && imc < 34.9){
                alteraCorTabela(sobrepeso1);
            }else{
                if(imc > 35 && imc < 39.9){
                    alteraCorTabela(sobrepeso2);
                }else{
                    if(imc > 40){
                        alteraCorTabela(sobrepeso3);
                    }
                }
            }
        }
    }
}

function calculaImc(altura,peso){
    let imc = peso / (altura * altura);
    return imc;
}

function alteraCorTabela(id){
    document.getElementById(`${id}`);
    id.style.color = "red";
    id.style.backgroundColor = "black";
}
function pressionouBotao(id){
    let corBotao = document.getElementById(`${id}`);
    corBotao.style.color = "red";
}
function saiuBotao(id){
    let corBotao = document.getElementById(`${id}`);
    corBotao.style.color = "gold";
}

function novoCalculoImc(){
    document.getElementById("altura").value = ""
    document.getElementById("peso").value = ""
    document.getElementById("resultadoDoImc").innerHTML = "INSIRA OS NOVOS DADOS!"
    resetaCorTabela(normal);
    resetaCorTabela(sobrepeso);
    resetaCorTabela(sobrepeso1);
    resetaCorTabela(sobrepeso2);
    resetaCorTabela(sobrepeso3);
}

function resetaCorTabela(id){
    document.getElementById(`${id}`);
    id.style.color = "black";
    id.style.backgroundColor = "white";
}