<script>

    export let label;

</script>

<div class="content">
    <p>{label}</p>
    <input type="text" class="inputField" id={label}>
</div>



<style>

.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0;
}

p {
    color: black;
    font-size: 14px;
    font-weight: 600;
    margin: 4px 0px;
    text-align: left;
}


input {
    border: 1px solid black;
    border-radius: 5px;
    height: 30px;
    width: 280px;
    font-family: 'Montserrat', sans-serif;
}

@media (max-width: 820px) {

}


</style>