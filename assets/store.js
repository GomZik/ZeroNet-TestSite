import Vue from 'vue'
import Vuex from 'vuex'

import ZeroFrame from 'lib/ZeroFrame'

const WRAPPER_CMD_SET_SITE_INFO = 'setSiteInfo'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    certId: null
  },
  actions: {
    selectUser() {
      zeroSite.cmd('certSelect', {
        accepted_domains: ['zeroid.bit']
      }, ...args => this.actions.userWasSelected(args))
    },

    userWasSelected(args) {
      console.log(args)
    },

    setSiteInfo(state, siteInfo) {
      console.log(state, siteInfo)
      state.dispatch('UPDATE_CERT_ID', siteInfo.params.cert_user_id)
    }
  },
  mutations: {
    UPDATE_CERT_ID(state, newCertId) {
      state.certId = newCertId
    }
  }
})

class ZeroSite extends ZeroFrame {
  route(cmd, msg) {
    if (cmd === WRAPPER_CMD_SET_SITE_INFO) {
      store.actions.setSiteInfo(msg)
    }
  }
}

const zeroSite = new ZeroSite()

export default store
