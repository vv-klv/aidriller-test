<template>
    <div class="about__cover"></div>
    <SearchForm
        :is-page-about="true"
        class="about__form"
    />
    <AddressTable
        :is-page-about="true"
        class="about__table"
        :response="response"
    />
    <v-table
        class="about__instruction"
        density="compact"
    >
        <thead>
        <tr>
            <th class="table__header left" style="font-size: 14px">Пункт</th>
            <th style="font-size: 14px">Описание</th>
        </tr>
        </thead>
        <tbody>
            <tr
                v-for="item in instructions"
                :key="item.name"
            >
                <td class="left">
                    <div class="left__number">{{ item.el }}</div>
                </td>
                <td>
                    <div v-for="(elem, key) in item.descr" :key="key">
                        {{ elem }}<br>
                    </div>
                </td>
            </tr>
        </tbody>
    </v-table>
    <TechCards/>
</template>

<script>
import AddressTable from '@/components/AddressTable';
import SearchForm from '@/components/AddressSearchForm';
import TechCards from '@/components/TechCards';
import Techs from '@/components/TechCards';

export default {
    name: "AboutPage",
    components: {
        TechCards,
        AddressTable,
        SearchForm
    },
    data() {
        return {
            instructions: [
                {
                    el: 1,
                    descr: [
                        'Поле для ввода поискового запроса. ',
                        'В таблице представлен пример ответа на запрос:',
                        '«самара авроры 7 12»'
                    ]
                }, {
                    el: 2,
                    descr: [
                        'По нажатию данной кнопки происходит поиск ' +
                        'адреса согласно введенным данным.'
                    ],
                }, {
                    el: 3,
                    descr: [
                        'В таблице отображаются полученные данные:',
                        'Индекс, город или область, улица, дом и квартира',
                    ],
                },
            ],
        }
    },
    computed: {
        response() {
            return [
                {
                    title: 'Индекс',
                    body: '443017',
                }, {
                    title: 'Город (область)',
                    body: 'Самара',
                }, {
                    title: 'Улица',
                    body: 'Авроры',
                }, {
                    title: 'Дом',
                    body: '7',
                }, {
                    title: 'Квартира',
                    body: '12',
                },
            ];
        }
    }
}
</script>

<style scoped>
.about__cover {
    position: absolute;
    margin: 20px auto 0 auto;
    top: 0;
    right: 0;
    left: 0;
    width: 550px;
    height: 260px;
    z-index: 2;
    border-radius: 15px;
    box-shadow: 3px 5px 10px -2px rgb(0 0 0 / 20%),
                0 2px 2px 0       rgb(0 0 0 / 14%),
                0 1px 5px 0       rgb(0 0 0 / 12%);
}
.about__form {
    margin-top: 5px;
    transform: scale(0.75);
}
.about__table {
    margin-top: -30px;
    transform: scale(0.75);
}
.about__instruction {
    margin: 30px auto;
    max-width: 550px;
    border-radius: 10px;
    box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%),
                0 2px 2px 0    rgb(0 0 0 / 14%),
                0 1px 5px 0    rgb(0 0 0 / 12%);
}
.left {
    text-align: center;
    width: 30px;
    border-right: 1px solid #ddd;
}

.left__number {
    display: flex;
    align-items: center;
    padding-left: 11px;
    margin: 0 auto;
    height: 30px;
    width: 30px;
    border-radius: 15px;
    box-shadow: 3px 5px 10px -2px rgb(0 0 0 / 20%),
                0 2px 2px 0       rgb(0 0 0 / 14%),
                0 1px 5px 0       rgb(0 0 0 / 12%);
}
</style>