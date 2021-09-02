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

            <h1>Edit exercise page</h1>
        </div>

        <el-form
            ref="form"
            :model="getCurrentExercise"
            label-width="120px"
            class="edit-exersice-form-wrapper"
        >
            <el-form-item label="Edit name">
                <el-input v-model="getCurrentExercise.name"></el-input>
            </el-form-item>

            <el-form-item label="Edit sets">
                <el-input v-model="getCurrentExercise.sets"></el-input>
            </el-form-item>

            <el-button @click="editExercise()">Edit Exercise</el-button>
        </el-form>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'EditExercise',
    methods: {
        ...mapActions(['updateNameAndSetsExercise']),
        editExercise() {
            this.updateNameAndSetsExercise([
                this.getCurrentWorkoutId,
                this.getCurrentExercise.id,
                {
                    name: this.getCurrentExercise.name,
                    sets: this.getCurrentExercise.sets,
                },
            ]);

            // mockFetch 'PUT'
            sessionStorage.setItem(
                'mockWorkoutData',
                JSON.stringify({ 'workout-list': this.getWorkouts })
            );

            this.$router.push('/');
        },
    },
    computed: {
        ...mapGetters([
            'getWorkouts',
            'getCurrentWorkoutId',
            'getCurrentExercise',
        ]),
    },
};
</script>

<style scoped>
.title-wrapper {
    display: flex;
    align-items: center;
}
.edit-exersice-form-wrapper {
    display: flex;
    justify-content: space-between;
}
.edit-exersice-form-wrapper > div {
    margin: 0;
}
.edit-exersice-form-wrapper label {
    width: auto;
    line-height: 1;
}
</style>
