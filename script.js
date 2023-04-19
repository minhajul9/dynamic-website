const countriesDiv = document.getElementById('countries')
// console.log(countriesDiv);

let data;
const getData = async () => {
    // fetch('https://restcountries.com/v3.1/all')
    // .then(res => res.json())
    // .then(data => console.log(data))

    const res = await fetch('https://restcountries.com/v3.1/all')
    data = await res.json();
    // console.log(data);


    

    for (const country of data) {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML = `
            <img class='border' src=${country.flags.png} alt="">
            <h3>${country.name.common}</h3>
            <p>Region: ${country.region}</p>
            <button onclick="loadDetails('${country.cca3}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                 More Details
            </button>
        `;

        countriesDiv.appendChild(div)
    }

}

const loadDetails = countryCode =>{
    const country = data.find( ct => ct.cca3 === countryCode);

    document.getElementById('modalTitle').innerText = country.name.common;
    document.getElementById('capital').innerText = country.capital;
    document.getElementById('location').innerText = country.maps.googleMaps;
    document.getElementById('population').innerText = country.population;

    const image = document.getElementById('coatOfArms');
    country.coatOfArms.png? image.setAttribute('src', country.coatOfArms.png) : image.setAttribute('alt', 'No Image Found')

    console.log(country);
}


getData()