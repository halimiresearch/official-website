# Product Requirements Document (PRD)

## Halimi Research — Corporate Landing Page

| Informasi | Detail |
|---|---|
| Produk | Website company profile dan landing page Halimi Research |
| Domain | `halimiresearch.com` |
| Dokumen | PRD.md |
| Versi | 1.0 |
| Status | Draft siap diimplementasikan |
| Bahasa utama | Inggris |
| Target pasar | Global |
| Platform | Web, responsive |

---

## 1. Ringkasan Produk

Halimi Research membutuhkan website resmi yang memperkenalkan perusahaan, menjelaskan arah riset dan inovasinya, menampilkan pekerjaan atau produk yang sudah benar-benar tersedia, serta menyediakan jalur kontak bagi calon mitra, klien, peneliti, dan komunitas teknologi.

Website harus terasa seperti perusahaan riset teknologi yang serius dan punya visi jangka panjang—bukan template agensi digital generik. Arah visual menggabungkan **editorial classic, academic, understated luxury, dan modern technology**: tipografi tegas, ruang kosong yang lega, layout terstruktur, garis pemisah halus, palet warna hangat-netral, serta aksen gelap yang kuat.

Referensi inspirasi struktur dan presentasi: [nousresearch.com](https://nousresearch.com/). Ambil inspirasi dari hierarki konten yang jelas—identitas dan misi, area fokus, produk/proyek, pembaruan, lalu footer—tanpa menyalin aset, copywriting, logo, ilustrasi, atau identitas visual khas Nous Research.

## 2. Latar Belakang dan Masalah

Perusahaan baru membutuhkan satu sumber informasi publik yang kredibel. Tanpa website resmi, pengunjung sulit memahami apa itu Halimi Research, bidang apa yang dieksplorasi, apa yang sedang dibangun, dan bagaimana cara menghubunginya.

Website ini menjadi **fondasi identitas digital** untuk mendukung pengenalan brand global, membangun kepercayaan, dan menyediakan tempat resmi untuk memperkenalkan riset serta produk ketika sudah layak dipublikasikan.

## 3. Tujuan Produk

1. Memperkenalkan Halimi Research sebagai **research and innovation company** yang mengeksplorasi software, artificial intelligence, cybersecurity, dan digital infrastructure.
2. Menjelaskan visi, prinsip, dan area fokus perusahaan secara singkat tetapi meyakinkan.
3. Menyediakan tempat untuk menampilkan produk, eksperimen, riset, open-source project, atau publikasi yang sudah terverifikasi.
4. Mempermudah pengunjung menghubungi perusahaan atau membuka kanal resmi yang tersedia.
5. Menjadi fondasi website yang dapat dikembangkan tanpa harus mendesain ulang dari awal.

## 4. Bukan Tujuan (Non-Goals)

Versi pertama **tidak** mencakup:

- Dashboard, akun pengguna, autentikasi, atau fitur aplikasi web.
- Backend/API atau database khusus untuk konten website.
- CMS penuh, blog engine, atau sistem publikasi kompleks.
- E-commerce, pembayaran, atau layanan berlangganan.
- Klaim tentang produk, pelanggan, tim, pendanaan, jumlah pengguna, benchmark, atau pencapaian yang belum dapat dibuktikan.
- Animasi berat, WebGL/3D, video hero autoplay, atau efek visual yang mengorbankan performa.

Blog, CMS, halaman karier, multi-bahasa, dan halaman detail produk dapat dipertimbangkan setelah kebutuhan konten benar-benar ada.

## 5. Pengguna dan Kebutuhan

### Audiens utama

- **Technology builders:** developer, engineer, dan peneliti yang ingin memahami area eksplorasi Halimi Research.
- **Potential collaborators:** individu, komunitas, universitas, atau perusahaan yang ingin menjajaki kolaborasi.
- **Potential clients and partners:** organisasi yang mencari mitra untuk software, AI, keamanan, atau infrastruktur digital.
- **General visitors:** orang yang menemukan brand melalui pencarian, publikasi, atau media sosial.

### Kebutuhan pengguna

- Dalam beberapa detik, pengunjung dapat memahami apa itu Halimi Research.
- Pengunjung dapat menemukan area fokus tanpa membaca paragraf yang panjang.
- Pengunjung bisa membedakan kemampuan/arah riset dari produk yang memang sudah dirilis.
- Pengunjung dapat membuka detail proyek atau menghubungi perusahaan dengan mudah.
- Website nyaman dipakai pada desktop, tablet, dan ponsel.

## 6. Positioning dan Pesan Brand

### Positioning

**Halimi Research is an independent research and innovation company exploring software, artificial intelligence, cybersecurity, and digital infrastructure.**

Gunakan kata *exploring*, *researching*, *building*, atau *developing* sesuai status nyata pekerjaan. Hindari menyiratkan bahwa Halimi Research telah memimpin industri, memiliki laboratorium besar, atau merilis teknologi tertentu bila belum ada bukti publiknya.

### Rekomendasi pesan utama

**Headline utama:**

> Researching what comes next.

**Deskripsi pendukung:**

> Halimi Research explores ideas and builds technology across software, artificial intelligence, cybersecurity, and digital infrastructure—with a focus on useful, resilient systems.

**Alternatif headline:**

- Independent thinking. Practical innovation.
- Research at the edge of technology.
- Exploring ideas. Building what matters.

Headline dan deskripsi harus dapat diubah dari satu file konfigurasi konten, bukan tersebar di banyak komponen.

### Prinsip komunikasi

- **Thoughtful:** menunjukkan proses berpikir dan riset, bukan sekadar menjual layanan.
- **Precise:** klaim spesifik, seperlunya, dan dapat dipertanggungjawabkan.
- **Quiet confidence:** profesional tanpa kata-kata hiperbolis seperti *revolutionary*, *world-leading*, atau *the future of everything*.
- **Global-ready:** copy utama dalam bahasa Inggris yang jelas dan natural.

## 7. Arah Visual dan Brand System

### 7.1 Konsep desain

**Classic research institution meets modern technology company.** Website harus terasa tenang, intelektual, premium, dan tahan lama. Hindari tampilan startup generik yang penuh gradient neon, kartu membulat berlebihan, glassmorphism, dan animasi dekoratif tanpa tujuan.

### 7.2 Palet warna awal

Palet di bawah adalah titik awal dan boleh disesuaikan saat implementasi, selama karakter classic, tenang, dan kontras tetap terjaga.

| Token | Warna | Hex | Penggunaan |
|---|---|---|---|
| `--color-paper` | Warm Ivory | `#F4F1E9` | Latar utama |
| `--color-surface` | Soft Linen | `#EAE5DA` | Latar section alternatif |
| `--color-ink` | Deep Charcoal | `#191B19` | Teks utama, footer atau section gelap |
| `--color-muted` | Stone Gray | `#706F68` | Teks sekunder |
| `--color-accent` | Antique Brass | `#9A7B4F` | Aksen kecil, hover, detail garis |
| `--color-border` | Warm Gray | `#D5CFC3` | Border, divider, garis grid |
| `--color-white` | Clean White | `#FFFFFF` | Permukaan kontras seperlunya |

Gunakan ivory dan charcoal sebagai warna dominan; brass hanya sebagai aksen. Jangan menggunakan warna aksen untuk paragraf panjang. Semua kombinasi teks/latar harus tetap terbaca dan lolos pemeriksaan kontras aksesibilitas.

### 7.3 Tipografi

- **Display/headline:** serif editorial yang matang, misalnya `Cormorant Garamond`, `Instrument Serif`, atau pilihan sistem yang sejenis.
- **Body/UI:** sans-serif modern dan netral, misalnya `Inter`, `Geist`, atau system sans-serif.
- Gunakan kontras antara serif pada headline dan sans-serif pada navigasi, label, serta body text.
- Batasi maksimal dua keluarga font utama; gunakan fallback yang layak dan strategi loading yang tidak menghambat render.
- Headline harus besar tetapi tetap terukur di layar ponsel; hindari teks yang terpotong atau menyebabkan horizontal overflow.

### 7.4 Layout dan elemen visual

- Grid editorial dengan lebar konten terkontrol dan whitespace lega.
- Garis divider tipis untuk menegaskan perpindahan section.
- Sudut elemen cenderung persegi atau sedikit membulat; hindari bentuk pill untuk semua elemen.
- Navigasi sederhana dan tidak terlalu tinggi.
- Ikon seperlunya; jangan mengganti semua konsep dengan ikon generik.
- Gunakan wordmark berbasis teks **HALIMI RESEARCH** sebagai identitas awal bila logo final belum tersedia.
- Visual proyek sebaiknya berupa screenshot, diagram, atau artwork orisinal yang benar-benar relevan. Jika belum ada aset, prioritaskan tipografi dan layout daripada gambar stok dekoratif.

### 7.5 Motion

Animasi bersifat opsional dan subtil: transisi warna, underline, atau kemunculan elemen yang ringan. Hormati `prefers-reduced-motion`. Konten inti harus langsung tersedia tanpa menunggu animasi.

## 8. Struktur Website dan Konten

Versi pertama berupa **single-page landing page** dengan anchor navigation. Struktur section wajib:

### 8.1 Header / Navigation

- Wordmark `HALIMI RESEARCH`.
- Tautan anchor: `About`, `Focus Areas`, `Selected Work`, dan `Contact`.
- CTA kecil `Get in touch`.
- Header tetap sederhana; boleh sticky jika tidak menutupi konten dan tidak memakan banyak ruang di ponsel.
- Navigasi mobile menggunakan menu yang jelas, dapat ditutup, dan dapat digunakan dengan keyboard.

### 8.2 Hero

Tujuan: menyampaikan identitas dan positioning perusahaan dengan cepat.

Elemen:

- Eyebrow kecil: `RESEARCH & INNOVATION`.
- Headline: `Researching what comes next.`
- Deskripsi 1–2 kalimat tentang fokus Halimi Research.
- CTA utama: `Explore our work` → scroll ke Selected Work.
- CTA sekunder: `About Halimi Research` → scroll ke About.
- Elemen visual editorial opsional, misalnya typographic mark, garis koordinat abstrak, atau pola geometris sederhana. Hindari visual AI generik seperti kepala robot, otak neon, atau globe digital stok.

### 8.3 About / Mission

- Judul section: `Independent by nature. Practical by design.` atau copy setara.
- Ringkasan perusahaan dalam satu paragraf pendek.
- Pernyataan misi: mengeksplorasi dan membangun teknologi yang bermanfaat, aman, dan dapat diandalkan.
- Jangan menampilkan sejarah, lokasi kantor, ukuran tim, atau struktur organisasi yang belum pasti.

### 8.4 Focus Areas

Tampilkan empat area fokus sebagai daftar editorial atau grid sederhana:

1. **Software Engineering** — aplikasi, developer tools, dan sistem perangkat lunak.
2. **Artificial Intelligence** — sistem AI, agent, automation, dan penerapan AI yang bertanggung jawab.
3. **Cybersecurity** — keamanan aplikasi, praktik secure-by-design, dan ketahanan sistem.
4. **Digital Infrastructure** — cloud, Linux, deployment, networking, dan infrastruktur yang andal.

Setiap area memiliki judul dan deskripsi singkat. Area fokus adalah cakupan eksplorasi, bukan klaim bahwa semua layanan atau produk sudah tersedia secara komersial.

### 8.5 Selected Work / Projects

- Area untuk menampilkan produk, eksperimen, riset, repositori open-source, atau tulisan yang sudah benar-benar ada.
- Setiap item, jika tersedia, memiliki nama, kategori, deskripsi singkat, status, dan tautan yang relevan.
- Status dapat berupa `Research`, `In Development`, `Open Source`, atau `Released` hanya bila sesuai fakta.
- Jangan membuat proyek fiktif untuk mengisi ruang. Jika belum ada proyek publik yang siap ditampilkan, gunakan tampilan editorial `Work in progress` yang jujur atau sembunyikan section ini hingga ada konten yang layak.
- Hindari statistik dan badge prestasi yang tidak punya sumber.

### 8.6 Principles / Approach

Tampilkan 3 prinsip ringkas, misalnya:

- **Research-led:** mulai dari pemahaman masalah, eksperimen, dan evaluasi.
- **Built with care:** mengutamakan kegunaan, maintainability, dan keamanan.
- **Open to collaboration:** terbuka pada ide dan kolaborasi yang relevan.

Prinsip ini merupakan nilai kerja, bukan klaim sertifikasi atau jaminan hasil.

### 8.7 Updates (Opsional)

- Section hanya ditampilkan jika ada pengumuman, tulisan, rilis, atau pembaruan nyata.
- Untuk MVP, pembaruan boleh berupa daftar statis yang diatur melalui file konten.
- Jangan membuat tanggal, berita, atau aktivitas seolah-olah sudah terjadi.
- Jika belum ada pembaruan, section dapat ditiadakan tanpa meninggalkan ruang kosong.

### 8.8 Contact / Collaboration

- Judul ajakan yang sederhana, misalnya `Have a question or an idea worth exploring?`
- Tampilkan alamat email publik atau link kanal resmi hanya setelah nilainya dikonfigurasi dan telah diuji.
- Email, GitHub, LinkedIn, dan kanal sosial lainnya bersifat opsional serta harus memakai URL yang benar.
- Jangan menampilkan placeholder seperti `[PUBLIC_CONTACT_EMAIL]` di website produksi.
- Untuk MVP, gunakan tautan email (`mailto:`) atau tautan kanal eksternal; contact form dengan backend tidak diwajibkan.

### 8.9 Footer

- Wordmark `HALIMI RESEARCH`.
- Kalimat deskripsi sangat singkat.
- Tautan navigasi dan kanal resmi yang sudah tersedia.
- Copyright menggunakan tahun berjalan secara otomatis.
- Link `Privacy` atau `Terms` hanya ditampilkan bila halaman tersebut sudah tersedia; jangan membuat link mati.

## 9. Fitur dan Persyaratan Fungsional

| ID | Requirement | Prioritas |
|---|---|---|
| FR-01 | Landing page menampilkan identitas, positioning, dan CTA utama pada area awal halaman. | Must |
| FR-02 | Navigasi header mengarah ke section yang benar melalui anchor. | Must |
| FR-03 | Seluruh section inti tersusun sesuai urutan pada dokumen ini atau urutan final yang konsisten. | Must |
| FR-04 | Link eksternal dan CTA hanya menggunakan tujuan valid yang telah dikonfigurasi. | Must |
| FR-05 | Informasi brand dan konten utama dikelola melalui satu sumber konfigurasi konten yang mudah diperbarui. | Must |
| FR-06 | Layout beradaptasi dengan desktop, tablet, dan mobile tanpa horizontal overflow. | Must |
| FR-07 | Menu mobile dapat dioperasikan menggunakan keyboard dan dapat ditutup dengan mudah. | Must |
| FR-08 | Tautan fokus/hover memiliki feedback visual yang jelas. | Must |
| FR-09 | Bagian Selected Work dan Updates dapat disembunyikan jika belum memiliki konten yang valid. | Must |
| FR-10 | Tahun copyright diperbarui otomatis. | Should |
| FR-11 | Animasi ringan mendukung preferensi reduced motion. | Should |
| FR-12 | Struktur konten memungkinkan penambahan halaman proyek atau riset di kemudian hari. | Should |

## 10. Persyaratan Non-Fungsional

### Performa

- Utamakan rendering statis/SSG karena website bersifat company profile dan tidak membutuhkan data dinamis pada MVP.
- Minimalkan JavaScript client-side dan dependensi tambahan.
- Hindari video autoplay dan library animasi berat.
- Optimalkan gambar, gunakan format modern bila sesuai, ukuran responsif, serta lazy loading untuk gambar di luar viewport awal.
- Target Core Web Vitals yang baik; sebagai sasaran evaluasi, usahakan LCP ≤ 2,5 detik, INP ≤ 200 ms, dan CLS ≤ 0,1 pada kondisi pengujian yang wajar.

### Aksesibilitas

- Gunakan elemen HTML semantik (`header`, `nav`, `main`, `section`, `footer`) dan hierarki heading yang benar.
- Semua kontrol interaktif bisa diakses dengan keyboard dan memiliki focus state yang terlihat.
- Beri teks alternatif yang bermakna pada gambar informatif; gambar dekoratif menggunakan alt kosong.
- Jangan menyampaikan informasi hanya melalui warna.
- Kontras teks/latar memenuhi WCAG AA untuk ukuran teks yang relevan.
- Hormati pengaturan `prefers-reduced-motion`.

### Responsivitas

- Layout diuji setidaknya pada lebar viewport 360 px, 768 px, 1024 px, dan 1440 px.
- Body tidak mengalami horizontal overflow pada ukuran tersebut.
- Heading, grid, navigasi, dan CTA tetap terbaca serta dapat digunakan dengan sentuhan.

### Keamanan dan privasi

- Tidak mengumpulkan data pengguna yang tidak diperlukan.
- Tidak memasang analytics, tracker, atau cookie non-esensial tanpa kebutuhan dan konfigurasi yang jelas.
- Tidak menyimpan secret/API key di sisi client atau repository.
- Jika analytics atau formulir ditambahkan di masa depan, dokumentasikan data yang dikumpulkan dan kebijakan privasinya.
- Pastikan semua dependensi dan tautan eksternal yang digunakan relevan dan terawat.

### SEO dan metadata

- Setiap halaman memiliki title dan meta description yang deskriptif.
- Konfigurasikan canonical URL untuk `https://halimiresearch.com/` setelah domain dan HTTPS siap.
- Sediakan Open Graph dan Twitter/X card metadata dengan gambar brand yang sah.
- Sertakan favicon dan metadata theme color.
- Buat `sitemap.xml` dan `robots.txt` jika didukung oleh stack yang digunakan.
- Gunakan satu H1 utama dan heading section yang berurutan.
- Pastikan konten penting tersedia dalam HTML dan tidak bergantung pada JavaScript agar dapat dibaca crawler.
- Jangan menambahkan schema organisasi dengan alamat, kontak, atau informasi legal yang belum dikonfirmasi.

## 11. Rekomendasi Implementasi

Stack rekomendasi untuk landing page ringan:

- **Framework:** Next.js dengan App Router.
- **Language:** TypeScript.
- **Styling:** Tailwind CSS atau CSS biasa dengan design tokens; pilih satu pendekatan yang konsisten.
- **Content:** file konfigurasi TypeScript/JSON/MDX sederhana untuk identitas, link, area fokus, proyek, dan updates.
- **Hosting:** platform yang mendukung deployment statis atau rendering ringan; pilih sesuai infrastruktur yang sudah tersedia.
- **Backend/database:** tidak dibutuhkan untuk MVP.

Jika repository sudah memiliki stack yang berjalan, ikuti stack tersebut selama semua acceptance criteria dapat dipenuhi. Jangan menambahkan database, CMS, UI framework, atau library animasi hanya untuk landing page sederhana.

### Struktur file yang disarankan

```text
app/
  layout.tsx
  page.tsx
  globals.css
components/
  site-header.tsx
  site-footer.tsx
  section-heading.tsx
  focus-area-item.tsx
  project-item.tsx
content/
  site-config.ts
public/
  favicon.svg
  og-image.png
```

Struktur ini merupakan saran, bukan kewajiban. Sesuaikan dengan pola repository yang sudah ada.

## 12. Pengelolaan Konten

Semua konten yang mudah berubah sebaiknya diletakkan pada satu sumber konfigurasi, minimal mencakup:

- Nama dan deskripsi brand.
- Headline dan subheadline hero.
- Daftar navigasi.
- Fokus riset.
- Daftar proyek atau publikasi.
- Kanal kontak dan sosial.
- Metadata SEO.

Sediakan nilai kosong atau mekanisme untuk menyembunyikan item opsional. Hindari meng-render label atau tombol jika URL tujuannya tidak tersedia. Konten yang belum diverifikasi tidak boleh dipublikasikan hanya demi memenuhi layout.

## 13. Acceptance Criteria

Pekerjaan MVP dianggap selesai apabila:

1. Pengunjung dapat memahami Halimi Research, area fokusnya, dan langkah menghubungi perusahaan tanpa harus menebak.
2. Semua section wajib tampil dengan copy yang konsisten, ringkas, dan berbahasa Inggris.
3. Desain menampilkan karakter editorial klasik dan tech-forward melalui tipografi, whitespace, grid, garis halus, dan palet yang terkontrol.
4. Tidak ada aset, copywriting, logo, atau ilustrasi khas Nous Research yang disalin. Referensi hanya digunakan untuk arah presentasi dan arsitektur informasi.
5. Semua anchor, tombol, dan link yang ditampilkan bekerja dengan tujuan yang benar.
6. Konten proyek, publikasi, kontak, dan sosial tidak memuat data contoh atau placeholder di production build.
7. Tampilan diuji pada viewport mobile, tablet, dan desktop yang disebutkan di atas, tanpa horizontal overflow atau elemen yang bertumpuk.
8. Navigasi, link, dan kontrol interaktif dapat digunakan dengan keyboard serta memiliki focus state.
9. Metadata dasar, favicon, Open Graph, canonical, sitemap, dan robots telah dikonfigurasi sesuai dukungan stack dan status domain.
10. Tidak ada error console yang signifikan, broken link internal, gambar rusak, atau dependensi yang tidak dibutuhkan.
11. Performa dan aksesibilitas telah diperiksa dengan tool yang tersedia; isu mayor dicatat dan diperbaiki sebelum rilis.
12. Semua informasi faktual dapat dipertanggungjawabkan dan tidak mengandung klaim perusahaan yang belum terbukti.

## 14. Prioritas MVP

### P0 — Wajib untuk rilis pertama

- Header dan navigasi.
- Hero dengan positioning dan CTA.
- About / Mission.
- Focus Areas.
- Selected Work yang bisa disembunyikan bila belum ada konten valid.
- Contact.
- Footer.
- Responsive layout, metadata dasar, serta accessibility/performance checks.

### P1 — Setelah fondasi stabil

- Updates atau research notes.
- Halaman detail untuk proyek/publikasi yang telah dirilis.
- OG image khusus dan penyempurnaan aset visual.
- Analytics yang minim data dan menghormati privasi, bila memang dibutuhkan.

### P2 — Bukan target MVP

- CMS, multilingual, careers page, contact form ber-backend, search, newsletter, dan animasi kompleks.

## 15. Risiko dan Mitigasi

| Risiko | Dampak | Mitigasi |
|---|---|---|
| Belum banyak proyek publik | Website terasa kosong atau berlebihan klaim | Tonjolkan misi dan area fokus; tampilkan hanya pekerjaan nyata. |
| Kontak publik belum disiapkan | Calon mitra tidak dapat menghubungi | Konfirmasi email/kanal sebelum rilis dan sembunyikan CTA yang belum siap. |
| Desain terlalu mirip referensi | Identitas brand kurang orisinal | Ambil inspirasi dari hierarchy dan kesederhanaan; buat copy, aset, komposisi, dan detail visual sendiri. |
| Animasi/aset terlalu berat | Loading lambat dan UX menurun | Utamakan CSS ringan, teks, dan gambar yang dioptimalkan. |
| Klaim terlalu ambisius | Kepercayaan menurun | Gunakan bahasa yang sesuai tahap perusahaan dan audit copy sebelum rilis. |

## 16. Keputusan yang Perlu Dikonfirmasi Sebelum Go-Live

- Alamat email publik dan tautan kanal resmi yang benar.
- Copy final headline, misi, dan deskripsi perusahaan.
- Apakah sudah ada proyek, repositori, eksperimen, atau publikasi yang dapat ditampilkan.
- Aset logo/wordmark dan gambar Open Graph final.
- Stack serta target hosting yang akan digunakan.
- Status konfigurasi domain, HTTPS, dan redirect `www` atau non-`www`.

Hal-hal ini tidak menghalangi pembuatan layout awal, tetapi harus diselesaikan atau sengaja dihilangkan sebelum website dipublikasikan.

## 17. Referensi

- **Visual dan arsitektur informasi:** [Nous Research — nousresearch.com](https://nousresearch.com/)
- **Domain brand:** `halimiresearch.com`

Referensi dipakai sebagai inspirasi umum untuk penyajian identitas, misi, area riset, produk/pekerjaan, pembaruan, dan navigasi. Implementasi Halimi Research harus memiliki identitas, tulisan, dan aset visual orisinal.
