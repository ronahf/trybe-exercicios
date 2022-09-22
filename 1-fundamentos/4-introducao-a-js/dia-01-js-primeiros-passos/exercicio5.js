// Utilize if/else para fazer um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus. Um ângulo será considerado inválido se não tiver um valor positivo.

let x = 100;
let y = 100;
let z = 200;

if ((x+y+z === 180) && x>0 && y>0 && z>0){
    console.log(true);
}

else if (x <=0 || y <= 0 || z <=0){
    console.log('erro!')
}

else{
    console.log(false);
}