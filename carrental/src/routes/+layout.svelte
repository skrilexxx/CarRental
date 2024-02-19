<script>
  import Title from "./lib/title.svelte";
  import "./styles/global.css";

  let year = new Date().getFullYear();
</script>




  <header>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

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
    <p>Copyright Brno Car Rental {year}</p>
    <a href="/documents/TestTerms&Conditions.pdf">Terms & Conditions</a>
  </footer>


  <style>


    header {
      padding: 20px;
      text-align: center;
    }

    main {
      padding: 20px;
      text-align: center;
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
      display: none;
      margin:  auto;
      justify-content: space-between;
    }

    a {
      text-decoration: none;
      color: white;
      font-family: 'Montserrat', sans-serif;
      font-size: 16px;
      margin: 10px;
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


    .socials {
      display: inline;
      width: 100%;
      max-width: 200px;
      display: none;
    }

    .pageTitle {
      display: inline;
      width: 100%;
      max-width: 200px;
    }

    @media (min-width: 820px) {
      .links {
        display: flex;
      }

      .socials {
        display: inline;
      }
    }

  </style>
