<script>

    export let label;

</script>

<div class="content">
    <p>{label}</p>
    <input type="text" class="inputField">
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
}

</style>