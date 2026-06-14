const WEEKS_DATA = {
  9: {
    title: "Nilai Ekstrem & Kemonotonan Fungsi",
    summary: `Oke, bayangin kamu lagi naik gunung. Ada titik tertinggi yang bisa kamu capai — itu namanya MAKSIMUM. Ada titik terendah — itu MINIMUM. Nah, dalam kalkulus, kita belajar cara nemuin titik-titik puncak dan lembah dari grafik fungsi. Keren kan?

Ada dua jenis ekstrem yang perlu kamu kenal. Pertama, EKSTREM GLOBAL (mutlak) — ini kayak puncak gunung tertinggi di seluruh Indonesia. f(c) adalah maks global kalau f(c) lebih besar atau sama dengan f(x) untuk semua x yang ada. Kedua, EKSTREM LOKAL (relatif) — ini kayak puncak bukit di sekitar rumah kamu. Mungkin di depan ada gunung yang lebih tinggi, tapi di area lokal, si bukit itu tetep yang paling tinggi.

Terus, gimana cara nyarinya? Kuncinya ada di yang namanya BILANGAN KRITIS. Ada tiga jenis: (1) titik stasioner, di mana f'(c) = 0 — bayangin grafiknya datar sesaat, (2) titik singular, di mana f'(c) tidak ada, dan (3) titik ujung selang.

Buat cek fungsi naik atau turun, kita pakai turunan pertama. Kalau f'(x) > 0, fungsi naik. Kalau f'(x) < 0, fungsi turun. Sesederhana itu! Kayak speedometer: tanda positif berarti kamu lagi ngebut ke atas, negatif berarti melambat ke bawah.

TEOREMA NILAI RATAAN (TNR) itu kayak prinsip "pasti ada satu momen di perjalanan kamu dari Jakarta ke Bandung di mana kecepatan kamu PERSIS sama dengan kecepatan rata-rata perjalanan." Secara matematis: ada c di antara a dan b sehingga f'(c) = (f(b) - f(a)) / (b - a). Keren banget kan konsepnya?

Untuk nemuin ekstrem lokal, ada dua uji turunan. UJI TURUNAN I: lihat tanda f' di sekitar titik kritis c. Kalau berubah dari + ke -, berarti maks lokal. Dari - ke +, berarti min lokal. UJI TURUNAN II: kalau f'(c) = 0 dan f''(c) < 0, itu maks lokal (cekung bawah = puncak). Kalau f''(c) > 0, itu min lokal (cekung atas = lembah).`,
    formulas: [
      {
        id: "w9_f1",
        name: "Teorema Nilai Rataan (TNR)",
        pieces: ["f'(c)", "=", "f(b) - f(a)", "/", "b - a"],
        correctOrder: ["f'(c)", "=", "f(b) - f(a)", "/", "b - a"],
        hints: ["Hint: bagian kiri adalah turunan f di titik c", "Hint: bagian kanan adalah perubahan f dibagi perubahan x"],
        example: {
          question: "Periksa apakah f(x) = x² memenuhi TNR pada [1, 3], dan tentukan nilai c yang dimaksud.",
          solution: "f(1) = 1, f(3) = 9. Nilai rataan = (9 - 1)/(3 - 1) = 8/2 = 4. TNR menjamin ada c ∈ (1,3) sehingga f'(c) = 4. f'(x) = 2x, jadi 2c = 4, c = 2. Benar, c = 2 ∈ (1,3)."
        }
      },
      {
        id: "w9_f2",
        name: "Fungsi Naik (Uji Turunan I)",
        pieces: ["f naik pada I", "⇔", "f'(x) > 0", "untuk setiap x dalam I"],
        correctOrder: ["f naik pada I", "⇔", "f'(x) > 0", "untuk setiap x dalam I"],
        hints: ["Hint: fungsi naik artinya grafiknya bergerak ke atas", "Hint: tanda turunan positif menunjukkan fungsi naik"],
        example: {
          question: "Tentukan selang di mana f(x) = x³ - 3x naik.",
          solution: "f'(x) = 3x² - 3 = 3(x² - 1) = 3(x-1)(x+1). f'(x) > 0 ketika x < -1 atau x > 1. Jadi f naik pada (-∞, -1) dan (1, +∞)."
        }
      },
      {
        id: "w9_f3",
        name: "Fungsi Turun (Uji Turunan I)",
        pieces: ["f turun pada I", "⇔", "f'(x) < 0", "untuk setiap x dalam I"],
        correctOrder: ["f turun pada I", "⇔", "f'(x) < 0", "untuk setiap x dalam I"],
        hints: ["Hint: fungsi turun artinya grafiknya bergerak ke bawah", "Hint: tanda turunan negatif menunjukkan fungsi turun"],
        example: {
          question: "Tentukan selang di mana f(x) = x³ - 3x turun.",
          solution: "f'(x) = 3x² - 3. f'(x) < 0 ketika -1 < x < 1. Jadi f turun pada selang (-1, 1)."
        }
      },
      {
        id: "w9_f4",
        name: "Uji Turunan I - Maksimum Lokal",
        pieces: ["f'", "berubah tanda", "dari + ke -", "di c", "→", "f(c) maks lokal"],
        correctOrder: ["f'", "berubah tanda", "dari + ke -", "di c", "→", "f(c) maks lokal"],
        hints: ["Hint: tanda positif berarti naik, negatif berarti turun", "Hint: naik lalu turun = puncak = maksimum"],
        example: {
          question: "Tentukan maks/min lokal f(x) = -x² + 4x menggunakan Uji Turunan I.",
          solution: "f'(x) = -2x + 4. f'(x) = 0 → x = 2. Untuk x < 2: f'(x) > 0 (naik). Untuk x > 2: f'(x) < 0 (turun). Tanda berubah + ke -, jadi x = 2 adalah maks lokal. f(2) = -4 + 8 = 4."
        }
      },
      {
        id: "w9_f5",
        name: "Uji Turunan I - Minimum Lokal",
        pieces: ["f'", "berubah tanda", "dari - ke +", "di c", "→", "f(c) min lokal"],
        correctOrder: ["f'", "berubah tanda", "dari - ke +", "di c", "→", "f(c) min lokal"],
        hints: ["Hint: turun lalu naik = lembah = minimum", "Hint: tanda negatif ke positif artinya ada titik balik ke atas"],
        example: {
          question: "Tentukan maks/min lokal f(x) = x² - 4x + 3 menggunakan Uji Turunan I.",
          solution: "f'(x) = 2x - 4. f'(x) = 0 → x = 2. Untuk x < 2: f'(x) < 0 (turun). Untuk x > 2: f'(x) > 0 (naik). Tanda berubah - ke +, jadi x = 2 adalah min lokal. f(2) = 4 - 8 + 3 = -1."
        }
      },
      {
        id: "w9_f6",
        name: "Uji Turunan II - Maks/Min Lokal",
        pieces: ["f'(c) = 0", "dan f''(c) < 0", "→", "maks lokal", "; f''(c) > 0", "→", "min lokal"],
        correctOrder: ["f'(c) = 0", "dan f''(c) < 0", "→", "maks lokal", "; f''(c) > 0", "→", "min lokal"],
        hints: ["Hint: f'(c) = 0 artinya ada titik kritis stasioner", "Hint: tanda f'' menentukan cekung atas atau bawah"],
        example: {
          question: "Tentukan maks/min lokal f(x) = x³ - 3x² + 1 menggunakan Uji Turunan II.",
          solution: "f'(x) = 3x² - 6x = 3x(x-2). Titik kritis: x = 0 dan x = 2. f''(x) = 6x - 6. f''(0) = -6 < 0 → maks lokal di x=0, f(0) = 1. f''(2) = 6 > 0 → min lokal di x=2, f(2) = 8 - 12 + 1 = -3."
        }
      },
      {
        id: "w9_f7",
        name: "Definisi Maksimum Global",
        pieces: ["f(c) ≥ f(x)", "untuk setiap x ∈ Df", "⟺", "f(c)", "adalah maks global"],
        correctOrder: ["f(c) ≥ f(x)", "untuk setiap x ∈ Df", "⟺", "f(c)", "adalah maks global"],
        hints: ["Hint: maksimum global berarti nilai terbesar di seluruh domain", "Hint: f(c) harus lebih besar/sama dengan semua f(x) lainnya"],
        example: {
          question: "Apakah f(x) = -x² + 4 mencapai maksimum global? Di mana?",
          solution: "f'(x) = -2x = 0 → x = 0. f(0) = 4. Untuk semua x: f(0) = 4 ≥ f(x) karena -x² ≤ 0. Jadi f(0) = 4 adalah maksimum global."
        }
      },
      {
        id: "w9_f8",
        name: "Definisi Minimum Global",
        pieces: ["f(c) ≤ f(x)", "untuk setiap x ∈ Df", "⟺", "f(c)", "adalah min global"],
        correctOrder: ["f(c) ≤ f(x)", "untuk setiap x ∈ Df", "⟺", "f(c)", "adalah min global"],
        hints: ["Hint: minimum global berarti nilai terkecil di seluruh domain", "Hint: f(c) harus lebih kecil/sama dengan semua f(x) lainnya"],
        example: {
          question: "Tentukan minimum global f(x) = x² - 4x + 5.",
          solution: "f'(x) = 2x - 4 = 0 → x = 2. f(2) = 4 - 8 + 5 = 1. Karena f(x) = (x-2)² + 1 ≥ 1 untuk semua x, maka f(2) = 1 adalah minimum global."
        }
      }
    ]
  },

  10: {
    title: "Kecekungan Fungsi & Asimtot",
    summary: `Pernah ngeliat jalan tol yang menikung? Ada yang tikungannya kayak mangkuk (cekung ke atas) dan ada yang kayak punuk unta (cekung ke bawah). Nah, itu yang kita pelajari di Week 10 ini: KECEKUNGAN FUNGSI.

Sebuah fungsi cekung ke atas di interval I kalau grafiknya ada di ATAS garis singgungnya — kayak mangkuk, air gak bakal tumpah. Secara matematis: f' naik di I, atau f''(x) > 0. Sebaliknya, cekung ke bawah berarti grafik ada di BAWAH garis singgung — kayak punuk unta. f' turun di I, atau f''(x) < 0.

TITIK BELOK adalah momen dramatis saat kecekungan berubah — dari mangkuk jadi punuk atau sebaliknya. Di sini f'' berganti tanda.

Sekarang soal ASIMTOT. Bayangin ada garis yang selalu dideketin suatu kurva tapi gak pernah disentuh — kayak kamu ngedeketin crush tapi dia selalu ngejaga jarak. Itu asimtot!

Ada tiga jenis:
1. ASIMTOT TEGAK (x = a): terjadi ketika lim(x→a) f(x) = ±tak terhingga. Contoh klasik: f(x) = 1/x punya asimtot tegak di x = 0.

2. ASIMTOT DATAR (y = L): terjadi ketika lim(x→±∞) f(x) = L. Artinya kalau x-nya makin gede atau makin kecil, f(x) mendekati nilai L.

3. ASIMTOT MIRING (y = mx + b): terjadi kalau fungsi mendekati garis miring ketika x → ±∞. Cara nentuin: m = lim f(x)/x, lalu b = lim [f(x) - mx].

Untuk fungsi rasional p(x)/q(x), ada aturan praktis. Kalau derajat p < derajat q: asimtot datar y = 0. Kalau derajat p = derajat q: asimtot datar y = koefisien tertinggi pembilang/penyebut. Kalau derajat p = derajat q + 1: ada asimtot miring, cari dengan pembagian polinomial!`,
    formulas: [
      {
        id: "w10_f1",
        name: "Uji Kecekungan ke Atas",
        pieces: ["f cekung ke atas pada I", "⇔", "f''(x) > 0", "untuk setiap x ∈ I"],
        correctOrder: ["f cekung ke atas pada I", "⇔", "f''(x) > 0", "untuk setiap x ∈ I"],
        hints: ["Hint: cekung ke atas = seperti mangkuk = turunan kedua positif", "Hint: f'' positif artinya f' sedang naik"],
        example: {
          question: "Tentukan interval kecekungan f(x) = x⁴ - 4x³ + 10.",
          solution: "f'(x) = 4x³ - 12x². f''(x) = 12x² - 24x = 12x(x - 2). f''(x) > 0 ketika x < 0 atau x > 2. Jadi f cekung ke atas pada (-∞, 0) dan (2, +∞)."
        }
      },
      {
        id: "w10_f2",
        name: "Uji Kecekungan ke Bawah",
        pieces: ["f cekung ke bawah pada I", "⇔", "f''(x) < 0", "untuk setiap x ∈ I"],
        correctOrder: ["f cekung ke bawah pada I", "⇔", "f''(x) < 0", "untuk setiap x ∈ I"],
        hints: ["Hint: cekung ke bawah = seperti punuk = turunan kedua negatif", "Hint: f'' negatif artinya f' sedang turun"],
        example: {
          question: "Tentukan interval kecekungan f(x) = x⁴ - 4x³ + 10 di mana fungsi cekung ke bawah.",
          solution: "f''(x) = 12x(x - 2). f''(x) < 0 ketika 0 < x < 2. Jadi f cekung ke bawah pada selang (0, 2). Titik belok ada di x = 0 dan x = 2."
        }
      },
      {
        id: "w10_f3",
        name: "Definisi Asimtot Tegak",
        pieces: ["x = a", "adalah asimtot tegak", "jika", "lim f(x)", "x→a±", "= ±∞"],
        correctOrder: ["x = a", "adalah asimtot tegak", "jika", "lim f(x)", "x→a±", "= ±∞"],
        hints: ["Hint: asimtot tegak adalah garis vertikal", "Hint: limitnya menuju tak terhingga"],
        example: {
          question: "Tentukan asimtot tegak f(x) = 1/(x - 3).",
          solution: "Penyebut = 0 ketika x = 3. Periksa: lim(x→3⁺) 1/(x-3) = +∞ dan lim(x→3⁻) 1/(x-3) = -∞. Jadi x = 3 adalah asimtot tegak."
        }
      },
      {
        id: "w10_f4",
        name: "Definisi Asimtot Datar",
        pieces: ["y = L", "adalah asimtot datar", "jika", "lim f(x)", "x→±∞", "= L"],
        correctOrder: ["y = L", "adalah asimtot datar", "jika", "lim f(x)", "x→±∞", "= L"],
        hints: ["Hint: asimtot datar adalah garis horizontal", "Hint: limit saat x menuju tak terhingga"],
        example: {
          question: "Tentukan asimtot datar f(x) = (2x + 1)/(x - 1).",
          solution: "lim(x→+∞) (2x+1)/(x-1) = lim (2 + 1/x)/(1 - 1/x) = 2/1 = 2. Jadi y = 2 adalah asimtot datar."
        }
      },
      {
        id: "w10_f5",
        name: "Menentukan Kemiringan Asimtot Miring",
        pieces: ["m", "=", "lim", "x→±∞", "f(x)/x"],
        correctOrder: ["m", "=", "lim", "x→±∞", "f(x)/x"],
        hints: ["Hint: m adalah gradien garis asimtot miring", "Hint: bagi f(x) dengan x lalu cari limitnya"],
        example: {
          question: "Tentukan m dari asimtot miring f(x) = (2x² - 4x)/(x + 1).",
          solution: "m = lim(x→∞) f(x)/x = lim (2x² - 4x) / (x(x+1)) = lim (2x² - 4x)/(x² + x) = 2. Jadi m = 2."
        }
      },
      {
        id: "w10_f6",
        name: "Menentukan Konstanta Asimtot Miring",
        pieces: ["b", "=", "lim", "x→±∞", "[f(x) - mx]"],
        correctOrder: ["b", "=", "lim", "x→±∞", "[f(x) - mx]"],
        hints: ["Hint: b adalah intersep y dari garis asimtot miring", "Hint: kurangi f(x) dengan mx terlebih dahulu"],
        example: {
          question: "Tentukan b dari asimtot miring f(x) = (2x² - 4x)/(x + 1) dengan m = 2.",
          solution: "b = lim(x→∞) [f(x) - 2x] = lim [(2x² - 4x)/(x+1) - 2x] = lim [(2x² - 4x - 2x² - 2x)/(x+1)] = lim (-6x/(x+1)) = -6. Asimtot miring: y = 2x - 6."
        }
      },
      {
        id: "w10_f7",
        name: "Asimtot Datar Fungsi Rasional (derajat sama)",
        pieces: ["jika derajat p = derajat q", "→", "asimtot datar", "y = cₙ/kₘ"],
        correctOrder: ["jika derajat p = derajat q", "→", "asimtot datar", "y = cₙ/kₘ"],
        hints: ["Hint: perbandingan koefisien tertinggi pembilang dan penyebut", "Hint: berlaku ketika derajat sama"],
        example: {
          question: "Tentukan asimtot datar f(x) = (3x² + 1)/(2x² - 5).",
          solution: "Derajat pembilang = derajat penyebut = 2. Asimtot datar: y = 3/2. Verifikasi: lim(x→∞) (3x² + 1)/(2x² - 5) = lim (3 + 1/x²)/(2 - 5/x²) = 3/2."
        }
      },
      {
        id: "w10_f8",
        name: "Asimtot Datar Fungsi Rasional (derajat p < derajat q)",
        pieces: ["jika derajat p < derajat q", "→", "asimtot datar", "y = 0"],
        correctOrder: ["jika derajat p < derajat q", "→", "asimtot datar", "y = 0"],
        hints: ["Hint: pembilang berderajat lebih rendah dari penyebut", "Hint: nilainya mendekati 0 saat x → ∞"],
        example: {
          question: "Tentukan asimtot datar f(x) = (2x + 1)/(x² - 4).",
          solution: "Derajat p = 1, derajat q = 2. Karena p < q, asimtot datar y = 0. Verifikasi: lim(x→∞) (2x+1)/(x²-4) = lim 2/x → 0."
        }
      },
      {
        id: "w10_f9",
        name: "Definisi Titik Belok",
        pieces: ["f'' berganti tanda", "di x = c", "→", "c", "adalah titik belok"],
        correctOrder: ["f'' berganti tanda", "di x = c", "→", "c", "adalah titik belok"],
        hints: ["Hint: syarat titik belok adalah perubahan kecekungan", "Hint: f''(c) = 0 saja tidak cukup — cek pergantian tanda f''"],
        example: {
          question: "Tentukan titik belok f(x) = x³ - 3x.",
          solution: "f'(x) = 3x² - 3, f''(x) = 6x. f''(x) = 0 → x = 0. Untuk x < 0: f'' < 0 (cekung ke bawah). Untuk x > 0: f'' > 0 (cekung ke atas). f'' berganti tanda di x=0, jadi (0, f(0)) = (0, 0) adalah titik belok."
        }
      },
      {
        id: "w10_f10",
        name: "Teorema Limit di Tak Hingga",
        pieces: ["lim", "x→±∞", "1/xʳ", "= 0", "(r > 0 rasional)"],
        correctOrder: ["lim", "x→±∞", "1/xʳ", "= 0", "(r > 0 rasional)"],
        hints: ["Hint: semakin besar x, semakin kecil 1/xʳ", "Hint: dipakai untuk mencari asimtot datar: bagi pembilang dan penyebut dengan xⁿ tertinggi"],
        example: {
          question: "Gunakan teorema ini untuk menghitung lim(x→∞) (3x² + 2x)/(x² - 1).",
          solution: "Bagi semua suku dengan x²: lim (3 + 2/x)/(1 - 1/x²). Karena 1/x → 0 dan 1/x² → 0, hasilnya = (3 + 0)/(1 - 0) = 3."
        }
      }
    ]
  },

  11: {
    title: "Pengoptimuman & Antiturunan",
    summary: `Di Week 11 kita dapet dua hadiah sekaligus: pengoptimuman dan antiturunan. Dua topik yang masing-masing powerful banget!

PENGOPTIMUMAN itu kayak jadi CEO — kamu harus mutusin ukuran kaleng berapa yang paling hemat bahan, atau kotak berapa yang paling gede volumenya, atau rute mana yang paling cepet. Strategi umumnya: (1) bikin fungsi tujuan dari situasi nyata, (2) temukan titik kritis, (3) tentukan ekstrem global — maksimum atau minimum.

Yang sering dilupain: kamu harus periksa domain fungsinya dulu! Misal ukuran kotak gak bisa negatif. Domain ini yang nentuin kamu pakai metode selang tutup atau uji turunan.

ANTITURUNAN adalah kebalikan dari turunan. Kalau turunan itu kayak nyopir mobil (tau kecepatan setiap saat), antiturunan itu kayak rekonstruksi perjalanan dari catatan speedometer — kamu rekonstruksi posisi dari data kecepatan!

Secara formal: F adalah antiturunan dari f kalau F'(x) = f(x). Yang penting: antiturunan itu tidak unik! Kalau F(x) adalah antiturunan f, maka F(x) + C juga antiturunan f (C = konstanta sebarang). Makanya selalu ada +C di ujung jawaban integral.

Rumus-rumus antiturunan dasar harus dihapal. Yang paling sering dipakai:
- Antiturunan x^n adalah x^(n+1)/(n+1) + C (asal n gak sama dengan -1)
- Antiturunan sin x adalah -cos x + C (jangan lupa tandanya!)
- Antiturunan cos x adalah sin x + C
- Antiturunan sec²x adalah tan x + C

Cara hapal: ingat aja proses turunan tapi dibalik. Turunan dari sin adalah cos, jadi antiturunan cos adalah sin. Mudah!`,
    formulas: [
      {
        id: "w11_f1",
        name: "Definisi Antiturunan",
        pieces: ["F'(x)", "=", "f(x)", "⇒", "F adalah antiturunan f"],
        correctOrder: ["F'(x)", "=", "f(x)", "⇒", "F adalah antiturunan f"],
        hints: ["Hint: antiturunan berarti turunannya adalah fungsi yang diberikan", "Hint: turunan F harus menghasilkan f"],
        example: {
          question: "Verifikasi bahwa F(x) = x³/3 adalah antiturunan dari f(x) = x².",
          solution: "Kita hitung F'(x). F(x) = x³/3, maka F'(x) = 3x²/3 = x² = f(x). Terbukti F'(x) = f(x), jadi F(x) = x³/3 adalah antiturunan dari f(x) = x²."
        }
      },
      {
        id: "w11_f2",
        name: "Antiturunan Umum",
        pieces: ["∫f(x)dx", "=", "F(x)", "+", "C"],
        correctOrder: ["∫f(x)dx", "=", "F(x)", "+", "C"],
        hints: ["Hint: selalu ada konstanta C di belakang", "Hint: karena turunan dari konstanta = 0"],
        example: {
          question: "Jika F(x) = x³ adalah antiturunan dari f(x) = 3x², tuliskan antiturunan umumnya.",
          solution: "Antiturunan umum dari f(x) = 3x² adalah F(x) + C = x³ + C, di mana C adalah konstanta sebarang. Misalnya x³ + 5, x³ - 2, atau x³ + 100 semuanya benar."
        }
      },
      {
        id: "w11_f3",
        name: "Antiturunan x pangkat n",
        pieces: ["∫xⁿ dx", "=", "xⁿ⁺¹", "/", "(n+1)", "+", "C"],
        correctOrder: ["∫xⁿ dx", "=", "xⁿ⁺¹", "/", "(n+1)", "+", "C"],
        hints: ["Hint: pangkat naik satu, lalu bagi dengan pangkat barunya", "Hint: berlaku untuk n ≠ -1"],
        example: {
          question: "Hitung ∫x³ dx.",
          solution: "∫x³ dx = x³⁺¹/(3+1) + C = x⁴/4 + C. Verifikasi: d/dx(x⁴/4) = 4x³/4 = x³. Benar!"
        }
      },
      {
        id: "w11_f4",
        name: "Antiturunan sin x",
        pieces: ["∫sin x dx", "=", "-cos x", "+", "C"],
        correctOrder: ["∫sin x dx", "=", "-cos x", "+", "C"],
        hints: ["Hint: jangan lupa tanda minus di depan cos", "Hint: cek: turunan -cos x = sin x"],
        example: {
          question: "Hitung ∫3 sin x dx.",
          solution: "∫3 sin x dx = 3∫ sin x dx = 3(-cos x) + C = -3 cos x + C. Verifikasi: d/dx(-3 cos x) = -3(-sin x) = 3 sin x. Benar!"
        }
      },
      {
        id: "w11_f5",
        name: "Antiturunan cos x",
        pieces: ["∫cos x dx", "=", "sin x", "+", "C"],
        correctOrder: ["∫cos x dx", "=", "sin x", "+", "C"],
        hints: ["Hint: antiturunan cos adalah sin (tidak ada tanda minus!)", "Hint: cek: turunan sin x = cos x"],
        example: {
          question: "Hitung ∫(cos x + x²) dx.",
          solution: "∫(cos x + x²) dx = ∫cos x dx + ∫x² dx = sin x + x³/3 + C."
        }
      },
      {
        id: "w11_f6",
        name: "Antiturunan sec² x",
        pieces: ["∫sec² x dx", "=", "tan x", "+", "C"],
        correctOrder: ["∫sec² x dx", "=", "tan x", "+", "C"],
        hints: ["Hint: antiturunan sec² adalah tan", "Hint: cek: turunan tan x = sec² x"],
        example: {
          question: "Hitung ∫(sec² x + 2x) dx.",
          solution: "∫(sec² x + 2x) dx = tan x + x² + C."
        }
      },
      {
        id: "w11_f7",
        name: "Antiturunan csc² x",
        pieces: ["∫csc² x dx", "=", "-cot x", "+", "C"],
        correctOrder: ["∫csc² x dx", "=", "-cot x", "+", "C"],
        hints: ["Hint: jangan lupa tanda minus di depan cot", "Hint: cek: turunan -cot x = csc² x"],
        example: {
          question: "Hitung ∫csc² x dx.",
          solution: "∫csc² x dx = -cot x + C. Verifikasi: d/dx(-cot x) = -(-csc² x) = csc² x. Benar!"
        }
      },
      {
        id: "w11_f8",
        name: "Antiturunan sec x tan x",
        pieces: ["∫sec x tan x dx", "=", "sec x", "+", "C"],
        correctOrder: ["∫sec x tan x dx", "=", "sec x", "+", "C"],
        hints: ["Hint: ini kebalikan dari rumus turunan sec x", "Hint: d/dx(sec x) = sec x tan x"],
        example: {
          question: "Hitung ∫(sec x tan x + cos x) dx.",
          solution: "∫(sec x tan x + cos x) dx = sec x + sin x + C."
        }
      },
      {
        id: "w11_f9",
        name: "Antiturunan csc x cot x",
        pieces: ["∫csc x cot x dx", "=", "-csc x", "+", "C"],
        correctOrder: ["∫csc x cot x dx", "=", "-csc x", "+", "C"],
        hints: ["Hint: jangan lupa tanda minus", "Hint: d/dx(-csc x) = csc x cot x, kebalikannya jadi antiturunan"],
        example: {
          question: "Hitung ∫(csc x cot x + sec² x) dx.",
          solution: "∫csc x cot x dx + ∫sec² x dx = -csc x + tan x + C."
        }
      },
      {
        id: "w11_f10",
        name: "Sifat Linearitas Antiturunan",
        pieces: ["∫[f(x) ± g(x)]dx", "=", "∫f(x)dx", "±", "∫g(x)dx"],
        correctOrder: ["∫[f(x) ± g(x)]dx", "=", "∫f(x)dx", "±", "∫g(x)dx"],
        hints: ["Hint: integral bisa dipecah untuk fungsi yang dijumlah/dikurangi", "Hint: analog dengan sifat turunan [f ± g]' = f' ± g'"],
        example: {
          question: "Hitung ∫(x³ + cos x) dx.",
          solution: "∫x³ dx + ∫cos x dx = x⁴/4 + sin x + C."
        }
      }
    ]
  },

  12: {
    title: "Integral Tentu & Teorema Dasar Kalkulus",
    summary: `Week 12 ini adalah momen paling dramatis dalam sejarah kalkulus. Newton dan Leibniz nemuin sesuatu yang bikin dunia matematika meledak: integral itu ternyata kebalikan dari turunan! Ini yang disebut TEOREMA DASAR KALKULUS (TDK).

Tapi sebelum ke sana, kita harus tau dulu dari mana integral tentu lahir. Bayangin kamu mau ngitung luas area di bawah grafik f(x) = x² dari x=0 sampai x=2. Kalau bentuknya persegi panjang sih gampang. Tapi kurva? Caranya: potong area itu jadi n persegi panjang kecil-kecil, hitung total luasnya, lalu ambil limitnya saat n → ∞. Itulah JUMLAH RIEMANN!

Secara matematis: Rn = Σ f(x_i) · Δx, di mana Δx = (b-a)/n adalah lebar setiap persegi panjang. Ketika n → ∞, jumlah Riemann mendekati nilai pasti yang disebut INTEGRAL TENTU.

Integral tentu ditulis ∫_a^b f(x)dx. Kamu bisa bayangkan tanda ∫ itu sebagai huruf S yang meruncing (dari kata sum = penjumlahan). Dan dx itu 'lebar' yang sangat sangat tipis!

Sifat-sifat integral tentu itu penting banget. Seperti hukum aljabar biasa tapi untuk integral. Misalnya: integral konstanta = konstanta kali panjang selang. Integral bisa dipecah di titik tengah. Dll.

Terus, TEOREMA DASAR KALKULUS hadir dan segalanya berubah. TDK-1 bilang: kalau G(x) = ∫_a^x f(t)dt, maka G'(x) = f(x). Artinya diferensiasi dan integrasi adalah operasi yang saling berlawanan!

TDK-2 bilang: ∫_a^b f(x)dx = F(b) - F(a), di mana F adalah antiturunan f. Ini yang bikin perhitungan integral jadi JAUH lebih gampang. Gak perlu lagi hitung limit jumlah Riemann yang ribet!`,
    formulas: [
      {
        id: "w12_f1",
        name: "Lebar Selang Bagian (Δx)",
        pieces: ["Δx", "=", "(b - a)", "/", "n"],
        correctOrder: ["Δx", "=", "(b - a)", "/", "n"],
        hints: ["Hint: bagi total panjang selang dengan banyaknya bagian", "Hint: b adalah batas atas, a adalah batas bawah"],
        example: {
          question: "Jika selang [0, 4] dibagi menjadi n = 8 bagian sama panjang, berapa Δx?",
          solution: "Δx = (b - a)/n = (4 - 0)/8 = 4/8 = 0.5. Jadi setiap subinterval memiliki lebar 0.5."
        }
      },
      {
        id: "w12_f2",
        name: "Jumlah Riemann",
        pieces: ["Rn", "=", "Σ f(x_i)", "·", "Δx"],
        correctOrder: ["Rn", "=", "Σ f(x_i)", "·", "Δx"],
        hints: ["Hint: jumlah luas semua persegi panjang pendekatan", "Hint: tinggi kali lebar setiap persegi panjang"],
        example: {
          question: "Hitung R4 untuk f(x) = x² pada [0,2] dengan titik ujung kanan.",
          solution: "Δx = 0.5. x_i: 0.5, 1, 1.5, 2. f(x_i): 0.25, 1, 2.25, 4. R4 = (0.25 + 1 + 2.25 + 4) × 0.5 = 7.5 × 0.5 = 3.75."
        }
      },
      {
        id: "w12_f3",
        name: "Definisi Integral Tentu",
        pieces: ["∫_a^b f(x)dx", "=", "lim n→∞", "Σ f(c_i)", "Δx"],
        correctOrder: ["∫_a^b f(x)dx", "=", "lim n→∞", "Σ f(c_i)", "Δx"],
        hints: ["Hint: integral tentu adalah limit jumlah Riemann", "Hint: saat n mendekati tak terhingga, persegi panjang makin tipis"],
        example: {
          question: "Jelaskan secara intuitif mengapa ∫_0^2 x² dx = 8/3.",
          solution: "Kita pecah [0,2] jadi n bagian, buat persegi panjang dengan tinggi f(x_i) = x_i². Rn = Σ(2i/n)² × (2/n) = (8/n³)Σi² = 8n(n+1)(2n+1)/(6n³). Saat n→∞ hasilnya = 8/3."
        }
      },
      {
        id: "w12_f4",
        name: "Sifat Integral: Konstanta",
        pieces: ["∫_a^b c dx", "=", "c", "×", "(b - a)"],
        correctOrder: ["∫_a^b c dx", "=", "c", "×", "(b - a)"],
        hints: ["Hint: integral fungsi konstan sama dengan konstanta dikali panjang selang", "Hint: ini seperti luas persegi panjang = tinggi × lebar"],
        example: {
          question: "Hitung ∫_1^5 3 dx.",
          solution: "∫_1^5 3 dx = 3 × (5 - 1) = 3 × 4 = 12. Ini sama dengan luas persegi panjang dengan tinggi 3 dan lebar 4."
        }
      },
      {
        id: "w12_f5",
        name: "Sifat Aditivitas Integral",
        pieces: ["∫_a^b f dx", "+", "∫_b^c f dx", "=", "∫_a^c f dx"],
        correctOrder: ["∫_a^b f dx", "+", "∫_b^c f dx", "=", "∫_a^c f dx"],
        hints: ["Hint: integral bisa dipecah di titik tengah", "Hint: gabungkan dua selang yang bersebelahan"],
        example: {
          question: "Jika ∫_1^3 f(x)dx = 5 dan ∫_3^7 f(x)dx = 8, berapa ∫_1^7 f(x)dx?",
          solution: "∫_1^7 f(x)dx = ∫_1^3 f(x)dx + ∫_3^7 f(x)dx = 5 + 8 = 13."
        }
      },
      {
        id: "w12_f6",
        name: "Rumus Sigma Bilangan Asli",
        pieces: ["Σi", "(i=1 s/d n)", "=", "n(n+1)", "/", "2"],
        correctOrder: ["Σi", "(i=1 s/d n)", "=", "n(n+1)", "/", "2"],
        hints: ["Hint: jumlah 1+2+3+...+n", "Hint: kisah Gauss: 1+2+...+100 = 100×101/2 = 5050"],
        example: {
          question: "Hitung 1 + 2 + 3 + ... + 100.",
          solution: "Σ_i=1^100 i = 100(100+1)/2 = 100 × 101/2 = 5050. (Ini rumus yang konon ditemukan Gauss ketika masih sekolah dasar!)"
        }
      },
      {
        id: "w12_f7",
        name: "Rumus Sigma Kuadrat",
        pieces: ["Σi²", "(i=1 s/d n)", "=", "n(n+1)(2n+1)", "/", "6"],
        correctOrder: ["Σi²", "(i=1 s/d n)", "=", "n(n+1)(2n+1)", "/", "6"],
        hints: ["Hint: jumlah 1²+2²+3²+...+n²", "Hint: digunakan dalam perhitungan jumlah Riemann untuk fungsi kuadrat"],
        example: {
          question: "Hitung Σ_i=1^4 i².",
          solution: "Σ_i=1^4 i² = 4(4+1)(2×4+1)/6 = 4×5×9/6 = 180/6 = 30. Cek: 1+4+9+16 = 30. Benar!"
        }
      },
      {
        id: "w12_f8",
        name: "Teorema Dasar Kalkulus 1 (TDK-1)",
        pieces: ["d/dx", "[∫_a^x f(t)dt]", "=", "f(x)"],
        correctOrder: ["d/dx", "[∫_a^x f(t)dt]", "=", "f(x)"],
        hints: ["Hint: diferensiasi dan integrasi saling berlawanan", "Hint: turunan dari fungsi integral = integrannya"],
        example: {
          question: "Tentukan d/dx [∫_0^x (t² + 1)dt].",
          solution: "Berdasarkan TDK-1, d/dx [∫_0^x (t² + 1)dt] = x² + 1. Sesederhana itu! Kita tinggal ganti variabel t dengan x."
        }
      },
      {
        id: "w12_f9",
        name: "Teorema Dasar Kalkulus 2 (TDK-2)",
        pieces: ["∫_a^b f(x)dx", "=", "F(b)", "-", "F(a)"],
        correctOrder: ["∫_a^b f(x)dx", "=", "F(b)", "-", "F(a)"],
        hints: ["Hint: F adalah antiturunan dari f", "Hint: evaluasi antiturunan di batas atas dikurangi batas bawah"],
        example: {
          question: "Hitung ∫_1^3 x² dx menggunakan TDK-2.",
          solution: "F(x) = x³/3 adalah antiturunan x². ∫_1^3 x² dx = F(3) - F(1) = 27/3 - 1/3 = 9 - 1/3 = 26/3."
        }
      },
      {
        id: "w12_f10",
        name: "Sifat Kebalikan Batas Integral",
        pieces: ["∫_b^a f(x)dx", "=", "-", "∫_a^b f(x)dx"],
        correctOrder: ["∫_b^a f(x)dx", "=", "-", "∫_a^b f(x)dx"],
        hints: ["Hint: menukar batas atas dan bawah mengubah tanda", "Hint: ini karena arah penjumlahan Riemann berbalik"],
        example: {
          question: "Jika ∫_1^4 f(x)dx = 10, berapa nilai ∫_4^1 f(x)dx?",
          solution: "∫_4^1 f(x)dx = -∫_1^4 f(x)dx = -10."
        }
      },
      {
        id: "w12_f11",
        name: "Sifat Batas Sama Integral",
        pieces: ["∫_a^a f(x)dx", "=", "0"],
        correctOrder: ["∫_a^a f(x)dx", "=", "0"],
        hints: ["Hint: luas area dengan lebar nol adalah nol", "Hint: batas bawah = batas atas → tidak ada interval"],
        example: {
          question: "Berapa nilai ∫_5^5 (x³ + sin x) dx?",
          solution: "Karena batas bawah = batas atas = 5, maka ∫_5^5 (x³ + sin x) dx = 0."
        }
      },
      {
        id: "w12_f12",
        name: "Sifat Konstanta Pengali Integral",
        pieces: ["∫_a^b c·f(x)dx", "=", "c", "∫_a^b f(x)dx"],
        correctOrder: ["∫_a^b c·f(x)dx", "=", "c", "∫_a^b f(x)dx"],
        hints: ["Hint: konstanta bisa dikeluarkan dari tanda integral", "Hint: sama seperti sifat pada turunan: [cf]' = c·f'"],
        example: {
          question: "Jika ∫_0^2 f(x)dx = 6, tentukan ∫_0^2 4f(x)dx.",
          solution: "∫_0^2 4f(x)dx = 4·∫_0^2 f(x)dx = 4 × 6 = 24."
        }
      },
      {
        id: "w12_f13",
        name: "Sifat Penjumlahan/Selisih Integral",
        pieces: ["∫_a^b [f±g]dx", "=", "∫_a^b f dx", "±", "∫_a^b g dx"],
        correctOrder: ["∫_a^b [f±g]dx", "=", "∫_a^b f dx", "±", "∫_a^b g dx"],
        hints: ["Hint: integral dari jumlah = jumlah dari integral", "Hint: berlaku untuk penjumlahan maupun pengurangan"],
        example: {
          question: "Hitung ∫_0^1 (x² + 3x) dx.",
          solution: "∫_0^1 x² dx + ∫_0^1 3x dx = [x³/3]_0^1 + [3x²/2]_0^1 = 1/3 + 3/2 = 2/6 + 9/6 = 11/6."
        }
      },
      {
        id: "w12_f14",
        name: "Sifat Pembandingan Integral",
        pieces: ["m(b-a)", "≤", "∫_a^b f(x)dx", "≤", "M(b-a)"],
        correctOrder: ["m(b-a)", "≤", "∫_a^b f(x)dx", "≤", "M(b-a)"],
        hints: ["Hint: m = nilai min f, M = nilai maks f pada [a,b]", "Hint: luas area dibatasi oleh persegi panjang dengan tinggi min dan maks"],
        example: {
          question: "Estimasikan ∫_0^1 x² dx menggunakan sifat pembandingan.",
          solution: "Pada [0,1]: m = 0, M = 1. Jadi 0·(1-0) ≤ ∫_0^1 x² dx ≤ 1·(1-0), artinya 0 ≤ ∫ ≤ 1. (Nilai tepatnya = 1/3.)"
        }
      },
      {
        id: "w12_f15",
        name: "Rumus Sigma Kubik",
        pieces: ["Σᵢ₌₁ⁿ i³", "=", "[n(n+1)/2]", "²"],
        correctOrder: ["Σᵢ₌₁ⁿ i³", "=", "[n(n+1)/2]", "²"],
        hints: ["Hint: kuadrat dari rumus sigma linier", "Hint: Σi³ = (Σi)² — sigma kubik adalah kuadrat sigma linear"],
        example: {
          question: "Hitung 1³ + 2³ + 3³ + 4³.",
          solution: "Σᵢ₌₁⁴ i³ = [4·5/2]² = [10]² = 100."
        }
      }
    ]
  },

  13: {
    title: "Integral Taktentu & Teknik Pengintegralan (1)",
    summary: `Week 13 adalah minggu yang paling padat konten, tapi juga paling seru karena kita belajar berbagai teknik keren untuk menghitung integral!

INTEGRAL TAKTENTU itu integral tanpa batas — hasilnya fungsi (bukan angka). Notasinya ∫f(x)dx = F(x) + C. Bedain ya sama integral tentu yang hasilnya bilangan.

ATURAN SUBSTITUSI adalah senjata utama. Ide dasarnya: kalau integral keliatan susah, coba ganti variabel! Misalnya u = g(x), maka du = g'(x)dx. Rumusnya: ∫f(g(x))g'(x)dx = ∫f(u)du. Triknya: cari 'u' yang akan menyederhanakan integral. Biasanya u adalah bagian yang dipangkat atau argumen dari fungsi trigonometri.

LOGARITMA NATURAL (ln) punya definisi unik: ln x = ∫_1^x (1/t)dt. Ini sebenernya integral! Dan dari sini kita bisa turunkan semua sifatnya. Yang penting diingat: d/dx(ln x) = 1/x dan ∫(1/x)dx = ln|x| + C. Ada juga versi chain rule: d/dx(ln f(x)) = f'(x)/f(x). Dan integral-nya: ∫[f'(x)/f(x)]dx = ln|f(x)| + C.

PENURUNAN LOGARITMIK adalah teknik keren untuk mendiferensialkan fungsi berpangkat fungsi. Kayak y = (sin x)^(x²+1). Gak bisa langsung dicomot aturan turunan biasa. Solusi: ambil ln kedua ruas, lalu turunkan implisit.

FUNGSI EKSPONENSIAL NATURAL e^x punya sifat luar biasa: turunannya adalah dirinya sendiri! d/dx(e^x) = e^x. Dan integralnya: ∫e^x dx = e^x + C. Dengan chain rule: d/dx(e^f(x)) = f'(x)e^f(x).

FUNGSI TRIGONOMETRI INVERS punya turunan dan integral yang penting. Yang utama: d/dx(sin⁻¹ x) = 1/√(1-x²) dan d/dx(tan⁻¹ x) = 1/(1+x²). Integral baliknya juga berguna: ∫1/√(a²-x²)dx = sin⁻¹(x/a) + C.`,
    formulas: [
      {
        id: "w13_f1",
        name: "Definisi Integral Taktentu",
        pieces: ["∫f(x)dx", "=", "F(x)", "+", "C"],
        correctOrder: ["∫f(x)dx", "=", "F(x)", "+", "C"],
        hints: ["Hint: F adalah antiturunan dari f", "Hint: C adalah konstanta sembarang"],
        example: {
          question: "Hitung ∫(3x² - 2x + 1)dx.",
          solution: "∫(3x² - 2x + 1)dx = ∫3x² dx - ∫2x dx + ∫1 dx = x³ - x² + x + C."
        }
      },
      {
        id: "w13_f2",
        name: "Aturan Substitusi (Integral Taktentu)",
        pieces: ["∫f(g(x))", "g'(x)dx", "=", "∫f(u)du"],
        correctOrder: ["∫f(g(x))", "g'(x)dx", "=", "∫f(u)du"],
        hints: ["Hint: u = g(x), du = g'(x)dx", "Hint: cari bagian dalam yang kompleks untuk dijadikan u"],
        example: {
          question: "Hitung ∫x sin(x²) dx.",
          solution: "Misalkan u = x², maka du = 2x dx, jadi x dx = du/2. ∫x sin(x²) dx = (1/2)∫sin(u) du = -cos(u)/2 + C = -cos(x²)/2 + C."
        }
      },
      {
        id: "w13_f3",
        name: "Definisi Logaritma Natural",
        pieces: ["ln x", "=", "∫_1^x", "(1/t)", "dt"],
        correctOrder: ["ln x", "=", "∫_1^x", "(1/t)", "dt"],
        hints: ["Hint: ln didefinisikan sebagai integral fungsi 1/t dari 1 ke x", "Hint: ln 1 = 0 karena integral dari 1 ke 1 = 0"],
        example: {
          question: "Mengapa ln 1 = 0 berdasarkan definisi integral?",
          solution: "ln 1 = ∫_1^1 (1/t)dt = 0, karena batas atas = batas bawah. Juga: ln e = ∫_1^e (1/t)dt = 1 (ini adalah definisi bilangan e)."
        }
      },
      {
        id: "w13_f4",
        name: "Turunan Logaritma Natural",
        pieces: ["d/dx", "(ln x)", "=", "1/x"],
        correctOrder: ["d/dx", "(ln x)", "=", "1/x"],
        hints: ["Hint: ini langsung dari TDK-1 dan definisi ln", "Hint: berlaku untuk x > 0"],
        example: {
          question: "Tentukan f'(x) jika f(x) = ln(x² + 1).",
          solution: "Pakai chain rule: f'(x) = [1/(x²+1)] × 2x = 2x/(x²+1)."
        }
      },
      {
        id: "w13_f5",
        name: "Integral yang Menghasilkan ln",
        pieces: ["∫(1/x)dx", "=", "ln|x|", "+", "C"],
        correctOrder: ["∫(1/x)dx", "=", "ln|x|", "+", "C"],
        hints: ["Hint: ini adalah kasus khusus ∫xⁿ dx untuk n = -1", "Hint: jangan lupa nilai mutlak!"],
        example: {
          question: "Hitung ∫(5/x)dx.",
          solution: "∫(5/x)dx = 5∫(1/x)dx = 5 ln|x| + C."
        }
      },
      {
        id: "w13_f6",
        name: "Substitusi Logaritmik Tanpa Pemisalan",
        pieces: ["∫[f'(x)/f(x)]dx", "=", "ln", "|f(x)|", "+", "C"],
        correctOrder: ["∫[f'(x)/f(x)]dx", "=", "ln", "|f(x)|", "+", "C"],
        hints: ["Hint: pembilang adalah turunan dari penyebut", "Hint: identifikasi f(x) terlebih dahulu"],
        example: {
          question: "Hitung ∫(2x+3)/(x²+3x+1) dx.",
          solution: "Perhatikan: turunan (x²+3x+1) adalah (2x+3). Jadi ini berbentuk f'(x)/f(x). Hasilnya: ln|x²+3x+1| + C."
        }
      },
      {
        id: "w13_f7",
        name: "Turunan Fungsi Eksponensial Natural",
        pieces: ["d/dx", "(eˣ)", "=", "eˣ"],
        correctOrder: ["d/dx", "(eˣ)", "=", "eˣ"],
        hints: ["Hint: e^x adalah satu-satunya fungsi yang turunannya = dirinya sendiri", "Hint: ini sifat unik yang membuat e istimewa"],
        example: {
          question: "Tentukan f'(x) jika f(x) = 5e^x.",
          solution: "f'(x) = 5 × d/dx(e^x) = 5e^x. Turunan e^x tetap e^x!"
        }
      },
      {
        id: "w13_f8",
        name: "Turunan e pangkat f(x)",
        pieces: ["d/dx", "(e^f(x))", "=", "f'(x)", "×", "e^f(x)"],
        correctOrder: ["d/dx", "(e^f(x))", "=", "f'(x)", "×", "e^f(x)"],
        hints: ["Hint: pakai chain rule", "Hint: turunan 'luar' × turunan 'dalam'"],
        example: {
          question: "Tentukan d/dx(e^(3x²+1)).",
          solution: "d/dx(e^(3x²+1)) = (6x) × e^(3x²+1) = 6x e^(3x²+1)."
        }
      },
      {
        id: "w13_f9",
        name: "Integral Eksponensial Natural",
        pieces: ["∫eˣ dx", "=", "eˣ", "+", "C"],
        correctOrder: ["∫eˣ dx", "=", "eˣ", "+", "C"],
        hints: ["Hint: antiturunan e^x adalah e^x sendiri", "Hint: ini karena turunan e^x = e^x"],
        example: {
          question: "Hitung ∫3e^x dx.",
          solution: "∫3e^x dx = 3∫e^x dx = 3e^x + C."
        }
      },
      {
        id: "w13_f10",
        name: "Turunan Arcsin",
        pieces: ["d/dx", "(sin⁻¹ x)", "=", "1/", "√(1-x²)"],
        correctOrder: ["d/dx", "(sin⁻¹ x)", "=", "1/", "√(1-x²)"],
        hints: ["Hint: berlaku untuk -1 < x < 1", "Hint: ada akar kuadrat di penyebut"],
        example: {
          question: "Tentukan f'(x) jika f(x) = sin⁻¹(2x).",
          solution: "Pakai chain rule: f'(x) = [1/√(1-(2x)²)] × 2 = 2/√(1-4x²)."
        }
      },
      {
        id: "w13_f11",
        name: "Turunan Arctan",
        pieces: ["d/dx", "(tan⁻¹ x)", "=", "1/", "(1+x²)"],
        correctOrder: ["d/dx", "(tan⁻¹ x)", "=", "1/", "(1+x²)"],
        hints: ["Hint: berlaku untuk semua x real", "Hint: di penyebut ada 1 + x kuadrat (tidak ada akar)"],
        example: {
          question: "Tentukan d/dx(tan⁻¹(x³)).",
          solution: "Pakai chain rule: d/dx(tan⁻¹(x³)) = [1/(1+(x³)²)] × 3x² = 3x²/(1+x⁶)."
        }
      },
      {
        id: "w13_f12",
        name: "Integral yang Menghasilkan Arcsin",
        pieces: ["∫1/√(a²-x²)dx", "=", "sin⁻¹(x/a)", "+", "C"],
        correctOrder: ["∫1/√(a²-x²)dx", "=", "sin⁻¹(x/a)", "+", "C"],
        hints: ["Hint: kenali bentuk a² - x² di bawah akar", "Hint: a > 0"],
        example: {
          question: "Hitung ∫1/√(9-x²) dx.",
          solution: "Di sini a² = 9, jadi a = 3. ∫1/√(9-x²) dx = sin⁻¹(x/3) + C."
        }
      },
      {
        id: "w13_f13",
        name: "Integral yang Menghasilkan Arctan",
        pieces: ["∫1/(a²+x²)dx", "=", "(1/a)", "tan⁻¹(x/a)", "+", "C"],
        correctOrder: ["∫1/(a²+x²)dx", "=", "(1/a)", "tan⁻¹(x/a)", "+", "C"],
        hints: ["Hint: kenali bentuk a² + x² di penyebut", "Hint: ada faktor 1/a di depan hasil"],
        example: {
          question: "Hitung ∫1/(4+x²) dx.",
          solution: "Di sini a² = 4, jadi a = 2. ∫1/(4+x²) dx = (1/2) tan⁻¹(x/2) + C."
        }
      },
      {
        id: "w13_f14",
        name: "Sifat ln - Hasil Kali",
        pieces: ["ln(x·y)", "=", "ln x", "+", "ln y"],
        correctOrder: ["ln(x·y)", "=", "ln x", "+", "ln y"],
        hints: ["Hint: logaritma mengubah perkalian jadi penjumlahan", "Hint: berlaku untuk x > 0 dan y > 0"],
        example: {
          question: "Sederhanakan ln(3·e²).",
          solution: "ln(3·e²) = ln 3 + ln e² = ln 3 + 2. (Karena ln e = 1.)"
        }
      },
      {
        id: "w13_f15",
        name: "Sifat ln - Hasil Bagi",
        pieces: ["ln(x/y)", "=", "ln x", "-", "ln y"],
        correctOrder: ["ln(x/y)", "=", "ln x", "-", "ln y"],
        hints: ["Hint: logaritma mengubah pembagian jadi pengurangan", "Hint: berlaku untuk x > 0 dan y > 0"],
        example: {
          question: "Sederhanakan ln(e³/5).",
          solution: "ln(e³/5) = ln e³ - ln 5 = 3 - ln 5."
        }
      },
      {
        id: "w13_f16",
        name: "Sifat ln - Pangkat",
        pieces: ["ln(xʳ)", "=", "r", "·", "ln x"],
        correctOrder: ["ln(xʳ)", "=", "r", "·", "ln x"],
        hints: ["Hint: pangkat di dalam ln turun jadi pengali", "Hint: berlaku untuk x > 0, r bilangan real"],
        example: {
          question: "Sederhanakan ln(x⁵).",
          solution: "ln(x⁵) = 5 ln x."
        }
      },
      {
        id: "w13_f17",
        name: "Turunan ln(f(x)) - Aturan Rantai",
        pieces: ["d/dx", "[ln(f(x))]", "=", "f'(x)", "/", "f(x)"],
        correctOrder: ["d/dx", "[ln(f(x))]", "=", "f'(x)", "/", "f(x)"],
        hints: ["Hint: turunan ln(u) = 1/u, lalu dikalikan turunan u (aturan rantai)", "Hint: f'(x)/f(x) disebut 'logarithmic derivative'"],
        example: {
          question: "Tentukan d/dx [ln(x² + 1)].",
          solution: "Misalkan f(x) = x² + 1, maka f'(x) = 2x. Turunannya = f'(x)/f(x) = 2x/(x² + 1)."
        }
      },
      {
        id: "w13_f18",
        name: "Turunan Arccos",
        pieces: ["d/dx", "(cos⁻¹ x)", "=", "-1/", "√(1-x²)"],
        correctOrder: ["d/dx", "(cos⁻¹ x)", "=", "-1/", "√(1-x²)"],
        hints: ["Hint: mirip turunan arcsin tapi ada tanda minus", "Hint: domain: -1 < x < 1"],
        example: {
          question: "Tentukan d/dx [cos⁻¹(2x)].",
          solution: "Gunakan aturan rantai: d/dx[cos⁻¹(2x)] = -1/√(1-(2x)²) · 2 = -2/√(1-4x²)."
        }
      },
      {
        id: "w13_f19",
        name: "Integral ∫f'(x)eᶠ⁽ˣ⁾ dx",
        pieces: ["∫f'(x)", "·e^f(x) dx", "=", "e^f(x)", "+", "C"],
        correctOrder: ["∫f'(x)", "·e^f(x) dx", "=", "e^f(x)", "+", "C"],
        hints: ["Hint: ini integral substitusi dengan u = f(x)", "Hint: du = f'(x)dx, sehingga ∫eᵘdu = eᵘ + C"],
        example: {
          question: "Hitung ∫2x·e^(x²) dx.",
          solution: "Misalkan u = x², maka du = 2x dx. ∫2x·e^(x²) dx = ∫eᵘ du = eᵘ + C = e^(x²) + C."
        }
      }
    ]
  },

  14: {
    title: "Teknik Pengintegralan (2): Parsial & Pecahan Parsial",
    summary: `Week 14 hadir dengan dua teknik pengintegralan lanjutan yang akan bikin kamu bisa ngerjain integral yang sebelumnya kelihatan mustahil!

INTEGRAL PARSIAL itu kayak taktik "bagi dan kuasai." Rumusnya: ∫u dv = uv - ∫v du. Rumus ini berasal dari aturan turunan hasil kali: d/dx(uv) = u'v + uv', lalu diintegralkan.

Gimana cara milih u dan dv? Ada akronim LIATE yang membantu (dari prioritas tertinggi ke terendah): L = Logaritmik, I = Invers trigonometri, A = Aljabar (polinom), T = Trigonometri, E = Eksponensial. Jadikan u yang prioritasnya lebih tinggi, dv yang lebih rendah.

Contoh: ∫x sin x dx. Di sini u = x (Aljabar, lebih tinggi) dan dv = sin x dx (Trigonometri, lebih rendah). Maka du = dx dan v = -cos x. Hasilnya: x(-cos x) - ∫(-cos x)dx = -x cos x + sin x + C.

Kadang harus integral parsial DUA KALI, atau malah ketemu bentuk semula yang bisa dipindah ruas (kayak ∫e^x sin x dx).

DEKOMPOSISI PECAHAN PARSIAL adalah teknik untuk mengintegralkan fungsi rasional p(x)/q(x). Idenya: pecah penyebut yang rumit jadi pecahan-pecahan yang lebih sederhana, lalu integralkan masing-masing.

Ada 4 kasus berdasarkan faktor penyebut:
Kasus 1: Faktor linear berbeda-beda → pecah jadi A/(ax+b) + B/(cx+d)
Kasus 2: Faktor linear berulang → pecah jadi A/(ax+b) + B/(ax+b)² + ...
Kasus 3: Faktor kuadratik yang tidak bisa difaktorkan → pecah jadi (Ax+B)/(ax²+bx+c)
Kasus 4: Kombinasi kasus-kasus di atas.

Langkah kerjanya: faktorkan penyebut → tulis bentuk dekomposisi → samakan pembilang → cari nilai koefisien → integralkan tiap pecahan.`,
    formulas: [
      {
        id: "w14_f1",
        name: "Rumus Integral Parsial",
        pieces: ["∫u dv", "=", "uv", "-", "∫v du"],
        correctOrder: ["∫u dv", "=", "uv", "-", "∫v du"],
        hints: ["Hint: ini berasal dari aturan turunan hasil kali yang diintegralkan", "Hint: tulis u dan dv terlebih dahulu, lalu cari du dan v"],
        example: {
          question: "Hitung ∫x e^x dx menggunakan integral parsial.",
          solution: "Misalkan u = x → du = dx; dv = e^x dx → v = e^x. ∫x e^x dx = x e^x - ∫e^x dx = x e^x - e^x + C = e^x(x-1) + C."
        }
      },
      {
        id: "w14_f2",
        name: "Integral Parsial Tentu",
        pieces: ["∫_a^b u dv", "=", "[uv]_a^b", "-", "∫_a^b v du"],
        correctOrder: ["∫_a^b u dv", "=", "[uv]_a^b", "-", "∫_a^b v du"],
        hints: ["Hint: sama dengan integral parsial biasa, tapi evaluasi uv di batas a dan b", "Hint: jangan lupa batas integral di kedua suku"],
        example: {
          question: "Hitung ∫_1^e ln x dx.",
          solution: "u = ln x → du = (1/x)dx; dv = dx → v = x. ∫_1^e ln x dx = [x ln x]_1^e - ∫_1^e x·(1/x)dx = [x ln x]_1^e - ∫_1^e 1 dx = (e·1 - 1·0) - (e-1) = e - e + 1 = 1."
        }
      },
      {
        id: "w14_f3",
        name: "Dekomposisi Pecahan Parsial - Kasus 1 (Faktor Linear Berbeda)",
        pieces: ["p(x)/[(ax+b)(cx+d)]", "=", "A/(ax+b)", "+", "B/(cx+d)"],
        correctOrder: ["p(x)/[(ax+b)(cx+d)]", "=", "A/(ax+b)", "+", "B/(cx+d)"],
        hints: ["Hint: setiap faktor linear berbeda mendapat satu pecahan parsial", "Hint: pembilang adalah konstanta A, B, ..."],
        example: {
          question: "Dekomposisi: 2/(x² - x - 2).",
          solution: "x² - x - 2 = (x-2)(x+1). Maka 2/[(x-2)(x+1)] = A/(x-2) + B/(x+1). Kalikan kedua ruas dengan (x-2)(x+1): 2 = A(x+1) + B(x-2). Substitusi x=2: 2 = 3A → A=2/3. Substitusi x=-1: 2 = -3B → B=-2/3. Jadi 2/[(x-2)(x+1)] = (2/3)/(x-2) - (2/3)/(x+1)."
        }
      },
      {
        id: "w14_f4",
        name: "Dekomposisi Pecahan Parsial - Kasus 2 (Faktor Linear Berulang)",
        pieces: ["p(x)/(ax+b)^k", "=", "A₁/(ax+b)", "+", "A₂/(ax+b)²", "+...+", "A_k/(ax+b)^k"],
        correctOrder: ["p(x)/(ax+b)^k", "=", "A₁/(ax+b)", "+", "A₂/(ax+b)²", "+...+", "A_k/(ax+b)^k"],
        hints: ["Hint: faktor berulang menghasilkan beberapa pecahan dengan pangkat naik", "Hint: banyaknya pecahan = pangkat faktor linear tersebut"],
        example: {
          question: "Tulis bentuk dekomposisi untuk 3x/[x²(x-1)].",
          solution: "3x/[x²(x-1)] = A/x + B/x² + C/(x-1). Di sini x adalah faktor berulang (pangkat 2) sehingga menghasilkan dua suku: A/x dan B/x². Dan (x-1) adalah faktor linear berbeda menghasilkan satu suku: C/(x-1)."
        }
      },
      {
        id: "w14_f5",
        name: "Dekomposisi Pecahan Parsial - Kasus 3 (Faktor Kuadratik Tak Tereduksi)",
        pieces: ["p(x)/(ax²+bx+c)", "=", "(Ax+B)/", "(ax²+bx+c)"],
        correctOrder: ["p(x)/(ax²+bx+c)", "=", "(Ax+B)/", "(ax²+bx+c)"],
        hints: ["Hint: faktor kuadratik tak tereduksi: diskriminan b²-4ac < 0", "Hint: pembilang pecahan parsialnya adalah Ax+B (bukan konstanta)"],
        example: {
          question: "Tulis bentuk dekomposisi untuk x/(x²+4).",
          solution: "x²+4 tidak bisa difaktorkan (diskriminan 0-16 = -16 < 0). Maka x/(x²+4) = (Ax+B)/(x²+4). Ini sudah dalam bentuk paling sederhana: A=1, B=0. Hasilnya: ∫x/(x²+4)dx = (1/2)ln(x²+4) + C."
        }
      },
      {
        id: "w14_f6",
        name: "Integral ∫aˣ dx",
        pieces: ["∫aˣ dx", "=", "aˣ", "/", "ln a", "+", "C"],
        correctOrder: ["∫aˣ dx", "=", "aˣ", "/", "ln a", "+", "C"],
        hints: ["Hint: ini kebalikan dari turunan aˣ = aˣ ln a", "Hint: ada pembagi ln a karena turunan aˣ mengalikan ln a"],
        example: {
          question: "Hitung ∫3ˣ dx.",
          solution: "∫3ˣ dx = 3ˣ/ln 3 + C. Verifikasi: d/dx(3ˣ/ln 3) = (3ˣ · ln 3)/ln 3 = 3ˣ. Benar!"
        }
      },
      {
        id: "w14_f7",
        name: "Integral Parsial - Pilihan u dan dv",
        pieces: ["LIATE:", "Logaritma → Invers Trig", "→ Aljabar", "→ Trigonometri", "→ Eksponensial"],
        correctOrder: ["LIATE:", "Logaritma → Invers Trig", "→ Aljabar", "→ Trigonometri", "→ Eksponensial"],
        hints: ["Hint: LIATE adalah urutan prioritas memilih u untuk integral parsial", "Hint: pilih u dari yang paling kiri dalam daftar LIATE"],
        example: {
          question: "Untuk ∫x·eˣ dx, mana yang menjadi u dan dv menurut LIATE?",
          solution: "Menurut LIATE: x (Aljabar) dipilih sebagai u, eˣ dx sebagai dv. Maka u = x, du = dx, v = eˣ. Hasilnya: x·eˣ - ∫eˣ dx = x·eˣ - eˣ + C = eˣ(x-1) + C."
        }
      }
    ]
  },

  15: {
    title: "Aplikasi Integral: Luas Daerah & Nilai Rataan",
    summary: `Week 15 adalah panen! Semua yang kita pelajari soal integral sekarang kita terapkan ke masalah nyata yang visualnya jelas dan menarik.

LUAS DAERAH DI BIDANG DATAR adalah aplikasi paling intuitif dari integral. Ada beda penting antara integral tentu dan luas daerah: integral tentu bisa negatif (kalau grafiknya di bawah sumbu-x), tapi luas selalu positif. Makanya luas dihitung dengan ∫|f(x)|dx, bukan ∫f(x)dx!

Untuk luas antara dua kurva, ada dua metode:

Metode SEKATAN TEGAK (paling umum): potong daerah secara vertikal. Luas = ∫_a^b [f(x) - g(x)] dx, di mana f(x) adalah kurva atas dan g(x) adalah kurva bawah. Kuncinya: cari titik potong kedua kurva dulu untuk tahu batas integral a dan b!

Metode SEKATAN DATAR: potong daerah secara horizontal. Berguna kalau daerahnya lebih mudah dinyatakan dalam fungsi y. Luas = ∫_c^d [f(y) - g(y)] dy, di mana f(y) adalah kurva kanan dan g(y) adalah kurva kiri. Batasnya adalah y (bukan x)!

Penting: sebelum ngitung, SELALU bikin sketsa daerahnya dulu. Tanpa sketsa, mudah salah menentukan mana kurva atas/bawah atau kiri/kanan.

NILAI RATAAN FUNGSI adalah konsep yang elegan. Bayangin kamu mau tau rata-rata suhu di Jakarta sepanjang hari. Kamu ambil banyak sampel suhu, jumlahkan, bagi dengan banyaknya sampel. Kalau sampel makin banyak (n → ∞), hasilnya mendekati ̅f = (1/(b-a)) ∫_a^b f(x)dx.

TEOREMA NILAI RATAAN UNTUK INTEGRAL (TNR) juga keren: selalu ada titik c di [a,b] di mana nilai fungsi PERSIS sama dengan nilai rata-ratanya. Artinya rata-rata itu bukan sekadar konsep abstrak — ada titik nyata yang mewakilinya!`,
    formulas: [
      {
        id: "w15_f1",
        name: "Luas Daerah antara Kurva dan Sumbu-x",
        pieces: ["A", "=", "∫_a^b", "|f(x)|", "dx"],
        correctOrder: ["A", "=", "∫_a^b", "|f(x)|", "dx"],
        hints: ["Hint: gunakan nilai mutlak agar luas selalu positif", "Hint: pecah di titik nol fungsi jika diperlukan"],
        example: {
          question: "Hitung luas daerah yang dibatasi y = x² - 1, sumbu-x, x=0, x=2.",
          solution: "f(x) = x²-1 = 0 di x=1. Untuk 0≤1≤1: f(x) ≤0, untuk 1≤x≤2: f(x) ≥0. A = ∫_0^1 |x²-1|dx + ∫_1^2 |x²-1|dx = ∫_0^1 (1-x²)dx + ∫_1^2 (x²-1)dx = [x-x³/3]_0^1 + [x³/3-x]_1^2 = 2/3 + 4/3 = 2."
        }
      },
      {
        id: "w15_f2",
        name: "Luas Daerah antara Dua Kurva (Sekatan Tegak)",
        pieces: ["A", "=", "∫_a^b", "[f(x) - g(x)]", "dx"],
        correctOrder: ["A", "=", "∫_a^b", "[f(x) - g(x)]", "dx"],
        hints: ["Hint: f(x) adalah kurva atas, g(x) kurva bawah", "Hint: tentukan batas a dan b dari titik potong kedua kurva"],
        example: {
          question: "Hitung luas daerah yang dibatasi y = x² dan y = x.",
          solution: "Titik potong: x² = x → x(x-1) = 0 → x=0 dan x=1. Pada [0,1]: x ≥ x² (kurva atas = y=x). A = ∫_0^1 (x - x²)dx = [x²/2 - x³/3]_0^1 = 1/2 - 1/3 = 1/6."
        }
      },
      {
        id: "w15_f3",
        name: "Luas Daerah antara Dua Kurva (Sekatan Datar)",
        pieces: ["A", "=", "∫_c^d", "[f(y) - g(y)]", "dy"],
        correctOrder: ["A", "=", "∫_c^d", "[f(y) - g(y)]", "dy"],
        hints: ["Hint: f(y) adalah kurva kanan, g(y) kurva kiri", "Hint: batas c dan d adalah nilai y (bukan x)"],
        example: {
          question: "Hitung luas daerah yang dibatasi x = y² dan x = y + 2 dengan sekatan datar.",
          solution: "Titik potong: y² = y+2 → y²-y-2=0 → (y-2)(y+1)=0 → y=-1,2. Pada [-1,2]: y+2 ≥ y² (kurva kanan = x=y+2). A = ∫_-1^2 (y+2 - y²)dy = [y²/2 + 2y - y³/3]_-1^2 = (2+4-8/3) - (1/2-2+1/3) = 10/3 + 7/6 = 9/2."
        }
      },
      {
        id: "w15_f4",
        name: "Nilai Rataan Fungsi",
        pieces: ["f_avg", "=", "1/(b-a)", "∫_a^b", "f(x)dx"],
        correctOrder: ["f_avg", "=", "1/(b-a)", "∫_a^b", "f(x)dx"],
        hints: ["Hint: seperti rata-rata biasa, tapi untuk fungsi kontinu", "Hint: bagi integral dengan panjang selang (b-a)"],
        example: {
          question: "Tentukan nilai rataan f(x) = x² + 1 pada [-1, 2].",
          solution: "f_avg = 1/(2-(-1)) ∫_{-1}^2 (x²+1)dx = (1/3)[x³/3 + x]_{-1}^2 = (1/3)[(8/3+2) - (-1/3-1)] = (1/3)[8/3+2+1/3+1] = (1/3)[3+3] = 2."
        }
      },
      {
        id: "w15_f5",
        name: "Teorema Nilai Rataan untuk Integral (TNR-Integral)",
        pieces: ["f(c)", "=", "1/(b-a)", "∫_a^b", "f(x)dx"],
        correctOrder: ["f(c)", "=", "1/(b-a)", "∫_a^b", "f(x)dx"],
        hints: ["Hint: ada c ∈ [a,b] sehingga f(c) sama dengan nilai rataan", "Hint: nilai rataan pasti dicapai oleh fungsi kontinu di suatu titik"],
        example: {
          question: "Tentukan c dari TNR-Integral untuk f(x) = x² + 1 pada [-1,2] (diketahui f_avg = 2).",
          solution: "Kita cari c sehingga f(c) = 2. f(c) = c² + 1 = 2 → c² = 1 → c = ±1. Karena c ∈ [-1,2], keduanya valid: c = -1 dan c = 1. TNR menjamin paling tidak satu nilai c, tapi boleh lebih!"
        }
      }
    ]
  }
};
