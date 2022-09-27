function inicia() {
  let peso = document.getElementById("peso").value;
  let altura = document.getElementById("altura").value;
  let imc = IMC(peso, altura);
  const botoes = document.querySelectorAll(".botao-");

  dicas(imc);
  mostraBotoes(botoes);
  
}

function IMC(peso, altura, imc) {
  imc = peso / (altura * altura);
  document.getElementById("valor").value = imc.toFixed(2);
  return imc;
}

function dicas(imc) {
  if (imc >= 30) {
    document.getElementById("dicas-text").innerHTML ="O seu IMC indica que você está OBESO, recomendamos que procure um médico e um nutricionista,e também pode clicar em uma das opções abaixo para aprender mais sobre hábitos mais saúdaveis e adota-los!"
    return 0;
  }
  if(imc >= 25 && imc <= 29.99){
    document.getElementById("dicas-text").innerHTML = "O seu IMC indica que você esta com SOBREPESO, recomendamos que procure um médico e um nutricionista, e tambèm pode clicar em uma das opções abaixo para aprender mais sobre háitos mais saúdaveis e adota-los!"
    return 0;
  }

  if(imc >= 18.5 && imc <= 24.99){
    document.getElementById("dicas-text").innerHTML = "O seu IMC indica que você está saúdavel, mas para melhorar ainda mais sua saúde e forma física fique avontade para escolher uma das opções abaixo"
    return 0;
  }
  if(imc > 18.5){
    document.getElementById("dicas-text").innerHTML = "O seu IMC indica que voce está ABAIXO DO PESO recomendamos que procure um médico e um nutricionista, e tambèm pode clicar em uma das opções abaixo para aprender mais sobre háitos mais saúdaveis e adota-los!"
    return 0;
  }
 
}

function mostraBotoes(botoes){
    for (let i = 0; i < botoes.length; i++) {
        botoes[i].style.display = 'block'
    }

    

}