<template>
  <v-app>
    <v-main>
      <HomePage />
    </v-main>
  </v-app>
</template>

<script>
import HomePage from "./pages/HomePage"
import { store } from "./store/index"

export default {
  name: "App",

  data: () => ({
    //
  }),
  async created() {
    try {
      await store.dispatch({ type: "loadData", dataType: "regions" })
      await store.dispatch({ type: "loadData", dataType: "townList" })
    } catch (error) {
      console.log("Faild load data")
    }
  },
  components: {
    HomePage,
  },
}
</script>
