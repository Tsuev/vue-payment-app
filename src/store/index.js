import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isShowPopUp: false,
    salary: 0,
    backSalaries: [],
    maxBackPay: 260000,
    isShowPayments: false
  },
  mutations: {
    showPopUp(state){
      state.isShowPopUp = !state.isShowPopUp
    },
    showPayments(state, salary){
      state.isShowPayments = true
      state.salary = salary.replace(/[^0-9]/g, '')
    },
    salaryCanculation(state){
      state.backSalaries = [state.salary * 12 * 0.13]

      while (state.backSalaries.reduce((a, b) => a + b) < state.maxBackPay) {
        if(state.backSalaries[0] + state.backSalaries.reduce((a, b) => a + b) > state.maxBackPay){
          state.backSalaries.push(state.maxBackPay - state.backSalaries.reduce((a, b) => a + b))
        }else{
          state.backSalaries.push(state.salary * 12 * 0.13)
        }
      }

      if(state.salary * 12 * 0.13 >= state.maxBackPay) state.backSalaries = [state.maxBackPay]
    }
  },

})