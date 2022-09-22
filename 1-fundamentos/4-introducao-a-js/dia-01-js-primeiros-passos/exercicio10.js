let custoProduto = 100;
let valorDeVenda = 100;
let quantidadeDeVenda = 1;

let lucro = quantidadeDeVenda*(valorDeVenda - custoProduto*1.2);

if(custoProduto<0 || valorDeVenda<0 || quantidadeDeVenda<0){
    console.log('Erro! Valor deve ser maior que zero!')
}
else{
    console.log(lucro)
}
