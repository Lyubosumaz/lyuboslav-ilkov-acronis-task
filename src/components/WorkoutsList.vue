<template>
    <section>
        <WorkoutForm />

        <ul class="workouts-list">
            <li v-for="(workout, index) in getWorkouts" :key="index">
                <el-card
                    class="workout-card"
                    :class="[
                        workout.workoutComplete ? 'complete' : 'incomplete',
                    ]"
                    :body-style="{
                        padding: '1em',
                    }"
                >
                    <div class="workout-title" style="">
                        <div class="workout-title-wrapper">
                            <h2>{{ workout.workoutName }}</h2>

                            <div class="workout-button-wrapper">
                                <el-tooltip
                                    class="item"
                                    effect="dark"
                                    content="Edit"
                                    placement="top"
                                >
                                    <el-button
                                        type="primary"
                                        icon="el-icon-edit"
                                        size="small"
                                        circle
                                        @click="editButton(getWorkouts[index])"
                                    ></el-button>
                                </el-tooltip>
                            </div>

                            <div class="workout-button-wrapper">
                                <el-tooltip
                                    class="item"
                                    effect="dark"
                                    content="Delete Workout"
                                    placement="right"
                                >
                                    <el-popconfirm
                                        title="Are you sure you want to delete the workout?"
                                        @confirm="deleteButton(workout.id)"
                                        confirm-button-text="Delete"
                                        icon="el-icon-delete"
                                        icon-color="red"
                                    >
                                        <el-button
                                            slot="reference"
                                            type="danger"
                                            icon="el-icon-delete"
                                            size="small"
                                            circle
                                        ></el-button>
                                    </el-popconfirm>
                                </el-tooltip>
                            </div>
                        </div>

                        <h5>
                            {{
                                workout.workoutComplete
                                    ? 'Workout is Complete'
                                    : 'Workout have more exercises'
                            }}
                        </h5>
                    </div>

                    <ExerciseList
                        :workoutId="workout.id"
                        :exercises="workout.exercises"
                    />
                </el-card>
            </li>
        </ul>
    </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ExerciseList from './ExerciseList.vue';
import WorkoutForm from './WorkoutForm.vue';
import { mockFetchREST } from '../utils/mockFetch';

export default {
    name: 'WorkoutsList',
    components: {
        ExerciseList,
        WorkoutForm,
    },
    data() {
        return {
            form: {
                name: '',
            },
        };
    },
    methods: {
        ...mapActions([
            'mockFetchInitialLoad',
            'setCurrentWorkout',
            'deleteWorkout',
        ]),
        editButton(workout) {
            this.setCurrentWorkout(workout);
            this.$router.push('/edit-workout');
        },
        deleteButton(workoutId) {
            this.deleteWorkout(workoutId);

            // mockFetch 'DELETE'
            mockFetchREST(this.getWorkouts);
        },
    },
    computed: mapGetters(['getWorkouts']),
    created() {
        // mockFetch 'GET'
        this.mockFetchInitialLoad();
    },
};
</script>

<style scoped>
.workouts-list {
    list-style-type: none;
}
.workout-card {
    margin-bottom: 2em;
}
.workout-title {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}
.workout-title-wrapper {
    display: flex;
}
.workout-button-wrapper {
    margin-left: 0.5em;
}
.complete {
    background: #c6f0e6;
}
</style>
