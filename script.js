document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Pesan kamu telah terkirim. Terima kasih telah menghubungi Anime Riding Kalimantan!");
  this.reset();
});

new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: ["Sangatta", "Balikpapan", "Samarinda", "Banjarmasin", "Pontianak"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [1,26,6,1,1]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
      }
    }
});



