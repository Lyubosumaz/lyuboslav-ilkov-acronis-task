<template>
    <ul class="exersices-list">
        <li
            class="exercise-card"
            v-for="(exercise, index) in exercises"
            :key="index"
        >
            <div>{{ exercise.name }}</div>
            <div>{{ exercise.sets }}</div>
            <div>{{ exercise.complete ? 'yes' : 'no' }}</div>

            <el-button @click="completeExercise([workoutId, exercise.id])"
                >Edit Exercise</el-button
            >
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
        ...mapActions(['createExercise', 'completeExercise', 'deleteExercise']),
    },
};
</script>
