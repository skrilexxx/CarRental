<script>
    import OrderForm from "../../../lib/orderForm.svelte";

    export let data;


</script>

<OrderForm bind:data={data}></OrderForm>


<style>

:global(.pricebtn button) {
    display: none;
}


</style>