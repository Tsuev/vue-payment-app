<template>
  <button @click='openPopUp' class="main-button">Налоговый вычет</button>
</template>

<script>
export default {
    methods: {
        openPopUp(){
            this.$emit('openPopUp')
        }
    }
}
</script>

<style>
    .main-button{
        height: 56px;
        width: 200px !important;
        background: transparent;
        color: #fff;
        border-radius: 6px;
        border: 1px solid #fff;
        padding: 16px 32px 16px 32px;
        font-family: Lab Grotesque;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: center;
        transition-duration: 0.2s;
    }

    .main-button:hover{
        background: #fff;
        color: black;
        transition-duration: 0.2s;

    }
</style>