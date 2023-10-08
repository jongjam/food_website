console.log("PLEASE HELP US!");
//USE SVELT FRONTEND
//DJANGO (PYTHON) BACKEND LET"S GO! 

let restaraunts = new Array("");

function enterRestaraunt() { //This will need to be replaced with selecting Google Search options
    // let restarauntName = document.entering_restaraunt.restarauntName.text;
    console.log("HELP: " + restarauntName);
    // restaraunts.push(restarauntName);
}

let btnAdd = document.querySelector('button');
let input = document.querySelector('input');

btnAdd.addEventListener('click', ()=>{
    restaraunts.push(input.value);
    input.value = '';
    enterRestaraunt();
});