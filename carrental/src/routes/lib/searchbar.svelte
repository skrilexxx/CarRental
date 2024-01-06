<script>
	import Button from "./button.svelte";
	import Calendar from "./calendar.svelte";


</script>

<div class="barBg">
    <div class="searchbar">
        <Calendar></Calendar>
        <Calendar></Calendar>
        <Button label="Search"></Button>
    </div>

</div>

<style>

.barBg {
    background-color: #626161;
    border-radius: 10px;
    width: 100%;
    height: 80px
}

.searchbar {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 0;
    max-width: 1760px;
    height: 100%;
    width: 100%;
}

</style>