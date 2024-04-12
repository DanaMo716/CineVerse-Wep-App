 // Function to handle search functionality
 function handleSearch() {
    const searchInput = document.getElementById("searchInput");
    const searchTerm = searchInput.value.toLowerCase();
    const boxes = document.querySelectorAll(".box");

    boxes.forEach(box => {
        const title = box.querySelector(".content h3").textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            box.style.display = "block";
        } else {
            box.style.display = "none";
        }
    });
}

// Attach event listener to search input
document.getElementById("searchInput").addEventListener("input", handleSearch);


