// Fetch data from the API and populate the UI
fetch('https://api.coalitiontechnologies.com/patient/jessica-taylor')
  .then(response => response.json())
  .then(data => {
    populateChart(data);
  })
  .catch(error => console.error('Error fetching data:', error));

// Populate the blood pressure chart
function populateChart(data) {
  const ctx = document.getElementById('bloodPressureChart').getContext('2d');
  const bloodPressureChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Oct 2023', 'Nov 2023', 'Dec 2023', 'Jan 2024', 'Feb 2024', 'Mar 2024'],
      datasets: [
        {
          label: 'Systolic',
          data: [160, 150, 155, 145, 170, 160],
          borderColor: '#ff6384',
          tension: 0.3,
        },
        {
          label: 'Diastolic',
          data: [80, 75, 78, 72, 85, 78],
          borderColor: '#36a2eb',
          tension: 0.3,
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
        }
      }
    }
  });
}
