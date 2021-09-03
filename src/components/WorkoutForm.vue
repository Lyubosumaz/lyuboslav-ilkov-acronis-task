<template>
    <section class="workout-form">
        <h3>Add a workout:</h3>
        <el-form
            ref="form"
            :model="form"
            label-width="120px"
            class="workout-form-wrapper"
        >
            <el-form-item label="Workout name">
                <el-input v-model="form.name"></el-input>
            </el-form-item>

            <el-button type="primary" @click="createWorkoutButton(form.name)"
                >Create Workout</el-button
            >
        </el-form>
    </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { mockFetchREST } from '@/utils/mockFetch';

export default {
    name: 'WorkoutForm',
    data() {
        return {
            form: {
                name: '',
            },
        };
    },
    methods: {
        ...mapActions(['createWorkout']),
        createWorkoutButton(workoutName) {
            this.createWorkout(workoutName);
            this.form.name = '';

            mockFetchREST(this.getWorkouts);
        },
    },
    computed: mapGetters(['getWorkouts']),
};
</script>

<style scoped>
.workout-form {
    padding: 1em;
}
.workout-form-wrapper {
    display: flex;
    justify-content: space-between;
}
.workout-form-wrapper > div {
    margin: 0;
}
</style>
