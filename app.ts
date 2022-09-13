const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

let age: number = 50;
let name = 'Max';
let toggle: boolean = true;
let empty:null = null;
let notInitialize:undefined = undefined;
let callback = (a) => { return 100 + a };

function add (num1:number, num2:number){
    return num1 + num2;
}

button.addEventListener("click", function(){
    console.log(add(+input1.value, +input2.value));
})