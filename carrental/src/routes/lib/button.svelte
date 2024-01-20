<script>

    export let label;
    export let path;

    function search () {
        window.location.href = path;
    }

</script>

<button type="button" on:click={search}>{label}</button>


<style>

button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: #BC6FF1;
    border: none;
    border-radius: 10px;
    max-width: 200px;
    height: 72px;
    width: 100%;
    font-weight:  bold;
    font-size: 20px;
    font-family: "Montserrat", sans-serif;
    transition-duration: 0.4s;
    cursor: pointer;
    margin: 3px;
}

button:hover {
    background-color: #A566FF;
}
</style>