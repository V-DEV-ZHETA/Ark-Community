document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Pesan kamu telah terkirim. Terima kasih telah menghubungi Anime Riding Kalimantan!");
  this.reset();
});

const ctx = document.getElementById('arkRegionBarChart').getContext('2d');
const arkRegionBarChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Balikpapan', 'Samarinda', 'Sangatta', 'Banjarmasin', 'Pontianak'],
    datasets: [{
      label: 'Jumlah Member',
      data: [26, 7, 1, 1, 1],
      backgroundColor: [
        'rgba(94, 234, 212, 0.8)',   // modern teal
        'rgba(129, 140, 248, 0.8)',  // modern indigo
        'rgba(253, 186, 116, 0.8)',  // modern orange
        'rgba(192, 132, 252, 0.8)',  // modern violet
        'rgba(248, 113, 113, 0.8)'   // modern rose
      ],
      borderColor: [
        'rgba(45, 212, 191, 1)',
        'rgba(99, 102, 241, 1)',
        'rgba(251, 146, 60, 1)',
        'rgba(168, 85, 247, 1)',
        'rgba(239, 68, 68, 1)'
      ],
      borderWidth: 1.5
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: ''
        },
        ticks: {
          stepSize: 5
        }
      },
      x: {
        title: {
          display: true,
          text: ''
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const total = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
            const value = context.parsed.y;
            const percentage = ((value / total) * 100).toFixed(2);
            return `${context.label}: ${value} (${percentage}%)`;
          }
        }
      }
    }
  }
});



