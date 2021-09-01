<template>
    <!-- <div>
        <div class="nav">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
        </div>
    </div> -->
    <router-view />
</template>

<script>
import mockData from '../mockWorkoutData.json';

export default {
    mounted() {
        if (!sessionStorage.mockWorkoutData) {
            sessionStorage.setItem('mockWorkoutData', JSON.stringify(mockData));
        }
    },
};
</script>

<style>
.nav a {
    font-weight: bold;
    color: #2c3e50;
}

.nav a.router-link-exact-active {
    color: #42b983;
}
</style>
