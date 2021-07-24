<template>
    <div class="container-fluid main-bg">
        <div class="row d-flex justify-content-center align-items-center">
            <MainButton
                @openPopUp='showPopUp'
            />

            <PopUp 
                v-show="isShowPopUp"
                @closePopUp='showPopUp'
            />
        </div>
    </div>
</template>

<script>
import PopUp from '@/components/PopUp/PopUp.vue'
import MainButton from '@/components/Buttons/MainButton.vue'
import { mapState, mapMutations } from 'vuex'

export default {
    computed: mapState(['isShowPopUp']),
    methods: {
        ...mapMutations(['showPopUp'])
    },
    components: {
        PopUp,
        MainButton
    }
}
</script>

<style>
    .main-bg{
        background: linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), linear-gradient(0deg, #FF5E56, #FF5E56);
    }

    .main-bg > .row {
        height: 100vh
    }
</style>