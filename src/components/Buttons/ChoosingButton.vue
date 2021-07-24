<template>
  <button 
    :style="{
      padding: paddingX + 'px' + ' ' + paddingY + 'px', 
      borderRadius: borderRadiusSize + 'px', 
      width: width + '%'
    }" 
    :class="{'flex-center': flex, 'choosing-button': active, 'disabled-button': !active}"
  >
    {{ content }}
  </button>
</template>

<script>
export default {
  props: {
    paddingX: {
      default: 0
    },
    paddingY: {
      default: 0
    },
    borderRadiusSize: {
      default: 50
    },
    content:{
      default: ''
    },
    width:{
      default: ''
    },
    flex:{
      default: false
    },
    active: {
      default: false
    }
  }
}
</script>

<style>
  .choosing-button{
    background: linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), linear-gradient(0deg, #FF5E56, #FF5E56);
    border-radius: 50px;
    color: #fff;
    font-family: Lab Grotesque;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    border: none;
    padding: 6px 12px;
    transition-duration: .4s;
    margin-right: 16px;
  }

  .choosing-button:hover{
    background: linear-gradient(255.35deg, #EA0029 0.83%, rgba(255, 79, 79, 0) 108.93%), linear-gradient(0deg, #EA0029, #EA0029);
    box-shadow: 0px 0px 24px rgba(234, 0, 41, 0.33);
    transition-duration: .4s;
  }

  .flex-center{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .disabled-button{
    background: #EEF0F2;
    border-radius: 50px;
    color: rgb(0, 0, 0);
    font-family: Lab Grotesque;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    border: none;
    padding: 6px 12px;
    transition-duration: .4s;
    margin-right: 16px;
  }
</style>