document.addEventListener("DOMContentLoaded", function() {
    const starsContainers = document.querySelectorAll(".rating");

    starsContainers.forEach(function(ratingContainer) {
        ratingContainer.setAttribute("data-rating", 0);
        updateRating(ratingContainer);
    });

    starsContainers.forEach(function(ratingContainer) {
        const stars = ratingContainer.querySelectorAll(".star");

        stars.forEach(function(star, index) {
            star.addEventListener("mouseover", function() {
                const ratingValue = index + 1;
                ratingContainer.setAttribute("data-hover-rating", ratingValue);
                updateRating(ratingContainer);
            });

            star.addEventListener("mouseleave", function() {
                ratingContainer.removeAttribute("data-hover-rating");
                updateRating(ratingContainer);
            });

            star.addEventListener("click", function() {
                const ratingValue = index + 1;
                ratingContainer.setAttribute("data-rating", ratingValue);
                updateRating(ratingContainer);
            });

            star.addEventListener("dblclick", function() {
                ratingContainer.setAttribute("data-rating", 0);
                updateRating(ratingContainer);
            });

            star.addEventListener("keydown", function(event) {
                if (event.code === "Enter" || event.code === "Space") {
                    const ratingValue = index + 1;
                    ratingContainer.setAttribute("data-rating", ratingValue);
                    updateRating(ratingContainer);
                }
            });
        });
    });

    function updateRating(ratingContainer) {
        const ratingValue = parseInt(ratingContainer.getAttribute("data-rating"));
        const hoverRatingValue = parseInt(ratingContainer.getAttribute("data-hover-rating"));
        const stars = ratingContainer.querySelectorAll(".star");

        stars.forEach(function(star, index) {
            const filled = hoverRatingValue ? index < hoverRatingValue : index < ratingValue;
            star.classList.toggle("filled", filled);
            star.setAttribute("aria-checked", index < ratingValue);
        });
    }
});