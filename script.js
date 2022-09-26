/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const givenMeters = document.querySelector("#given-meter")
const ansFeet = document.querySelector("#ans-feet")
const givenFeet = document.querySelector("#given-feet")
const ansMeters = document.querySelector("#ans-meters")

const givenLitres = document.querySelector("#given-litres")
const ansLitres = document.querySelector("#ans-litres")
const givenGallons = document.querySelector("#given-gallons")
const ansGallons = document.querySelector("#ans-gallons")

const givenKilograms = document.querySelector("#given-kilograms")
const ansKilograms = document.querySelector("#ans-kilograms")
const givenPounds = document.querySelector("#given-pounds")
const ansPounds = document.querySelector("#ans-pounds")

const convertBtn = document.querySelector("#convert-btn")
const inputField = document.querySelector("#ans")



convertBtn.addEventListener('click', () => {
    const inputVal = inputField.value
    if(inputVal){
        // Length Section
        let aMeters = inputVal * 0.304
        let aFeet = inputVal * 3.281

        givenMeters.textContent = inputVal
        givenFeet.textContent = inputVal

        ansFeet.textContent = aFeet.toFixed(3)
        ansMeters.textContent = aMeters.toFixed(3)

        // Volume Section
        let aLitres = inputVal * 3.785
        let aGallons = inputVal * 0.264

        givenLitres.textContent = inputVal
        givenGallons.textContent = inputVal

        ansLitres.textContent = aLitres.toFixed(3)
        ansGallons.textContent = aGallons.toFixed(3)

        // Mass Section
        let aKilograms = inputVal * 0.453
        let aPounds = inputVal * 2.204

        givenKilograms.textContent = inputVal
        givenPounds.textContent = inputVal

        ansKilograms.textContent = aKilograms.toFixed(3)
        ansPounds.textContent = aPounds.toFixed(3)
    }
    

})