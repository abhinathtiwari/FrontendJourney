//--------------------- + and typeof --------------------------------------------------------

let x=5;
let y=x + + "100"; //number
let z=x+"100" //string
console.log(typeof(y), y); //105
console.log(typeof(z), z); //5100

//------------------NaN (Not a Number) Stands for computational error---------------------------------

console.log(typeof(NaN)) //Number
console.log(0/0); // NaN
console.log(parseInt("hfyg100dkfjdk"));//Nan
console.log(parseInt("100dkfjdk"));  //100

//------------------Type of null is object (mistake not fixed)----------------------------
console.log(typeof(null));  // Null it will give you undefined as Null is not defined in Js it is null, small n