// The goal is to make a very premium/fine dining looking website
// Dim lit images of fine dining foods that rotate in a bar that covers the page near the top
// Scroll down and you have the fill in page



console.log("PLEASE HELP US!");

//USE SVELT FRONTEND
//DJANGO (PYTHON) BACKEND LET"S GO! 

const myForm = document.querySelector('#entering_restaraunt');
const restName = document.querySelector('#rname');

myForm.addEventListener('submit', onSubmit);
myForm.addEventListener('submit', buttonColorChangeSubmit);
function onSubmit(e) { //This will need to be replaced with selecting Google Search options
    e.preventDefault();
    console.log(restName.value);
}

function buttonColorChangeSubmit(e) {
    document.querySelector('')
}

