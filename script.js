const fetchButton = document.getElementById('fetchButton');
const infoContainer = document.getElementById('infoContainer');
const axiosButton = document.getElementById('axiosButton');

fetchButton.addEventListener('click', fetchFunction);
axiosButton.addEventListener('click', axiosFunction);

function fetchFunction() {
    infoContainer.innerHTML = "";
    
    fetch('https://rickandmortyapi.com/api/character/')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la solicitud.');
        }
        return response.json();
    })
    .then(data => {
        const fetchData = data.results.map(character =>({
            name: character.name,
            status: character.status,
            species: character.species,
            image: character.image
        }));

        console.log(data);
        console.log(fetchData);
        
        fetchData.forEach(element => {
            const characterDiv = document.createElement('div');    
            characterDiv.innerHTML = `
            <div>
                <span>Name:</span>
                <span>${element.name}</span>
            </div>
            <div>
                <span>Status:</span>
                <span>${element.status}</span>
            </div>
            <div>
                <span>Species:</span>
                <span>${element.species}</span>
            </div>
            <div>
                <img src="${element.image}" alt="${element.name}" title="${element.name}">
            </div>`;
            infoContainer.appendChild(characterDiv);
        });
    })
    .catch(error => {
        console.error(error);
    })
};


function axiosFunction() {
    infoContainer.innerHTML = "";
    
    axios.get('https://swapi.dev/api/films/')
    .then(response =>{
        const axiosData = response.data.results.map(film =>({
            title: film.title,
            id: film.episode_id,
            director: film.director,
            releaseDate: film.release_date
        }));
        
        console.log(response.data.results);
        console.log(axiosData);

        axiosData.forEach(element => {
            const filmDiv = document.createElement('div');
            filmDiv.innerHTML = `
            <div>
                <span>Title:</span>
                <span>${element.title}</span>
            </div>
            <div>
                <span>Id:</span>
                <span>${element.id}</span>
            </div>
            <div>
                <span>Director:</span>
                <span>${element.director}</span>
            </div>
            <div>
                <span>Release Date:</span>
                <span>${element.releaseDate}</span>
            </div>`;
            infoContainer.appendChild(filmDiv);
        });

    })
    .catch(error => {
        console.error('Error: ', error);
    });
};