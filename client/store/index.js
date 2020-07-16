export const state = () => ({
  isMenuOpen: false
})

export const mutations = {
  toggleMenu: state => {
    state.isMenuOpen = !state.isMenuOpen
    document.body.classList.toggle('overlay')
  },
  hideMenu: state => {
    state.isMenuOpen = false
    document.body.classList.remove('overlay')
  }
}

export const actions = {
  toggleMenu: context => context.commit('toggleMenu'),
  hideMenu: ({commit}) => commit('hideMenu')
}

export const getters = {
  getIsMenuOpen: state => state.isMenuOpen
}