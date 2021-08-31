const state = {
    count: 0,
};

const getters = {
    getCounter: (state) => state.count,
};

const actions = {
    // async fetch TODO
    pCounter({ commit }) {
        commit('increment');
    },
    mCounter({ commit }) {
        commit('decrement');
    },
};

const mutations = {
    increment: (state) => state.count++,
    decrement: (state) => state.count--,
};

export default {
    state,
    getters,
    actions,
    mutations,
};
