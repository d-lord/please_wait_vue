<template>
  <div>
    <h1 class="title">Please Wait</h1>
    <h2 class="subtitle">the game</h2>
    <RoutingButton v-bind:destination="{name: 'game'}">Click here to start</RoutingButton>
  </div>
</template>

<script>
import router from "@/router";
import RoutingButton from "@/components/RoutingButton";

export default {
  components: {RoutingButton},
  methods: {
    goToGame() {
      router.push({name: 'game'})
    }
  }
}
</script>

<style scoped>
.title {
  margin-bottom: 0.2em;
}

.subtitle {
  margin-top: 0;
}

</style>