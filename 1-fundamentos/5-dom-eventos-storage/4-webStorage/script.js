window.onload = function(){
    let select = document.querySelector('select')
    select.addEventListener('change', function(){
        //console.log(select.selectedOptions);
        let selected = select.selectedOptions[0];
        document.body.style.backgroundColor = selected.value

        localStorage.setItem('5.4-backgroundColor', selected.value);
    })

    let inputFontSize = document.querySelector('input[name="font-size"]');
    //console.log(fontSize);
    inputFontSize.addEventListener('change', function(){
        let p = document.querySelector('p');
        p.style.fontSize = `${inputFontSize.value}px`

        localStorage.setItem('5.4-font-size',`${inputFontSize.value}px`);
    })


    let savedBackground = localStorage.getItem('5.4-backgroundColor');
    document.body.style.backgroundColor = savedBackground;

    let savedFontSize = localStorage.getItem('5.4-font-size');
    let p = document.querySelector('p');
    p.style.fontSize = savedFontSize;
}






