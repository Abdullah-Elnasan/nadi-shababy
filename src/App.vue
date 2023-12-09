<template>
  <div id="app">
    <header-app></header-app>
    <slidbar-vue></slidbar-vue>
    <about-view></about-view>
    <our-history></our-history>
    <read-book></read-book>
    <footer-vue></footer-vue>
    <footer-vue-2></footer-vue-2>
  </div>
</template>

<script>

import AboutView from './components/global/AboutView';
import FooterVue from './components/global/footerVue';
import OurHistory from './components/global/ourHistory';
import ReadBook from './components/global/readBook';
import HeaderApp from './components/HeaderApp';
import SlidbarVue from './components/slidbarVue';
import footerVue2 from './components/footerVue2';



export default {
  name: 'App',
  components: {
    AboutView,
    HeaderApp,
    SlidbarVue,
    OurHistory,
    ReadBook,
    FooterVue,
    footerVue2
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
