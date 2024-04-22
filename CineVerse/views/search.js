// Function to handle search functionality
function handleSearch() {
    const searchInput = document.getElementById("searchInput");
    const searchTerm = searchInput.value.toLowerCase();
    const boxes = document.querySelectorAll(".box");
    let found = false; // Variable to track if any movie is found

    boxes.forEach(box => {
        const title = box.querySelector(".content h3").textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            box.style.display = "block";
            found = true; // Movie found
        } else {
            box.style.display = "none";
        }
    });

    const searchResults = document.getElementById("searchResults");
    if (!found && searchTerm !== "") {
        // If no movie is found and search term is not empty, display a message
        searchResults.textContent = "No movie found with that title";
    } else {
        // If movie(s) are found or search term is empty, remove any existing message
        searchResults.textContent = "";
    }
}

// Attach event listener to search input
document.getElementById("searchInput").addEventListener("input", handleSearch);
