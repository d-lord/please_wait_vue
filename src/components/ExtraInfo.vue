<template>
    <!-- the buttons use unique value keys to prevent Vue from reusing the <button> and sharing the hover animation between the two separate buttons -->
  <div class="extra-info-expanded" v-if="this.$data.show" >
    <button class="extra-info-expanded-button" @click="toggleShow" :key="0">X</button>
    <h2>Credits</h2>
    This is built using <a href="https://vuejs.org">Vue</a>.
    The cute loading bar is from <a href="https://css-tricks.com/css3-progress-bars/">CSS Tricks</a>.
    The button you just clicked is adapted from <a href="https://fdossena.com/?p=html5cool/buttons/i.frag">Federico
    Dossena</a>.
    <h2>Why?</h2>
    I've never made anything this animated or interactive before, and it's a good exercise.
  </div>
  <div class="extra-info-hiding" v-else >
    <button class="extra-info-hiding-button" @click="toggleShow" :key="1">More info</button>
  </div>
</template>

<script>
export default {
  name: "ExtraInfo",
  data() {
    return {
      show: false
    }
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    }
  }
}
</script>

<style scoped>
.extra-info-expanded {
  background-color: #cccccc;
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 0 1em 1em 1em;
  max-width: 12em;
  font-size: smaller;
}

.extra-info-expanded-button {
  cursor: pointer;
  top: 0px;
  right: -0.3em;
  position: absolute;
  display: inline-block;
  padding: 0.35em 1.2em;
  border: 0.1em solid #000000;
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  font-weight: 300;
  color: #000000;
  text-align: center;
  transition: all 0.2s;
}

.extra-info-expanded-button:hover {
  color: #ffffff;
  background-color: #000000;
}

.extra-info-hiding {
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 0 1em 1em 0;
  font-size: larger;
}

.extra-info-hiding-button {
  cursor: pointer;
  display: inline-block;
  padding: 0.35em 1.2em;
  border: 0.1em solid #000000;
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  font-weight: 300;
  color: #000000;
  text-align: center;
  transition: all 0.2s;
  height: 5em;
}

.extra-info-hiding-button:hover {
  color: #ffffff;
  background-color: #000000;
}

.extra-info-hiding-button:active {
  color: #BBBBBB;
  border-color: #BBBBBB;
}
</style>