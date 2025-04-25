# 📄 Functional Testing Report

## 👥 Anggota Kelompok
| Nama | NIM |
|------|-----|
| M. Sunandi | 20221310071 |
| Muhammad Supyan | 20221310078 |
| Santi Febrianti | 20221310084 |
| Udan | 20221310088 |

---

## ✅ Ringkasan
Laporan ini mencakup pengujian manual terhadap fungsionalitas utama dari aplikasi login dan registrasi berdasarkan file `login.html`, `register.html`, dan `script.js`.

---

## 🔍 Skenario Pengujian

| No | Fitur yang Diuji | Skenario | Hasil | Catatan |
|----|-------------------|----------|-------|---------|
| 1  | Login Valid       | Isi email & password benar (>6 char), klik Login | PASS | - |
| 2  | Email Kosong (Login) | Biarkan email kosong, isi password, klik Login | PASS | Form tidak terkirim |
| 3  | Password Pendek (Login) | Isi email, password < 6 karakter, klik Login | PASS | Validasi HTML aktif |
| 4  | Registrasi Valid  | Isi semua field dengan benar, klik Daftar | PASS | - |
| 5  | Email Kosong (Register) | Kosongkan email, isi lainnya, klik Daftar | PASS | Validasi HTML aktif |
| 6  | Password Pendek (Register) | Isi email & password < 6 char, klik Daftar | PASS | Validasi HTML aktif |
| 7  | Password Tidak Cocok | Isi password & ulangi password beda, klik Daftar | PASS | Validasi dari script.js berjalan |
| 8  | Tombol Cancel     | Klik tombol Cancel di form | PASS | Form direset menggunakan `cancelForm()` |
| 9  | Navigasi Halaman | Klik link ke login/register di bawah form | PASS | Navigasi halaman berhasil |

---

## 🐞 Catatan Bug dan Solusi

Saat pengujian dilakukan, tidak ditemukan bug yang menyebabkan kegagalan fungsional. Validasi form bekerja baik dari sisi HTML dan JavaScript. 

---

## 📁 Lokasi File
- `login.html`
- `register.html`
- `script.js`
