import { site } from "@/content/site";
import type { Locale } from "./i18n";

type NavChild = { label: string; href: string; description: string };
type NavGroup = { label: string; children: NavChild[] };

const enNav: NavGroup[] = site.nav;

const idNav: NavGroup[] = [
  {
    label: "Riset",
    children: [
      {
        label: "Catatan Riset",
        href: "/notes",
        description: "Tulisan dari apa yang kami baca, uji, dan bangun.",
      },
      {
        label: "Area Fokus",
        href: "/about#focus",
        description: "Bidang-bidang yang kami tekuni.",
      },
    ],
  },
  {
    label: "Produk",
    children: [
      {
        label: "HalimiSOC",
        href: "/products/halimisoc",
        description: "Operasi keamanan untuk tim kecil.",
      },
      {
        label: "Semua produk",
        href: "/products",
        description: "Semua yang sedang kami bangun.",
      },
    ],
  },
  {
    label: "Karier",
    children: [
      {
        label: "Bekerja dengan kami",
        href: "/careers",
        description: "Cara bergabung atau berkolaborasi dengan tim.",
      },
    ],
  },
  {
    label: "Tentang HalimiResearch",
    children: [
      {
        label: "Info Perusahaan",
        href: "/about",
        description: "Siapa kami, cara kami bekerja, dan apa yang kami yakini.",
      },
      {
        label: "Kontak",
        href: "/contact",
        description: "Mulai percakapan dengan kami.",
      },
    ],
  },
];

const en = {
  locale: "en" as Locale,
  brand: {
    wordmark: site.brand.wordmark,
    homeAria: "Halimi Research, home",
    shortDescription: site.brand.shortDescription,
  },
  header: {
    nav: enNav,
    primaryAria: "Primary",
    mobileAria: "Mobile",
    menu: "Menu",
    close: "Close",
    skip: "Skip to content",
    languageAria: "Switch language",
  },
  footer: {
    products: "Products",
    research: "Research",
    company: "Company",
    researchNotes: "Research Notes",
    corporateInfo: "Corporate Info",
    careers: "Careers",
    contact: "Contact",
    home: "Home",
    rights: "Halimi Research. All rights reserved.",
    tagline: "Research and Innovation",
  },
  home: {
    headline: site.home.headline,
    description: site.home.description,
    primaryCta: site.home.primaryCta.label,
    secondaryCta: site.home.secondaryCta.label,
    scroll: "Scroll",
    aboutIndex: "About",
    aboutLink: "Corporate info",
    productsIndex: "Products",
    learnMore: "Learn more",
    notesIndex: "Research",
    notesTitle: "Research notes",
    notesIntro:
      "Short write-ups from what we are reading, testing, and building.",
    readNote: "Read note",
    readAllNotes: "Read all research notes",
  },
  about: {
    title: site.about.title,
    body: site.about.body,
    mission: site.about.mission,
    index: "About",
    storyIndex: "Our Story",
    storyTitle: "Why we exist",
    valuesIndex: "Values",
    valuesTitle: "What we believe",
    focusIndex: "Focus Areas",
    focusTitle: "What we explore",
    story: site.about.story,
    values: site.about.values,
  },
  products: {
    index: "Products",
    title: site.products.title,
    intro: site.products.intro,
    learnMore: "Learn more",
    items: site.products.items,
  },
  careers: {
    index: "Careers",
    title: site.careers.title,
    intro: site.careers.intro,
    body: site.careers.body,
    waysIndex: "Ways In",
    waysTitle: "How to get involved",
    lookingFor: site.careers.lookingFor,
    introduce: "Introduce yourself",
    readResearch: "Read our research first",
  },
  contact: {
    index: "Contact",
    title: site.contact.title,
    body: site.contact.body,
    expectationsTitle: "What to include in your message",
    expectations: site.contact.expectations,
    email: site.contact.email,
    profileAria: "Company profile",
    profile: site.profile,
  },
  notes: {
    index: "Notes",
    title: "Research notes",
    intro:
      "Short write-ups from what we are reading, testing, and building. Published as we learn, not after we polish.",
    empty: "No notes published yet.",
    backToAll: "All research notes",
    eyebrow: "Research Note",
  },
  focus: site.focus,
  notFound: {
    title: "This page swam away.",
    body: "The page you are looking for does not exist or has been moved. Let us get you back to familiar waters.",
    home: "Back to home",
    notes: "Read research notes",
  },
  productDetail: {
    caseStudy: "Case Study",
    followTitle: "Follow the work",
    followBody:
      "Technical details, architecture notes, and progress updates are published in the public repository.",
    readNote: "Read the research note",
    statusLabel: "Status",
    fieldLabel: "Field",
    typeLabel: "Type",
    fieldValue: "Cybersecurity",
    typeValue: "Research project",
    sections: [
      {
        heading: "The problem",
        body: [
          "Security operations tooling is built for organizations with dedicated security teams, data pipeline budgets, and weeks of onboarding time. That assumption excludes most of the organizations that actually need monitoring: small engineering teams, research labs, and early-stage companies running real production workloads with a handful of people.",
          "These teams face the same threats as large enterprises. They just cannot afford the same tooling, in price or in operational overhead. The result is usually no visibility at all, or a pile of disconnected alerts that nobody reads.",
        ],
      },
      {
        heading: "The approach",
        body: [
          "HalimiSOC starts from a research question, not a feature list: what is the smallest set of capabilities that gives a small team honest visibility into their infrastructure, without requiring a security specialist to operate it?",
          "Answering that means being deliberate about what to leave out. Every capability is evaluated against two criteria: does it reduce time-to-awareness for a small team, and can it be operated without specialized training?",
        ],
      },
      {
        heading: "Where we are",
        body: [
          "The project is in active development. We are documenting the process, including the dead ends, in the public repository as the work progresses. Technical decisions, architecture notes, and evaluation results are published there rather than kept internal.",
        ],
      },
    ],
  },
};

export type Dictionary = typeof en;

const id: Dictionary = {
  ...en,
  locale: "id",
  brand: {
    ...en.brand,
    homeAria: "Halimi Research, beranda",
    shortDescription:
      "Membangun teknologi yang praktis dan tangguh melalui riset dan rekayasa.",
  },
  header: {
    nav: idNav,
    primaryAria: "Utama",
    mobileAria: "Seluler",
    menu: "Menu",
    close: "Tutup",
    skip: "Lewati ke konten",
    languageAria: "Ganti bahasa",
  },
  footer: {
    products: "Produk",
    research: "Riset",
    company: "Perusahaan",
    researchNotes: "Catatan Riset",
    corporateInfo: "Info Perusahaan",
    careers: "Karier",
    contact: "Kontak",
    home: "Beranda",
    rights: "Halimi Research. Hak cipta dilindungi.",
    tagline: "Riset dan Inovasi",
  },
  home: {
    headline: "Membangun teknologi tangguh melalui riset.",
    description:
      "Halimi Research mengeksplorasi ide dan membangun teknologi di bidang perangkat lunak, kecerdasan buatan, keamanan siber, dan infrastruktur digital, dengan fokus pada sistem yang bermanfaat dan tangguh.",
    primaryCta: "Bicara dengan tim kami",
    secondaryCta: "Lihat produk kami",
    scroll: "Gulir",
    aboutIndex: "Tentang",
    aboutLink: "Info perusahaan",
    productsIndex: "Produk",
    learnMore: "Selengkapnya",
    notesIndex: "Riset",
    notesTitle: "Catatan riset",
    notesIntro:
      "Tulisan singkat dari apa yang sedang kami baca, uji, dan bangun.",
    readNote: "Baca catatan",
    readAllNotes: "Baca semua catatan riset",
  },
  about: {
    ...en.about,
    title: "Independen secara prinsip. Praktis secara desain.",
    body: "Halimi Research adalah perusahaan riset dan inovasi independen. Kami mempelajari bagaimana perangkat lunak, AI, keamanan, dan infrastruktur benar-benar berperilaku dalam praktik, lalu membangun sistem yang bermanfaat, aman, dan andal.",
    mission:
      "Misi kami adalah mengeksplorasi dan membangun teknologi yang bermanfaat, aman, dan dapat diandalkan.",
    index: "Tentang",
    storyIndex: "Cerita Kami",
    storyTitle: "Mengapa kami ada",
    valuesIndex: "Nilai",
    valuesTitle: "Apa yang kami yakini",
    focusIndex: "Area Fokus",
    focusTitle: "Apa yang kami eksplorasi",
    story: [
      "Halimi Research berawal dari satu pengamatan sederhana: banyak teknologi dikirim sebelum benar-benar dipahami. Sistem diluncurkan tanpa ada yang bertanya bagaimana ia bisa gagal, siapa yang terlewat, atau berapa biaya perawatannya lima tahun kemudian.",
      "Kami bekerja dengan cara berbeda. Setiap proyek berawal dari sebuah pertanyaan riset. Kami membaca, membuat prototipe, merusak sesuatu dengan sengaja, dan menuliskan apa yang kami pelajari. Baru setelah itu kami membangun versi yang dimaksudkan untuk bertahan lama.",
      "Kami kecil secara pilihan. Tetap independen memungkinkan kami memilih masalah yang layak dipecahkan, bukan sekadar proyek yang menghasilkan, dan memungkinkan kami mempublikasikan apa yang kami pelajari di sepanjang jalan.",
    ],
    values: [
      {
        title: "Rasa ingin tahu sebelum kode",
        description:
          "Kami tidak mulai membangun sebelum memahami masalahnya cukup baik untuk dijelaskan secara sederhana.",
      },
      {
        title: "Bukti di atas opini",
        description:
          "Keputusan lahir dari eksperimen, pengukuran, dan evaluasi, bukan dari siapa yang berdebat paling keras.",
      },
      {
        title: "Membangun untuk jangka panjang",
        description:
          "Kami mengutamakan kemudahan perawatan dan keandalan, karena sebagian besar umur sebuah sistem terjadi setelah hari peluncuran.",
      },
      {
        title: "Bagikan apa yang dipelajari",
        description:
          "Riset yang tersimpan di laci tidak membantu siapa pun. Kami mempublikasikan catatan, alat, dan repositori kapan pun kami bisa.",
      },
    ],
  },
  products: {
    index: "Produk",
    title: "Teknologi yang bisa diandalkan dunia",
    intro:
      "Setiap produk berawal dari pertanyaan riset dan hanya dirilis ketika terbukti bertahan dalam praktik. Tidak ada maket di sini.",
    learnMore: "Selengkapnya",
    items: site.products.items.map((item) => ({
      ...item,
      status: "Dalam Pengembangan",
      tagline: "Operasi keamanan untuk tim tanpa departemen keamanan.",
      description:
        "Proyek operasi keamanan yang menanyakan seperti apa visibilitas infrastruktur yang jujur bagi tim kecil, tanpa harga dan beban operasional alat enterprise.",
      features: [
        {
          title: "Visibilitas yang pas",
          description:
            "Kumpulan kemampuan terkecil yang membuat tim kecil tetap sadar akan hal penting di infrastruktur mereka.",
        },
        {
          title: "Bisa dioperasikan tanpa spesialis",
          description:
            "Dirancang untuk dijalankan oleh engineer, bukan oleh tim operasi keamanan khusus.",
        },
        {
          title: "Dibangun secara terbuka",
          description:
            "Keputusan teknis dan progres didokumentasikan di repositori publik seiring berjalannya pekerjaan.",
        },
      ],
      urlLabel: "Lihat repositori",
    })),
  },
  careers: {
    index: "Karier",
    title: "Bangun teknologi tangguh bersama kami",
    intro:
      "Halimi Research adalah tim kecil yang independen. Kami tidak sering merekrut, tetapi kami selalu tertarik pada orang yang peduli dengan rekayasa berbasis riset.",
    body: [
      "Saat ini kami tidak membuka posisi. Ketika ada, posisi tersebut akan diumumkan di halaman ini dan melalui kanal kami.",
      "Meski begitu, kolaborasi terbaik sering dimulai tanpa lowongan. Jika Anda bekerja di bidang perangkat lunak, AI, keamanan, atau infrastruktur dan catatan riset kami terasa relevan, kami ingin mendengar dari Anda.",
    ],
    waysIndex: "Jalur Masuk",
    waysTitle: "Cara terlibat",
    lookingFor: [
      {
        title: "Kolaborator riset",
        description:
          "Peneliti dan mahasiswa yang ingin mengeksplorasi pertanyaan bersama dan mempublikasikan hasilnya.",
      },
      {
        title: "Kontributor open-source",
        description:
          "Engineer yang ingin berkontribusi pada proyek seperti HalimiSOC melalui repositori publik.",
      },
      {
        title: "Calon anggota tim",
        description:
          "Orang yang ingin kami ingat ketika posisi dibuka. Ceritakan keahlian Anda.",
      },
    ],
    introduce: "Perkenalkan diri Anda",
    readResearch: "Baca riset kami dulu",
  },
  contact: {
    index: "Kontak",
    title: "Punya pertanyaan atau ide yang layak dieksplorasi?",
    body: "Kami berkolaborasi dengan engineer, peneliti, universitas, dan organisasi di bidang perangkat lunak, AI, keamanan, dan infrastruktur. Tulis kepada kami dan ceritakan apa yang sedang Anda kerjakan.",
    expectationsTitle: "Apa yang perlu disertakan dalam pesan Anda",
    expectations: [
      "Deskripsi singkat tentang apa yang sedang Anda kerjakan atau coba pecahkan.",
      "Tautan ke repositori, dokumen, atau prototipe yang relevan.",
      "Bentuk kolaborasi yang Anda bayangkan: riset, rekayasa, atau konsultasi.",
    ],
    email: site.contact.email,
    profileAria: "Profil perusahaan",
    profile: [
      ["Entitas", "Halimi Research"],
      ["Jenis", "Perusahaan riset dan inovasi"],
      ["Bidang", "Perangkat Lunak, AI, Keamanan, Infrastruktur"],
      ["Status", "Pekerjaan awal sedang berjalan"],
    ],
  },
  notes: {
    index: "Catatan",
    title: "Catatan riset",
    intro:
      "Tulisan singkat dari apa yang kami baca, uji, dan bangun. Diterbitkan saat kami belajar, bukan setelah dipoles.",
    empty: "Belum ada catatan yang diterbitkan.",
    backToAll: "Semua catatan riset",
    eyebrow: "Catatan Riset",
  },
  focus: [
    {
      title: "Rekayasa Perangkat Lunak",
      description:
        "Aplikasi, developer tools, dan sistem perangkat lunak yang dibangun dengan perhatian pada kemudahan perawatan.",
    },
    {
      title: "Kecerdasan Buatan",
      description:
        "Sistem AI, agent, dan automasi yang diterapkan secara hati-hati dan dievaluasi sebelum dipercaya.",
    },
    {
      title: "Keamanan Siber",
      description:
        "Keamanan aplikasi, praktik secure-by-design, dan sistem yang tetap bertahan saat gagal.",
    },
    {
      title: "Infrastruktur Digital",
      description:
        "Dasar cloud, Linux, deployment, dan networking yang membuat layanan tetap berjalan.",
    },
  ],
  notFound: {
    title: "Halaman ini berenang pergi.",
    body: "Halaman yang Anda cari tidak ada atau telah dipindahkan. Mari kembali ke perairan yang familiar.",
    home: "Kembali ke beranda",
    notes: "Baca catatan riset",
  },
  productDetail: {
    caseStudy: "Studi Kasus",
    followTitle: "Ikuti perkembangannya",
    followBody:
      "Detail teknis, catatan arsitektur, dan pembaruan progres diterbitkan di repositori publik.",
    readNote: "Baca catatan risetnya",
    statusLabel: "Status",
    fieldLabel: "Bidang",
    typeLabel: "Jenis",
    fieldValue: "Keamanan Siber",
    typeValue: "Proyek riset",
    sections: [
      {
        heading: "Masalahnya",
        body: [
          "Perangkat operasi keamanan dibangun untuk organisasi dengan tim keamanan khusus, anggaran pipeline data, dan waktu onboarding berminggu-minggu. Asumsi itu menyingkirkan sebagian besar organisasi yang sebenarnya butuh pemantauan: tim engineering kecil, laboratorium riset, dan perusahaan rintisan yang menjalankan beban kerja produksi nyata dengan segelintir orang.",
          "Tim-tim ini menghadapi ancaman yang sama dengan perusahaan besar. Mereka hanya tidak mampu membeli perangkat yang sama, dari sisi harga maupun beban operasional. Hasilnya biasanya tidak ada visibilitas sama sekali, atau tumpukan notifikasi yang tidak terbaca.",
        ],
      },
      {
        heading: "Pendekatannya",
        body: [
          "HalimiSOC berawal dari pertanyaan riset, bukan daftar fitur: apa kumpulan kemampuan terkecil yang memberi tim kecil visibilitas jujur atas infrastruktur mereka, tanpa membutuhkan spesialis keamanan untuk mengoperasikannya?",
          "Menjawabnya berarti sengaja memilih apa yang ditinggalkan. Setiap kemampuan dievaluasi dengan dua kriteria: apakah ia mempercepat kesadaran situasional tim kecil, dan bisakah ia dioperasikan tanpa pelatihan khusus?",
        ],
      },
      {
        heading: "Posisi kami saat ini",
        body: [
          "Proyek ini sedang dalam pengembangan aktif. Kami mendokumentasikan prosesnya, termasuk jalan buntu, di repositori publik seiring berjalannya pekerjaan. Keputusan teknis, catatan arsitektur, dan hasil evaluasi diterbitkan di sana, bukan disimpan internal.",
        ],
      },
    ],
  },
};

const dictionaries: Record<Locale, Dictionary> = { en, id };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
