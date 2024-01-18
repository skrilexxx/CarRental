<script>

    import Checkbox from "./checkbox.svelte";

</script>

<div class="filterBar">
    <div class="label">
        <h3>Filter</h3>
        <hr class="line">
    </div>

    <div class="price part">
        <p class="title">Price per day</p>
        <Checkbox label="0-50€" name="price" id="price1" value="price1"></Checkbox>
    </div>
</div>



<style>

.filterBar {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 18vw;
    max-width: 250px;
    height: 585px;
    background-color: white;
    border-radius: 15px;
    margin-bottom: 20px;
    margin-top: 10px;
    border: 4px solid #626161;

}

.label {
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: center;
    width: 100%;
    height: 7.5%;
}

h3 {
    display: inline;
    width: 80%;
    color: black;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
}

.line {
    width: 80%;
    margin-top: 0;
    margin-bottom: 0;
    border-color: #D9D9D9;
    border-style: solid;
    height: 2px;
}

.part {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: center;
    width: 100%;
    height: 30%;
}

p {
    display: inline;
    width: 80%;
    color: black;
    font-size: 16px;
    font-weight: 600;
}



</style>