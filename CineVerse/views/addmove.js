document.addEventListener('DOMContentLoaded', function() {
    // Activate the "Add new movie" button
    const addMovieButton = document.querySelector('.btn2');
    const addMovieForm = document.getElementById('addMovieForm');
    const cancelButton = document.getElementById('cancelButton');
    const iframe = addMovieForm.querySelector('iframe');

    addMovieButton.addEventListener('click', function(event) {
        event.preventDefault();
        addMovieForm.style.display = 'block';
        cancelButton.style.display = 'inline-block';
    });

    cancelButton.addEventListener('click', function(event) {
        event.preventDefault();
        addMovieForm.style.display = 'none';
        cancelButton.style.display = 'none';
    });

    // Listen for form submission inside the iframe
    iframe.addEventListener('load', function() {
        const movieForm = iframe.contentDocument.getElementById('movieForm');
        movieForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(movieForm);
            const title = formData.get('title');
            const image = formData.get('image');
            const rating = formData.get('rating');
            // Here, you can submit the form data to your backend for processing
            console.log('Submitted:', title, image, rating);
            // Clear the form after submission
            movieForm.reset();
            // Hide the form
            addMovieForm.style.display = 'none';
            cancelButton.style.display = 'none';
        });
    });
});