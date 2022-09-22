//Utilize switch/case para fazer um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

//Peças
let rei = 'Pode mover-se em qualquer direção, porém apenas uma casa por vez.';
let rainha = 'Pode mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres.';
let torre = 'Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.';
let peao = 'Move-se somente para frente, uma casa por vez. Um exceção é a primeira vez que um peão é movido, quando ele pode se mover duas casas.';
let bispo = 'Move-se em uma linha reta, diagonalmente. Ele pode mover-se por tantas casas quantas quiser, até encontrar o final do tabuleiro ou outra peça.';
let cavalo = 'Única peça do tabuleiro que pode pular sobre outras peças. Move-se por duas casas horizontalmente ou verticalmente e então uma casa a mais em uma ângulo reto. O movimento do cavalo forma um L';

//Peça a ser inserida
let text = 'sadasd';

switch (text.toLowerCase()){
    case 'rei':
        console.log (rei);
        break;
    case 'rainha':
        console.log (rainha);
        break;
    case 'torre':
        console.log (torre);
        break;
    case 'peao':
        console.log (peao);
        break;
    case 'bispo':
        console.log (bispo);
        break;
    case 'cavalo':
        console.log (cavalo)
        break; 
    default:
        console.log ('erro: peça inexistente! ')
        break;
}