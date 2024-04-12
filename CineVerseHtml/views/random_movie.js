const movies = [
    { title: "Aladdin", poster: "../public/images/posters/alaadin.jpeg" },
    { title: "Cruella", poster: "../public/images/posters/cruella.jpeg" },
    { title: "Frozen", poster: "../public/images/posters/frozen.jpeg" },
    { title: "Elio", poster: "../public/images/posters/elio.jpeg" },
    { title: "Wish", poster: "../public/images/posters/wish.jpeg" },
    { title: "The Marvels", poster: "../public/images/posters/the-marvels.jpeg" },
    { title: "Spider man : across the spider verse", poster: "../public/images/posters/spider-man-across-the-spider-verse-movie-poster.jpg" },
    { title: "Gracie And Pedro Pets To The Rescue", poster: "../public/images/posters/gracie-and-pedro-pets-to-the-rescue-movie-poster.jpg" },
    { title: "Inside Out 2", poster: "../public/images/posters/inside-out.jpeg" },
    { title: "Transformers Rise of the Beasts", poster: "../public/images/posters/Transformers-Rise-of-the-Beasts.jpg" },
    { title: "Luca", poster: "../public/images/posters/luca.jpeg" },
];

const movieContainer = document.getElementById("movie-container");
const generateBtn = document.getElementById("generate-btn");

generateBtn.addEventListener("click", generateRandomMovie);

function generateRandomStars() {
    const starsContainer = document.createElement("div");
    starsContainer.classList.add("stars");

    const numGroups = 3; // Fixed number of star groups

    for (let i = 0; i < numGroups; i++) {
        const groupSize = 15; // Fixed number of stars in each group
        createStarGroup(starsContainer, groupSize);
    }

    movieContainer.appendChild(starsContainer);
}

function createStarGroup(starsContainer, groupSize) {
    for (let i = 0; i < groupSize; i++) {
        const star = document.createElement("i");
        star.classList.add("fas", "fa-star", "star2"); // Updated class name

        // Set random color
        star.style.color = randomColor();

        // Set random position
        star.style.left = Math.random() * 100 + "vw";
        star.style.top = Math.random() * 100 + "vh";

        starsContainer.appendChild(star);
    }
}

function randomColor() {
    const colors = ['#ffffff', '#4b545f'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function generateRandomMovie() {
    // Clear previous movie and stars
    movieContainer.innerHTML = "";

    // Generate a random index
    const randomIndex = Math.floor(Math.random() * movies.length);

    // Create movie element
    const movie = document.createElement("div");
    movie.classList.add("movie");

    // Create movie title element
    const title = document.createElement("h3");
    title.textContent = movies[randomIndex].title;

    // Create movie poster element
    const poster = document.createElement("img");
    poster.src = movies[randomIndex].poster;

    // Append title and poster to movie element
    movie.appendChild(title);
    movie.appendChild(poster);

    // Append movie to movie container
    movieContainer.appendChild(movie);

    // Generate and append stars
    generateRandomStars();
}

