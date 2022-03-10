import fetchData from '@/API/api';

export default {
    state: {
        addresses: {},
    },
    mutations: {
        updateAddresses(state, addresses) {
            state.addresses = addresses;
        },
    },
    actions: {
        async addressesRequest(state, query) {
            const request = {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": "Token " + process.env.VUE_APP_TOKEN
                },
                body: JSON.stringify({query: query})
            }
            const url = process.env.VUE_APP_DADATA_SUGGESTIONS_URL +
                'suggestions/api/4_1/rs/suggest/address'
            let response = await fetchData(request, url);
            state.commit('updateAddresses', response.suggestions);
        }
    },
    getters: {
        getAddresses(state) {
            const truncatedAddresses = [];
            for (let i = 0; i < state.addresses.length; i++) {
                truncatedAddresses.push([
                    state.addresses[i].data.postal_code,
                    state.addresses[i].data.city ||
                        state.addresses[i].data.region_with_type,
                    state.addresses[i].data.street_with_type,
                    state.addresses[i].data.house,
                    state.addresses[i].data.flat,
                ])
            }
            return truncatedAddresses;
        },
    },
    namespaced: true
}