import data from '@/API/api';

export default {
    state: {
        data: {},
    },
    mutations: {
        updateData(state, data) {
            state.data = data;
        },
    },
    actions: {
        async addressRequest(state, query) {
            let response = await data(query);
            state.commit('updateData', response.suggestions[0].data);
        }
    },
    getters: {
        getData(state) {
            return {
                city: state.data.city || state.data.region,
                street: state.data.street,
                house: state.data.house,
                flat: state.data.flat,
                postal_code: state.data.postal_code,
            }
        },
    },
    namespaced: true
}