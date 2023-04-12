<script>
  import tutorial1 from "../images/tutorials/tutorial1.webp";
  import tutorial2 from "../images/tutorials/tutorial2.webp";
  import tutorial3 from "../images/tutorials/tutorial3.webp";
  import tutorial4 from "../images/tutorials/tutorial4.webp";
  import learnbanner from "../images/tutorials/learnbanner2.avif";
  import learnbannersm from "../images/tutorials/learnbanner2_small.webp";

  let tutorials = [
    {
      date: "Desember 13, 2022",
      title: "Design Instagram Stories untuk iklan cuci gudang akhir tahun",
      img: tutorial1,
    },
    {
      date: "Segera Terbit",
      title: "Design Instagram Stories untuk berjualan suatu produk",
      img: tutorial2,
    },
    {
      date: "Segera Terbit",
      title: "Design Instagram Stories untuk mengiklankan komunitas",
      img: tutorial3,
    },
    {
      date: "Segera Terbit",
      title: "Design Instagram Stories untuk mengajak maen bola bareng",
      img: tutorial4,
    },
  ];
</script>

<div class="md:p-10 pt-[60px] bg-white font-poppins">
  <h2
    class="uppercase text-[#121212]/60 mb-10 font-semibold px-7 leading-[26px] tracking-[1px]"
  >
    Tutorial design
  </h2>
  <div class="flex justify-between pb-10 2xs:flex-wrap">
    {#each tutorials as { date, title, img }}
      <div
        class="flex flex-col 2xs:w-1/2 md:w-1/4 first:pr-7 first:border-r first:border-r-black/10 px-7 last:pl-7 last:border-l last:border-l-black/10 [&:nth-of-type(2)]:border-r [&:nth-of-type(2)]:border-r-black/10"
      >
        <img loading="lazy" src={img} alt="tutorial" />
        <p class="pt-4 pb-[10px] text-[11px] text-black/60 font-normal">
          {date}
        </p>
        <h2 class="text-[22px] leading-[30px] font-semibold tracking-[0.3px]">
          {title}
        </h2>
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
