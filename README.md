# KALKULUS PUZZLE - Instruksi untuk Claude Code

## BACA INI DULU SEBELUM NGAPA-NGAPAIN

Kamu adalah Claude Code. Kamu diminta membangun sebuah web app statis (HTML/CSS/JS murni) untuk belajar Kalkulus MAT2112 dengan cara yang fun -- seperti main puzzle. App ini akan di-deploy ke GitHub Pages.

PENTING: Baca SEMUA instruksi ini sampai habis sebelum mulai coding. Jangan skip satu pun.

---

## LANGKAH PERTAMA: BACA MATERI PDF

Sebelum menulis satu baris kode pun, kamu HARUS membaca semua file PDF materi kuliah yang ada di folder `materi/`. File-file tersebut adalah:

```
materi/
  Slide Kuliah ke-9 MAT2112 Kalkulus I - Ed....pdf
  Slide Kuliah ke-10 MAT2112 Kalkulus I - E....pdf
  Slide Kuliah ke-11 MAT2112 Kalkulus I - E....pdf
  Slide Kuliah ke-12 MAT2112 Kalkulus I - E....pdf
  Slide Kuliah ke-13 MAT2112 Kalkulus I - E....pdf
  Slide Kuliah ke-14 MAT2112 Kalkulus I - E....pdf
  Slide Kuliah ke-15 MAT2112 Kalkulus I - E....pdf
```

Dari setiap PDF, kamu harus mengekstrak:
1. **Topik/judul** minggu tersebut
2. **Semua definisi dan konsep** yang diajarkan
3. **SEMUA rumus** yang ada -- tidak boleh ada yang terlewat satu pun
4. **Contoh soal** yang ada di slide (atau buat sendiri yang simpel jika tidak ada)

Catat semua ini dulu, baru mulai coding.

---

## STRUKTUR PROJECT

```
kalkulus-puzzle/
  index.html          <- Single Page App, semua halaman di sini
  style.css           <- Semua styling
  app.js              <- Semua logic
  data.js             <- Semua konten (summary, rumus, soal) hasil baca PDF
  vibes/
    gustixa-lofi.mp3
    michael-learns-to-rock.mp3
    peterpan.mp3
```

CATATAN: File MP3 harus di-copy dari folder `vibes/` ke dalam project.

---

## TECH STACK

- HTML5 + CSS3 + Vanilla JavaScript murni
- TIDAK pakai framework apapun (no React, no Vue, no Angular)
- TIDAK pakai library external apapun (no jQuery, no Bootstrap)
- TIDAK pakai CDN apapun
- Semua self-contained, bisa jalan offline setelah load
- Harus bisa di-deploy ke GitHub Pages (static files only)

---

## DESAIN

### Prinsip Desain
- SIMPLE. Bersih. Minimalis.
- TIDAK ADA gambar
- TIDAK ADA emoji
- Warna: gunakan palet gelap yang nyaman di mata (dark mode). Background gelap (#0a0a0a atau serupa), teks putih/light gray, accent color satu warna saja (misalnya biru muda atau hijau mint yang calm).
- Font: gunakan system font stack yang clean. Satu font untuk heading, satu untuk body.
- Spacing yang lega, jangan cramped
- Border radius minimal (2-4px max)
- Transisi halaman yang smooth (fade atau slide)
- Responsive -- harus bagus di mobile dan desktop
- Semua text harus readable, ukuran font minimal 16px untuk body

### Layout
- Max-width container: 720px, centered
- Padding horizontal: 24px
- Setiap "halaman" adalah satu section yang di-show/hide

---

## ALUR APLIKASI (5 TAHAP)

### HALAMAN 1: LANDING PAGE

Tampilan:
- Di tengah layar, ada satu kalimat motivasi belajar yang powerful (dalam Bahasa Indonesia, gaya Gen Z tapi tetap bermakna)
- Contoh: "Rumus itu bukan musuh. Dia cuma temen yang belum kamu kenal."
- Di bawahnya ada tombol "Mulai"
- Background gelap, teks besar, centered vertikal dan horizontal
- Simpel. Hanya itu. Tidak ada yang lain.

Behavior:
- Klik "Mulai" -> pindah ke Halaman 2 (Vibes Selection)

---

### HALAMAN 2: VIBES SELECTION

Tampilan:
- Di atas ada tulisan besar: "vibes"
- Di bawahnya ada 4 tombol/card pilihan musik:
  1. "tanpa musik" 
  2. "lo-fi" 
  3. "old song" 
  4. "peterpan"
- Desain tombolnya simple, sama rata, bisa grid 2x2 atau list vertical

Behavior:
- Klik salah satu pilihan:
  - "tanpa musik": tidak ada musik yang diplay
  - "lo-fi": play file `vibes/gustixa-lofi.mp3` secara loop
  - "old song": play file `vibes/michael-learns-to-rock.mp3` secara loop
  - "peterpan": play file `vibes/peterpan.mp3` secara loop
- Musik harus bisa diplay secara LOOP (repeat terus)
- Setelah pilih, langsung pindah ke Halaman 2.5 (Motivasi Belajar)
- Di semua halaman setelah ini, tampilkan mini music control di pojok kanan bawah (tombol kecil untuk pause/play dan ganti lagu). Kecil dan tidak mengganggu.

---

### HALAMAN 2.5: MOTIVASI BELAJAR

Tampilan:
- Kata-kata motivasi untuk belajar kalkulus (2-3 kalimat, Bahasa Indonesia, gaya santai tapi membangkitkan semangat)
- Tombol "Ayo Belajar" di bawah
- Juga tampilkan: pilihan week (Week 9, Week 10, ..., Week 15) sebagai navigation/tabs atau dropdown, supaya user bisa pilih mau belajar week berapa

Behavior:
- User pilih week, lalu klik "Ayo Belajar" -> masuk ke Halaman 3 (Summary) untuk week yang dipilih

---

### HALAMAN 3: SUMMARY MATERI

INI BAGIAN PALING PENTING DARI SEGI KONTEN. Baca instruksi ini baik-baik.

Tampilan:
- Di atas ada judul: "Week [X]: [Judul Topik]"
- Di bawahnya ada summary/rangkuman materi minggu tersebut

Cara menulis summary:
- Bahasa Indonesia, gaya Gen Z / bahasa gaul tapi tetap informatif
- Seperti menjelaskan ke anak kecil atau teman yang baru belajar
- WAJIB pakai analogi kehidupan sehari-hari untuk setiap konsep
- Sedetail mungkin supaya pembaca benar-benar paham
- Jelaskan KENAPA konsep ini penting, bukan cuma APA
- Jangan asumsikan pembaca sudah paham istilah teknis -- jelaskan semuanya
- Tulis dalam paragraf-paragraf pendek yang enak dibaca, bukan bullet point yang kering
- Tapi tetap terstruktur: pisahkan per sub-topik dengan heading kecil

Contoh gaya penulisan yang diinginkan:
```
Oke jadi bayangin kamu lagi naik motor. 
Speedometer kamu nunjukin 60 km/jam -- itu namanya TURUNAN. 
Turunan itu kayak speedometer kehidupan: dia nunjukin seberapa cepet sesuatu berubah 
di satu titik tertentu. Jadi kalo grafik naik tajam, turunannya gede. 
Kalo grafiknya datar, turunannya nol. Simple kan?
```

- Tulis summary untuk SETIAP week (9 sampai 15) berdasarkan isi PDF masing-masing
- JANGAN ngarang konsep yang tidak ada di PDF. Tetap faithful ke materi asli.
- Tapi BOLEH menambah analogi dan penjelasan tambahan untuk mempermudah pemahaman

Di bawah summary ada tombol "Lanjut ke Rumus" -> pindah ke Halaman 4

---

### HALAMAN 4: FORMULA PUZZLE

Ini adalah inti game-nya. Baca SANGAT teliti.

#### Konsep:
Setiap rumus dari materi week tersebut dijadikan sebuah puzzle yang harus disusun user.

#### Tampilan per puzzle:
1. Di atas ada label: "Rumus [nomor]: [Nama Rumus]"
   - Contoh: "Rumus 1: Turunan Fungsi Pangkat"
2. Di bawah label, ada AREA KOSONG (drop zone) -- ini tempat user menyusun rumus
3. Di bawah area kosong, ada POTONGAN-POTONGAN rumus yang diacak
   - Potongan ini adalah bagian-bagian dari rumus yang dipecah
   - Misalnya rumus: f'(x) = n * x^(n-1) dipecah jadi: ["f'(x)", "=", "n", "*", "x^(n-1)"]
   - Potongan ditampilkan sebagai "chips" atau "cards" kecil yang bisa di-drag atau di-klik
   - Urutan potongan DIACAK secara random
4. Di bawah potongan ada tombol "Cek Jawaban"

#### Mekanisme Puzzle:
- User bisa KLIK potongan untuk memindahkannya ke area kosong (atau drag-and-drop)
- Potongan yang sudah di area kosong bisa di-klik lagi untuk mengembalikannya ke pool
- Atau bisa di-drag untuk mengatur ulang urutan di area kosong
- Harus ada feedback visual yang jelas (warna border, atau highlight) saat interaksi

#### Cara Memecah Rumus Jadi Puzzle:
- Pecah di titik-titik yang logis secara matematis
- Jangan pecah terlalu kecil (per karakter) -- terlalu susah dan tidak edukatif
- Jangan pecah terlalu besar (cuma 2 bagian) -- terlalu gampang
- Sweet spot: 3-7 potongan per rumus
- Tampilkan rumus menggunakan notasi yang jelas dan bisa dibaca (gunakan Unicode math symbols jika perlu, atau format yang clean)
- CONTOH pecahan:
  - Rumus: d/dx[x^n] = n*x^(n-1)
  - Potongan: ["d/dx", "[x^n]", "=", "n", "x^(n-1)"]
  
  - Rumus: integral dari x^n dx = x^(n+1)/(n+1) + C
  - Potongan: ["\u222b", "x^n", "dx", "=", "x^(n+1)/(n+1)", "+ C"]

#### Setelah Jawaban Benar:
- Tampilkan pesan singkat: "Benar!" dengan warna hijau
- Tampilkan rumus lengkap yang sudah tersusun dengan benar
- Di bawahnya langsung tampilkan CONTOH SOAL sederhana yang menggunakan rumus tersebut:
  - Soal: teks soal yang simpel dan jelas
  - Di bawah soal ada tombol "Lihat Jawaban" yang toggle menampilkan penyelesaian langkah-demi-langkah
- Di bawah contoh soal ada tombol "Rumus Berikutnya" -> lanjut ke puzzle rumus selanjutnya

#### Setelah Jawaban Salah:
- Tampilkan pesan: "Belum tepat, coba lagi!" dengan warna merah muda/soft
- JANGAN langsung kasih jawaban. Biarkan user coba lagi.
- Berikan hint kecil setelah 3 kali salah (misalnya: "Hint: bagian pertama rumus ini dimulai dengan d/dx")

#### Navigasi Puzzle:
- Ada progress indicator di atas: "Rumus 3 dari 8" (contoh)
- Ada tombol "Kembali ke Summary" untuk review materi
- Setelah semua rumus di satu week selesai, tampilkan halaman selamat:
  - "Week [X] selesai! Kamu sudah menguasai [jumlah] rumus."
  - Tombol "Lanjut ke Week Berikutnya" (jika belum week 15)
  - Tombol "Kembali ke Menu Week"

---

## DATA YANG HARUS DIEKSTRAK DARI PDF

Untuk setiap week (9-15), masukkan data ke file `data.js` dalam format seperti ini:

```javascript
const WEEKS_DATA = {
  9: {
    title: "Judul topik week 9 sesuai PDF",
    summary: "Summary panjang dengan gaya Gen Z, analogi, dll...",
    formulas: [
      {
        id: "w9_f1",
        name: "Nama rumus",
        pieces: ["potongan1", "potongan2", "=", "potongan3", ...],
        correctOrder: ["potongan1", "potongan2", "=", "potongan3", ...],
        hints: ["Hint 1 setelah 3x salah", "Hint 2 setelah 5x salah"],
        example: {
          question: "Teks soal sederhana...",
          solution: "Penyelesaian langkah demi langkah..."
        }
      },
      // ... semua rumus lainnya
    ]
  },
  10: { ... },
  11: { ... },
  12: { ... },
  13: { ... },
  14: { ... },
  15: { ... }
};
```

SANGAT PENTING:
- Ekstrak SEMUA rumus dari setiap week. Jangan ada yang ketinggalan.
- Setiap rumus harus punya nama yang jelas
- Setiap rumus harus punya contoh soal
- Contoh soal harus SIMPEL dan langsung menerapkan rumus tersebut
- Penyelesaian harus step-by-step, mudah diikuti

---

## WEEK-BY-WEEK CONTENT GUIDE

Ini panduan umum untuk setiap week. Tapi yang UTAMA tetap isi PDF. Panduan ini hanya untuk cross-check.

### Week 9: (Baca dari PDF dan tentukan topiknya)
### Week 10: (Baca dari PDF dan tentukan topiknya)
### Week 11: (Baca dari PDF dan tentukan topiknya)
### Week 12: (Baca dari PDF dan tentukan topiknya)
### Week 13: (Baca dari PDF dan tentukan topiknya)
### Week 14: (Baca dari PDF dan tentukan topiknya)
### Week 15: (Baca dari PDF dan tentukan topiknya)

Kamu HARUS membaca PDF untuk mengisi konten di atas. Jangan ngarang.

---

## FITUR TAMBAHAN

### Music Player Mini
- Muncul di semua halaman setelah vibes dipilih (kecuali landing page)
- Posisi: fixed, pojok kanan bawah
- Ukuran kecil, tidak mengganggu
- Tombol: play/pause (toggle)
- Saat klik, toggle play/pause musik
- Tampilkan nama lagu yang sedang diplay dalam teks kecil
- Jika user pilih "tanpa musik", tidak muncul

### Progress Tracking (localStorage)
- Simpan progress user di localStorage:
  - Week mana yang sudah selesai
  - Rumus mana yang sudah berhasil dijawab
- Di halaman pilihan week, tandai week yang sudah selesai (misalnya dengan tanda centang teks atau warna berbeda)
- Progress bisa di-reset dari halaman menu

### Keyboard Support
- Puzzle bisa dioperasikan dengan keyboard (tab + enter untuk select/move pieces)
- Navigasi antar halaman bisa dengan keyboard

---

## RENDERING RUMUS MATEMATIKA

Karena tidak boleh pakai library external dan tidak ada CDN:
- Gunakan Unicode math symbols sebanyak mungkin:
  - Integral: \u222b
  - Pangkat: gunakan superscript Unicode atau format x^n
  - Pecahan: gunakan format a/b atau buat custom CSS untuk fraction display
  - Sigma: \u03a3
  - Delta: \u0394
  - Pi: \u03c0
  - Infinity: \u221e
  - Partial derivative: \u2202
  - Arrow: \u2192
  - Plus-minus: \u00b1
  - Square root: \u221a
  - Not equal: \u2260
  - Less than or equal: \u2264
  - Greater than or equal: \u2265
  - Theta: \u03b8
  - Alpha, beta, gamma: \u03b1, \u03b2, \u03b3
  
- Untuk pecahan yang kompleks, buat CSS class khusus:
```css
.fraction {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  vertical-align: middle;
}
.fraction .numerator {
  border-bottom: 1px solid currentColor;
  padding: 0 4px 2px;
}
.fraction .denominator {
  padding: 2px 4px 0;
}
```

- Untuk superscript dan subscript, gunakan tag `<sup>` dan `<sub>`

---

## CHECKLIST SEBELUM SELESAI

Pastikan semua ini terpenuhi:

- [ ] Semua 7 week (9-15) ada summary-nya, ditulis dengan gaya Gen Z dan analogi
- [ ] SEMUA rumus dari setiap week ada dan dijadikan puzzle
- [ ] Setiap rumus punya contoh soal dan penyelesaian
- [ ] Puzzle bisa dimainkan (klik untuk susun, klik lagi untuk balikin)
- [ ] Tombol "Cek Jawaban" berfungsi dengan benar
- [ ] Hint muncul setelah 3x salah
- [ ] Music player berfungsi (loop, play/pause)
- [ ] 3 file MP3 ter-include dan bisa diplay
- [ ] Progress tersimpan di localStorage
- [ ] Responsive di mobile (test viewport 375px)
- [ ] Tidak ada gambar, tidak ada emoji di SELURUH app
- [ ] Transisi antar halaman smooth
- [ ] Semua teks dalam Bahasa Indonesia
- [ ] Bisa di-deploy ke GitHub Pages tanpa build step
- [ ] Tidak ada external dependency

---

## CATATAN DEPLOY GITHUB PAGES

- Semua file harus ada di root atau folder yang sesuai
- `index.html` harus di root
- Path ke file MP3 harus relative: `vibes/gustixa-lofi.mp3`
- Tidak ada server-side code
- Tidak ada build step yang diperlukan

---

## URUTAN KERJA YANG HARUS DIIKUTI

1. Baca SEMUA PDF di folder `materi/` satu per satu
2. Catat semua topik, konsep, dan rumus dari setiap week
3. Tulis summary untuk setiap week (gaya Gen Z + analogi)
4. Pecah setiap rumus jadi potongan puzzle
5. Buat contoh soal untuk setiap rumus
6. Buat file `data.js` dengan semua konten
7. Buat `style.css` dengan desain yang clean dan dark
8. Buat `app.js` dengan semua logic (navigasi, puzzle, music, progress)
9. Buat `index.html` yang menyatukan semuanya
10. Test semua fitur
11. Copy file MP3 dari `vibes/` ke project

---

## YANG TIDAK BOLEH DILAKUKAN

- JANGAN pakai emoji apapun di manapun
- JANGAN pakai gambar apapun
- JANGAN pakai library/framework external
- JANGAN skip rumus apapun dari PDF
- JANGAN buat summary yang terlalu singkat -- harus detail dan mudah dipahami
- JANGAN buat contoh soal yang terlalu sulit -- keep it simple
- JANGAN buat puzzle yang hanya 2 potongan -- minimal 3, idealnya 4-6
- JANGAN ngarang rumus yang tidak ada di PDF
- JANGAN lupa music loop
- JANGAN buat UI yang terlalu rame -- simple is better

---

Sekarang mulai kerja. Baca PDF dulu, baru coding. Semangat!
