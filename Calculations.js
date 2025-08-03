
// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound

const input  = 20

//meter to feet  and feet to meter

outputMeterToFeet= (input * 3.281).toFixed(3)
outputFeetToMeter = (input /3.281).toFixed(3)

// //liters to galloons and gallons to liters

// outputLitreToGallons = InputField * 0.264
// outputGallonsToLitre = InputField / 0.264


// //kilos to pounds and pounds to kilos

// outputKilosToPounds = (input * 2.204).toFixed(3)
// outputPoundsToKilos = (input / 2.204).toFixed(3)

let lengthString =` ${input} meters = ${outputMeterToFeet} feet | ${input} feet = ${outputFeetToMeter} meters  `
console.log(lengthString)