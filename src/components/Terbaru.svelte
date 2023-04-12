<script>
  import article1 from "../images/articles/thumb_article36.avif";
  import article2 from "../images/articles/thumb_article37.avif";
  import article3 from "../images/articles/thumb_article29.avif";
  import article4 from "../images/articles/thumb_article17.avif";
  import article5 from "../images/articles/thumb_article30.avif";
  import article6 from "../images/articles/thumb_article33.avif";

  let articles = [
    {
      date: "Mei 08, 2022",
      title: "Ide buntu? paksa dirimu untuk membuat design selama 30 menit",
      intro:
        "Memaksa diri untuk membuat design selama 30 menit tanpa jeda bisa jadi salah satu cara untuk memancing ide datang.",
      img: article1,
    },
    {
      date: "Mei 08, 2022",
      title: "Mari belajar UX Writing tipis tipis",
      intro:
        "Belajar UX Writing dari mengamati copy atau tulisan pada judul landing page dari website perusahaan teknologi lalu mencoba menerapkan pada design yang sedang dibuat.",
      img: article2,
    },
    {
      date: "Maret 25, 2022",
      title: "Kapan menggunakan Switch atau Single Checkbox?",
      intro:
        "Kemiripan konsep Switch dan Single Checkbox sering membuat bingung designer untuk menentukan kapan menggunakan nya.",
      img: article3,
    },
    {
      date: "Januari 02, 2022",
      title: "Yang disiapkan untuk handover file design website ke developer",
      intro:
        "UI/UX tidak hanya tentang memudahkan user atau pengguna tapi juga memudahkan rekan kerja seperti developer. Berikut beberapa hal yang bisa membantu mereka.",
      img: article4,
    },
    {
      date: "Maret 27, 2022",
      title:
        "Mungkin yang kamu butuhkan saat ini bukan lagi latihan tapi terjun ke Industri",
      intro:
        " Berlatih terus menerus membuat design bisa menjadikan seorang yang sedang belajar design terperangkap dalam lingkungan yang ia buat sendiri.",
      img: article5,
    },
    {
      date: "Mei 04, 2022",
      title: "Kutipan designer yang bisa menambah cara pandang",
      intro:
        "Beberapa kutipan di artikel ini sangat membantu saya saat membuat design. Membantu berpikir dan mempertimbangkan hal hal yang harus diperhatikan.",
      img: article6,
    },
  ];
</script>

<div class="md:p-10 pt-[60px] bg-white font-poppins">
  <h2
    class="uppercase text-[#121212]/60 mb-10 font-semibold px-6 leading-[26px] tracking-[1px]"
  >
    Artikel Terbaru
  </h2>
  <div
    class="grid justify-between 2xs:grid-cols-1 md:grid-cols-3 md:gap-12 gap-y-8 px-6"
  >
    {#each articles as { date, title, intro, img }}
      <div class="flex flex-col">
        <img loading="lazy" src={img} alt="article" />
        <div class="pt-5 pr-5 pb-10 pl-0">
          <p
            class="pb-[10px] text-[11px] text-black/60 font-normal leading-[11px]"
          >
            {date}
          </p>
          <h2 class="text-[26px] leading-[34px] font-semibold tracking-normal">
            {title}
          </h2>
          <p
            class="pt-4 text-[15px] text-[#1a1b1f]/70 leading-[23px] tracking-[0.3px] font-normal"
          >
            {intro}
          </p>
        </div>
      </div>
    {/each}
  </div>
</div>
