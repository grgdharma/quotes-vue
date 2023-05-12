<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
    <!-- Adding nav link -->
    <router-link to="/"> Home </router-link>
    <router-link to="/quotes"> Quotes Lists </router-link>
  </header>

  <main>
    <!-- component matched by the route will render here -->
    <router-view></router-view>
  </main>
</template>
