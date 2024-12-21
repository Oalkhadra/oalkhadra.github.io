document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript is loaded!'); // Debug line

    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    console.log('Found tab buttons:', tabButtons.length); // Debug line
    console.log('Found content sections:', tabContents.length); // Debug line

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            console.log('Button clicked:', button.getAttribute('data-tab')); // Debug line
            
            // Remove active class from all buttons and content
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            const targetContent = document.getElementById(tabId);
            
            if (targetContent) {
                targetContent.classList.add('active');
            } else {
                console.error('Could not find content for tab:', tabId); // Debug line
            }
        });
    });
});
