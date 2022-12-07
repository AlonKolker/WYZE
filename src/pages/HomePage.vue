<template>
  <v-container fluid class="app-container ma-0 pa-0">
    <header class="header">Find Wyze Branches!</header>
    <v-row class="select-container" align="center">
      <v-col class="d-flex" cols="12" sm="6">
        <v-select v-model="region" @change="selectedRegion()" :items="regionsList" label="Select region" dense solo></v-select>
      </v-col>

      <v-col class="d-flex" cols="12" sm="6">
        <v-select v-model="town" @change="selectedTown()" :items="townList" label="Select town" dense solo></v-select>
      </v-col>
    </v-row>
    <v-container class="action-btn-container mb-5" fluid align="center">
      <v-btn v-if="town !== '' || region !== ''" depressed @click="onReset()"> Reset </v-btn>
      <v-btn v-if="town !== ''" @click="getTownBranches(town)" color="primary" elevation="6">Show</v-btn>
    </v-container>
    <v-container v-if="showBranches" class="table-container d-flex flex-column align-center">
      <div class="table-header">{{ town.toUpperCase() }} Branches</div>
      <v-data-table
        dense
        :headers="headers"
        :items="branches"
        item-key="name"
        class="elevation-1 ma-12 pa-12 branches-table"
        :hide-default-footer="true"
      >
      </v-data-table>
    </v-container>
  </v-container>
</template>

<script>
import { store } from "../store/index"
import { service } from "../services/service"
export default {
  name: "HOME",
  data: () => ({
    town: "",
    region: "",
    showBranches: false,
    headers: [
      {
        text: "Adress",
        align: "start",
        value: "adress",
      },
      { text: "Phone", value: "number" },
    ],
    branches: [],
  }),
  methods: {
    selectedTown() {
      store.dispatch({ type: "setTown", town: this.town })
      this.showBranches = false
    },
    selectedRegion() {
      store.dispatch({ type: "setRegion", region: this.region })
    },
    async getTownBranches(town) {
      try {
        this.branches = await service.getBranches(town)[0].branches
        this.showBranches = true
      } catch (error) {
        console.log("Faild to fetch branches")
        throw error
      }
    },
    onReset() {
      store.dispatch({ type: "setTown", town: "" })
      store.dispatch({ type: "setRegion", region: "" })

      this.town = ""
      this.region = ""
      this.showBranches = false
    },
  },
  computed: {
    townList() {
      return store.getters.getTownList
    },
    regionsList() {
      return store.getters.getRegionsList
    },
  },
}
</script>
