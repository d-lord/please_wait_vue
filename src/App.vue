<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ExtraInfo />

    <!-- options for switching between Welcome and Game:
      # create a router and embed it here, have Welcome's button route to the new page
        + know how
        - don't want to change /path and seems like overkill anyway
      # create one "welcome or game" component which swaps its own state
        + know how
        - feels wrong: it's a weird coupling of two very separate views
      # have App replace one with the other, wire welcome's button to that function
        + kinda feels right
        - kinda feels wrong to be doing at the App level (but maybe as this is a toy app that's fine?)

    <Welcome next="Game" />
    -->

<!--    <Welcome/>-->
<!--    <Game />-->

    <router-view></router-view>
  </div>
</template>


<script>
import router from "@/router";
import ExtraInfo from "@/components/ExtraInfo";
// import Welcome from "@/views/Welcome";
// import Game from "@/views/Game";

export default {
  name: 'App',
  router,
  components: {
    // Game,
    ExtraInfo,
    // Welcome
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* ported: index.css */
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

/* ported: App.css */
.App {
  text-align: center;
  margin-top: 2em;
  margin-right: 2em;
  margin-left: 2em;
}
</style>
