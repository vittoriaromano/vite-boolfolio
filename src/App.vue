<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name:'App',
  data() {
    return {
      apiBaseUrl: 'http://127.0.0.1:8000/api/',
      apiUrls: {
        projects: 'projects'
      },
      projects: []
    }
  },
  components: {
    AppHeader,
    AppFooter
  },
  
}
</script>

<template>
  <AppHeader />
  <!-- <AppMain :data="projects" /> -->
  <router-view></router-view>
  <AppFooter />
</template>


<style lang="scss">
//versione 1 - inclusione via app.vue
// @use './assets/scss/main.scss' as *;
</style>
