<template>
    <main>
        <WorkoutsList msg="Welcome to Your Vue.js App" />
    </main>
</template>

<script>
import WorkoutsList from '@/components/WorkoutsList.vue';

export default {
    name: 'Home',
    components: {
        WorkoutsList,
    },
};
</script>
