import Vue from "vue"
import Vuex from "vuex"
import { service } from "../services/service"
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    currTown: "",
    currReigon: "",
    townList: [],
    regions: [],
  },
  getters: {
    getTownList({ townList, currReigon }) {
      if (!currReigon) return townList.map((t) => t.town)
      if (currReigon)
        return townList.map((t) => {
          if (t.region === currReigon) return t.town
        })
    },
    getRegionsList({ regions, currTown, townList }) {
      if (!currTown) return regions

      if (currTown) {
        let townRegion = new Array(townList.filter((town) => town.town === currTown)[0].region)
        return townRegion
      }
    },
  },
  mutations: {
    loadData(state, { data, dataType }) {
      if (dataType === "regions") state.regions = data
      if (dataType === "townList") state.townList = data
    },
    setTown(state, { town }) {
      state.currTown = town
    },
    setRegion(state, { region }) {
      state.currReigon = region
    },
  },
  actions: {
    async loadData({ commit }, { dataType }) {
      try {
        let data = await service.query(dataType)
        commit({ type: "loadData", data, dataType })
      } catch (error) {
        console.log("Faild getting data")
        throw error
      }
    },
    setTown({ commit }, { town }) {
      commit({ type: "setTown", town })
    },
    setRegion({ commit }, { region }) {
      commit({ type: "setRegion", region })
    },
  },
})
