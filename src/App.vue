<template>
    <v-app >
        <Navbar/>
        <v-main class="app container">
                <router-view />
        </v-main>
    </v-app>
</template>

<script>

import Navbar from '@/components/UI/Navbar';
export default {
  name: 'App',
    components: {Navbar},
}
</script>

<style>
.app {
    display: flex;
    height: 100%;
}
.container {
    display: flex;
    height: 100%;
    padding: 0 335px;
    max-width: 630px;
    margin: 0 auto 15px;
}
</style>
