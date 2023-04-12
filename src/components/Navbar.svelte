<script>
  import logo from "../images/logoorange.webp";
  import twitter from "../images/icon_twitter.svg";
  import instagram from "../images/icon_instagram.svg";
  import dribbble from "../images/icon_dribbble.svg";
  import medium from "../images/icon_medium.svg";
</script>

<div class="bg-[#121212] px-10 pt-5">
  <nav
    class="w-full flex justify-between items-center text-white px-[18px] py-[30px]"
  >
    <div id="left-side" class="flex items-center justify-between gap-10">
      <a href="https://www.dwinawan.com/index.html">
        <img src={logo} alt="logo" class="h-10 w-10" />
      </a>
      <ul class="uppercase font-poppins text-xs flex gap-11 font-medium h-10">
        <li>Learn</li>
        <li>Shortcut</li>
        <li class="active">Blog</li>
        <li>Bookmarks</li>
        <li>UI Kit</li>
        <li>FAQ</li>
        <li>Lain Nya</li>
      </ul>
    </div>
    <div class="flex gap-5" id="right-side">
      <a
        href="https://twitter.com/dwinawan_"
        target="_blank"
        rel="noreferrer"
        class="group"
      >
        <img
          src={twitter}
          alt="twitter"
          class="opacity-50 group-hover:opacity-100 w-[22px] transition-opacity ease-in"
        />
      </a>
      <a
        href="https://instagram.com/dwi.nawan"
        target="_blank"
        rel="noreferrer"
        class="group"
      >
        <img
          src={instagram}
          alt="instagram"
          class="opacity-50 group-hover:opacity-100 w-[22px] transition-opacity ease-in"
        />
      </a>
      <a
        href="https://dribbble.com/dwinawan"
        target="_blank"
        rel="noreferrer"
        class="group"
      >
        <img
          src={dribbble}
          alt="dribble"
          class="opacity-50 group-hover:opacity-100 w-[22px] transition-opacity ease-in"
        />
      </a>
      <a
        href="https://medium.com/@dwinawan"
        target="_blank"
        rel="noreferrer"
        class="group"
      >
        <img
          src={medium}
          alt="medium"
          class="opacity-50 group-hover:opacity-100 w-[22px] transition-opacity ease-in"
        />
      </a>
    </div>
  </nav>
</div>

<style>
  li {
    height: 100%;
    align-items: center;
    display: flex;
    letter-spacing: 1px;
    padding-top: 9px;
    padding-bottom: 9px;
    cursor: pointer;
    opacity: 0.5;
    transition: opacity 0.15s ease-in;
  }

  li.active {
    opacity: 1;
  }

  li:hover {
    opacity: 1;
  }
</style>
