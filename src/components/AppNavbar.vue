<template>
    <v-app-bar class="navbar" color="#c9c9c9">
        <div class="navbar__btns">
            <v-btn
                class="navbar__btn"
                @click="$router.push('/search')"
            >
                Search
            </v-btn>
            <v-btn
                class="navbar__btn"
                @click="$router.push('/about')"
            >
                About
            </v-btn>
        </div>
    </v-app-bar>
</template>

<script>
export default {
    name: "Navbar"
}
</script>

<style lang="scss" scoped>
.navbar {
    display: flex;
    padding: 0 15px;

    &__btns {
        display: flex;
        margin-left: auto;
        gap: 30px;
    }

    &__btn {
        box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%),
                    0 2px 2px 0    rgb(0 0 0 / 14%),
                    0 1px 5px 0    rgb(0 0 0 / 12%);
    }
}
</style>