const ctx = document.getElementById('memberChart').getContext('2d');

const allData = {
  all: {
    labels: ["Samarinda", "Balikpapan", "Bontang", "Pontianak"],
    values: [60, 40, 25, 15]
  },
  Kaltim: {
    labels: ["Samarinda", "Balikpapan", "Bontang"],
    values: [60, 40, 25]
  },
  Kalbar: {
    labels: ["Pontianak"],
    values: [15]
  }
};

let chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: allData.all.labels,
    datasets: [{
      label: 'Jumlah Member',
      data: allData.all.values,
      backgroundColor: '#00A676',
      borderRadius: 6
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Jumlah'
        }
      }
    }
  }
});

// Filter logic
document.getElementById("regionFilter").addEventListener("change", function () {
  const selected = this.value;
  chart.data.labels = allData[selected].labels;
  chart.data.datasets[0].data = allData[selected].values;
  chart.update();
});
