
<template>
  <b-container class="mt-5">
    <b-row>
      <b-col class="text-center mt-5">
        <b-button class="btn btn-secondary" @click="increment">Incerement</b-button>
        <span class="text-center m-3">{{ showCounter }}</span>
        <b-button class="btn btn-danger" @click="decrement">Decrement</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>


<script>
import { mapGetters } from "vuex"
export default {
  methods: {
    increment() {
      this.$store.commit("counter/increment")
    },
    decrement() {
      this.$store.commit("counter/decrement")
    },
  },

  computed: {
    ...mapGetters(
      {
        showCounter: "counter/showCounter"
      }
    )
  }
}
</script>

<style>
</style>
