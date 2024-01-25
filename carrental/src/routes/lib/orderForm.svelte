<script>
    import FormInput from "./formInput.svelte";
    import Button from "./button.svelte";



</script>

<div class="content">

    <div class="driverInfo box">
        <div class="inside">
            <div class="title">
                <h2>Information about the driver</h2>
                <p>As stated in the driver’s license.</p>
            </div>
            <div class="info">
                <FormInput label="Email address"></FormInput>
                <FormInput label="Name"></FormInput>
                <FormInput label="Surname"></FormInput>
                <!--phone number-->
                <!--country-->
            </div>
        </div>
    </div>

    <div class="address box">
        <div class="inside">
            <div class="title">
                <h2>Facturing Address</h2>
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

    <div class="conditons box">
        <div class="inside">
            <div class="title">
                <h2>General Conditions</h2>
            </div>
            <p>By clicking on Book and Pay, you confirm that you have downloaded (if possible) and read our General Terms, Insurance Terms and Budget Vehicle Conditions, and understand and agree to them.</p>
        </div>
    </div>

    <Button label="Book and Pay"></Button>

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
    background: white;
    border-radius: 10px;
    border-color: #626161;
    border-style: solid;
    width: 100%;
    border-width: 4px;
}

.driverInfo {
    display: flex;
    margin-bottom: 8px;
}

.address {
    display: flex;
    margin-bottom: 8px;
}

.payment {
    display: flex;
    margin-bottom: 8px;
}

.conditons {
    display: flex;
    margin-bottom: 8px;
}

.conditons .inside {
    margin-bottom: 15px;
}

.inside {
    margin-left: 20px;
    margin-bottom: 30px;
}

.title {
    margin-top: 25px;
}

.cardcode {
    display: flex;
    flex-direction: row;
}

.cardcode :global(.inputField) {
    width: 130px;
    margin-right: 10px;
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
    width: 100%;
    height: 60px;
}

</style>