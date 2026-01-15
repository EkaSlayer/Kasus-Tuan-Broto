# Misteri Warisan Tuan Broto

## 🕵️‍♂️ Skenario
Tuan Broto meninggal dunia secara mendadak pada pukul 23.40. Dokumen warisannya menjadi rebutan. Ada dua saksi kunci yang melihat isi dokumen tersebut sesaat setelah kematiannya, namun mereka melaporkan hal yang berbeda:

- **Saksi 1 (Pengacara):** Mengklaim dia menambahkan nama **"Budi"** ke dalam daftar ahli waris karena amanat lisan terakhir.
- **Saksi 2 (Detektif):** Mengklaim dia mencoret nama **"Andi"** karena dicurigai memalsukan identitas, sehingga hanya menyisakan **"Maria"**.

### Masalah Teknis
Sistem pencatatan warisan saat ini mengalami masalah **Concurrency** dan **Race Condition**.
Ketika Pengacara dan Detektif mencoba melakukan perubahan data secara hampir bersamaan, sistem gagal menangani keduanya dengan benar. Seringkali, salah satu perubahan hilang (Stale Data), atau data menjadi tidak konsisten.

## 🎯 Misi Anda
Anda diminta untuk memperbaiki sistem backend agar dapat menangani perubahan data dari kedua saksi tersebut tanpa ada yang hilang, menjaga **Data Integrity**.

1.  **Analisa Bug:** Jalankan simulasi untuk melihat bagaimana data menjadi kacau saat kedua saksi beraksi bersamaan.
2.  **Perbaiki Backend:** Ubah logika di `server.js` untuk menangani concurrency. Anda bebas menggunakan teknik locking, antrian, versioning, atau struktur data yang lebih baik.
3.  **Audit Trail:** Pastikan sistem mencatat "Sejarah Perubahan" sehingga jelas bahwa Andi pernah ada lalu dicoret, dan Budi ditambahkan.

## 🏆 Goals (The Secret Portal)
Di halaman depan aplikasi, terdapat sebuah **"Secret Portal"** yang terkunci.
Portal ini akan terbuka secara otomatis JIKA sistem mendeteksi integritas data terjaga:
- **Maria** ada di dalam daftar.
- **Budi** berhasil masuk ke daftar.
- **Andi** tidak ada di daftar aktif (tapi sejarah pencoretannya diketahui).

Jika berhasil, Anda akan mendapatkan akses ke hadiah tersembunyi!

## 🚀 Cara Menjalankan

### Backend
```bash
cd backend
npm install
node server.js
```
Server berjalan di `http://localhost:3001`

### Frontend
```bash
cd frontend
npm install
npm run dev
```
Aplikasi berjalan di `http://localhost:5173`

Selamat memecahkan misteri! 🧐

