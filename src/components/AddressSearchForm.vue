<template>
    <v-form class="search-form">
        <!-- Чтобы не работал автофокус на странице About -->
        <v-text-field
            v-if="isPageAbout"
            class="search-form__input"
            :class="{'about-page__input': isPageAbout}"
            label="Введите поисковый запрос"
            tabindex="-1"
        />
        <v-text-field
            v-else
            v-model.trim="query"
            class="search-form__input"
            label="Введите поисковый запрос"
            @keydown.enter.prevent="getAddress"
            autofocus
        />
        <v-btn
            class="search-form__btn"
            :class="{'about-page__btn': isPageAbout}"
            @click="getAddress"
        >
            Найти
        </v-btn>
    </v-form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: "AddressSearchForm",
    data() {
        return {
            query: ''
        }
    },
    props: {
        isPageAbout: Boolean
    },
    methods: {
        ...mapActions({
            addressRequest: 'address/addressRequest',
        }),
        getAddress() {
            this.addressRequest(this.query);
            this.query = '';
        }
    },
}
</script>

<style scoped>
.search-form {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.search-form__input {
    position: relative;
    margin-top: 10px;
    margin-left: 33px;
    width: 600px;
}
.search-form__btn {
    margin: 15px auto;
    width: 300px;
}
.about-page__input::before {
    font-weight: bold;
    font-size: 20px;
    content: '1';
    position: absolute;
    top: 30%;
    left: -50px;
    padding: 5px 15px;
    text-align: center;
    border-radius: 50%;
    box-shadow:
        0 3px 10px 1px rgb(0 0 0 / 20%),
        0 2px 2px 0    rgb(0 0 0 / 14%),
        0 1px 5px 0    rgb(0 0 0 / 12%);
}

.about-page__btn::before {
    font-weight: bold;
    font-size: 20px;
    color: #5f5f5f;
    content: '2';
    position: absolute;
    left: -50px;
    padding: 8px 13px;
    text-align: center;
    border-radius: 50%;
    box-shadow:
        0 3px 10px 1px rgb(0 0 0 / 20%),
        0 2px 2px 0    rgb(0 0 0 / 14%),
        0 1px 5px 0    rgb(0 0 0 / 12%);
}
</style>