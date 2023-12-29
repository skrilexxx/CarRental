
<script>
  import Title from "./lib/title.svelte";
  import "./styles/global.css";
</script>




  <header>

    <nav>
      <div class="pageTitle">
        <Title title="Brno Car Rental"/>
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
    </nav>

  </header>

  <main>
    <slot/>
  </main>

  <footer>
    <p>Copyright Brno Car Rental 2023</p>
  </footer>


  <style>
    @font-face {
      font-family: 'Montserrat';
      src: url('/fonts/Montserrat-Bold.ttf');
    }
    @font-face {
      font-family: 'Montserrat';
      src: url('/fonts/Montserrat-Regular.ttf');
    }
    @font-face {
      font-family: 'Montserrat';
      src: url('/fonts/Montserrat-SemiBold.ttf');
    }
    @font-face {
      font-family: 'Montserrat';
      src: url('/fonts/Montserrat-Medium.ttf');
    }

    header {
      padding: 20px;
      text-align: center;
    }

    main {
      padding: 20px;
      text-align: center;
    }

    footer {
      padding: 20px;
      text-align: center;
    }

    footer p {
      font-size: 16px;
      color: white;
    }

    .links {
      margin:  auto;
      justify-content: space-between;

    }

    a {
      text-decoration: none;
      color: white;
      font-family: 'Montserrat', sans-serif;
      font-weight: 18px;
      margin: 10px;
    }

    nav {
      padding: 10px;
      align-items: center;
      display: flex;
      max-width: 1760px;
      margin: 0 auto;
    }



    .socials {
      display: inline;
      width: 100%;
      max-width: 200px;
    }

    .pageTitle {
      display: inline;
      width: 100%;
      max-width: 200px;
    }
  </style>
