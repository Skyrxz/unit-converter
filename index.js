/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const meter = 3.281
const litre = 0.264
const kilogram = 2.204
const inputEl = document.getElementById('input-el');
const lengthEl = document.getElementById('length')
const volumeEl = document.getElementById('volume')
const massEl = document.getElementById('mass')
const convertBtn = document.getElementById('convert-btn')

let input;

convertBtn.addEventListener("click", function(){convert()})

function convert(){
    input = inputEl.value
    lengthEl.textContent = `${input} feet = ${feetToMeter(input).toFixed(3)} meters | ${input} meters = ${meterToFeet(input).toFixed(3)} feet`;
    volumeEl.textContent = `${input} litres = ${litreToGallon(input).toFixed(3)} gallons | ${input} gallons = ${gallonToLitre(input).toFixed(3)} litres`;
    massEl.textContent = `${input} kilograms = ${kiloToPound(input).toFixed(3)} pounds | ${input} pounds = ${poundToKilo(input).toFixed(3)} kilograms`;
}

function feetToMeter(valueToConvert){
    return valueToConvert/meter
}

function meterToFeet(valueToConvert){
    return valueToConvert * meter
}

function litreToGallon(valueToConvert){
    return valueToConvert/litre
}

function gallonToLitre(valueToConvert){
    return valueToConvert * litre
}

function kiloToPound(valueToConvert){
    return valueToConvert/kilogram
}

function poundToKilo(valueToConvert){
    return valueToConvert * kilogram
}

