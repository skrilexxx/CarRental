<script>
  import Title from "./lib/title.svelte";
  import "./styles/global.css";
  import Button from "./lib/button.svelte";
  import { onMount } from "svelte";
  import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

  injectSpeedInsights();

  let year = new Date().getFullYear();

  function hamburger() {
    const menu = document.getElementById('menu');

    if (menu.classList.contains('hidden')) {
      menu.classList.remove('hidden');
    } else {
      menu.classList.add('hidden');
    }
  }

  function closeBanner() {
    const banner = document.querySelector('.cookieBanner');
    banner.style.display = 'none';
    document.cookie = "cookieBanner=accepted; expires=Fri, 31 Dec 9999 23:59:59 GMT";
  }

  onMount(() => {
    let cookie = document.cookie;
    if (cookie.includes(" cookieBanner=accepted") || cookie.includes("cookieBanner=accepted")) {
      return;
    }

    const banner = document.querySelector('.cookieBanner');
    banner.style.display = 'flex';
  });

</script>

  <div class="cookieBanner">
    <p>This website uses cookies to ensure you get the best experience on our website.</p>
    <Button label={"Got it!"} action={closeBanner} />
  </div>


  <div class="menu hidden" id="menu">
    <div class="inMenu">
      <div class="top">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <img src="/menuExit.svg" id="menuExit" on:click={hamburger} alt="exitButton">
      </div>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div class="pages" on:click={hamburger}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/carList">Car List</a>
        <a href="/prices">Prices</a>
        <a href="/contact">Contact</a>
      </div>
      <div class="bottom">
        <a href="https://www.instagram.com/"><img src="/instagram.svg" alt="instagram"/></a>
        <a href="https://www.linkedin.com/"><img src="/linkedin.svg" alt="twitter"/></a>
        <a href="https://www.facebook.com/"><img src="/facebook.svg" alt="facebook"/></a>
      </div>
    </div>
  </div>

  <header>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <nav>
      <div class="pageTitle">
        <a href="/" >
          <Title title="Brno Car Rental"/>
        </a>
      </div>

      <div class="links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/carList">Car List</a>
        <a href="/prices">Prices</a>
        <a href="/contact">Contact</a>
      </div>

      <div class="socials">
        <a href="https://www.instagram.com/"><img src="/instagram.svg" alt="instagram"/></a>
        <a href="https://www.linkedin.com/"><img src="/linkedin.svg" alt="twitter"/></a>
        <a href="https://www.facebook.com/"><img src="/facebook.svg" alt="facebook"/></a>
      </div>

      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div class="hamburger" id="burg" on:click={hamburger}>
        <img src="/hamburger.svg" alt="hamburger"/>
      </div>


    </nav>

  </header>

  <main>
    <slot/>
  </main>

  <footer>
    <p>Copyright Brno Car Rental {year}</p>
    <div class="docs">
      <a href="/documents/RentInstructions.pdf">Rent Instructions</a>
      <a href="/documents/TestTerms&Conditions.pdf">Terms & Conditions</a>
      <a href="/documents/PrivacyPolicy.pdf">Privacy Policy</a>
    </div>
  </footer>


  <style>


    header {
      padding: 20px;
      text-align: center;
    }

    main {
      padding: 20px;
      text-align: center;
      min-height: 700px;
    }

    footer {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px;
      text-align: center;
    }

    footer p {
      font-size: 16px;
      color: white;
    }

    .links {
      display: flex;
      margin:  auto;
      justify-content: space-between;
    }

    a {
      text-decoration: none;
      color: white;
      font-family: 'Montserrat', sans-serif;
      font-size: 16px;
      padding: 10px;
    }

    header a:hover {
      opacity: 0.7;
      transition: 0.5s;
    }

    nav {
      padding: 10px;
      align-items: center;
      display: flex;
      max-width: 1760px;
      margin: 0 auto;
    }

    footer a {
      text-decoration: none;
      color: white;
      font-family: 'Montserrat', sans-serif;
      font-size: 12px;
      margin: 10px;
    }

    footer a:hover {
      text-decoration: underline;
      color: #BC6FF1;
    }

    .docs {
      display: flex;
      justify-content: center;
    }

    .socials {
      display: inline;
      width: 100%;
      max-width: 200px;
      display: inline;
    }

    .pageTitle {
      display: inline;
      width: 100%;
      max-width: 200px;
    }

    .hamburger {
      display: none;
      height: 30px;
      width: 30px;
    }

    .hamburger:hover {
      cursor: pointer;
    }

    .menu {
      z-index: 1;
      position: fixed;
      top: 0;
      left: 0;
      background-color: #626161;
      opacity: 0.9;
      width: 100%;
      height: 100%;
      animation-name: fade-in;
      animation-duration: 0.4s;
    }

    .inMenu {
      margin-left: 20px;
      margin-right: 20px;
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .top {
      display: flex;
      justify-content: flex-end;
      margin-top: 40px;
      margin-bottom: 20px;
    }

    .top img {
      height: 30px;
      width: 30px;
    }

    #menuExit:hover {
      cursor: pointer;
    }

    .pages {
      display: flex;
      flex-direction: column;
      margin: 15px;
      align-items: left;
      margin-bottom: auto;
    }

    .pages a {
      font-size: 20px;
      font-weight: 600;
    }

    .bottom {
      display: flex;
      justify-content: flex-end;
    }

    .hidden {
      display: none;
    }

    .cookieBanner {
      position: fixed;
      left: 50%;
      transform: translate(-50%, 0%);
      bottom: 0px;
      display: none;
      justify-content: space-around;
      align-items: center;
      background-color: #626161;
      opacity: 0.9;
      height: 100px;
      width: 100%;
    }

    .cookieBanner :global(button) {
      width: 200px;
      height: 60px;
    }

    @keyframes fade-in {
    from {opacity: 0;}
    to {opacity: 0.9;}
}

    @media (max-width: 820px) {
      .links {
        display: none;
      }

      .socials {
        display: none;
      }

      .hamburger {
        display: inline;
      }

      nav {
        padding: 0px;
        justify-content: space-between;
      }

      main {
        text-align: left;
        min-height: auto;
      }

      .cookieBanner {
        width: 100%;
        height: 80px;
        justify-content: space-around;
      }

      .cookieBanner p {
        font-size: 16px;
        color: white;
        margin: 5px;
      }

      .cookieBanner :global(button) {
        width: 200px;
        height: 60px;
        margin: 5px;
      }

    }

  </style>
