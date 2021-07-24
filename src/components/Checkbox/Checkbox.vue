<template>
    <label>
      <input class="d-none main-checkbox" type="checkbox">
      <div class="custom-checkbox"></div>
    </label>
</template>

<script>
export default {
    
}
</script>

<style>
    .custom-checkbox{
        height: 20px;
        width: 20px;
        border-radius: 6px;
        border: 1px solid #DFE3E6;
        transition-duration: .1s;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        margin-right: 14px;

    }

    .custom-checkbox:hover{
        border: 1px solid #000000;
        box-sizing: border-box;
        border-radius: 6px;
        transition-duration: .1s;
    }

    .custom-checkbox::before{
        content: url('../../assets/img/done.svg');
        position: absolute;
        top: 0%;
        left: 0%;
        width: 20px;
        height: 20px;
        display: flex;
        justify-content: center;
        background: linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%),linear-gradient(0deg, #FF5E56, #FF5E56);
        opacity: 0;
        align-items: center;
    }
    

    .main-checkbox:checked + .custom-checkbox::before{
        opacity: 1;
    }

    .main-checkbox:checked + .custom-checkbox{
        border: none;
    }


</style>

