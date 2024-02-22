<script>

    export let label;
    export let name;
    export let value;
    export let id;

    export let checked;

    function check() {
        checked = document.getElementById(id).checked;
    }



</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="content" on:click={check}>
    <input type="checkbox" class="$$props.class" id={id} name={name} value={value}>

    <label for={id}>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path class="check" d="M15.84 8.50666C15.9615 8.37634 16.0276 8.20396 16.0244 8.02585C16.0213 7.84774 15.9491 7.67781 15.8232 7.55184C15.6972 7.42588 15.5273 7.35373 15.3492 7.35059C15.171 7.34744 14.9987 7.41356 14.8683 7.535L9.39585 13.0075L7.13168 10.7433C7.00135 10.6219 6.82898 10.5558 6.65087 10.5589C6.47276 10.5621 6.30282 10.6342 6.17686 10.7602C6.0509 10.8861 5.97874 11.0561 5.9756 11.2342C5.97246 11.4123 6.03857 11.5847 6.16001 11.715L8.91001 14.465C9.03892 14.5937 9.21366 14.6661 9.39585 14.6661C9.57803 14.6661 9.75277 14.5937 9.88168 14.465L15.84 8.50666Z" fill="white"/>
            <path class="box" d="M3.43751 1.83333H18.5625C19.448 1.83333 20.1667 2.55199 20.1667 3.43749V18.5625C20.1667 18.9879 19.9977 19.396 19.6968 19.6968C19.396 19.9977 18.988 20.1667 18.5625 20.1667H3.43751C3.01206 20.1667 2.60403 19.9977 2.30319 19.6968C2.00235 19.396 1.83334 18.9879 1.83334 18.5625V3.43749C1.83334 2.55199 2.55201 1.83333 3.43751 1.83333ZM3.20834 3.43749V18.5625C3.20834 18.689 3.31101 18.7917 3.43751 18.7917H18.5625C18.6233 18.7917 18.6816 18.7675 18.7246 18.7245C18.7675 18.6816 18.7917 18.6233 18.7917 18.5625V3.43749C18.7917 3.37672 18.7675 3.31843 18.7246 3.27545C18.6816 3.23247 18.6233 3.20833 18.5625 3.20833H3.43751C3.37673 3.20833 3.31844 3.23247 3.27546 3.27545C3.23249 3.31843 3.20834 3.37672 3.20834 3.43749Z" fill="white"/>
        </svg>
        <span>
            {label}
        </span>
    </label>

</div>


<style>

.content {
    display: flex;
    align-items: center;
    justify-content: left;
    height: 100%;
    margin-top: 6px;
    padding: 0.5em;
}



input[type="checkbox"] {
    display: none;
    pointer-events: none;
}

label {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: .8em;
}

svg {
    stroke: white;
    stroke-width: 0.5px;
    fill: none;
}

.box {
    stroke-dasharray: 320;
    stroke-dashoffset: 0;
}

.check {
    stroke-dasharray: 70;
    stroke-dashoffset: 70;
    fill: none;
}

span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: white;
    max-width: 100%;
    width: 100%;
    font-size: 16px;
    font-family: "Montserrat", sans-serif;
    transition-duration: 0.4s;
    cursor: pointer;
    margin: 2px;
}

input[type="checkbox"]:checked + label svg .check {

    stroke-dashoffset: 0;
    fill: white;
    animation: dash 0.5s linear forwards;
}

@media (max-width: 820px) {
    .content {
        padding: 0;
    }
}

</style>