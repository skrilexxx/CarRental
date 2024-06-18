<script>

</script>

<div class="contentTitle">
    <div class="title">
        <h2>About</h2>
    </div>
</div>
<div class="content">
    <div class="home">
        <div class="info">
            <p class="firstTitle">Welcome to Brno Car Rentals</p>
            <p class="aboutText">Explore the vibrant city of Brno with the convenience and freedom of our premium car rental services. At Brno Car Rentals, we understand that your journey is unique, and we're here to ensure you travel in comfort and style.</p>
            <p class="secondTitle">Why Choose Brno Car Rentals?</p>
        </div>



        <div class="banners">
            <div class="banner">
                <div class="bannerTitle">
                    <p class="BTitle">Extensive</p>
                    <p class="PTitle">Fleet</p>
                </div>
                <div class="items">
                    <p>Sedan</p>
                    <p>Coupe</p>
                    <p>Cabrio</p>
                    <p>Sport</p>
                    <p>SUV</p>
                    <p>Van</p>
                    <p>And more ...</p>
                </div>
            </div>

            <div class="banner">
                <div class="bannerTitle">
                    <p class="BTitle">Affordable</p>
                    <p class="PTitle">Rates</p>
                </div>
                <div class="items">
                    <p>Friendly prices</p>
                    <p>Many categories</p>
                    <p>Best in Brno</p>
                    <p>You choose</p>
                </div>
            </div>

            <div class="banner">
                <div class="bannerTitle">
                    <p class="BTitle">Convinient</p>
                    <p class="PTitle">Locations</p>
                </div>
                <div class="items">
                    <p>Easily accesible </p>
                    <p>Across Brno</p>
                    <p>City Center</p>
                    <p>Airport</p>
                    <p>More soon ...</p>
                </div>
            </div>

            <div class="banner">
                <div class="bannerTitle">
                    <p class="BTitle">Customer</p>
                    <p class="PTitle">Support</p>
                </div>
                <div class="items">
                    <p>24/7 service</p>
                    <p>Ready to help</p>
                    <p>Road assistance</p>
                    <p>Get information</p>
                    <p>Call us !</p>
                </div>
            </div>

        </div>

        <br>
    </div>
</div>


<style>

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 0;
    max-width: 1760px;
}

.contentTitle {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 0;
    max-width: 1760px;
}

.title {
    display: flex;
    max-width: 433px;
    justify-content: left;
    align-items: left;
}

h2 {
    margin-bottom: 20px;
}

.info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

}
.home p {
    display: inline;
    font-family: 'Montserrat', sans-serif;
    max-width: 750px;
    font-weight: medium;
    text-align: center;
}

.home {
    max-width: 1300px;
    width: 80%;
    text-align: center;
}

.banners {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin-top: 45px;
}

.banner {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
    height: 340px;
    background-color: #F5F5F5;
    border-radius: 15px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
}

.banner .BTitle {
    font-size: 24px;
    font-weight: bold;
    color: black;
    margin: 0;
    text-align: left;

}

.banner .PTitle {
    font-size: 24px;
    font-weight: bold;
    color: #BC6FF1;
    margin: 0;
    text-align: left;

}

.banner p {
    font-size: 18px;
    font-weight: bold;
    color: black;
    margin: 0;
    text-align: left;
}

.bannerTitle {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
}

.items {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    margin-right: 20px;
}

.items p {
    margin-top: 11px;
}


.firstTitle {
    font-weight: bold;
    margin: 0;
}

.secondTitle {
    font-size: 32px;
    font-weight: bold;
    margin: 0;
}

@media (max-width: 820px) {
    .banners {
        flex-direction: column;
    }
    .banner {
        margin: 10px;
        width: 80%;

    }


    .secondTitle {
        font-size: 18px;
    }

    .home .aboutText {
        display: none;
    }

    .home .firstTitle {
        display: none;
    }


}

</style>
