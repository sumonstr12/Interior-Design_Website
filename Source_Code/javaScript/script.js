// initialising a variable name datap
// initialising a variable name datab

let datap = 299;    // inital value for pro plan
let datab = 199;    // inital value for basic plan

//printing default value of pro-plan or basic-plan
document.getElementById("countingp").innerText = datap;
document.getElementById("countingb").innerText = datab;

//creation of increment function for pro-plan
let nump = 1;   //assign value for selecting room number
document.getElementById("roomp").innerText = nump;
function incrementp() {
	datap = datap + 299;
    nump = nump +1;
	document.getElementById("countingp").innerText = datap;
    document.getElementById("roomp").innerText = nump;
}
//creation of decrement function for pro-plan
function decrementp() {
	if(datap/2>=299){
        datap = datap -299;
        nump = nump -1;
        document.getElementById("countingp").innerText = datap;
        document.getElementById("roomp").innerText = nump;
    }
}

let numb = 1;   //assign value for selecting room number
document.getElementById("roomb").innerText = numb;

//creation of increment function for basic-plan
function incrementb() {
    datab = datab +199;
    numb = numb +1;
    document.getElementById("countingb").innerText = datab;
    document.getElementById("roomb").innerText = numb;
}
//creation of decrement function for basic-plan
function decrementb() {
    if(datab/2>=199){
        datab = datab -199;
        document.getElementById("countingb").innerText = datab;
        numb = numb -1;
        document.getElementById("roomb").innerText = numb;
    }
}


// Message handlers after signing up.
// for basic-plan
const smsb = document.getElementById('messageb');
const successMessageb = document.getElementById('success-messageb');
smsb.addEventListener('submit', (e) => {
    successMessageb.textContent = `Thank you for choosing ${numb} room`;
});

// for pro-plan
const smsp = document.getElementById('messagep');
const successMessagep = document.getElementById('success-messagep');
smsp.addEventListener('submit', (e) => {
    successMessagep.textContent = `Thank you for choosing ${nump} room`;
});


