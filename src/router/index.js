import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue'),
    },
    {
        path: '/edit-exercise',
        name: 'EditExercise',
        component: () => import('../views/EditExercise.vue'),
    },
    {
        path: '/edit-workout',
        name: 'EditWorkout',
        component: () => import('../views/EditWorkout.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
