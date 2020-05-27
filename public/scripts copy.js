document /*acessando o html*/
    .querySelector("button.fat") /*selecionando o seletor+classe*/
    .addEventListener("click", function(){  /*monitoranto a ação clique, criando função anônima*/
        document                            
            .querySelector("footer") /* Seleciona adiciona a classe hide no footer*/
            .classList
            .toggle("hide")
})

document 
.querySelector("button.addideia")
.addEventListener("click", function(){
    document
    .querySelector("#modal")
    .classList
    .remove("hide")
})