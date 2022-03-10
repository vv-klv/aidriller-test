<template>
    <v-table
        class="instructions-table"
        density="compact"
    >
        <thead>
        <tr>
            <th
                class="table__header left-col"
                style="font-size: 14px"
            >
                Пункт
            </th>
            <th style="font-size: 14px">Описание</th>
        </tr>
        </thead>
        <tbody>
        <tr
            v-for="item in instructions"
            :key="item.name"
        >
            <td class="left-col">
                <div class="left-col__number">{{ item.el }}</div>
            </td>
            <td>
                <div v-for="(elem, key) in item.descr" :key="key">
                    {{ elem }}<br>
                </div>
            </td>
        </tr>
        </tbody>
    </v-table>
</template>

<script>
export default {
    name: "InstructionsTable",
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
                        'В таблице отображаются полученные данные (первые 10 совпадений):',
                        'Индекс, город или область, улица, дом и квартира',
                    ],
                },
            ],
        }
    },
}
</script>

<style scoped>
.instructions-table {
    margin: 30px auto;
    max-width: 600px;
    border-radius: 10px;
    box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%),
                0 2px 2px 0    rgb(0 0 0 / 14%),
                0 1px 5px 0    rgb(0 0 0 / 12%);
}
.left-col {
    text-align: center;
    width: 30px;
    border-right: 1px solid #ddd;
}

.left-col__number {
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