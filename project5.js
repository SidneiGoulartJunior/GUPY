/*5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:

a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

b) Evite usar funções prontas, como, por exemplo, reverse;*/


function gupyTest(str) {
    let solucao = "";
    let tamanho = str.length;

    for(let posicao = tamanho; posicao >= 0, posicao--;){
        solucao = solucao + str[posicao];
    }

    console.log(solucao);
    return solucao;
}
gupyTest("Teste na plataforma Gupy")