<script>


    export let data;
    console.log(data);
    let car = data.cars;


    let bookingId = "[Your Booking ID]";
    let carName = car;
    let startDate = "[Start Date]";
    let endDate = "[End Date]";
    let pickupLocation = "[Selected Pick-up Location]";
    let price = "[Price]";


</script>

<div class="content">
    <div class="status">
        <h2>Reservation Confirmed!</h2>
    </div>

    <div class="text">
        <p>Thank you for choosing Brno Car Rentals! Your reservation has been successfully completed, and a confirmation email has been sent to the provided email address. Please check your inbox for further details.</p>

        <div class="orderDetails">
            <p class="title">Reservation Details</p>

            <div class="details">
                <p>Booking ID: {bookingId}</p>
                <p>Car: {carName}</p>
                <p>Pick-up Date: {startDate}</p>
                <p>Drop-off Date: {endDate}</p>
                <p>Pick-up Location: {pickupLocation}</p>
                <p>Total Price: {price}</p>
            </div>
        </div>

        <div class="whatNow">
            <p class="title">What's Next?</p>
            <p class="head">1. Check Your Email:</p>
            <p class="dot">Please review the confirmation email sent to you for a comprehensive summary of your reservation details.</p>
            <p class="head">2. Contact Information:</p>
            <p class="dot">If you have any questions or need further assistance, don't hesitate to reach out to our customer support team at [Your Customer Support Email or Phone Number].</p>
            <p class="head">3. Prepare for Pick-up:</p>
            <p class="dot">Ensure you have all necessary documents, including a valid driver's license and payment details, ready for a smooth pick-up process.</p>
            <p class="head">4. Enjoy Your Trip:</p>
            <p class="dot">We wish you a fantastic journey with Brno Car Rentals! Explore Brno and its surroundings with the freedom and comfort of your selected vehicle.</p>
        </div>

        <p>Thank you for trusting us with your travel needs. We look forward to providing you with an exceptional car rental experience. Safe travels!</p>
    </div>



</div>


<style>

.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    max-width: 1760px;
}

.text {
    display: flex;
    flex-direction: column;
    width: 80vw;
    align-items: center;
    font-size: 18px;
}

.orderDetails {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.title {
    width: 95%;
    text-align: left;
    font-weight: 600;
    font-size: 20px;
    margin: 15px 0px;
}

.details p{
    width: 95%;
    text-align: left;
    margin: 0;
    padding: 0;
    font-size: 18px;
}

.details {
    width: 95%;
}

.whatNow {
    width: 95%;
    margin-top: 20px;
}

.whatNow p {
    width: 95%;
    text-align: left;
}

.dot {
    margin-left: 10px;
    margin-bottom: 15px;
    margin-top: 0px;
    font-size: 16px;
}

.dot::before {
    content: "•";
    font-weight: bold;
    margin-right: 0.5rem;
    margin-left: 10px;
}

.head {
    font-weight: 600;
    margin: 0;
    font-size: 16px;
}


</style>