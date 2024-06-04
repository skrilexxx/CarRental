<script>

    import Question from "../lib/question.svelte";


</script>

<div class="contentTitle">
    <div class="title">
        <h2>Contact us</h2>
    </div>
</div>
<div class="content">
    <div class="home">
        <p style="font-weight: bold;">Get in Touch with Brno Car Rentals</p>

        <div class="banners">
            <div class="banner">
                <div class="title">
                    <p class="BTitle">Custoner</p>
                    <p class="PTitle">Hotline</p>
                </div>

                <div class="info">
                    <p>Available 24/7</p>
                    <p>Speak to our friendly team</p>
                </div>

                <div class="contact">
                    <p>+420 444 555 666</p>
                </div>
            </div>

            <div class="banner">
                <div class="title">
                    <p class="BTitle">Email</p>
                    <p class="PTitle">Support</p>
                </div>

                <div class="info">
                    <p>Non-urgent</p>
                    <p>We're here to help</p>
                </div>

                <div class="contact">
                    <p>support@brnocarrental.cz</p>
                </div>
            </div>

            <div class="banner">
                <div class="title">
                    <p class="BTitle">Visit</p>
                    <p class="PTitle">Us</p>
                </div>

                <div class="info">
                    <p>Visit our office HQ</p>
                    <p>Mon-Fri from 8am to 5pm</p>
                </div>

                <div class="contact">
                    <a href="https://www.google.com/maps/place/%C5%98%C3%ADpsk%C3%A1+1209%2F13a,+627+00+Slatina/@49.1778937,16.6746687,19z/data=!4m16!1m9!3m8!1s0x4712eb2998247825:0x9ba7741e6e6ab1bf!2zxZjDrXBza8OhIDEyMDkvMTNhLCA2MjcgMDAgU2xhdGluYQ!3b1!8m2!3d49.1779211!4d16.6748901!10e5!16s%2Fg%2F11bw4nps22!3m5!1s0x4712eb2998247825:0x9ba7741e6e6ab1bf!8m2!3d49.1779211!4d16.6748901!16s%2Fg%2F11bw4nps22?entry=ttu"><p>View on Google Maps</p></a>
                </div>
            </div>

            <div class="banner">
                <div class="title">
                    <p class="BTitle">Social</p>
                    <p class="PTitle">Media</p>
                </div>

                <div class="info">
                    <p>Checkout our Socials</p>
                    <p>Don't forget to tag us</p>
                </div>

                <div class="contact">
                    <div class="socials">
                        <a href="https://www.instagram.com/"><img src="/bl_instagram.svg" alt="instagram"/></a>
                        <a href="https://www.linkedin.com/"><img src="/bl_linkedin.svg" alt="twitter"/></a>
                        <a href="https://www.facebook.com/"><img src="/bl_facebook.svg" alt="facebook"/></a>
                    </div>
                </div>
            </div>
        </div>

        <div class="questionSection">
            <p class="QTitle">Frequently asked questions</p>

            <Question question="What do I need to rent a car?" answer="To rent a car, you will need a valid driver’s license, a credit card in the renter’s name, and proof of insurance. International renters will also need a valid passport and an international driver’s permit." num="1"></Question>
            <Question question="How old do I need to be to rent a car?" answer="The minimum age to rent a car is typically 18 years old. However, renters under the age of 25 may be subject to a young driver surcharge." num="2"></Question>
            <Question question="Can I modify or cancel my reservation?" answer="Yes, you can modify or cancel your reservation online or by contacting our customer support team. Please note that changes to your reservation may affect the rental rate, and cancellation policies may apply." num="3"></Question>
            <Question question="What is included in the rental rate?" answer="The rental rate includes the base rental price, taxes, and standard insurance. Additional options such as GPS, child seats, and additional insurance coverage are available for an extra fee." num="4"></Question>
            <Question question="Is there a mileage limit?" answer="Most rentals include unlimited mileage. However, some rental agreements may have mileage restrictions. Please check your rental agreement for details." num="5"></Question>
            <Question question="What happens if I return the car late?" answer="If you return the car late, you may be charged an additional fee. The late fee is typically calculated based on the hourly or daily rate. Please contact us if you anticipate returning the car late." num="6"></Question>
            <Question question="Can I add an additional driver to my rental agreement?" answer="Yes, you can add an additional driver to your rental agreement. The additional driver must meet the same rental requirements and may be subject to an additional fee." num="7"></Question>
            <Question question=" What should I do if the car breaks down?" answer="If the car breaks down, please contact our customer support hotline immediately. We will provide assistance and arrange for a replacement vehicle if necessary." num="8"></Question>
            <Question question="Are there any restrictions on where I can take the rental car?" answer="Yes, there may be restrictions on taking the rental car out of the country or to certain areas. Please check with us beforehand if you plan to travel outside the local area." num="9"></Question>
            <Question question="How do I extend my rental period?" answer="To extend your rental period, please contact our customer support team before the end of your current rental agreement. Extensions are subject to availability and may incur additional charges." num="10"></Question>

        </div>

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

.home p {
    display: inline;
    font-family: 'Montserrat', sans-serif;
    max-width: 750px;
    font-weight: medium;
    text-align: center;
}

.home {
    max-width: 1300px;
    width: 100%;
    text-align: center;
}
 h2 {
    margin-bottom: 20px;
 }

.banner {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
    height: 200px;
    background-color: #F5F5F5;
    border-radius: 15px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
}

.banners {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin-top: 45px;
}

.banner .BTitle {
    font-size: 18px;
    font-weight: bold;
    color: black;
    margin: 0;
    text-align: left;

}

.banner .PTitle {
    font-size: 18px;
    font-weight: bold;
    color: #BC6FF1;
    margin: 0;
    text-align: left;

}

.banner .title{
    display: flex;
    flex-direction: column;
    width: 85%;
    margin-top: 20px;
}

.banner .info{
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    width: 85%;
    height: 40%;
}

.banner .info p {
    font-size: 12px;
    font-weight: bold;
    color: #626161;
    margin-top: 0;
    margin-bottom: 5px;
    text-align: left;
}

.banner .contact{
    display: flex;
    margin-top: 10px;
    width: 85%;
}

.banner .contact p {
    font-size: 12px;
    font-weight: bold;
    color: black;
    margin-top: 0;
    margin-bottom: 5px;
    text-align: left;
    text-decoration: underline;
}

.questionSection {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
}

.QTitle {
    font-size: 32px;
    font-weight: bold;
    margin: 0;
    text-align: center;
}

.socials {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 40%;
}

@media (max-width: 820px) {
    .banners {
        flex-direction: column;
    }
    .banner {
        margin: 10px;
    }


}

</style>
