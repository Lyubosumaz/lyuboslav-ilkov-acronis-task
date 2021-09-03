<template>
    <div class="edit-page">
        <div class="title-wrapper">
            <div class="button-wrapper">
                <el-button
                    @click="$router.go(-1)"
                    style="padding: 0.5em; margin-right: 1.25rem"
                    ><i class="el-icon-caret-left"></i>
                    <span> Go Back </span>
                </el-button>
            </div>

            <h1>Edit workout page</h1>
        </div>

        <el-form
            ref="form"
            :model="workout"
            label-width="120px"
            class="edit-workout-form-wrapper"
        >
            <el-form-item label="New workout">
                <el-input v-model="workout.workoutName"></el-input>
            </el-form-item>

            <el-button @click="editWorkout(workout)">Edit Workout</el-button>
        </el-form>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { mockFetchREST } from '../utils/mockFetch';

export default {
    name: 'EditWorkout',
    data() {
        return {
            workout: { name: '' },
        };
    },
    mounted() {
        this.workout = { ...this.getCurrentWorkout };
    },
    methods: {
        ...mapActions(['updateCurrentWorkout']),
        editWorkout(workout) {
            this.updateCurrentWorkout(workout);

            // mockFetch 'PUT'
            mockFetchREST(this.getWorkouts);

            this.$router.push('/');
        },
    },
    computed: {
        ...mapGetters(['getWorkouts', 'getCurrentWorkout']),
    },
};
</script>

<style scoped>
.edit-page {
    width: 30em;
    margin: 0 auto;
}
.title-wrapper {
    padding-bottom: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
}
.edit-workout-form-wrapper {
    display: flex;
    justify-content: space-between;
}
.edit-workout-form-wrapper > div {
    margin: 0;
}
.edit-workout-form-wrapper label {
    width: auto;
    line-height: 1;
}
</style>
