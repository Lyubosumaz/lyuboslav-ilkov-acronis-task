<template>
    <ul class="exersices-list">
        <li
            class="exercise-card"
            v-for="(exercise, index) in exercises"
            :key="index"
        >
            <div>{{ exercise.name }}</div>
            <div>{{ exercise.sets }}</div>
            <el-button>Edit Exercise</el-button>
            <el-button @click="deleteExercise([workoutId, exercise.id])"
                >Delete Exercise</el-button
            >
        </li>

        <el-button
            @click="
                createExercise([
                    workoutId,
                    { name: 'Test Exercise', sets: 'do as much as you can' },
                ])
            "
            >Create Exercise</el-button
        >
    </ul>
</template>
<script>
import { mapActions } from 'vuex';

export default {
    name: 'ExersicesList',
    props: {
        workoutId: Number,
        exercises: Array,
    },
    methods: {
        ...mapActions(['createExercise', 'deleteExercise']),
    },
    created() {
        console.log(this.workoutId);
    },
};
</script>
