import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import Home from '../../pages/Home.vue'

const localVue = createLocalVue()
// localVue.use(Vuex)

// const store = new Vuex.Store({
//   modules: {
//     city: {
//       namespaced: true,
//       state: {
//         cities: []
//       },
//       actions: {
//         fetchCities: () => []
//       }
//     },
//     cid: {
//       namespaced: true,
//       state: {
//         cids: []
//       },
//       actions: {
//         fetchCids: () => []
//       }
//     }
//   }
// })

describe('Pages / Home', () => {
  let vuetify
  let router
  let wrapper

  beforeEach(() => {
    vuetify = new Vuetify()
    router = new VueRouter()

    wrapper = mount(Home, {
      localVue,
      vuetify,
      router,
      stubs: {
        RouterLink: RouterLinkStub
      }
    })
  })

  describe('when all data is correct', () => {
    it('should render the page', () => {
      expect(wrapper.element).toMatchSnapshot();
    })
    it('renders the correct div ', ()=>{
      expect(wrapper.find('.home__container').exists()).toBe(true)
    })
  })
})
