require('./models/connection');
const Country = require('./models/countries');
const City = require('./models/cities');


// Create country with name, flag image, currency and population
function createCountry(name, flagImg, currency, population) { 
// Sample call:
// createCountry('Australia', 'autralia.png', 'AUD', [
//  { populationNbr: 25400000, year: new Date('2015-08-24') },
// ]);
const newCountry = new Country({
    name: name,
    flagImg: flagImg,
    currency: currency,
    population: population,
    
   });

   newCountry.save().then(() => {
    console.log('country saved!');
   });
}
//createCountry('Australia', 'autralia.png', 'AUD', [
    //{ populationNbr: 25400000, year: new Date('2015-08-24') },
//])


// Create city with name, population and country foreign key
function createCity(name, currentPopulation, countryId) {
    // Sample call:
// createCity('Sydney', 5312163, 'COUNTRY_ID_TO_REPLACE');
    const newCity = new City({
        name: name,
        currentPopulation: currentPopulation,
        country: countryId,
        
       });
    
       newCity.save().then(() => {
        console.log('city saved!');
       });
 }



// Display country population from country name
function displayCountryPopulation(countryName) { 
    Country.findOne({name: countryName}).then(data => {
        console.log(data);
       });
}
//displayCountryPopulation('Australia')
// Display country informations from city name (with populate)
function displayCountryFromCityName(cityName) { 
    City.findOne({name: cityName})
    .populate('country')
    .then(data => {
        console.log(data);
       });
}
//displayCountryFromCityName('Sydney')



module.exports = { createCountry, createCity, displayCountryPopulation, displayCountryFromCityName }; // Do not edit/remove this line
