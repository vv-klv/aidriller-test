<template>
    <v-table
        class="address-table"
        :class="{'about-page-address-table': isPageAbout}"
        density="compact"
    >
        <thead>
            <tr>
                <td
                    class="table-cell header-cell"
                    v-for="(title, key) in response.title"
                    :key="key"
                >
                    {{ title }}
                </td>
            </tr>
        </thead>
        <tbody>
            <tr
                v-for="(_, key) in response.body"
                :key="key"
            >
                <td
                    class="table-cell"
                    v-for="(address, key) in response.body[key]"
                    :key="key"
                >
                    {{ address || '—' }}
                </td>
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
    },
}
</script>

<style lang="scss" scoped>
.address-table {
    margin: 20px auto;
    border-radius: 4px;
    box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%),
    0 2px 2px 0 rgb(0 0 0 / 14%),
    0 1px 5px 0 rgb(0 0 0 / 12%);
}

.header-cell {
    background-color: #f5f5f5;
    font-weight: bold;
}

.table-cell {
    text-align: center;
    max-width: 150px;

    &:not(:last-child) {
        border-right: 1px solid #ddd;
    }
}

.about-page-address-table::before {
    font-weight: bold;
    font-size: 20px;
    color: #5f5f5f;
    content: '3';
    position: absolute;
    top: 25%;
    left: -50px;
    padding: 5px 15px;
    text-align: center;
    border-radius: 50%;
    box-shadow: 0 3px 10px 1px rgb(0 0 0 / 20%),
                0 2px 2px  0   rgb(0 0 0 / 14%),
                0 1px 5px  0   rgb(0 0 0 / 12%);
}
</style>