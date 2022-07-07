document.addEventListener('DOMContentLoaded', initialize)

const API_URL = 'https://restcountries.com/v3.1/all';

let content = document.querySelector('#table')
let countries;

var oficial_name

fetch(API_URL)
    .then((res) => res.json()).then(data => initialize(data)).catch((err) => console.log(err))

function initialize(countriesData) {
     countries =countriesData  
    for (let i = 0; i <= countries.length; i++){
        console.log('Capital of ' + countries[i].name.official + " is " + countries[i].capital)   
    }
    for(let i = 0; i<= countriesData.length;i++){
           
        var oficial_name=countries[i].name.official
        var capital= countries[i].capital?countries[i].capital:"No capital"
        var region= countries[i].region
        var language= countries[i].languages?countries[i].languages:"No languages"
        var population =countries[i].population
        var flag =countries[i].flag

        
    }
   

    console.log(oficial_name)
    }


