
<template>
  <div>
    <b-container>
      <div class="text-center m-5">
        <h3>Body Mass Index Calculate</h3>
      </div>
      <b-row sm="12" class="justify-content-md-center">
        <b-col sm="6">
          <label>Height*</label>
          <b-form-input v-model="height" type="text" placeholder="1.75"></b-form-input>
        </b-col>
        <b-col sm="6">
          <label>Weight*</label>
          <b-form-input v-model="weight" type="number" placeholder="69"></b-form-input>
        </b-col>
      </b-row>

      <b-row sm="12">
        <b-col sm="12">
          <div class="text-center mt-5">
            <b-button variant="outline-primary" size="lg" @click="handlerCalculate">Calculate</b-button>
          </div>
        </b-col>
      </b-row>
      <b-row v-if="showBmi !== 0">
        <div class="mt-5">
          <b-alert class="text-white" show :style="{ background: showControll.color }">
            <h4 class="alert-heading text-center mb-4">{{ showControll.degree }}</h4>
            <hr />
            <p>BMI: {{ showBmi }}</p>
          </b-alert>
        </div>
      </b-row>
    </b-container>

    <!-- {{ $store.state.data }}
    {{ $store.state.Calculate.data }}-->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { bmiControl } from "./functions/bmiControl.js";

export default {
  data() {
    return {
      height: "",
      weight: ""

    }
  },
  methods: {
    handlerCalculate() {
      const payload = {
        height: parseFloat(this.height),
        weight: parseInt(this.weight)
      }
      this.$store.commit("calculate/handlerCalculate", payload)
    },

  },
  computed: {
    ...mapGetters({
      showBmi: "calculate/showBmi",
    }),
    showControll() {
      return bmiControl(this.showBmi)
    }
  },
}
</script>