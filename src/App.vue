<template>
    <v-app>
        <AppNavbar/>
        <v-main class="app container">
            <router-view/>
        </v-main>
    </v-app>
</template>

<script>

import AppNavbar from '@/components/AppNavbar';

export default {
    name: 'App',
    components: {
        AppNavbar
    },
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
    margin: 0 auto;
    padding: 79px 15px 15px !important;
    max-width: 630px;
}
</style>
