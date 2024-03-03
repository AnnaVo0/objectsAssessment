// ol reference
const ol = document.querySelector("ol");

// My Top Three Favorite Movies objects
const favMovies = [
    {
        name: "Coraline",
        year: 2009,
        director: "Henry Selick",
        picture: "https://m.media-amazon.com/images/M/MV5BMzQxNjM5NzkxNV5BMl5BanBnXkFtZTcwMzg5NDMwMg@@._V1_.jpg"
    },
    {
        name: "Home Alone",
        year: 1990,
        director: "Chris Columbus",
        picture: "https://lumiere-a.akamaihd.net/v1/images/image_ed8d7a4e.jpeg?region=0%2C0%2C800%2C1200"
    },
    {
        name: "Ponyo",
        year: 2008,
        director: "Hayao Miyazaki",
        picture: "https://upload.wikimedia.org/wikipedia/en/5/51/Ponyo.png"
    }
]

// Maps objects into list items
const template = favMovies.map(movie => `
<li>
    <p>Name: ${movie.name}</p>
    <p>Year: ${movie.year}</p>
    <p>Director: ${movie.director}</p>
    <img src=${movie.picture} height="400">
</li>
`);

// Replaces ol inner HTML with the template literal without a delimiter 
ol.innerHTML = template.join("");