<script>
  import article1 from "../images/articles/thumb_article18.webp";
  import article2 from "../images/articles/thumb_article23.webp";
  import article3 from "../images/articles/thumb_article25.webp";
  import article4 from "../images/articles/thumb_article1.webp";

  let articles = [
    {
      date: "Januari 05, 2022",
      title: "UI Designer sebaiknya memahami dan mengerti bisnis klien",
      intro:
        "Penting untuk bisa mengkomunikasikan design menggunakan bahasa yang mudah dipahami dan menggunakan cara pandang bisnis.",
      img: article1,
    },
    {
      date: "Januari 24, 2022",
      title: "Membuat kontrak project design dengan klien",
      intro:
        "Kontrak project adalah perjanjian tertulis untuk menjamin pekerja dan pemberi kerja berada di posisi aman dan tidak saling mencurangi.",
      img: article2,
    },
    {
      date: "Februari 26, 2022",
      title: "Beberapa pertanyaan saat memulai project design dengan klien",
      intro:
        "Cari tahu bisnisnya, Cari tahu apa yang ditawarkan kepada customer, cari tahu kebutuhan project nya.",
      img: article3,
    },
    {
      date: "Februari 18, 2021",
      title: "Dari Website Programmer Menjadi UI Designer",
      intro:
        "Jika ingin pindah jadi UI Designer, jangan lepaskan profesi yang sekarang, tetap jalani sambil belajar tentang UI Design. Perlahan kamu akan tahu, apakah UI Design ini passion atau pelarian",
      img: article4,
    },
  ];
</script>

<div class="bg-[#121212] w-full text-white font-poppins pt-[60px] px-10 pb-10">
  <h2
    class="uppercase text-white/50 mb-10 font-semibold px-6 leading-[26px] tracking-[1px]"
  >
    Industri Design
  </h2>
  <div class="flex justify-between mb-10">
    {#each articles as { date, title, intro, img }}
      <div
        class="flex flex-col w-1/4 first:pr-7 first:border-r first:border-r-white/10 px-7 last:pl-7 last:border-l last:border-l-white/10 [&:nth-of-type(2)]:border-r [&:nth-of-type(2)]:border-r-white/10"
      >
        <img loading="lazy" src={img} alt="article" class="w-full" />
        <p class="pt-4 pb-[10px] text-[11px] text-white/50 font-normal">
          {date}
        </p>
        <h2
          class="text-[22px] text-white/80 leading-[30px] font-semibold tracking-[0.3px]"
        >
          {title}
        </h2>
        <p
          class="pt-5 text-sm text-white/70 leading-[22px] tracking-[0.3px] font-normal"
        >
          {intro}
        </p>
      </div>
    {/each}
  </div>
</div>
