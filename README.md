# MOODLY
platform visual untuk berbagi dan menyimpan inspirasi.

---
## **Disusun Oleh**
  * Daffa Eko Aldrian
  * Muhammad Jahfal Ulil Haidar
---

### **Product Requirements Document (PRD) - Moodly App**

#### **1. Pendahuluan**
* **Visi Proyek:** Menciptakan aplikasi mobile yang berfungsi sebagai platform inspirasi visual, di mana pengguna dapat mencari, mengunggah, dan menyimpan gambar (`mood` atau ide) dari berbagai kategori. Aplikasi ini bertujuan menjadi sumber referensi visual utama untuk berbagai kalangan, mulai dari seniman, desainer, hingga pengguna umum.
* **Tujuan Proyek:**
    * Menyediakan `feed` gambar yang relevan dan personal.
    * Memungkinkan pengguna untuk mengunggah dan berbagi kreasi mereka.
    * Menawarkan fitur pencarian yang akurat dan cepat.
    * Membangun komunitas pengguna yang aktif melalui interaksi (`like`, `comment`, `follow`).

#### 2. Pembeda Strategis (Positioning Moodly vs. Pinterest)

Bagian ini secara eksplisit mendefinisikan "mengapa" kita berbeda, menggunakan fitur yang *sudah ada*.

| Aspek | Pinterest (Aplikasi Rujukan) | Moodly (Aplikasi Kita) |
| :--- | :--- | :--- |
| **Fokus Utama** | **Penemuan & Penyimpanan** (Discovery & Saving) | **Kreasi & Apresiasi** (Creation & Appreciation) |
| **Bintang Utama** | **Konten (Pin)**. Fokusnya adalah pada gambar/ide itu sendiri. | **Kreator (Profil)**. Fokusnya adalah pada *siapa* yang membuat gambar tersebut. |
| **Nilai `Upload`** | **Sekunder.** Sebagian besar konten adalah *re-pin* (menyimpan ulang) dari web. | **Primer.** Fitur `Upload` adalah inti aplikasi, mendorong konten orisinal. |
| **Model Interaksi** | **Individualistis.** Pengguna menyimpan ide ke papan pribadi mereka. | **Sosial & Komunitas.** Pengguna berinteraksi langsung dengan kreator (Like, Follow, Notifikasi). |
| **Target Utama** | "Perencana" (Orang yang mencari ide untuk dibeli atau dilakukan). | "Kreator" & "Pengagum" (Orang yang ingin memamerkan karya atau mencari inspirasi murni). |

---

#### **3. Target Pengguna**
* **Persona Pengguna:**
    * **Desainer Grafis :** Mencari inspirasi untuk proyek desainnya. Mereka butuh fitur pencarian yang spesifik (misalnya, "palet warna vintage" atau "tipografi modern").
    * **Fotografer:** Ingin berbagi hasil fotonya dan mendapatkan apresiasi. Mereka butuh fitur unggah yang mudah dan interaksi sosial seperti `like` atau komentar.
    * **Mahasiswi:** Suka menyimpan ide untuk dekorasi kamar atau lainnya. Mereka butuh fitur simpan dan unduh gambar dengan cepat.

#### **4. Fitur Utama**
Berikut adalah daftar fitur utama yang akan dikembangkan di aplikasi.

* **Fitur Autentikasi**
    * Pengguna dapat mendaftar dengan email dan kata sandi.
    * Pengguna dapat masuk ke akun mereka.
    * Pengguna dapat keluar dari akun.
* **Fitur Beranda**
    * Menampilkan `feed` gambar dalam format `grid` yang dapat digulir.
    * `Feed` dapat disesuaikan berdasarkan minat pengguna.
* **Fitur Pencarian**
    * Pengguna dapat mencari gambar berdasarkan kata kunci (misalnya, "senja", "minimalis", "kota").
    * Hasil pencarian ditampilkan dalam `grid` gambar.
* **Fitur Unggah**
    * Pengguna dapat mengunggah gambar dari galeri perangkat.
    * Pengguna dapat menambahkan judul dan tag pada gambar yang diunggah.
* **Fitur Notifikasi**
    * Memberi tahu pengguna tentang `like`, komentar, atau `follow` baru pada unggahan mereka.
    * Menampilkan notifikasi di tab khusus.
* **Fitur Profil Pengguna**
    * Menampilkan informasi dasar pengguna (nama, `bio`).
    * Menampilkan semua gambar yang pernah diunggah oleh pengguna.
    * Menampilkan koleksi gambar yang disimpan.
* **Fitur Interaksi Gambar**
    * Pengguna dapat `like` (`menekan hati`) pada sebuah gambar.
    * Pengguna dapat menyimpan gambar ke dalam koleksi pribadi.
    * Pengguna dapat mengunduh gambar ke galeri perangkat.
    * Pengguna dapat membagikan gambar ke platform lain.

---
---

### **Entity Relationship Diagram (ERD) - Moodly App**

#### **1. Entitas (Entities)**
Entitas adalah objek utama yang akan Anda simpan datanya. Setiap entitas memiliki atribut atau properti.

* **`User`**
    * **Atribut:** `user_id` (Primary Key), `username`, `email`, `password_hash`, `bio`, `profile_picture_url`, `created_at`.
* **`Post`**
    * **Atribut:** `post_id` (Primary Key), `image_url`, `title`, `description`, `tags`, `uploaded_at`, `user_id` (Foreign Key).
* **`Like`**
    * **Atribut:** `like_id` (Primary Key), `user_id` (Foreign Key), `post_id` (Foreign Key), `liked_at`.
* **`Notification`**
    * **Atribut:** `notification_id` (Primary Key), `user_id` (Foreign Key), `type` (misalnya: 'like', 'comment', 'follow'), `message`, `is_read`, `created_at`.

#### **2. Relasi (Relationships)**
Relasi menjelaskan bagaimana entitas-entitas ini saling berinteraksi.

* **Relasi antara `User` dan `Post`:**
    * Relasi: **One-to-Many (`1:N`)**.
    * Penjelasan: Seorang **`User`** dapat **mengunggah** banyak **`Post`**, tetapi setiap **`Post`** hanya dimiliki oleh satu **`User`**.

* **Relasi antara `User` dan `Like`:**
    * Relasi: **Many-to-Many (`N:N`)**.
    * Penjelasan: Seorang **`User`** dapat **menyukai** banyak **`Post`**, dan setiap **`Post`** dapat **disukai** oleh banyak **`User`**. Entitas `Like` berfungsi sebagai "tabel penghubung" untuk relasi ini.

* **Relasi antara `Post` dan `Like`:**
    * Relasi: **One-to-Many (`1:N`)**.
    * Penjelasan: Sebuah **`Post`** dapat memiliki banyak **`Like`**, tetapi setiap **`Like`** hanya terkait dengan satu **`Post`**.

* **Relasi antara `User` dan `Notification`:**
    * Relasi: **One-to-Many (`1:N`)**.
    * Penjelasan: Seorang **`User`** dapat **menerima** banyak **`Notification`**, tetapi setiap **`Notification`** hanya ditujukan untuk satu **`User`**.

### Contoh Diagram Visual

Bayangkan diagramnya akan terlihat seperti ini:

* Kotak **`User`** terhubung dengan garis ke kotak **`Post`**. Di sisi `User` ada angka "1", dan di sisi `Post` ada huruf "N".
* Kotak **`User`** dan kotak **`Post`** sama-sama terhubung ke kotak **`Like`** dengan garis. Di setiap sisi (dari `User` dan `Post`) ke `Like` ada angka "N". Ini menunjukkan relasi `Many-to-Many`.

---
---

### **Software Requirements Specification (SRS) - Moodly App**

#### **1. Persyaratan Fungsional**

Persyaratan fungsional menjelaskan apa yang harus dilakukan oleh sistem. Setiap fitur dari PRD diuraikan menjadi persyaratan yang dapat diuji.

* **Fungsi 1.0 - Otentikasi Pengguna**
    * **FR-1.1:** Pengguna harus dapat mendaftar dengan menyediakan email unik, nama pengguna, dan kata sandi. Sistem harus memvalidasi format email.
    * **FR-1.2:** Pengguna harus dapat masuk dengan memasukkan email dan kata sandi yang valid. Sistem harus memberikan pesan kesalahan yang jelas jika otentikasi gagal.
* **Fungsi 2.0 - Beranda**
    * **FR-2.1:** Sistem harus menampilkan `feed` gambar yang digulir tak terbatas (`infinite scroll`) di halaman beranda.
    * **FR-2.2:** `Feed` harus memuat gambar secara asinkron untuk performa yang optimal.
* **Fungsi 3.0 - Pencarian**
    * **FR-3.1:** Sistem harus menyediakan kolom pencarian yang memungkinkan pengguna mencari gambar berdasarkan kata kunci atau tag.
    * **FR-3.2:** Hasil pencarian harus ditampilkan dalam format `grid` yang rapi.
* **Fungsi 4.0 - Unggah Gambar**
    * **FR-4.1:** Pengguna harus dapat memilih dan mengunggah satu gambar dari galeri perangkat.
    * **FR-4.2:** Pengguna harus dapat menambahkan judul dan deskripsi opsional pada setiap unggahan.
* **Fungsi 5.0 - Interaksi Pengguna**
    * **FR-5.1:** Pengguna harus dapat menyimpan gambar ke profil mereka.
    * **FR-5.2:** Pengguna harus dapat mengunduh gambar ke penyimpanan lokal perangkat.
    * **FR-5.3:** Pengguna harus dapat membagikan tautan gambar ke platform eksternal.
* **Fungsi 6.0 - Profil Pengguna**
    * **FR-6.1:** Halaman profil harus menampilkan gambar yang diunggah dan disimpan oleh pengguna.
    * **FR-6.2:** Pengguna harus dapat melihat jumlah unggahan dan pengikut.

---

#### **2. Persyaratan Non-Fungsional**

Persyaratan non-fungsional menjelaskan bagaimana sistem bekerja, seperti performa, keamanan, dan keandalan.

* **Performa**
    * **NFR-1.1:** Halaman utama (beranda) harus memuat konten awal dalam waktu **kurang dari 3 detik** pada koneksi internet yang baik.
    * **NFR-1.2:** Pencarian harus mengembalikan hasil dalam waktu **kurang dari 1 detik**.
* **Keamanan**
    * **NFR-2.1:** Kata sandi pengguna harus disimpan dalam format yang di-`hash` (misalnya, menggunakan **Bcrypt**).
    * **NFR-2.2:** Aplikasi harus menggunakan koneksi **HTTPS** untuk semua komunikasi API.
* **Keandalan**
    * **NFR-3.1:** Aplikasi harus dapat menangani kegagalan jaringan secara anggun, menampilkan pesan kesalahan yang relevan.
* **Kemudahan Penggunaan (Usability)**
    * **NFR-4.1:** Navigasi aplikasi harus intuitif, dengan ikon yang jelas untuk setiap menu (`Beranda`, `Cari`, `Unggah`, `Notifikasi`, `Profil`).
    * **NFR-4.2:** Tampilan aplikasi harus konsisten di seluruh platform (iOS dan Android).

---
---

### **Software Design Document (SDD) - Moodly App**

#### **1. Arsitektur Sistem**

Aplikasi Moodly akan dibangun dengan arsitektur **Client-Server**.
* **Client (Aplikasi Flutter):** Aplikasi yang berjalan di perangkat mobile pengguna (Android dan iOS). Tugasnya adalah menampilkan antarmuka pengguna, menangani interaksi pengguna, dan mengirim permintaan ke server.
* **Server (Backend):** Sebuah aplikasi yang berjalan di `cloud`. Tugasnya adalah mengelola data pengguna, gambar, dan notifikasi. Server akan menyediakan **RESTful API** agar `client` dapat berkomunikasi dengannya.
* **Database:** `Backend` akan terhubung ke database untuk menyimpan semua data, seperti informasi pengguna, `post`, `like`, dan notifikasi.

#### **2. Desain Modul**

Aplikasi akan dibagi menjadi beberapa modul fungsional yang saling berinteraksi.

* **Modul Autentikasi**
    * **Tujuan:** Mengelola proses pendaftaran dan masuk pengguna.
    * **Komponen:**
        * `AuthController`: Mengirim permintaan pendaftaran/masuk ke `backend`.
        * `AuthService`: Menangani `token` otentikasi (misalnya `JWT`) dan menyimpannya di perangkat.
* **Modul Konten**
    * **Tujuan:** Mengelola tampilan gambar, pencarian, dan unggahan.
    * **Komponen:**
        * `FeedController`: Mengambil gambar dari `backend` untuk halaman beranda.
        * `SearchController`: Mengirim `query` pencarian ke `backend` dan memproses hasilnya.
        * `UploadService`: Mengelola proses unggah file gambar ke server.
* **Modul Interaksi Pengguna**
    * **Tujuan:** Mengelola `like`, simpan, dan unduh gambar.
    * **Komponen:**
        * `InteractionController`: Mengirim permintaan `like` atau simpan ke `backend`.
        * `DownloadService`: Menangani pengunduhan gambar dari URL ke galeri perangkat.
* **Modul Notifikasi**
    * **Tujuan:** Mengelola notifikasi untuk pengguna.
    * **Komponen:**
        * `NotificationService`: Berkomunikasi dengan `backend` untuk mengambil notifikasi terbaru.

#### **3. Desain Database**

Desain ini didasarkan pada ERD yang sudah kita buat sebelumnya. Tabel-tabel berikut akan digunakan di `backend`.

* **Tabel `users`**
    * `id` (PRIMARY KEY, INT)
    * `username` (VARCHAR)
    * `email` (VARCHAR, UNIQUE)
    * `password_hash` (VARCHAR)
* **Tabel `posts`**
    * `id` (PRIMARY KEY, INT)
    * `user_id` (FOREIGN KEY dari `users.id`)
    * `image_url` (VARCHAR)
    * `title` (VARCHAR)
    * `description` (VARCHAR)
    * `tags` (VARCHAR)
* **Tabel `likes`**
    * `id` (PRIMARY KEY, INT)
    * `user_id` (FOREIGN KEY dari `users.id`)
    * `post_id` (FOREIGN KEY dari `posts.id`)
* **Tabel `notifications`**
    * `id` (PRIMARY KEY, INT)
    * `user_id` (FOREIGN KEY dari `users.id`)
    * `message` (TEXT)
    * `type` (ENUM: `like`, `comment`, `follow`)

Berikut adalah contoh skema relasi antar tabel. 

---
---

### **Checklist Timeline Sprint MVP - Moodly App**

#### **Sprint 1 (Minggu 1-2): Fondasi & Otentikasi**

**Tujuan:** Membangun dasar aplikasi dan sistem pendaftaran/login yang berfungsi penuh.

* **Tugas Backend:**
    * `Setup` lingkungan `backend` (misalnya, Node.js dengan Express atau Python dengan Django/Flask).
    * Buat `endpoint` API untuk pendaftaran (`/api/register`) dan login (`/api/login`).
    * Implementasikan `hashing` kata sandi untuk keamanan.
    * Siapkan database awal dengan tabel `users`.
* **Tugas Frontend (Flutter):**
    * `Setup` proyek Flutter baru.
    * Buat `UI` untuk halaman `Login` dan `Register`.
    * Hubungkan `UI` dengan `endpoint` API yang sudah dibuat.
    * Terapkan manajemen `state` sederhana untuk otentikasi.
* **Hasil Akhir Sprint:** Pengguna dapat mendaftar, masuk, dan keluar dari aplikasi.

---

#### **Sprint 2 (Minggu 3-4): Unggah & Beranda**

**Tujuan:** Memungkinkan pengguna untuk mengunggah gambar dan melihatnya di halaman beranda.

* **Tugas Backend:**
    * Buat `endpoint` API untuk mengunggah gambar (`/api/posts`).
    * Integrasikan penyimpanan `file` (misalnya, di server atau `cloud storage` seperti AWS S3).
    * Buat `endpoint` untuk mengambil semua `post` atau `post` dari pengguna tertentu.
* **Tugas Frontend (Flutter):**
    * Rancang `UI` untuk halaman `Unggah`.
    * Kembangkan `UI` halaman `Beranda` dengan `list` gambar yang dapat digulir.
    * Implementasikan fungsi `upload` gambar dari galeri perangkat.
* **Hasil Akhir Sprint:** Pengguna dapat mengunggah gambar dan melihat `feed` gambar di beranda.

---

#### **Sprint 3 (Minggu 5-6): Pencarian, Profil, dan Unduh**

**Tujuan:** Menyelesaikan fitur inti yang diperlukan untuk MVP, yaitu pencarian, profil, dan interaksi dasar.

* **Tugas Backend:**
    * Buat `endpoint` API pencarian berdasarkan `tag` dan judul.
    * Buat `endpoint` untuk mengambil data profil pengguna.
* **Tugas Frontend (Flutter):**
    * Rancang `UI` untuk halaman `Pencarian` dan `Profil`.
    * Implementasikan logika pencarian.
    * Buat halaman profil yang menampilkan `post` yang diunggah pengguna.
    * Tambahkan tombol `Unduh` pada setiap gambar dan implementasikan fungsionalitasnya.
* **Hasil Akhir Sprint:** Aplikasi memiliki `login`, beranda, unggah, cari, profil, dan fungsi unduh gambar. MVP siap diluncurkan.
