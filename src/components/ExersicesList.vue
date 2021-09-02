<template>
    <ul class="exersices-list">
        <li v-for="(exercise, index) in exercises" :key="index">
            <el-card
                class="exersice-card"
                :class="[exercise.complete ? 'complete' : 'incomplete']"
                :body-style="{
                    padding: '0.25em 0.75em',
                    display: 'flex',
                    'justify-content': 'space-between',
                    'align-items': 'center',
                }"
            >
                <div class="exersice-title">
                    <h3>{{ exercise.name }}</h3>
                    <p>{{ exercise.sets }}</p>
                </div>

                <div>
                    <el-button
                        circle
                        class="toggle-btn"
                        :class="[
                            exercise.complete
                                ? 'toggle-btn-failure'
                                : 'toggle-btn-success ',
                        ]"
                        @click="completeExercise([workoutId, exercise.id])"
                        ><i
                            :class="[
                                exercise.complete
                                    ? 'el-icon-close'
                                    : 'el-icon-check',
                            ]"
                        ></i
                    ></el-button>

                    <el-popconfirm
                        title="You want to delete the exercise?"
                        @confirm="deleteExercise([workoutId, exercise.id])"
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
                </div>
            </el-card>
        </li>

        <ExersiceForm :workoutId="workoutId" />
    </ul>
</template>
<script>
import { mapActions } from 'vuex';
import ExersiceForm from './ExersiceForm.vue';

export default {
    name: 'ExersicesList',
    components: {
        ExersiceForm,
    },
    props: {
        workoutId: Number,
        exercises: Array,
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
        ...mapActions(['completeExercise', 'deleteExercise']),
    },
};
</script>

<style scoped>
.exersices-list {
    padding: 0;
    list-style-type: none;
}
.exersice-card {
    margin: 0.5em;
    border-width: 2px;
}
.exersice-title {
    width: 20rem;
    display: inline-block;
}
.exersice-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.complete {
    border-color: #67c23a;
    background: #c6f0e6;
}
.incomplete {
    border-color: #909399;
}
.toggle-btn {
    margin-right: 0.5em;
    color: #fff;
}
.toggle-btn-success {
    background-color: #67c12a;
}
.toggle-btn-failure {
    background-color: #f56c6c;
}
</style>
