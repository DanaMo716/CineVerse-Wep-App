document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('input[type="search"]');
    const details = document.querySelectorAll('details');
    const searchResults = document.getElementById('searchResults');

    searchInput.addEventListener('input', function (event) {
        const searchTerm = event.target.value.trim().toLowerCase();
        let found = false; // Variable to track if any FAQ is found

        details.forEach(detail => {
            const summaryText = detail.querySelector('summary').innerText.toLowerCase();
            const contentText = detail.querySelector('div').innerText.toLowerCase();
            if (summaryText.includes(searchTerm) || contentText.includes(searchTerm)) {
                detail.removeAttribute('hidden');
                found = true; // FAQ found
            } else {
                detail.setAttribute('hidden', true);
            }
        });

        if (!found && searchTerm !== '') {
            // If no FAQ is found and search term is not empty, display the message
            searchResults.textContent = 'No Frequently Asked Question found';
        } else {
            // If FAQ(s) are found or search term is empty, remove any existing message
            searchResults.textContent = '';
        }
    });
});
