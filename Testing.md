# 📄 Functional Testing Report

## 📝 Nama Proyek
**Sistem Login dan Registrasi Pengguna**

---

## 👥 Anggota Kelompok
| Nama              | NIM           |
|-------------------|---------------|
| M. Sunandi        | 20221310071   |
| Muhammad Supyan   | 20221310078   |
| Santi Febrianti   | 20221310084   |
| Udan              | 20221310088   |

---

## 🎯 Tujuan Pengujian
Pengujian ini bertujuan untuk memastikan bahwa sistem login dan registrasi berfungsi sesuai dengan yang diharapkan, dengan menguji validasi input pengguna, keamanan autentikasi, dan transisi antar halaman. Pengujian ini melibatkan dua fitur utama: login dan registrasi.

---

## ✅ Ringkasan Sistem yang Diuji
Sistem yang diuji adalah aplikasi web dengan dua halaman utama: halaman login dan halaman registrasi. Aplikasi ini menggunakan validasi input berbasis HTML dan JavaScript untuk memastikan bahwa pengguna dapat melakukan login dan registrasi dengan benar atau menerima pesan kesalahan jika ada masalah pada data input.

---

## 🔍 Skenario Pengujian

| No | Fitur yang Diuji         | Skenario                                               | Hasil | Catatan                                   |
|----|--------------------------|--------------------------------------------------------|-------|-------------------------------------------|
| 1  | Login Valid              | Isi email & password benar (>6 char), klik Login      | PASS  | -                                         |
| 2  | Email Kosong (Login)     | Biarkan email kosong, isi password, klik Login        | PASS  | Form tidak terkirim                       |
| 3  | Password Pendek (Login)  | Isi email, password < 6 karakter, klik Login          | PASS  | Validasi HTML aktif                       |
| 4  | Registrasi Valid         | Isi semua field dengan benar, klik Daftar             | PASS  | -                                         |
| 5  | Email Kosong (Register)  | Kosongkan email, isi lainnya, klik Daftar             | PASS  | Validasi HTML aktif                       |
| 6  | Password Pendek (Register)| Isi email & password < 6 char, klik Daftar            | PASS  | Validasi HTML aktif                       |
| 7  | Password Tidak Cocok     | Isi password & ulangi password beda, klik Daftar      | PASS  | Validasi dari script.js berjalan          |
| 8  | Tombol Cancel            | Klik tombol Cancel di form                            | PASS  | Form direset menggunakan `cancelForm()`   |
| 9  | Navigasi Halaman         | Klik link ke login/register di bawah form            | PASS  | Navigasi halaman berhasil                |

---

## 🧑‍💻 Tabel Pengukuran User Characteristic Berdasarkan Fungsional

| No | Fitur                    | Functional Requirement               | Login       | Logout    |
|----|--------------------------|--------------------------------------|-------------|-----------|
| 1  | Autentikasi Pengguna      | Pengguna harus dapat login dengan email dan password yang benar | Validasi Berhasil | -         |
| 2  | Form Validasi             | Formulir login dan registrasi harus memvalidasi input dengan benar | Berhasil   | -         |
| 3  | Keamanan Password         | Password harus memiliki panjang minimal 6 karakter | Berhasil   | -         |
| 4  | Navigasi Halaman          | Pengguna dapat berpindah antar halaman dengan mudah | Berhasil   | -         |

---

## 💻 Deskripsi Kebutuhan Fungsional
1. **Login**: Pengguna harus dapat masuk ke aplikasi menggunakan email dan password yang valid.
2. **Registrasi**: Pengguna baru dapat mendaftar dengan menyediakan email, password, dan konfirmasi password yang sesuai.
3. **Validasi Input**: Sistem harus memvalidasi input email dan password sesuai dengan kriteria yang ditetapkan, seperti panjang password minimal 6 karakter.
4. **Navigasi**: Pengguna harus dapat beralih antara halaman login dan registrasi dengan mudah.

---

## 📝 Kesimpulan
Berdasarkan hasil pengujian, seluruh fitur fungsional dari sistem login dan registrasi berjalan dengan baik. Tidak ditemukan bug yang signifikan, dan semua validasi input serta navigasi antar halaman berfungsi sesuai dengan spesifikasi yang diharapkan. Sistem dapat menangani kasus input yang tidak valid dengan memberikan umpan balik yang jelas bagi pengguna.

---

## 📁 Lokasi File
- `login.html`
- `register.html`
- `script.js`
"""

