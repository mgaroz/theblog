<script>
  import image1 from "../images/articles/thumb_article34.webp";
  import image2 from "../images/articles/thumb_article4.webp";
  import image3 from "../images/articles/thumb_article28.webp";
  import image4 from "../images/articles/thumb_article26.webp";
  import image5 from "../images/articles/thumb_article27.webp";
  import image6 from "../images/articles/thumb_article14.webp";
  import image7 from "../images/articles/thumb_article32.webp";
  import image8 from "../images/articles/thumb_article22.webp";
  import image9 from "../images/articles/thumb_article31.webp";
  import image10 from "../images/articles/thumb_article7.webp";
  import image11 from "../images/articles/thumb_article21.webp";
  import image12 from "../images/articles/thumb_article24.webp";
  import image13 from "../images/articles/thumb_article35.webp";
  import banner from "../images/tutorials/banner3.webp";
  import profile1 from "../images/profile/dadimdum.webp";
  import profile2 from "../images/profile/fraviato.webp";
  import profile3 from "../images/profile/GMiwanusa.webp";
  import profile4 from "../images/profile/hisyammuidesign.webp";
  import profile5 from "../images/profile/idhamarsyd.webp";
  import profile6 from "../images/profile/istighfaryuk__.webp";
  import profile7 from "../images/profile/hoshikuzia.webp";

  let articles = [
    {
      date: "Mei 05, 2022",
      intro:
        "Pernahkah kamu saat membuat design sebuah halaman lantas bingung halaman ini sebaiknya diisi apa ya? konten atau elemen apa yang cocok untuk halaman ini?",
      img: image1,
      link: "https://www.dwinawan.com/ketika-kamu-bingung-mengisi-konten-pada-designmu.html",
      title: "Ketika kamu bingung mengisi konten pada eksplorasi design mu",
    },
    {
      date: "Februari 24, 2021",
      intro:
        'Bagaimana cara menggunakan referensi pada design yang sedang dikerjakan?" "Bagaimana menggunakan inspirasi dari referensi biar jatuh nya enggak menjiplak?"',
      img: image2,
      link: "https://www.dwinawan.com/cara-memakai-inspirasi-dari-referensi.html",
      title: "Cara memakai inspirasi dari referensi",
    },
    {
      date: "Maret 20, 2022",
      intro:
        "Detail kecil pada design blog bisa membuat nya jadi enak dilihat dan makin nyaman untuk dibaca. Berikut beberapa referensi yang bisa kamu terapkan.",
      img: image3,
      link: "https://www.dwinawan.com/referensi-design-02.html",
      title: "Referensi Design 02: Halaman detail artikel pada blog",
    },
    {
      date: "Maret 11, 2022",
      intro:
        "Menambahkan faktor delightful tidak hanya sekedar menambahkan sesuatu yang menyenangkan tapi juga harus selaras dengan branding",
      img: image4,
      link: "https://www.dwinawan.com/pertimbangkan-branding-sebelum-menambahkan-faktor-delightful.html",
      title: "Pertimbangkan branding sebelum menambahkan faktor delightful",
    },
    {
      date: "Maret 19, 2022",
      intro:
        "Beberapa layout favorit saya untuk menampilkan angka pencapaian atau statistik pada design landing page",
      img: image5,
      link: "https://www.dwinawan.com/referensi-design-01.html",
      title: "Referensi Design 01: Bold Number pada design landing page",
    },
    {
      date: "April 29, 2022",
      intro:
        'Jika Anda penyuka kutipan "yang terpenting bukanlah hasil nya, tetapi proses nya" momen eksplorasi adalah saat yang tepat untuk menerapkan kutipan tersebut.',
      img: image6,
      link: "https://www.dwinawan.com/eksplorasi-design-jangan-buru-buru.html",
      title: "Tips eksplorasi design: Jangan buru buru, Nikmati prosesnya",
    },
    {
      date: "Desember 21, 2021",
      intro:
        "UX enggak melulu tentang membuat alur yang serba mudah dan cepat. Ada beberapa bagian dari sebuah produk yang musti dibikin susah",
      img: image7,
      link: "https://www.dwinawan.com/kadang-sebuah-ux-perlu-dibikin-susah.html",
      title: "Tidak selalu dibuat mudah, kadang sebuah UX perlu dibikin susah",
    },
    {
      date: "Januari 23, 2022",
      intro:
        "Data Visualization bukan hanya menampilkan angka ataupun data, tapi juga menyampaikan sebuah cerita kepada mereka yang membacanya",
      img: image8,
      link: "https://www.dwinawan.com/proses-design-dalam-pembuatan-data-visualization.html",
      title: "Proses design dalam pembuatan data visual",
    },
    {
      date: "April 10, 2022",
      intro:
        "Jika kamu pernah bingung saat membuat eksplorasi design, saya harap artikel ini bisa membantu mu.",
      img: image9,
      link: "https://www.dwinawan.com/bingung-saat-membuat-eksplorasi-design-mungkin-kamu-kurang-fokus.html",
      title: "Bingung saat eksplorasi design? mungkin kurang fokus",
    },
    {
      date: "Maret 05, 2021",
      intro:
        "Beberapa cara yang saya lakukan ketika tidak memiliki ide atau bingung untuk memulai design",
      img: image10,
      link: "https://www.dwinawan.com/creativity-block-pada-ui-designer.html",
      title: "Tentang Creativity Block pada UI Designer",
    },
    {
      date: "Januari 20, 2022",
      intro:
        "Cara saya mengumpulkan dan menggunakan referensi sebagai alat bantu saat membuat UI design.",
      img: image11,
      link: "https://www.dwinawan.com/membuat-library-referensi-ui-design.html",
      title:
        "Membuat Kumpulan referensi UI Design sebagai alat bantu saat membuat design",
    },
    {
      date: "Mei 05, 2022",
      intro:
        "Lupakan sejenak Lorem Ipsum saat mengisi teks pada design UI mu. Coba buat copy mu sendiri. Buat rekan kerja UX Writer lebih happy saat bekerja.",
      img: image12,
      link: "https://www.dwinawan.com/ui-designer-belajar-membuat-copy-sendiri.html",
      title: "Dear UI Designer, yok bisa yok belajar bikin copy sendiri",
    },
    {
      date: "Februari 15, 2022",
      intro:
        "Beberapa langkah dalam membuat komposisi dan layout secara bertahap dan memastikan semua komponen dan fungsionalitas yang dibutuhkan lengkap",
      img: image13,
      link: "https://www.dwinawan.com/membuat-layout-pada-ui-design.html",
      title: "Proses membuat layout dan komposisi pada UI Design",
    },
  ];

  let arsipItems = [
    {
      date: "Desember 26, 2022",
      link: "https://www.dwinawan.com/langkah-membuat-dashboard-responsive.html",
      title: "Langkah Membuat Dashboard Responsive",
    },
    {
      title: "Belajar pola design dari mencoba aplikasi",
      link: "https://www.dwinawan.com/belajar-pola-design.html",
      date: "Agustus 13, 2022",
    },
    {
      title: "Eksplorasi design presentasi dengan Figma",
      link: "https://www.dwinawan.com/eksplorasi-design-pitch-deck.html",
      date: "April 13, 2023",
    },
    {
      title: "Tentang membuat design responsive",
      link: "https://www.dwinawan.com/tentang-membuat-design-responsive.html",
      date: "Maret 15, 2023",
    },
    {
      title: "Memilih foto yang cocok untuk desain website",
      link: "https://www.dwinawan.com/cara-memilih-dan-menempatkan-foto-pada-desain-website.html",
      date: "Maret 01, 2023",
    },
    {
      date: "Februari 28, 2023",
      link: "https://www.dwinawan.com/membuat-header-yang-proporsional.html",
      title: "Membuat Desain header yang proporsional",
    },
    {
      title: "Sebaiknya Belajar UI Design mulai dari mana?",
      link: "https://www.dwinawan.com/belajar-ui-design-mulai-dari-mana.html",
      date: "Februari 23, 2023",
    },
    {
      title: "Beberapa Pertanyaan tentang terjun di industri UI/UX",
      link: "https://www.dwinawan.com/pertanyaan-tentang-terjun-ke-industri-ui-ux.html",
      date: "Februari 21, 2023",
    },
  ];

  let testimonials = [
    {
      summary:
        '" Blog nya om @dwinawan_ sangat mudah dipahami dan enak dibacanya, bahkan saya masih sering mampir buat pengingat atau referensi. Kudos om 🤝. "',
      image: profile1,
      author: "@dadimdum",
    },
    {
      summary:
        '" Blog mas Nawan sangat bite-sized. Mudah untuk dicerna dan dikemas pake bahasa sehari-hari. Sering banget visit ulang blognya buat reminder terhadap suatu topik 🎉. "',
      image: profile2,
      author: "@GMiwanusa",
    },
    {
      image: profile3,
      summary:
        '" Blognya mudah dipahami mas 👌 dan cukup enak dibaca buat pemula seperti saya. "',
      author: "@istighfaryuk__",
    },
    {
      image: profile4,
      summary: '" Informasinya compact tapi usefull banget mas. "',
      author: "@idhamarsyd",
    },
    {
      summary:
        '" Artikelnya bite-sized, mudah dicerna. Sering revisit kesini kalo lg nginget2 topik tertentu soal design 🙏🏻. "',
      image: profile5,
      author: "@fraviato",
    },
    {
      image: profile6,
      summary:
        '" Bahasa yang mudah banget dipahami dengan berbagai materi yang matang, dan sangat bermanfaat buat cari referensi topik. "',
      author: "@hisyammuidesign",
    },
    {
      image: profile7,
      summary:
        '" Blognya bener-bener practical. tiap artikelnya ngasih penjelasan yang detail berdasarkan proses desain dan pengalaman mas Dwinawan sendiri. "',
      author: "@hoshikuzia",
    },
  ];
</script>

<div class="md:p-10 pt-[60px] bg-white font-poppins">
  <div class="flex 2xs:flex-col md:flex-row">
    <div class="md:w-2/3 2xs:w-full">
      <h2
        class="uppercase text-[#121212]/50 mb-10 font-semibold px-6 leading-[26px] tracking-[1px]"
      >
        Artikel Lainnya
      </h2>
      <div class="flex w-full flex-col px-6">
        {#each articles as { date, title, intro, img }}
          <div class="flex [&:not(:first-child)]:mt-10 gap-x-5">
            <div class="flex flex-col w-[58%]">
              <p
                class="pb-[10px] text-[11px] text-black/50 font-normal leading-[11px]"
              >
                {date}
              </p>
              <h2
                class="md:text-[24px] 2xs:text-[18px] 2xs:leading-[24px] md:leading-[32px] font-semibold tracking-normal"
              >
                {title}
              </h2>
              <p
                class="mt-[6px] text-[15px] text-[#1a1b1f]/70 leading-[23px] font-normal md:block 2xs:hidden"
              >
                {intro}
              </p>
            </div>
            <div class="w-[42%]">
              <img src={img} alt="article" />
            </div>
          </div>
        {/each}
      </div>
    </div>
    <div class="md:w-1/3 2xs:w-full">
      <h2
        class="uppercase text-[#121212]/50 mb-10 font-semibold px-6 leading-[26px] tracking-[1px]"
      >
        Arsip 2021
      </h2>
      <div class="flex flex-col px-5">
        {#each arsipItems as { date, title }}
          <div
            class="first:pt-[10px] last:pb-[10px] pb-6 pl-6 flex flex-col border-l border-l-[#121212]/10 [&:not(:first-child)]:border-t-[#121212]/10 [&:not(:first-child)]:border-t [&:not(:first-child):not(:last-child)]:pb-6 [&:not(:first-child)]:pt-6 [&:not(:first-child):not(:last-child)]:pl-6"
          >
            <p
              class="pb-2 text-[11px] text-[#121212]/50 font-normal leading-[11px]"
            >
              {date}
            </p>
            <h3
              class="text-base leading-[32px] font-normal tracking-[0.4px] text-[#121212]"
            >
              {title}
            </h3>
          </div>
        {/each}
      </div>
      <div class="mt-[60px] mb-[60px] px-5">
        <a
          href="https://www.dwinawan.com/perjalanan-design-saya-dari-tahun-2013.html"
        >
          <img loading="lazy" src={banner} alt="banner" />
        </a>
      </div>
      <h2
        class="uppercase text-[#121212]/50 mb-10 font-semibold px-6 leading-[26px] tracking-[1px]"
      >
        Testimonial
      </h2>
      <div class="flex flex-col px-5">
        {#each testimonials as { author, summary, image }}
          <div
            class="flex gap-4 border-l border-l-[#121212]/10 [&:not(:first-child)]:border-t-[#121212]/10 [&:not(:first-child):not(:last-child)]:pb-6 [&:not(:first-child)]:pt-6 [&:not(:first-child):not(:last-child)]:pl-6 first:pt-[10px] last:pb-[10px] pb-6 pl-6 [&:not(:first-child)]:border-t"
          >
            <div class="min-w-fit">
              <img
                loading="lazy"
                src={image}
                alt="profile"
                class="w-9 object-cover rounded-full"
                width="36"
                height="36"
              />
            </div>
            <div>
              <p class="text-[13px] font-light leading-[21px] tracking-[0.5px]">
                {summary}
              </p>
              <p
                class="text-[13px] font-normal leading-[22px] tracking-[0.5px] mt-[6px]"
              >
                {author}
              </p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
