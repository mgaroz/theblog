<script>
  import Logoblog from "./Logoblog.svelte";
  import article1 from "../images/articles/thumb_article40.avif";
  import article2 from "../images/articles/thumb_article20.webp";
  import article3 from "../images/articles/thumb_article15.webp";
  import article4 from "../images/articles/thumb_article9.webp";

  let articles = [
    {
      date: "January 11, 2022",
      title:
        "Bisakah eksplorasi design dipakai untuk melamar pekerjaan UI Designer?",
      img: article2,
    },
    {
      date: "December 22, 2021",
      title: "Berlatih UX Writing dengan beberapa prinsip dasar microcopy",
      img: article3,
    },
    {
      date: "Maret 01, 2021",
      title:
        "Mengenai benar dan salah pada UI Design. Apakah ada design yang salah?",
      img: article4,
    },
  ];
</script>

<div class="bg-[#121212] w-full px-10">
  <Logoblog />
  <div class="flex text-white font-poppins px-5 pb-10 gap-10 bg-[#121212]">
    <div class="w-1/2">
      <img src={article1} alt="article 1" />
      <p class="text-[11px] opacity-50 pt-5 pb-[10px]">December 21, 2022</p>
      <h2 class="text-[28px] opacity-80 font-semibold leading-9 mb-4">
        Tentang batasan yang harus dipahami saat membuat design
      </h2>
      <p class="leading-[26px] opacity-50 font-light tracking-[0.6px]">
        Membuat design tidak hanya tentang mencari tahu kebutuhan user dan
        bisnis tetapi juga mencari tahu apa saja batasan nya, sehingga design
        yang dibuat bisa di develop.
      </p>
    </div>
    <div class="flex flex-col items-center justify-center w-1/2 px-3">
      {#each articles as { date, title, img }}
        <article class="w-full [&:not(:first-child)]:mt-8">
          <div
            class="w-full border-b-white/10 pb-8 border-b flex gap-6 justify-center"
          >
            <div class="w-[41%]">
              <img src={img} alt="article" class="object-cover" />
            </div>
            <div class="flex flex-col w-1/2 justify-start">
              <p class="text-[11px] opacity-50 pt-1 pb-[10px]">{date}</p>
              <h2
                class="text-xl font-semibold leading-7 tracking-normal opacity-80"
              >
                {title}
              </h2>
            </div>
          </div>
        </article>
      {/each}
    </div>
  </div>
</div>
