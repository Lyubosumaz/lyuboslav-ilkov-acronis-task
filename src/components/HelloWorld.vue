<template>
    <div class="hello">
        <h1>{{ msg }}</h1>

        <el-button @click="createWorkout('TODO shoud be field')"
            >Create Workout</el-button
        >

        <div
            class="workout-card"
            v-for="workout in getWorkouts"
            :key="workout.id"
        >
            <div>
                {{ workout.workoutName }}
            </div>

            <section>
                <div
                    class="exercise-card"
                    v-for="exercise in workout.exercises"
                    :key="exercise.id"
                >
                    <div>{{ exercise.name }}</div>
                    <div>{{ exercise.sets }}</div>
                    <el-button>Edit Exercise</el-button>
                    <el-button
                        @click="deleteExercise([workout.id, exercise.id])"
                        >Delete Exercise</el-button
                    >
                </div>
                <el-button
                    @click="
                        createExercise({
                            name: 'this test name is nice',
                            sets: 'as many as you can do',
                        })
                    "
                    >Add Exercise</el-button
                >
            </section>

            <el-button @click="deleteWorkout('TODO shoud have yes/no')"
                >Delete Workout</el-button
            >
        </div>

        <div v-for="count in getCounter" :key="count">OMG {{ count }}</div>
        <el-button @click="pCounter()">+</el-button>
        <el-button @click="mCounter()">-</el-button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'HelloWorld',
    props: {
        msg: String,
    },
    methods: {
        ...mapActions([
            'pCounter',
            'mCounter',
            'mockFetch',
            'createWorkout',
            'deleteWorkout',
            'createExercise',
            'deleteExercise',
        ]),
    },
    computed: { ...mapGetters(['getCounter', 'getWorkouts']) },
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
