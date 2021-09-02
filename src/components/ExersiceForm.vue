<template>
    <section>
        <h3>Add new exercise:</h3>

        <el-form
            ref="form"
            :model="form"
            label-width="120px"
            class="exersice-form-wrapper"
        >
            <el-form-item label="Exercise name">
                <el-input v-model="form.name"></el-input>
            </el-form-item>

            <el-form-item label="Exercise sets">
                <el-input v-model="form.sets"></el-input>
            </el-form-item>

            <el-button @click="addExercise(form.name, form.sets)"
                >Add Exercise</el-button
            >
        </el-form>
    </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { mockFetchREST } from '../utils/mockFetch';

export default {
    name: 'ExersiceForm',
    props: {
        workoutId: Number,
    },
    data() {
        return {
            form: {
                name: '',
                sets: '',
            },
        };
    },
    methods: {
        ...mapActions(['createExercise']),
        addExercise(exerciseName, exerciseSets) {
            this.createExercise([
                this.workoutId,
                {
                    name: exerciseName,
                    sets: exerciseSets,
                },
            ]);

            this.form.name = '';
            this.form.sets = '';

            // mockFetch 'POST'
            mockFetchREST(this.getWorkouts);
        },
    },
    computed: mapGetters(['getWorkouts']),
};
</script>

<style scoped>
.exersice-form-wrapper {
    display: flex;
    justify-content: space-between;
}
.exersice-form-wrapper > div {
    margin: 0;
}
</style>
