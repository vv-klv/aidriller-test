<template>
    <AddressSearchForm class="addressSearchForm"/>
    <AddressTable :response="response"/>
</template>

<script>
import AddressSearchForm from '@/components/AddressSearchForm';
import AddressTable from '@/components/AddressTable';
import { mapGetters, mapState } from 'vuex';

export default {
    name: "AddressSearchPage",
    components: {
        AddressSearchForm,
        AddressTable
    },
    computed: {
        ...mapState({
            data: state => state.address.data
        }),
        ...mapGetters({
            getData: 'address/getData',
        }),
        response() {
            return [
                {
                    title: 'Индекс',
                    body: this.getData.postal_code,
                }, {
                    title: 'Город (область)',
                    body: this.getData.city,
                }, {
                    title: 'Улица',
                    body: this.getData.street,
                }, {
                    title: 'Дом',
                    body: this.getData.house,
                }, {
                    title: 'Квартира',
                    body: this.getData.flat,
                },
            ];
        }
    }
}
</script>

<style scoped>
.addressSearchForm {
    margin-top: 180px;
}
</style>