<template>
    <h1 class="cards__title">Используемые библиотеки и сервисы</h1>

    <div class="cards__container">
        <v-card class="card">
            <a href="https://vuejs.org" target="_blank">
                <img
                    :src="require('@/assets/images/logos/vue-logo.svg')"
                    class="card__img"
                    alt="VUE.JS logo"
                >
                <div class="card__name">vue.js</div>
            </a>
            <div class="card__descr">
                Vue — это прогрессивный фреймворк для создания
                пользовательских
                интерфейсов. Ядро Vue включает в себя библиотеку ядра и
                маршрутизатор, а сам фреймворк пригоден для постепенного
                внедрения, в отличие от аналогов-монолитов.
                Vue полностью подходит для создания сложных одностраничных
                приложений (SPA, Single-Page Applications).
            </div>
        </v-card>
        <v-card class="card">
            <a href="https://router.vuejs.org/" target="_blank">
                <img
                    :src="require('@/assets/images/logos/vue-logo.svg')"
                    class="card__img"
                    alt="VUE ROUTER logo"
                >
                <div class="card__name">vue router</div>
            </a>
            <div class="card__descr">
                Vue Router — официальный маршрутизатор для Vue.js. Он глубоко
                интегрируется с Vue.js для создания одностраничных приложений с
                помощью Vue. Vue Router помогает установить связь между
                URL-адресом/историей браузера и компонентами Vue, позволяя
                определенным путям отображать любое связанное с ним представление.
            </div>
        </v-card>
        <v-card class="card">
            <a href="https://vuex.vuejs.org/" target="_blank">
                <img
                    :src="require('@/assets/images/logos/vuex-logo.png')"
                    class="card__img"
                    alt="VUEX logo"
                >
                <div class="card__name">vuex</div>
            </a>
            <div class="card__descr">
                Vuex — паттерн управления состоянием + библиотека для
                приложений
                на Vue.js. Он служит централизованным хранилищем данных для
                всех
                компонентов приложения с правилами, гарантирующими, что
                состояние
                может быть изменено только предсказуемым образом.
            </div>
        </v-card>
        <v-card class="card">
            <a href="https://next.vuetifyjs.com/" target="_blank" class="card__url">
                <img
                    :src="require('@/assets/images/logos/vuetify-logo.svg')"
                    class="card__img"
                    alt="VUETIFY logo"
                >
                <div class="card__name" style="color: #1697f6">vuetify</div>
            </a>
            <div class="card__descr">
                Vuetify — это библиотека, предоставляющая разработчикам инструменты,
                необходимые для создания насыщенного и увлекательного
                пользовательского интерфейса. В отличие от других фреймворков,
                Vuetify с самого начала разработан так, чтобы его было легко
                освоить и освоить с сотнями тщательно созданных компонентов из
                спецификации Material Design.
            </div>
        </v-card>
        <v-card class="card">
            <a href="https://sass-lang.com" target="_blank" class="card__url">
                <img
                    :src="require('@/assets/images/logos/sass-logo.svg')"
                    class="card__img"
                    alt="SASS logo"
                >
                <div class="card__name" style="color: #ce679a">SASS</div>
            </a>
            <div class="card__descr">
                Sass — это метаязык на основе CSS, предназначенный для увеличения
                уровня абстракции CSS-кода и упрощения файлов каскадных таблиц стилей.
                Одна из ключевых особенностей Sass — вложенные правила, которые
                облегчают процесс создания и редактирования вложенных селекторов.
            </div>
        </v-card>
    </div>
</template>

<script>
export default {
    name: "TechCards",

}
</script>
<style>

</style>
<style lang="scss" scoped>
.cards__title {
    text-align: center;

}
.cards__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 30px;
}

.card {
    display: flex;
    padding: 15px;
    margin-bottom: 30px;
    flex-direction: column;
    min-width: 200px;
    max-width: calc(50% - 15px);
    min-height: 250px;
    box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%),
    0 2px 2px 0 rgb(0 0 0 / 14%),
    0 1px 5px 0 rgb(0 0 0 / 12%);

    &__img {
        display: block;
        margin: 0 auto;
        height: 80px;
        width: auto;
        min-width: 100px;

        &:hover {
            transition: .2s ease-in-out;
            transform: scale(1.1);
        }
    }

    &__name {
        font-weight: bold;
        padding: 8px 0 5px;
        text-align: center;
        text-transform: uppercase;
        text-decoration: none;
        color: #41b883;
        border-bottom: 1px solid #999;

        &:hover {
            text-decoration: underline;
        }
    }

    &__descr {
        font-size: 12px;
        margin-top: 15px;
    }

    @media (max-width: 767px) {
        display: flex;
        flex-direction: row;
        max-width: 90vw;
        min-height: auto;
        margin: 0 auto 15px;

        &__img {
            margin-right: 15px;
        }

        &__name {
            line-height: 1;
            border-bottom: none;
            margin-right: 15px;
        }
    }
}


.card__name:hover {
}


</style>