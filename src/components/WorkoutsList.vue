<template>
    <section>
        <h1>{{ msg }}</h1>

        <section class="adding-workout-form">
            <el-button @click="createWorkout('TODO shoud be field')"
                >Create Workout</el-button
            >
        </section>

        <ul class="workouts-list">
            <li
                class="workout-card"
                v-for="(workout, index) in getWorkouts"
                :key="index"
            >
                <h2>{{ workout.workoutName }}</h2>

                <ExersicesList
                    :workoutId="workout.id"
                    :exercises="workout.exercises"
                />

                <el-button @click="deleteWorkout(workout.id)"
                    >Delete Workout</el-button
                >
            </li>
        </ul>
    </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ExersicesList from './ExersicesList.vue';

export default {
    name: 'WorkoutsList',
    props: {
        msg: String,
    },
    components: {
        ExersicesList,
    },
    methods: {
        ...mapActions([
            'mockFetch',
            'createWorkout',
            'deleteWorkout',
            'createExercise',
            'deleteExercise',
        ]),
    },
    computed: mapGetters(['getWorkouts']),
    created() {
        this.mockFetch();
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
.workout-card {
    margin-bottom: 2em;
}
.exercise-card {
    display: flex;
    justify-content: center;
}
</style>
