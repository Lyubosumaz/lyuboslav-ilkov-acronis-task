import Vue from 'vue';
import Vuex from 'vuex';
import workouts from './modules/workouts';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        workouts,
    },
});
