<template>
  <div class="game">
    <ul>
      <template v-for="(step, index) in this.steps">
        <li :key="index" v-if="currentStep === index"><strong>{{ step }}</strong></li>
        <li :key="index" v-else>{{ step }}</li>
      </template>
    </ul>
    <template v-if="currentStep < numSteps">
      <ProgressBar :duration="steps[currentStep][1]" @complete="next()" :key="this.currentStep">{{ steps[currentStep][0] }}</ProgressBar>
      <button @click="currentStep = numSteps" class="main-button">Skip</button>
    </template>
    <RoutingButton v-else @click="forceRestart()">Go again</RoutingButton>
    <!--    <RoutingButton v-bind:destination="{name: 'game'}">Go again</RoutingButton>-->
    <!-- neither of these is quite right: we want to re-mount the view (or something) to restart its timers, but not reload the whole page -->
  </div>
</template>

<script>
import RoutingButton from "@/components/RoutingButton";
import ProgressBar from "@/components/ProgressBar";

export default {
  name: "Game",
  components: {ProgressBar, RoutingButton},
  data() {
    return {
      steps: [
        ["Crafting pickaxes...", 500],
        ["Enchanting pickaxes...", 750],
        ["Swinging pickaxes...", 1000]
      ],
      currentStep: 0,
    }
  },
  methods: {
    next() {
      console.log("Game.next")
        this.currentStep++
      if (this.currentStep >= this.steps.length - 1) {
        // we're out of tasks!
        console.log("Done")
      }
    },
    forceRestart() {
      // this.$forceUpdate() // does not work
      Object.assign(this.$data, this.$options.data.apply(this)) // works, but goodness knows what it's doing. https://stackoverflow.com/a/50854892/2209946
    }
  },
  computed: {
    numSteps() {
      return this.steps.length
    }
  }
}
</script>

<!--suppress HtmlUnknownTarget -->
<style scoped src="@/css/main-button.css"></style>
<style scoped>
.main-button {
  margin: 1em;
}
</style>