<template>
  <main>
    <v-app>
      <v-content>
        <guest-navigation></guest-navigation>
          <v-container class="mt-5 mb-3">
            <router-view></router-view>
          </v-container>
      </v-content>
    </v-app>
  </main>  
</template>

<script>
  import GuestNavigation from '@/navigations/guest';
  export default {
      name: 'App',
      components: {
          GuestNavigation
      }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
