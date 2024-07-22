document.addEventListener("DOMContentLoaded", function() {
    // Spinner auto off
    const loader = document.getElementById("loader");
    setTimeout(() => {
        loader.style.display = "none";
    }, 2000);

    // Visitor count update (Example: Fetching from an API)
    const visitorCountElement = document.getElementById("visitor-count");

    // This would be replaced with a real API call
    fetch('https://api.example.com/visitor-count')
        .then(response => response.json())
        .then(data => {
            visitorCountElement.textContent = data.count;
        })
        .catch(error => {
            console.error('Error fetching visitor count:', error);
        });
});
