<template>
  <div id="app">
     <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';

@Component({
  components: {
  },
})
export default class App extends Vue {}
</script>

<style>

@font-face {
  font-family: 'PT_Sans';
  src: url(fonts/PT_Sans/PTSans-Regular.ttf);
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'PT_Sans';
  src: url(fonts/PT_Sans/PTSans-Bold.ttf);
  font-weight: bold;
  font-style: normal;
}

#app {
  font-family: 'PT_Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  color:black;
}
  
</style>
