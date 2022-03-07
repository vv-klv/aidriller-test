import addressRequest from '@/store/modules/addressRequest';
import { createStore } from 'vuex'

export default createStore({
  modules: {
    address: addressRequest,
  }
})
