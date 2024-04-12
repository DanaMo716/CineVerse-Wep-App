
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('input[type="search"]');
    const details = document.querySelectorAll('details');

    searchInput.addEventListener('input', function (event) {
        const searchTerm = event.target.value.toLowerCase();
        details.forEach(detail => {
            const summaryText = detail.querySelector('summary').innerText.toLowerCase();
            const contentText = detail.querySelector('div').innerText.toLowerCase();
            if (summaryText.includes(searchTerm) || contentText.includes(searchTerm)) {
                detail.removeAttribute('hidden');
            } else {
                detail.setAttribute('hidden', true);
            }
        });
    });
});

