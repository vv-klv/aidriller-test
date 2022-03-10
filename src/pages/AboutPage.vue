<template>
    <div class="about">
        <h1 class="about__title">Как пользоваться поиском</h1>
        <div class="about__wrapper">
            <SearchForm
                :is-page-about="true"
                :is-disabled="true"
                class="about__form"
            />
            <AddressTable
                :is-page-about="true"
                class="about__table"
                :response="response"
            />
        </div>
        <InstructionsTable/>
        <TechCards/>
    </div>
</template>

<script>
import AddressTable from '@/components/AddressTable';
import SearchForm from '@/components/AddressSearchForm';
import InstructionsTable from '@/components/InstructionsTable';
import TechCards from '@/components/TechCards';

export default {
    name: "AboutPage",
    components: {
        InstructionsTable,
        TechCards,
        AddressTable,
        SearchForm
    },
    computed: {
        response() {
            return {
                title: ['Индекс', 'Город (область)', 'Улица', 'Дом', 'Квартира'],
                body: [['443017', 'Самара', 'Авроры', '7', '12']]
            };
        }
    },
    created(){
        this.$nextTick(() => {
            const btns = document.getElementsByClassName('search-form__btn');
            btns[0].classList.remove('v-btn--disabled')
        })
    }
}
</script>

<style lang="scss" scoped>
.about {
    &__title {
        text-align: center;
    }

    &__wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        gap: 20px;
        width: 600px;
        border-radius: 15px;
        box-shadow: 3px 5px 10px -2px rgb(0 0 0 / 20%),
                    0   2px 2px  0    rgb(0 0 0 / 14%),
                    0   1px 5px  0    rgb(0 0 0 / 12%);
    }

    &__form {
        transform: scale(0.8);
    }

    &__table {
        transform: scale(0.8);
        margin-top: -25px;
    }
}
</style>