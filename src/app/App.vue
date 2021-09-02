<template>
    <div>
        <header>
            <div class="site-layout">HEADER</div>
        </header>
        <main>
            <div class="site-layout">
                <router-view />
            </div>
        </main>
        <footer>
            <div class="site-layout">FOOTER</div>
        </footer>
    </div>
</template>

<script>
import mockData from '../mockWorkoutData.json';

export default {
    mounted() {
        // mockFetch 'GET'
        if (!sessionStorage.mockWorkoutData) {
            sessionStorage.setItem('mockWorkoutData', JSON.stringify(mockData));
        }
    },
};
</script>

<style>
main .site-layout {
    width: 60em;
    margin: 0 auto;
}
</style>
