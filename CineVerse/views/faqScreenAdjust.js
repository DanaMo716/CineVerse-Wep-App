const faqContainer = document.getElementById('faqContainer');
const footer = document.querySelector('footer');

// Function to adjust the height of faqContainer based on FAQs visibility
function adjustPageHeight() {
    const faqsHeight = document.querySelector('.faq').offsetHeight;
    faqContainer.style.height = faqsHeight + 'px';
}

// Initially adjust the page height
adjustPageHeight();

// Add event listener to details elements to adjust page height when toggled
const detailsElements = document.querySelectorAll('details');
detailsElements.forEach((details) => {
    details.addEventListener('toggle', () => {
        adjustPageHeight();
    });
});