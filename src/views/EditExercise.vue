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
import { mockFetchREST } from '../utils/mockFetch';

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
            mockFetchREST(this.getWorkouts);

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
.edit-page {
    width: 30em;
    margin: 0 auto;
}
.title-wrapper {
    padding-bottom: 3em;
    display: flex;
    align-items: center;
}
.edit-exersice-form-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.edit-exersice-form-wrapper label {
    width: auto;
    line-height: 1;
}
.edit-exersice-form-wrapper button {
    width: 10em;
    align-self: flex-end;
}
</style>
