import navbar from "./navbar.js";

let navbar_div = document.getElementById("navbar_div");
navbar_div.innerHTML = navbar();

async function searchMovies() {
    try {
        let query = document.getElementById("query").value;
        let response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=4b646874`);
        let data = await response.json();
        appendMovies(data.Search);
    } catch (error) {
        console.log(error);
    }
}

let input_box = document.getElementById("query");
input_box.addEventListener("input", function () {
    searchMovies();
});

function appendMovies(movies) {
    let data_div = document.getElementById("movies");
    data_div.innerHTML = "";

    movies.forEach(function (element) {
        const { Title, Poster, Year } = element;

        let card = document.createElement("div");
        card.className = "col";

        let cardInner = `
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                <img src="${Poster}" class="card-img-top" alt="${Title}">
                <div class="card-body">
                    <h5 class="card-title">${Title}</h5>
                    <p class="card-text">Year: ${Year}</p>
                </div>
            </div>
        `;

        card.innerHTML = cardInner;
        data_div.append(card);
    });
}
