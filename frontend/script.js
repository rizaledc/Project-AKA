document.getElementById('hokiForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form

    const nama = document.getElementById('nama').value;

    // Mengirim permintaan POST ke backend Flask
    fetch('http://localhost:5000/hoki', { // Ganti dengan URL backend Anda saat dihosting
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nama: nama })
    })
    .then(response => response.json())
    .then(data => {
        const hoki = data.hoki;
        const pesan = data.pesan;

        // Menampilkan hasil
        document.getElementById('hokiValue').innerText = `Hoki Anda adalah ${hoki}%`;
        document.getElementById('message').innerText = pesan;
        document.getElementById('result').style.display = 'block';

        // Menampilkan tombol keluar
        document.getElementById('exitButton').style.display = 'block';
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

// Menangani tombol keluar
document.getElementById('exitButton').addEventListener('click', function() {
    document.getElementById('result').style.display = 'none';
    document.getElementById('nama').value = '';
    this.style.display = 'none';
});