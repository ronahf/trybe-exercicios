// Laker e Boston disputam a final. 
// Desenvolva uma função que receberá um array de cada time e devolverá o campeão.

function nbaChampion (lakers, celtics){
    let winsLakers = 0;
    let winsCeltics = 0;
    let comparator;

    for (let index = 0; index < lakers.length; index += 1){
        if (lakers[index] > celtics[index]){
            winsLakers += 1;
        } else{
            winsCeltics += 1;
        }
    }
    
    if (winsLakers > winsCeltics){
        return 'Lakers campeao com ' + winsLakers + 'vitórias';
    } else {
        return 'Celtics campeao com ' + winsCeltics + 'vitorias';
    }
    
}

console.log(nbaChampion([106, 98, 107], [108, 99, 110]));