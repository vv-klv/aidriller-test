<template>
    <v-form
        class="search-form"
        :class="{'about-page-form': isPageAbout}"
    >
        <v-text-field
            v-model.trim="query"
            class="search-form__input"
            :class="{'about-page-form__input': isPageAbout}"
            label="Введите поисковый запрос"
            @keydown.enter.prevent="getAddresses"
            :disabled="isDisabled"
            autofocus
        />
        <v-btn
            class="search-form__btn"
            :class="{'about-page-form__btn': isPageAbout}"
            @click="getAddresses"
            :disabled="isDisabled"
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
        isPageAbout: Boolean,
        isDisabled: Boolean,
    },
    methods: {
        ...mapActions({
            addressesRequest: 'address/addressesRequest',
        }),
        getAddresses() {
            this.addressesRequest(this.query);
            this.query = '';
        }
    },
}
</script>

<style lang="scss" scoped>
.search-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &__input {
        margin: 0 0 30px 33px;
        width: 600px;
        height: 56px;
    }

    &__btn {
        width: 300px;
    }
}

.about-page-form {
    &__input::before {
        font-weight: bold;
        font-size: 20px;
        color: #5f5f5f;
        content: '1';
        position: absolute;
        top: 20px;
        left: -20px;
        padding: 5px 15px;
        text-align: center;
        border-radius: 50%;
        box-shadow:
            0 3px 10px 1px rgb(0 0 0 / 20%),
            0 2px 2px 0    rgb(0 0 0 / 14%),
            0 1px 5px 0    rgb(0 0 0 / 12%);
    }

    &__btn::before {
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
}
</style>