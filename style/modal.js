const prices = {
    priceOne: '15€',
    priceTwo: '20€',
    priceThree: '6€',
    priceFour: '5€',
    priceFive: '10€',
    priceSix: '11€'
}
//class qui permet la section (tout ce qui es selectionné dans cette classe est clickable)
buton = document.getElementsByClassName('my-text');
// box = document.getElementById('un');
title = document.getElementsByClassName('my-text')
down = document.getElementsByClassName('down');
let div = []
let command = []
blockImage = document.getElementsByClassName('block-image');
block = document.getElementsByClassName('block');

//boucle de selection des elements clicable
for (let i = 0; i < buton.length; i++) {
    //creation d'un script pour lancer le modal du form (oui sinon ça marche pas)
    var script = document.createElement("script");
    //initialisation de la valeur des block
    block[i].style.marginBottom = '50px';
    //creation de div et button
    div[i] = document.createElement("div");
    command[i] = document.createElement("button");
    
    //function event sur chaque element clicable
    buton[i].addEventListener('click', event => {
        block[i] = document.getElementById('block');
        var a = event.target
        console.log(buton[i].id)
        if (block[i].style.marginBottom == '50px') {
            block[i].style.marginBottom = '95px';
            blockImage[i].classList.add('size');
            down[i].classList.add('rotate');
            command[i].classList.add('trigger');//a renommer
            command[i].innerHTML="Commander";
            div[i].id = "price";
            div[i].className = "pricer";
            div[i].textContent = `A partir de: ${prices[buton[i].id]}`;
            title[i].appendChild(div[i]);
            blockImage[i].after(command[i]);
            //ajout d'un script dans le html car impossible d'appeler l'element après sa création
            script.type = "text/javascript";
            script.src = "./style/command.js"; 
            document.getElementsByTagName("head")[0].appendChild(script);
        } else {
            block[i].style.marginBottom = '50px';
            blockImage[i].classList.remove('size');
            down[i].classList.remove('rotate');
            title[i].removeChild(div[i]);
            command[i].innerHTML=""
            command[i].remove()
        }
    })
}
