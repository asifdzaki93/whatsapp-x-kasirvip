## Alat Interaktif CLI untuk Menginstal dan Memperbarui Whaticket X KasirVIP

[![FOSSA Status](https://app.fossa.com/api/projects/custom%2B21084%2Fgithub.com%2Fcanove%2Fwhaticket.svg?type=shield)](https://app.fossa.com/projects/custom%2B21084%2Fgithub.com%2Fcanove%2Fwhaticket?ref=badge_shield)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=canove_whaticket&metric=alert_status)](https://sonarcloud.io/dashboard?id=canove_whaticket)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=canove_whaticket&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=canove_whaticket)

# Whaticket X KasirVIP

**CATATAN**: Versi baru dari whatsapp-web.js memerlukan Node 14. Tingkatkan instalasi Anda untuk terus menggunakannya.

Sebuah Sistem Tiket yang _sangat sederhana_ berbasis pesan WhatsApp.

Backend menggunakan [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js) untuk menerima dan mengirim pesan WhatsApp, membuat tiket dari pesan tersebut, dan menyimpan semuanya dalam database MySQL.

Frontend adalah aplikasi _chat_ berfitur lengkap multi-pengguna yang menggunakan react-create-app dan Material UI, berkomunikasi dengan backend menggunakan REST API dan Websockets. Ini memungkinkan Anda berinteraksi dengan kontak, tiket, mengirim dan menerima pesan WhatsApp.

**CATATAN**: Saya tidak dapat menjamin bahwa Anda tidak akan diblokir dengan menggunakan metode ini, meskipun ini telah berhasil untuk saya. WhatsApp tidak mengizinkan bot atau klien tidak resmi pada platform mereka, jadi ini tidak boleh dianggap sepenuhnya aman.

## Bagaimana cara kerjanya?

Setiap kali ada pesan baru yang diterima di WhatsApp yang terkait, tiket baru akan dibuat. Kemudian, tiket ini dapat dijangkau dalam _antrian_ di halaman _Tickets_, di mana Anda dapat menugaskan tiket ke diri Anda sendiri dengan _menerima_ nya, merespons pesan tiket, dan akhirnya _menyelesaikan_ nya.

Pesan-pesan berikutnya dari kontak yang sama akan terkait dengan tiket **terbuka/berjalan** pertama yang ditemukan.

Jika kontak mengirim pesan baru dalam kurun waktu kurang dari 2 jam, dan tidak ada tiket dari kontak ini dengan status **tertunda/terbuka**, tiket **tertutup** terbaru akan dibuka kembali, bukan menciptakan yang baru.

## Tangkapan Layar

![](https://github.com/asifdzaki93/whatsapp-x-kasirvip/raw/master/images/whaticket-queues.gif)
<img src="https://raw.githubusercontent.com/canove/whaticket/master/images/chat2.png" width="350"> <img src="https://raw.githubusercontent.com/canove/whaticket/master/images/chat3.png" width="350"> <img src="https://raw.githubusercontent.com/canove/whaticket/master/images/multiple-whatsapps2.png" width="350"> <img src="https://raw.githubusercontent.com/canove/whaticket/master/images/contacts1.png" width="350">

## Fitur

- Dapat digunakan oleh beberapa pengguna untuk mengobrol dengan Nomor WhatsApp yang sama ✅
- Terhubung ke beberapa akun WhatsApp dan menerima semua pesan di satu tempat ✅ 🆕
- Membuat dan mengobrol dengan kontak baru tanpa menyentuh ponsel ✅
- Mengirim dan menerima pesan ✅
- Mengirim media (gambar/audio/dokumen) ✅
- Menerima media (gambar/audio/video/dokumen) ✅


## Instalasi dan Penggunaan (Linux Ubuntu - Menggunakan installer yang saya sediakan)

https://github.com/asifdzaki93/whaticket-installer


## Instalasi untuk Server Lokal di Windows dengan XAMPP
Tentu bisa! Berikut ini adalah panduan instalasi untuk menjalankan aplikasi Whaticket pada server lokal Windows dengan XAMPP:

**Persyaratan:**

1. Instal Node.js: [Tautan Download](https://nodejs.org/en/download/) pilih versi 14
2. Instal XAMPP: [Tautan Download](https://www.apachefriends.org/download.html)

**Langkah-langkah:**

1. Buka XAMPP, aktifkan layanan Apache dan MySQL, dan buat database MySQL kosong (catat nama database yang dibuat).

2. Buka CMD.

3. Buat direktori dengan CMD:

```bash
cd C:\xampp\htdocs\
git clone https://github.com/asifdzaki93/whatsapp-x-kasirvip.git
```

4. Masuk ke folder backend dengan CMD dan salin ".env.example" dan ganti namanya menjadi ".env":

```bash
cd C:\xampp\htdocs\whaticket\backend\
copy .env.example .env
```

5. Buka file .env yang disalin di folder backend menggunakan text editor (misalnya Notepad++), dan edit seperti berikut:

```bash
NODE_ENV=
BACKEND_URL=http://192.168.1.19      # (Ganti dengan IP yang ditetapkan untuk PC server Anda)
FRONTEND_URL=http://192.168.1.19:3000      # (Ganti dengan IP yang ditetapkan untuk PC server Anda)
PROXY_PORT=8080
PORT=8080

DB_DIALECT=
DB_HOST=localhost
DB_USER=root
DB_PASS=
DB_NAME=whatsappnew      # (Ganti dengan nama database yang dibuat di PHPMyAdmin pada PC server Anda)

JWT_SECRET=3123123213123
JWT_REFRESH_SECRET=75756756756

IO_REDIS_SERVER=
IO_REDIS_PORT=
```

6. Kembali ke CMD di folder backend, dan ketik perintah-perintah berikut satu per satu:

```bash
npm install
npm run build
npx sequelize db:migrate
npx sequelize db:seed:all
npm start
```

7. Setup backend selesai. Sekarang, buka CMD baru di folder frontend:

```bash
cd C:\xampp\htdocs\whaticket\frontend\
copy .env.example .env
```

8. Buka file .env yang disalin di folder frontend menggunakan text editor (misalnya Notepad++), dan edit seperti berikut:

```bash
REACT_APP_BACKEND_URL=http://192.168.1.19:8080/      # (Ganti dengan IP yang ditetapkan untuk PC server Anda)
```

9. Kembali ke CMD di folder frontend, dan ketik perintah-perintah berikut satu per satu:

```bash
npm install
npm run build
npm start
```

10. Setup frontend selesai. Sekarang, buka browser dan masuk ke URL frontend: http://192.168.1.19:3000      # (Ganti dengan IP yang ditetapkan untuk PC server Anda)

**Memulai Server di Masa Mendatang:**

1. Buka dan aktifkan layanan XAMPP.

2. Buka CMD dan ketik:

```bash
cd C:\xampp\htdocs\whaticket\backend\
npm start
```

3. Buka CMD baru dan ketik:

```bash
cd C:\xampp\htdocs\whaticket\frontend\
npm start
```

Terima kasih kepada Canove atas pembuatan Whaticket!



## Instalasi dan Penggunaan (Linux Ubuntu - Pengembangan)

Buat Database MySQL menggunakan docker:
_Catatan_: ganti MYSQL_DATABASE, MYSQL_PASSWORD, MYSQL_USER, dan

 MYSQL_ROOT_PASSWORD sesuai kebutuhan.

```bash
docker run --name whaticketdb -e MYSQL_ROOT_PASSWORD=strongpassword -e MYSQL_DATABASE=whaticket -e MYSQL_USER=whaticket -e MYSQL_PASSWORD=whaticket --restart always -p 3306:3306 -d mariadb:latest --character-set-server=utf8mb4 --collation-server=utf8mb4_bin

# Atau jalankan menggunakan `docker-compose` seperti berikut
# Sebelumnya, salin .env.example ke .env terlebih dahulu dan atur variabel-variabel di dalam file tersebut.
docker-compose up -d mysql

# Untuk mengelola database MySQL dengan mudah menggunakan phpMyAdmin.
# Ini akan berjalan pada port 9000 secara default, tetapi dapat diubah dalam file .env menggunakan `PMA_PORT`.
docker-compose -f docker-compose.phpmyadmin.yaml up -d
```

Instal dependensi untuk puppeteer:

```bash
sudo apt-get install -y libxshmfence-dev libgbm-dev wget unzip fontconfig locales gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils
```

Salin repositori ini:

```bash
git clone https://github.com/asifdzaki93/whatsapp-x-kasirvip/ whaticket
```

Masuk ke folder backend dan buat file .env:

```bash
cp .env.example .env
nano .env
```

Isi file `.env` dengan variabel lingkungan:

```bash
NODE_ENV=DEVELOPMENT      # membantu dalam proses debug
BACKEND_URL=http://localhost
FRONTEND_URL=https://localhost:3000
PROXY_PORT=8080
PORT=8080

DB_HOST=                  #IP host database MySQL, biasanya localhost
DB_DIALECT=
DB_USER=
DB_PASS=
DB_NAME=

JWT_SECRET=3123123213123
JWT_REFRESH_SECRET=75756756756
```

Instal dependensi backend, bangun aplikasi, jalankan migrasi dan seed:

```bash
npm install
npm run build
npx sequelize db:migrate
npx sequelize db:seed:all
```

Jalankan backend:

```bash
npm start
```

Buka terminal kedua, masuk ke folder frontend, dan buat file .env:

```bash
nano .env
REACT_APP_BACKEND_URL = http://localhost:8080/ # Ganti dengan URL backend yang telah dikonfigurasi sebelumnya.
```

Jalankan aplikasi frontend:

```bash
npm start
```

- Buka http://your_server_ip:3000/signup
- Buat pengguna dan masuk dengan akun tersebut.
- Di bagian samping, buka halaman _Connections_ dan buat koneksi WhatsApp pertama Anda.
- Tunggu tombol QR CODE muncul, klik tombol tersebut dan baca kode QR.
- Selesai. Setiap pesan yang diterima oleh nomor WhatsApp yang disinkronkan Anda akan muncul dalam Daftar Tiket.

## Instalasi Produksi Dasar

### Menggunakan VPS Ubuntu 20.04

Semua instruksi di bawah ini mengasumsikan Anda TIDAK menjalankan sebagai root, karena akan menyebabkan kesalahan di puppeteer. Jadi mari buat pengguna baru dan memberikan izin sudo padanya:

```bash
adduser deploy
usermod -aG sudo deploy
```

Sekarang kita dapat masuk dengan pengguna baru ini:

```bash
su deploy
```

Anda akan memerlukan dua subdomain yang mengarah ke alamat IP VPS Anda untuk mengikuti instruksi ini. Kami akan menggunakan `myapp.mydomain.com` untuk frontend dan `api.mydomain.com` untuk backend dalam contoh berikut.

Perbarui semua paket sistem:

```bash
sudo apt update && sudo apt upgrade
```

Instal node, dan pastikan perintah node tersedia:

```bash
curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs
node -v
npm -v
```

Instal docker dan tambahkan pengguna Anda ke grup docker:

```bash
sudo apt install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"
sudo apt update
sudo apt install docker-ce
sudo systemctl status docker
sudo usermod -aG docker ${USER}
su - ${USER}
```

Buat Database MySQL menggunakan docker:
_Catatan_: ganti MYSQL_DATABASE, MYSQL_PASSWORD, MYSQL_USER, dan MYSQL_ROOT_PASSWORD sesuai kebutuhan.

```bash
docker run --name whaticketdb -e MYSQL_ROOT_PASSWORD=strongpassword -e MYSQL_DATABASE=whaticket -e MYSQL_USER=whaticket -e MYSQL_PASSWORD=whaticket --restart always -p 3306:3306 -d mariadb:latest --character-set-server=utf8mb4 --collation-server=utf8mb4_bin

# Atau jalankan menggunakan `docker-compose` seperti berikut
# Sebelumnya, salin .env.example ke .env terlebih dahulu dan atur variabel-variabel di dalam file tersebut.
docker-compose up -d mysql

# Untuk mengelola database MySQL dengan mudah menggunakan phpMyAdmin. 
# Ini akan berjalan pada port 9000 secara default, tet

api dapat diubah dalam file .env menggunakan `PMA_PORT`
docker-compose -f docker-compose.phpmyadmin.yaml up -d
```

Salin repositori ini:

```bash
cd ~
git clone https://github.com/asifdzaki93/whatsapp-x-kasirvip whaticket
```

Buat file .env untuk backend dan isi dengan detailnya:

```bash
cp whaticket/backend/.env.example whaticket/backend/.env
nano whaticket/backend/.env
```

```bash
NODE_ENV=
BACKEND_URL=https://api.mydomain.com      # GUNAKAN HTTPS DI SINI, KAMI AKAN MENAMBAHKAN SSL SELANJUTNYA
FRONTEND_URL=https://myapp.mydomain.com   # GUNAKAN HTTPS DI SINI, KAMI AKAN MENAMBAHKAN SSL SELANJUTNYA, TERKAIT CORS!
PROXY_PORT=443                            # GUNAKAN PORT NGINX REVERSE PROXY DI SINI, KAMI AKAN MENGATURNYA SELANJUTNYA
PORT=8080

DB_HOST=localhost
DB_DIALECT=
DB_USER=
DB_PASS=
DB_NAME=

JWT_SECRET=3123123213123
JWT_REFRESH_SECRET=75756756756
```

Instal dependensi puppeteer:

```bash
sudo apt-get install -y libxshmfence-dev libgbm-dev wget unzip fontconfig locales gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils
```

Instal dependensi backend, bangun aplikasi, jalankan migrasi, dan seed:

```bash
cd whaticket/backend
npm install
npm run build
npx sequelize db:migrate
npx sequelize db:seed
```

Jalankan backend dengan pm2, dan simpan daftar proses pm2 untuk dijalankan otomatis setelah reboot:

```bash
sudo npm install -g pm2
pm2 start dist/server.js --name whaticket-backend
pm2 save
```

Untuk memeriksa apakah pm2 berjalan, jalankan `pm2 list`, hasilnya seharusnya seperti ini:

```bash
deploy@ubuntu-whats:~$ pm2 list
┌─────┬─────────────────────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────────┐
│ id  │ name                    │ namespace   │ version │ mode    │ pid      │ uptime │ .    │ status    │ cpu      │ mem      │ user     │ watching │
├─────┼─────────────────────────┼─────────────┼─────────┼─────────┼──────────┼────────┼──────┼───────────┼──────────┼──────────┼──────────┼──────────┤
│ 1   │ whaticket-frontend      │ default     │ 0.1.0   │ fork    │ 179249   │ 12D    │ 0    │ online    │ 0.3%     │ 50.2mb   │ deploy   │ disabled │
│ 6   │ whaticket-backend       │ default     │ 1.0.0   │ fork    │ 179253   │ 12D    │ 15   │ online    │ 0.3%     │ 118.5mb  │ deploy   │ disabled │
└─────┴─────────────────────────┴─────────────┴─────────┴─────────┴──────────┴────────┴──────┴───────────┴──────────┴──────────┴──────────┴──────────┘

```

Instal nginx:

```bash
sudo apt install nginx
```

Hapus situs default nginx:

```bash
sudo rm /etc/nginx/sites-enabled/default
```

Buat situs nginx baru untuk aplikasi frontend:

```bash
sudo nano /etc/nginx/sites-available/whaticket-frontend
```

Edit dan isi dengan informasi berikut, mengganti `server_name` sesuai dengan yang sesuai dengan `myapp.mydomain.com` Anda:

```bash
server {
  server_name myapp.mydomain.com;

  location / {
    proxy_pass http://127.0.0.1:3333;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_cache_bypass $http_upgrade;
  }
}
```

Buat yang lain untuk backend api, mengganti `server_name` sesuai dengan yang sesuai dengan `api.mydomain.com`, dan `proxy_pass` sesuai dengan URL server node backend localhost Anda:

```bash
sudo cp /etc/nginx/sites-available/whaticket-frontend /etc/nginx/sites-available/whaticket-backend
sudo nano /etc/nginx/sites-available/whaticket-backend
```

```bash
server {
  server_name api.mydomain.com;

  location / {
    proxy_pass http://127.0.0.1:8080;
    ......
}
```

Buat tautan simbolik untuk mengaktifkan situs nginx:

```bash
sudo ln -s /etc/nginx/sites-available/whaticket-frontend /etc/nginx/sites-enabled
sudo ln -s /etc/nginx/sites-available/whaticket-backend /etc/nginx/sites-enabled
```

Secara default, nginx membatasi ukuran body ke 1MB, yang tidak cukup untuk beberapa unggahan media. Mari ubah menjadi 20MB dengan menambahkan baris baru ke file konfigurasi:

```bash
sudo nano /etc/nginx/nginx.conf
...
http {
    ...
    client_max_body_size 20M; # ATASI UNGGAHAN LEBIH BESAR
}
```

Uji konfigurasi nginx dan mulai ulang server:

```bash
sudo nginx -t
sudo service nginx restart
```

Sekarang, aktifkan SSL (https) pada situs Anda untuk menggunakan semua fitur aplikasi seperti notifikasi dan pengiriman pesan

 media.

Aktifkan modul SSL:

```bash
sudo a2enmod ssl
```

Buat direktori untuk menyimpan sertifikat SSL:

```bash
sudo mkdir /etc/nginx/ssl
```

Buat sertifikat SSL (Anda dapat menggunakan sertifikat yang ada atau gunakan Let's Encrypt untuk mendapatkan sertifikat gratis):

```bash
sudo nano /etc/nginx/sites-available/whaticket-frontend
```

Tambahkan konfigurasi SSL ke situs frontend Anda seperti berikut:

```bash
server {
    server_name myapp.mydomain.com;

    ssl on;
    ssl_certificate /etc/nginx/ssl/fullchain.pem;  # Path to your SSL certificate
    ssl_certificate_key /etc/nginx/ssl/privkey.pem;  # Path to your SSL private key

    location / {
        ...
    }
}
```

Aktifkan situs SSL dan restart Nginx:

```bash
sudo ln -s /etc/nginx/sites-available/whaticket-frontend /etc/nginx/sites-enabled
sudo ln -s /etc/nginx/sites-available/whaticket-backend /etc/nginx/sites-enabled
sudo nginx -t
sudo service nginx restart
```

Setelah beberapa saat, aplikasi harus berjalan dengan baik, dan Anda dapat mengaksesnya melalui https://myapp.mydomain.com untuk frontend dan https://api.mydomain.com untuk backend.

Jika ada kesalahan atau masalah dalam proses instalasi atau di atas, Anda dapat merujuk ke log Nginx (`/var/log/nginx/error.log`) dan log aplikasi (`whaticket/backend/logs/combined.log`) untuk informasi lebih lanjut tentang apa yang salah.

Sekarang, Anda harus dapat menggunakan aplikasi Whaticket melalui frontend yang Anda pasang dan menghubungkannya dengan nomor WhatsApp melalui backend yang dijalankan di server Anda.

Pastikan untuk mengamankan server Anda dengan pengaturan keamanan tambahan, seperti firewall dan langganan keamanan reguler. Juga, perhatikan bahwa WhatsApp tidak mendukung secara resmi penggunaan bot atau klien tidak resmi, sehingga penggunaan aplikasi ini mungkin melanggar ketentuan layanan WhatsApp. Gunakan dengan pertimbangan dan tanggung jawab.
