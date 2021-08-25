window.onload = function(){
    // Informa o Jogador Atual
    var formularioJogador = document.getElementById("formulario-jogador");
    // Botões Para Inserir a Jogada
    var formularioButton1 = document.getElementById("formulario-button-1");
    var formularioButton2 = document.getElementById("formulario-button-2");
    var formularioButton3 = document.getElementById("formulario-button-3");
    var formularioButton4 = document.getElementById("formulario-button-4");
    var formularioButton5 = document.getElementById("formulario-button-5");
    var formularioButton6 = document.getElementById("formulario-button-6");
    var formularioButton7 = document.getElementById("formulario-button-7");
    var formularioButton8 = document.getElementById("formulario-button-8");
    var formularioButton9 = document.getElementById("formulario-button-9");
    // Verificador do Jogador Atual
    var jogador1 = true;
    // Verificador de Vitória
    var vitoria = false;

    // Inseri a Vitória do Jogador 1
    function vencedor1(botao1, botao2, botao3){
        formularioJogador.value = "Jogador 1 Venceu!";
        formularioJogador.classList.add("formulario-jogador-x");
        formularioJogador.classList.remove("formulario-jogador-o");
        botao1.classList.add("formulario-button-x-vitoria");
        botao2.classList.add("formulario-button-x-vitoria");
        botao3.classList.add("formulario-button-x-vitoria");
        vitoria = true;
    }
    // Inseri a Vitória do Jogador 2
    function vencedor2(botao1, botao2, botao3){
        formularioJogador.value = "Jogador 2 Venceu!";
        formularioJogador.classList.add("formulario-jogador-o");
        formularioJogador.classList.remove("formulario-jogador-x");
        botao1.classList.add("formulario-button-o-vitoria");
        botao2.classList.add("formulario-button-o-vitoria");
        botao3.classList.add("formulario-button-o-vitoria");
        vitoria = true;
    }
    // Inseri a Jogada no Botão
    function jogada(botao){
        if(!vitoria){
            if((!(botao.value == "X")) && (!(botao.value == "O"))){
                if(jogador1){
                    var jogador = "X";
                    botao.value = jogador;
                    botao.classList.add("formulario-button-x");
                    jogador1 = false;
                    if((formularioButton1.value == jogador) && (formularioButton2.value == jogador) && (formularioButton3.value == jogador)){
                        vencedor1(formularioButton1, formularioButton2, formularioButton3);
                    }
                    else if((formularioButton4.value == jogador) && (formularioButton5.value == jogador) && (formularioButton6.value == jogador)){
                        vencedor1(formularioButton4, formularioButton5, formularioButton6);
                    }
                    else if((formularioButton7.value == jogador) && (formularioButton8.value == jogador) && (formularioButton9.value == jogador)){
                        vencedor1(formularioButton7, formularioButton8, formularioButton9);
                    }
                    else if((formularioButton1.value == jogador) && (formularioButton4.value == jogador) && (formularioButton7.value == jogador)){
                        vencedor1(formularioButton1, formularioButton4, formularioButton7);
                    }
                    else if((formularioButton2.value == jogador) && (formularioButton5.value == jogador) && (formularioButton8.value == jogador)){
                        vencedor1(formularioButton2, formularioButton5, formularioButton8);
                    }
                    else if((formularioButton3.value == jogador) && (formularioButton6.value == jogador) && (formularioButton9.value == jogador)){
                        vencedor1(formularioButton3, formularioButton6, formularioButton9);
                    }
                    else if((formularioButton1.value == jogador) && (formularioButton5.value == jogador) && (formularioButton9.value == jogador)){
                        vencedor1(formularioButton1, formularioButton5, formularioButton9);
                    }
                    else if((formularioButton3.value == jogador) && (formularioButton5.value == jogador) && (formularioButton7.value == jogador)){
                        vencedor1(formularioButton3, formularioButton5, formularioButton7);
                    }
                    else{
                        formularioJogador.value = "Jogador 2";
                        formularioJogador.classList.add("formulario-jogador-o");
                        formularioJogador.classList.remove("formulario-jogador-x");
                    }
                }
                else{
                    var jogador = "O";
                    botao.value = jogador;
                    botao.classList.add("formulario-button-o");
                    jogador1 = true;
                    if((formularioButton1.value == jogador) && (formularioButton2.value == jogador) && (formularioButton3.value == jogador)){
                        vencedor2(formularioButton1, formularioButton2, formularioButton3);
                    }
                    else if((formularioButton4.value == jogador) && (formularioButton5.value == jogador) && (formularioButton6.value == jogador)){
                        vencedor2(formularioButton4, formularioButton5, formularioButton6);
                    }
                    else if((formularioButton7.value == jogador) && (formularioButton8.value == jogador) && (formularioButton9.value == jogador)){
                        vencedor2(formularioButton7, formularioButton8, formularioButton9);
                    }
                    else if((formularioButton1.value == jogador) && (formularioButton4.value == jogador) && (formularioButton7.value == jogador)){
                        vencedor2(formularioButton1, formularioButton4, formularioButton7);
                    }
                    else if((formularioButton2.value == jogador) && (formularioButton5.value == jogador) && (formularioButton8.value == jogador)){
                        vencedor2(formularioButton2, formularioButton5, formularioButton8);
                    }
                    else if((formularioButton3.value == jogador) && (formularioButton6.value == jogador) && (formularioButton9.value == jogador)){
                        vencedor2(formularioButton3, formularioButton6, formularioButton9);
                    }
                    else if((formularioButton1.value == jogador) && (formularioButton5.value == jogador) && (formularioButton9.value == jogador)){
                        vencedor2(formularioButton1, formularioButton5, formularioButton9);
                    }
                    else if((formularioButton3.value == jogador) && (formularioButton5.value == jogador) && (formularioButton7.value == jogador)){
                        vencedor2(formularioButton3, formularioButton5, formularioButton7);
                    }
                    else{
                        formularioJogador.value = "Jogador 1";
                        formularioJogador.classList.add("formulario-jogador-x");
                        formularioJogador.classList.remove("formulario-jogador-o");
                    }
                }
            }
        }
    }
    formularioButton1.onclick = function(){
        jogada(formularioButton1);
    };
    formularioButton2.onclick = function(){
        jogada(formularioButton2);
    };
    formularioButton3.onclick = function(){
        jogada(formularioButton3);
    };
    formularioButton4.onclick = function(){
        jogada(formularioButton4);
    };
    formularioButton5.onclick = function(){
        jogada(formularioButton5);
    };
    formularioButton6.onclick = function(){
        jogada(formularioButton6);
    };
    formularioButton7.onclick = function(){
        jogada(formularioButton7);
    };
    formularioButton8.onclick = function(){
        jogada(formularioButton8);
    };
    formularioButton9.onclick = function(){
        jogada(formularioButton9);
    };
};