# Bookshelf API Backend 📚

Bookshelf API adalah layanan web service berbasis RESTful API untuk mengelola koleksi buku. Proyek ini dibangun menggunakan **Node.js** dan framework **Hapi** sebagai bagian dari kriteria kelulusan kelas **Belajar Membuat Aplikasi Back-End untuk Pemula** di Dicoding Academy.

## 🚀 Fitur Utama
API ini mendukung operasi **CRUD (Create, Read, Update, Delete)** lengkap dengan kriteria sebagai berikut:

- **Simpan Buku**: Menambahkan data buku baru dengan validasi input (contoh: nama buku wajib diisi).
- **Tampilkan Semua Buku**: Mendukung filter pencarian berdasarkan `name`, `reading`, dan `finished` melalui *query parameters*.
- **Detail Buku**: Menampilkan informasi lengkap buku berdasarkan ID yang spesifik.
- **Ubah Data Buku**: Memperbarui informasi buku yang sudah ada.
- **Hapus Buku**: Menghapus data buku dari database lokal (memori).

## 🛠️ Tech Stack
- **Runtime**: Node.js
- **Framework**: Hapi.js
- **Package Manager**: NPM
- **Tools**: Nodemon (Development), Postman (API Testing)

## 📌 API Endpoints
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| POST | `/books` | Menambahkan buku baru |
| GET | `/books` | Menampilkan seluruh buku |
| GET | `/books/{id}` | Menampilkan detail buku berdasarkan ID |
| PUT | `/books/{id}` | Memperbarui data buku |
| DELETE | `/books/{id}` | Menghapus buku |

## ⚙️ Cara Menjalankan Secara Lokal
1. Clone repositori ini:
   ```bash
   git clone [https://github.com/waryuu/Bookshelf-API-Backend.git](https://github.com/waryuu/Bookshelf-API-Backend.git)
   ```

2. Instal dependensi:
    ```bash
    npm install
    ``` 

3. Jalankan server (Development mode):
    ```bash
    npm run start-dev
    ```

Server akan berjalan di http://localhost:9000.


*Developed as part of the Back-End Developer learning path at Dicoding Academy.*