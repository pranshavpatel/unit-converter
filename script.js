/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const givenMeters = document.querySelector("#given-meter")
const ansFeet = document.querySelector("#ans-feet")
const givenFeet = document.querySelector("#given-feet")
const ansMeters = document.querySelector("#ans-meters")
const convertBtn = document.querySelector("#convert-btn")



convertBtn.addEventListener('click', () => {
    const inputVal = document.querySelector("#ans").value
    if(inputVal){
        // Section Length
        let aMeters = inputVal * 0.304
        let aFeet = inputVal * 3.281

        parseFloat(aMeters).toFixed(3)
        parseFloat(aFeet).toFixed(3)

        givenMeters.textContent = inputVal
        givenFeet.textContent = inputVal

        ansFeet.textContent = aFeet
        ansMeters.textContent = aMeters
    }
    

})