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

            <el-button
                @click="
                    {
                        createExercise([
                            workoutId,
                            {
                                name: form.name,
                                sets: form.sets,
                            },
                        ]);

                        form.name = '';
                        form.sets = '';
                    }
                "
                >Add Exercise</el-button
            >
        </el-form>
    </section>
</template>

<script>
import { mapActions } from 'vuex';

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
    methods: mapActions(['createExercise']),
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
