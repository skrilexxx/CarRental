
<script>
  import Title from "./lib/title.svelte";
</script>



<body>
  <header>
    <Title title="Brno Car Rental"/>
  </header>
  <main>
    <slot/>
  </main>

  <footer>
    <p>Copyright Brno Car Rental 2023</p>
  </footer>
</body>


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

    body {
      margin: 0;
      padding: 0;
      background-image: url('/brnoBackground2x.png');
      background-size: cover;
    }

    p {
      font-family: 'Montserrat', sans-serif;
      color: white;
      font-weight: 100;
      font-size: 18px;
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
