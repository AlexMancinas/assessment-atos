const API_URL = 'https://restcountries.com/v3.1';

fetch(`${API_URL}/all`).then((res)=> res.json()).then((countries)=> {
    const tpl = countries.map(country => `<li>${country.name.common}</li>`)
  
    console.log(tpl)
})