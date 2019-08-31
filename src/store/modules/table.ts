let state = {
  info: {
    title: ['A', 'B'],
    data: [{ A: 1, B: 1 }, { A: 2, B: 2 }]
  },
}

const mutations = {
  setInfo(state, info) {
    state.info = info;
  },
  setInfoRow(state, rowData) {
    let info = JSON.parse(JSON.stringify(state.info))
    let data = info.data
    data[rowData.index] = rowData.row
    state.info = {
      title: info.title,
      data,
    }
  }
}

const getters = {
  info: state => state.info
}
const actions = {
  setInfo({ commit }, info) {
    commit('setInfo', info)
  },
  setInfoRow({ commit }, rowData) {
    commit('setInfoRow', rowData)
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
