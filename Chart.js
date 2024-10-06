// Load Chart.js for a simple solar activity graph
document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('solarChart').getContext('2d');
    const solarChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['May 1', 'May 5', 'May 10', 'May 15', 'May 20', 'May 25'],
            datasets: [{
                label: 'Solar Flares',
                data: [3, 7, 5, 10, 12, 8],
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});