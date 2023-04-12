<script>
  import article1 from "../images/articles/thumb_article11.webp";
  import article2 from "../images/articles/thumb_article12.webp";
  import article3 from "../images/articles/thumb_article19.webp";
  import article4 from "../images/articles/thumb_article39.webp";
  import learnbanner from "../images/tutorials/learnbanner.avif";
  import learnbannersm from "../images/tutorials/learnbanner_small.webp";

  let items = [
    {
      date: "Juli 27, 2021",
      title:
        "Mungkin ini cara tercepat untuk belajar membuat design landing page",
      intro:
        "Luangkan waktu 20 detik untuk membaca artikel ini dan kalian akan mengetahui langkah efektif metode ATM (Amati, Tiru dan Modifikasi)",
      img: article1,
    },
    {
      date: "Agustus 11, 2021",
      title: "Menggunakan Grid akan membatasi kreatifitas UI Designer?",
      intro:
        '"Males ah pake grid, design nya jadi kaku" , "Kalau pake grid design nya berasa template, design nya jadi sama kayak yang lain nya"',
      img: article2,
    },
    {
      date: "Januari 08, 2022",
      title:
        "Pembuatan UI Design harus selalu pakai riset? makan waktu enggak sih?",
      intro:
        "Apakah mengubah bentuk tombol dari kotak menjadi rounded juga harus menggunakan riset? Terlalu memakan waktu enggak sih?",
      img: article3,
    },
    {
      date: "Mei 15, 2022",
      title: "Tempat saya biasa melihat inspirasi layout dan juga typography",
      intro:
        "Biasanya saat akan memulai membuat eksplorasi design typography saya akan membuka langganan referensi saya untuk mengambil inspirasi",
      img: article4,
    },
  ];
</script>

<div class="md:p-10 pt-[60px] bg-white font-poppins">
  <h2
    class="uppercase text-[#121212]/60 mb-10 font-semibold px-7 leading-[26px] tracking-[1px]"
  >
    Pilihan Editor
  </h2>
  <div class="flex justify-between pb-10 2xs:flex-wrap">
    {#each items as { date, title, intro, img }}
      <div
        class="flex flex-col 2xs:w-1/2 md:w-1/4 first:pr-7 first:border-r first:border-r-black/10 px-7 last:pl-7 last:border-l last:border-l-black/10 [&:nth-of-type(2)]:border-r [&:nth-of-type(2)]:border-r-black/10"
      >
        <img loading="lazy" src={img} alt="article" class="w-full" />
        <p class="pt-4 pb-[10px] text-[11px] text-black/60 font-normal">
          {date}
        </p>
        <h2 class="text-[22px] leading-[30px] font-semibold tracking-[0.3px]">
          {title}
        </h2>
        <p
          class="pt-5 text-sm text-[#1a1b1f]/70 leading-[22px] tracking-[0.3px] font-normal"
        >
          {intro}
        </p>
      </div>
    {/each}
  </div>
</div>
<div>
  <img
    loading="lazy"
    src={learnbanner}
    alt="learnbanner"
    class="w-full 2xs:hidden md:block"
  />
  <img
    loading="lazy"
    src={learnbannersm}
    alt="learnbanner"
    class="w-full md:hidden"
  />
</div>
