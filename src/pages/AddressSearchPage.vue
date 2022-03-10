<template>
    <AddressSearchForm class="addressSearchForm"/>
    <AddressTable :response="response"/>
</template>

<script>
import AddressSearchForm from '@/components/AddressSearchForm';
import AddressTable from '@/components/AddressTable';
import { mapGetters } from 'vuex';

export default {
    name: "AddressSearchPage",
    components: {
        AddressSearchForm,
        AddressTable
    },
    computed: {
        ...mapGetters({
            getAddresses: 'address/getAddresses',
        }),
        response() {
            return {
                title: ['Индекс', 'Город (область)', 'Улица', 'Дом', 'Квартира'],
                body: this.getAddresses,
            }
        }
    }
}
</script>

<style scoped>

</style>