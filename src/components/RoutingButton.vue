<!-- Use either 'go' or 'destination' but not both. 'destination' will be used if both are specified.
     Destination prop should be used like this: v-bind:destination="{name: 'game'}"
     https://vuejs.org/v2/guide/components-props.html#Passing-an-Object -->

<template>
  <button class="main-button" @click="goForth"><slot></slot></button>
</template>

<script>
import router from "@/router";

export default {
  name: "RoutingButton",
  props: {
    destination: {
      type: Object,
      required: false
    },
    go: {
      type: Number,
      required: false,
    }
  },
  methods: {
    goForth(event) {
      this.$emit('click', event)
      if (this.destination) {
        router.push(this.destination)
      } else if (this.go !== undefined) {
        router.go(this.go)
      } else {
        console.log("RouterButton: unknown action, doing nothing")
      }
    }
  }
}
</script>

<!-- shut up, vue pycharm plugin, this import works -->
<!--suppress HtmlUnknownTarget -->
<style scoped src="@/css/main-button.css"></style>