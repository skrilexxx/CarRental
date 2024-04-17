<script>
    import FormInput from "./formInput.svelte";
    import Button from "./button.svelte";
    import CountryDropdown from "./countryDropdown.svelte";
    import PriceInfo from "./bookPriceInfo.svelte";
    import { page } from "$app/stores";
    import { pickupLocation, pickupdate, dropoffdate } from "../stores/mapLocations";

    export let data;
    let car = data.cars;
    let price;

    let orderData = {
        name: "",
        surname: "",
        email: "",
        phone: "",
        driverLicenseNumber: "",
        street: "",
        houseNumber: "",
        city: "",
        zipCode: "",
        country: "",
        carId: "",
        price: "",
        start: "",
        end: "",
        pickupLocation: "",

    }

    let apiUrl = 'http://localhost:5173/api/order';

    if (import.meta.env.VITE_VERCEL_ENV === 'production') {
        apiUrl = 'https://www.brnocarrental.cz/api/order/';
    }


    let driverMessage = "";
    let addressMessage = "";

    function sendOrder() {
        if (document.getElementById("Email address").value == "" || document.getElementById("Name").value == "" || document.getElementById("Surname").value == "" || document.getElementById("Driver license number").value == "" || document.getElementById("Street").value == "" || document.getElementById("House number").value == "" || document.getElementById("City").value == "" || document.getElementById("Zip code").value == "" || document.getElementById("country").value == "" || document.getElementById("Phone number").value == "") {
            driverMessage = "*All fields are required."
            addressMessage = "*All fields are required."
            return;
        }
        if (!document.getElementById("Email address").value.includes("@")) {
            driverMessage = "*Please enter a valid email address."
            return;
        }
        if (document.getElementById("Zip code").value.length != 5) {
            addressMessage = "*Please enter a valid zip code."
            return;
        }
        if (document.getElementById("Driver license number").value.length  < 1 || document.getElementById("Driver license number").value.length  > 16) {
            driverMessage = "*Please enter a valid driver license number."
            return;
        }
        if (document.getElementById("Phone number").value.length  < 9 || document.getElementById("Phone number").value.length  > 15) {
            driverMessage = "*Please enter a valid phone number."
            return;
        }

        orderData.email = document.getElementById("Email address").value;
        orderData.phone = document.getElementById("Phone number").value;
        orderData.name = document.getElementById("Name").value;
        orderData.surname = document.getElementById("Surname").value;
        orderData.driverLicenseNumber = document.getElementById("Driver license number").value;
        orderData.street = document.getElementById("Street").value;
        orderData.houseNumber = document.getElementById("House number").value;
        orderData.city = document.getElementById("City").value;
        orderData.zipCode = document.getElementById("Zip code").value;
        orderData.country = document.getElementById("country").value;
        orderData.price = price;
        orderData.carId = car.id;
        orderData.start = $pickupdate;
        orderData.end = $dropoffdate;
        orderData.pickupLocation = $pickupLocation;

        sendToServer();
        console.log(car.Id)
        console.log(orderData)
        console.log("Order sent")
    }

    function sendToServer() {
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            window.location.href = $page.url.pathname + "/success";
        })
        .catch((error) => {
            console.error('Error:', error);
            window.location.href = $page.url.pathname + "/failed";
        });
    }

</script>

<div class="content">

    <div class="driverInfo box">
        <div class="inside">
            <div class="title">
                <p class="Message Driver">{driverMessage}</p>
                <h2>Information about the driver</h2>
                <p>As stated in the driver’s license.</p>
            </div>
            <div class="info">
                <FormInput label="Name"></FormInput>
                <FormInput label="Surname"></FormInput>
                <FormInput label="Driver license number"></FormInput>
                <FormInput label="Email address"></FormInput>
                <FormInput label="Phone number"></FormInput>
                <CountryDropdown label="Country of permanent residence" ></CountryDropdown>
            </div>
        </div>
    </div>

    <div class="address box">
        <div class="inside">
            <div class="title">
                <p class="Message Address">{addressMessage}</p>
                <h2>Driver’s Address</h2>
                <p>As stated in the driver’s license.</p>
            </div>
            <div class="info">
                <FormInput label="Street"></FormInput>
                <FormInput label="House number"></FormInput>
                <FormInput label="City"></FormInput>
                <FormInput label="Zip code"></FormInput>
                <!--country-->
            </div>
        </div>
    </div>
<!-- platba bude az po rezervaci auta pres platebni branu 3rd party
    <div class="payment box">
        <div class="inside">
            <div class="title">
                <h2>Payment</h2>
            </div>
            <div class="info">
                <FormInput label="Name of card holder"></FormInput>
                <FormInput label="Card number"></FormInput>
                <div class="cardcode">
                    <FormInput label="Expiration date"></FormInput>
                    <FormInput label="Security code"></FormInput>
                </div>
            </div>
        </div>
    </div>
-->
    <div class="conditons box">
        <div class="inside">
            <div class="title">
                <h2>General Conditions</h2>
            </div>
            <p>By clicking on Book and Pay, you confirm that you have downloaded (if possible) and read our General Terms, Insurance Terms and Budget Vehicle Conditions, and understand and agree to them.</p>
        </div>
    </div>

    <div class="bookInfo">
        <PriceInfo bind:carInfo={car} bind:totalPrice={price}> </PriceInfo>
    </div>

    <Button label="Book Free" action={sendOrder} ></Button>


</div>



<style>

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    padding: 0;
    width: 57%;
    max-width: 800px;
}

.box {
    display: flex;
    background: white;
    border-radius: 10px;
    border-color: #626161;
    border-style: solid;
    width: 102%;
    border-width: 4px;
    margin-bottom: 8px;
}

.bookInfo {
    display: none;
}

.conditons .inside {
    margin-bottom: 15px;
}

.inside {
    margin-left: 20px;
    margin-bottom: 30px;
    margin-right: 20px;
}

.title {
    margin-top: 25px;
}

h2 {
    color: black;
    text-align: left;
    font-size: 18px;
    padding: 0;
    font-weight: 600;
}

p {
    color: black;
    text-align: left;
    font-size: 14px;
    padding: 0;
}

.conditons p {
    font-size: 12px;
    margin-right: 20px;
}

.content :global(button) {
    width: 103%;
    height: 60px;
}

.Message {
    color: red;
    font-size: 14px;
}

/*
.payment {
    display: flex;
    margin-bottom: 8px;
}


.cardcode {
    display: flex;
    flex-direction: row;
}

.cardcode :global(.inputField) {
    width: 130px;
    margin-right: 10px;
}
*/


@media (max-width: 820px) {
    .content {
        width: 90vw;
        margin: 0px;
        margin-top: 10px;
    }

    .box {
        width: 97.5%;
        justify-content: center;
    }

    .inside {
        margin-left: 10px;
        margin-right: 10px;
    }

    .title {
        margin-top: 20px;
    }

    h2 {
        font-size: 16px;
    }

    p {
        font-size: 14px;
    }

    .conditons p {
        font-size: 10px;
        margin-right: 0px;
    }

    .content :global(button) {
        width: 90vw;
        height: 60px;
    }

    .inside {
        width: 90%;
    }

    .bookInfo {
        display: flex;
    }

}

</style>