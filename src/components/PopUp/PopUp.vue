<template>
  <transition name="slide-fade">
    <div class="popup-wrapper">
      <div class="row">
        <div class="col title d-flex">
          Налоговый вычет
          <svg @click='closePopUp' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" class="ms-auto" style="margin-top: -10px; cursor: pointer">
            <path d="M11.4226 9.00086L17.4771 2.94467C17.6407 2.78667 17.7712 2.59768 17.8609 2.38872C17.9507 2.17976 17.998 1.95502 17.9999 1.72761C18.0019 1.50019 17.9586 1.27466 17.8725 1.06417C17.7863 0.853686 17.6592 0.662457 17.4984 0.501645C17.3375 0.340833 17.1463 0.213657 16.9358 0.12754C16.7253 0.041423 16.4998 -0.0019115 16.2724 6.46674e-05C16.045 0.00204084 15.8202 0.0492885 15.6113 0.139051C15.4023 0.228813 15.2133 0.359291 15.0553 0.522874L8.99914 6.57735L2.94467 0.522874C2.78667 0.359291 2.59768 0.228813 2.38872 0.139051C2.17976 0.0492885 1.95502 0.00204084 1.72761 6.46674e-05C1.50019 -0.0019115 1.27466 0.041423 1.06417 0.12754C0.853686 0.213657 0.662457 0.340833 0.501645 0.501645C0.340833 0.662457 0.213657 0.853686 0.12754 1.06417C0.041423 1.27466 -0.0019115 1.50019 6.46674e-05 1.72761C0.00204084 1.95502 0.0492885 2.17976 0.139051 2.38872C0.228813 2.59768 0.359291 2.78667 0.522874 2.94467L6.57735 8.99914L0.522874 15.0553C0.359291 15.2133 0.228813 15.4023 0.139051 15.6113C0.0492885 15.8202 0.00204084 16.045 6.46674e-05 16.2724C-0.0019115 16.4998 0.041423 16.7253 0.12754 16.9358C0.213657 17.1463 0.340833 17.3375 0.501645 17.4984C0.662457 17.6592 0.853686 17.7863 1.06417 17.8725C1.27466 17.9586 1.50019 18.0019 1.72761 17.9999C1.95502 17.998 2.17976 17.9507 2.38872 17.8609C2.59768 17.7712 2.78667 17.6407 2.94467 17.4771L8.99914 11.4226L15.0553 17.4771C15.2133 17.6407 15.4023 17.7712 15.6113 17.8609C15.8202 17.9507 16.045 17.998 16.2724 17.9999C16.4998 18.0019 16.7253 17.9586 16.9358 17.8725C17.1463 17.7863 17.3375 17.6592 17.4984 17.4984C17.6592 17.3375 17.7863 17.1463 17.8725 16.9358C17.9586 16.7253 18.0019 16.4998 17.9999 16.2724C17.998 16.045 17.9507 15.8202 17.8609 15.6113C17.7712 15.4023 17.6407 15.2133 17.4771 15.0553L11.4226 8.99914V9.00086Z" fill="#EA0029"/>
          </svg>
        </div>
      </div>
      <div class="row">
        <div class="col description">
          Используйте налоговый вычет чтобы погасить ипотеку досрочно. <br>
          Размер налогового вычета составляет не более 13% от своего официального годового дохода.
        </div>
      </div>
      <div class="row">
        <div class="col d-flex flex-column">
          <label class="salary" for="salary">Ваша зарплата в месяц</label>
          <input id="salary" v-mask="mask" v-model="maskData" type="text" placeholder="Введите данные">
          <span @click='canculatePayments(maskData)' class="action-button">Рассчитать</span>
        </div>
      </div>
      <transition name="pay-fade">
        <div v-show="isShowPayments">
          <div class="row">
            <div class="col result-title">Итого можете внести в качестве досрочных:</div>
          </div>
          <div class="row tax" style="overflow-y: scroll; max-height: 200px; margin-bottom: 18px">
            <Tax
              v-for="(value, index) of backSalaries"
              :key='index'
              :payment='value'
              :index='index + 1'
            />
          </div>
        </div>
      </transition>
      <div class="row">
        <div class="col d-flex align-items-center">
          <span class="question">Что уменьшаем?</span>
          <choosing-button
            :paddingX='6'
            :paddingY='12'
            :content='"Платёж"'
            :active='true'
          />
          <choosing-button
            :paddingX='6'
            :paddingY='12'
            :content='"Срок"'
          />
        </div>
      </div>
      <div class="row last-row">
        <div class="col">
          <choosing-button
            :borderRadiusSize="6"
            :paddingY="100"
            :paddingX="16"
            :width="100"
            :content='"Добавить"'
            :flex='true'
            :active='true'
          />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Tax from '@/components/Tax/Tax.vue'
import ChoosingButton from '@/components/Buttons/ChoosingButton.vue'
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { mapState, mapMutations } from 'vuex'

const currencyMask = createNumberMask({
    suffix: ' ₽',
    prefix: '',
    thousandsSeparatorSymbol: ' ',
    integerLimit: 15
});

export default {
  data(){
    return{
      mask: currencyMask,
      maskData: ''
    }
  },

  computed: mapState(['backSalaries', 'isShowPayments']),
  components: {
    Tax,
    ChoosingButton
  },
  methods: {
    closePopUp(){
      this.$emit('closePopUp')
    },
    ...mapMutations(['salaryCanculation', 'showPayments']),
    canculatePayments(data){
      this.showPayments(data)
      this.salaryCanculation()
    }
  },
}
</script>

<style>
  .popup-wrapper{
    position: absolute;
    margin: auto;
    max-width: 453px;
    border-radius: 30px;
    background: #fff;
    font-family: Lab Grotesque;
    padding: 32px;
  }
  .title{
    font-weight: 500;
    font-size: 28px;
    line-height: 40px;
    margin-bottom: 16px;
  }
  .description{
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: #808080;
    margin-bottom: 24px;
  }

  label.salary{
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 8px;
  }

  #salary{
    border: 1px solid #DFE3E6;
    box-sizing: border-box;
    border-radius: 3px;
    padding: 10px 8px;
    transition-duration: 0.2s;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 8px;
  }

  #salary:focus-visible{
    outline: none;
    border: 1px solid #DFE3E6;
    box-sizing: border-box;
    border-radius: 3px;
  }

  #salary:hover{
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 3px;
    transition-duration: 0.2s;
  }
  .action-button{
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #EA0029;
    cursor: pointer;
    transition-duration: 0.1s;
    margin-bottom: 16px;
  }

  .action-button:hover{
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #F53A31;
    transition-duration: 0.1s;
  }

  .action-button:active{
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #EA0029;
  }
  .result-title{
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #000000;
  }
  .result-title{
    margin-bottom: 18px;
  }
  .question{
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    margin-right: 32px;
  }

  .last-row{
    margin-top: 40px;
  }

  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s ease;
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateY(-30px);
    opacity: 0;
  }

  .pay-fade-enter-active {
    transition: all .3s;
  }
  .pay-fade-leave-active {
    transition: all .1s;
  }
  .pay-fade-enter, .pay-fade-leave-to {
    transform: translateY(-30px);
    opacity: 0;
  }
  ::-webkit-scrollbar{
    width: 6px;
    height: 6px;
  }
  ::-webkit-scrollbar-thumb{
    background: #DC3131;
    border-radius: 30px;
  }
  ::-webkit-scrollbar-thumb:hover{
    background: #B3AFB3;
  }
  ::-webkit-scrollbar-track{
    background: #F0F0F0;
    border-radius: 0px;
    box-shadow: inset 0px 0px 0px 0px #F0F0F0;
  }
</style>