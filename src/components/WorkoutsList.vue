<template>
    <section>
        <h1>{{ msg }}</h1>

        <section class="adding-workout-form">
            <el-button @click="createWorkout('TODO shoud be field')"
                >Create Workout</el-button
            >
        </section>

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

                            <el-tooltip
                                class="item"
                                effect="dark"
                                content="Delete The Workout"
                                placement="right"
                            >
                                <el-popconfirm
                                    title="You really want to delete the workout?"
                                    @confirm="deleteWorkout(workout.id)"
                                    confirm-button-text="Delete"
                                    icon="el-icon-delete"
                                    icon-color="red"
                                >
                                    <el-button
                                        slot="reference"
                                        type="danger"
                                        icon="el-icon-delete"
                                        circle
                                    ></el-button>
                                </el-popconfirm>
                            </el-tooltip>
                        </div>

                        <h5>
                            {{
                                workout.workoutComplete
                                    ? 'Workout is Complete'
                                    : 'Workout have more exercises'
                            }}
                        </h5>
                    </div>

                    <ExersicesList
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

<style scoped>
.workouts-list {
    width: 60em;
    margin: 0 auto;
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
.workout-title-wrapper h2 {
    margin-right: 0.5em;
}
.complete {
    background: #c6f0e6;
}
</style>
