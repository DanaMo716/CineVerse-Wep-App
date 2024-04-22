const mysteryBox = document.getElementById("mystery-box");
const boxLid = document.getElementById("box-lid");

mysteryBox.addEventListener("click", toggleBox);

function toggleBox() {
    if (boxLid.style.transform === "scaleY(0)") {
        // Open the box
        boxLid.style.transform = "scaleY(1)";
    } else {
        // Close the box
        boxLid.style.transform = "scaleY(0)";
    }
}

// Redirect to random page when the box is clicked
mysteryBox.addEventListener("click", redirectToRandomPage);

function redirectToRandomPage() {
    window.location.href = "random.html";
}