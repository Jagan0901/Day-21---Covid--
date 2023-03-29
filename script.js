// https://api.covid19api.com/dayone/country/south-africa
let division = document.createElement('div');
division.innerHTML=`<input type="text" placeholder="Enter Country name" id="countryName">
<button onclick="countriesData()">Search</button>`;
document.body.append(division);

let para = document.createElement(`p`);
para.setAttribute("id","paragraph");
document.body.append(para) 


async function countriesData(){
    const countryName = document.getElementById("countryName").value;
    console.log(countryName);
    const result = await fetch(`https://api.covid19api.com/dayone/country/${countryName}`);
    const output = await result.json();
    console.log(output);
    const activeCases = output[output.length-1].Active;
    const recoveries  = output[output.length-1].Recovered;
    const deaths      = output[output.length-1].Deaths;
    console.log(activeCases);
    console.log(recoveries);
    console.log(deaths);
    para.innerText = ` The active cases in ${countryName} : ${activeCases}
                          The recovered patients in ${countryName} : ${recoveries}
                          The death cases in ${countryName} : ${deaths} `
}