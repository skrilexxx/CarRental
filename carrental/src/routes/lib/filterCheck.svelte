<script>

    export let label;
    export let name;
    export let value;
    export let id;

    export let checked;

    let contId = id + "content";
    let labelId = id + "label";


    function check() {
        const checkbox = document.getElementById(id);
        checkbox.checked = !checkbox.checked;
        checked = document.getElementById(id).checked;
        changeColor();
    }

    function changeColor() {
        if (document.getElementById(id).checked) {
            document.getElementById(contId).style.backgroundColor = "#BC6FF1";
            document.getElementById(labelId).style.color = "white";
        }
        else {
            document.getElementById(contId).style.backgroundColor = "#F4F4F9";
            document.getElementById(labelId).style.color = "black";
        }
    }


</script>


<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="content" id={contId} on:click={check}>
    <input type="checkbox" class="$$props.class" id={id} name={name} value={value}>

    <label for={id}>
        <span id={labelId}>
            {label}
        </span>
    </label>

</div>

<style>

.content {
    display: flex;
    align-items: center;
    justify-content: left;
    height: 80%;
    width: 80%;
    padding: 0.5em;
    background-color: #F4F4F9;
    border-radius: 10px;
    margin-bottom: 5px;
}

.content:hover {
    background-color: #E8E8E8;
    cursor: pointer;
}


input[type="checkbox"] {
    display: none;
    pointer-events: none;
    width: 100%;
    height: 100%;
}


label {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 12px;
}

span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: black;
    max-width: 100%;
    width: 100%;
    font-size: 14px;
    font-family: "Montserrat", sans-serif;
    transition-duration: 0.4s;
    cursor: pointer;
    margin: 2px;
}

@media (max-width: 820px) {
    .content {
        padding: 0;
    }
}
</style>