<template>
  <div>
    <slot></slot>
    <div class="meter animate">
      <span :style="animationDuration()"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: {
    /* When using 'duration', set it with : (short for v-bind:) so it will be evaluated and converted from String to Number.
       Either of these is fine:
       <ProgressBar :duration=2000 />
       <ProgressBar :duration="2000" />
       But this is not:
       <ProgressBar duration=2000 />
     */
    duration: {
      type: Number,
      required: false,
      default: 1000
    }
  },
  methods: {
    animationDuration() {
      return {animationDuration: this.duration + "ms"}
    }
  },
  mounted() {
    console.log("progressbar mounted")
    this.timer = setTimeout(() => {
      this.$emit('complete')
    }, this.duration)
  }
}
</script>

<style scoped>

/* stolen shamelessly from: https://css-tricks.com/css3-progress-bars/ */
/* the background part of the bar */
.meter {
  height: 20px;
  position: relative;
  background: #555;
  -moz-border-radius: 25px;
  -webkit-border-radius: 25px;
  border-radius: 25px;
  padding: 10px;
  box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.3);
  margin-top: 10px;
}

/* the progress part of the bar */
.meter > span {
  display: block;
  height: 100%;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background-color: rgb(43, 194, 83);
  background-image: linear-gradient(
      center bottom,
      rgb(43, 194, 83) 37%,
      rgb(84, 240, 84) 69%
  );
  box-shadow: inset 0 2px 9px rgba(255, 255, 255, 0.3),
  inset 0 -2px 6px rgba(0, 0, 0, 0.4);
  position: relative;
  overflow: hidden;
}

.meter > span:after, .animate > span {
  animation-name: expandWidth;
  animation-timing-function: linear;
  /*animation-iteration-count: infinite; !* for debugging *!*/
}

@keyframes expandWidth {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

.flipped {
  transform: rotate(180deg);
}
</style>