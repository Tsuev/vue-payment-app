<template>
    <div class="col-12">
        <div class="d-flex justify-content-start align-items-center tax-content">
            <checkbox/>
            <p class="tax-value m-0">{{ new Intl.NumberFormat('ru-RU').format(payment) }} рублей <span class="text-muted">в {{ index }}-ый год</span></p>	
        </div>
        <hr class="w-100">
    </div>
    
</template>

<script>
import Checkbox from '@/components/Checkbox/Checkbox.vue'

export default {
    components:{
        Checkbox
    },
    props: ['payment', 'index'],
}
</script>

<style>
    .tax-value{
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
    }
    .tax-content{
        margin-bottom: 18px;
    }
    hr{
        color: #DFE3E6;
        margin: 16px 0 18px 0;
    }
</style>