const ctx = document.getElementById('chartProduksi').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'],
    datasets: [{
      label: 'Produksi (Ton)',
      data: [800, 950, 1100, 900, 1200, 1000],
      backgroundColor: '#198754'
    }]
  }
});
