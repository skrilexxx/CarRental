
<script>
  import Title from "./lib/title.svelte";
  import "./styles/global.css";
</script>




  <header>
    <Title title="Brno Car Rental"/>
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
      display: flex;
      justify-content: center;
    }

    main {
      padding: 20px;
      text-align: center;
    }

    footer {
      padding: 20px;
      text-align: center;
    }
  </style>
