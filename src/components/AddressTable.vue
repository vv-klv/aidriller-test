<template>
    <v-table
        class="table"
        :class="{'about-page__table': isPageAbout}"
        density="compact"
    >
        <tbody>
            <tr
                v-for="(address, key) in response"
                :key="key"
            >
                <td class="cell-left">{{ address.title }}</td>
                <td>{{ address.body }}</td>
            </tr>
        </tbody>
    </v-table>
</template>

<script>

export default {
    name: "AddressTable",
    props: {
        response: {
            type: Object,
            required: true,
        },
        isPageAbout: Boolean
    }
}
</script>

<style scoped>
.table {
    margin: 0 auto;
    max-width: 400px;
    border-radius: 4px;
    box-shadow:
        0 3px 1px -2px rgb(0 0 0 / 20%),
        0 2px 2px 0    rgb(0 0 0 / 14%),
        0 1px 5px 0    rgb(0 0 0 / 12%);
}
.cell-left {
    width: 150px;
    border-right: 1px solid #ddd;
}
.about-page__table::before {
    font-weight: bold;
    font-size: 20px;
    color: #5f5f5f;
    content: '3';
    position: absolute;
    top: 63px;
    left: -50px;
    padding: 5px 15px;
    text-align: center;
    border-radius: 50%;
    box-shadow:
        0 3px 10px 1px rgb(0 0 0 / 20%),
        0 2px 2px 0    rgb(0 0 0 / 14%),
        0 1px 5px 0    rgb(0 0 0 / 12%);
}
</style>