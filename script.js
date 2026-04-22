function add(valor){
    document.getElementById("resultado").value += valor;
}

function limpar(){
    document.getElementById("resultado").value = "";
}

function calcular(){
    let res = document.getElementById("resultado").value;

try{
    document.getElementById("resultado").value = eval(res);   
}
catch{
    document.getElementById("resultado").value = "Erro";
}
}