console.log("PLEASE HELP US!");
//USE SVELT FRONTEND
//DJANGO (PYTHON) BACKEND LET"S GO! 

const myForm = document.querySelector('#entering_restaraunt');
const restName = document.querySelector('#rname');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) { //This will need to be replaced with selecting Google Search options
    e.preventDefault();
    console.log(restName.value);
}



