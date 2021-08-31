const state = {
    workouts: [],
};

const getters = {
    getWorkouts: (state) => state.workouts,
};

const actions = {
    mockFetch({ commit }) {
        const mockResponse = JSON.parse(sessionStorage.mockWorkoutData)[
            'workout-list'
        ];
        commit('setWorkouts', mockResponse);
    },
    createWorkout({ commit }, data) {
        commit('addWorkout', data);
    },
    deleteWorkout({ commit }, data) {
        commit('removeWorkout', data);
    },
    createExercise({ commit }, data) {
        commit('addExercise', data);
    },
    deleteExercise({ commit }, data) {
        commit('removeExercise', data);
    },
};

const mutations = {
    setWorkouts: (state, data) => (state.workouts = data),
    addWorkout: (state, data) => {
        state.workouts = [
            {
                // id: state.workout.length
                //     ? state.workout.reduce((acc, curr) => {
                //         console.log(acc, curr);
                //     }, -Infinity)
                //     : 1,
                id: 11,
                workoutName: data,
                workoutComplete: false,
                exercises: [],
            },
            ...state.workouts,
        ];
    },
    removeWorkout: (state, data) => {
        const dataTODO = 11;
        console.log(data);

        state.workouts = state.workouts.filter(
            (workout) => workout.id !== dataTODO
        );
    },
    addExercise: (state, data) => {
        state.workouts[0].exercises.push({
            id: 11,
            name: data.name,
            sets: data.sets,
            complete: false,
        });
    },
    removeExercise: (state, [targetWorkout, targetExercise]) => {
        console.log(targetWorkout, targetExercise);

        state.workouts = state.workouts.map((workout) => {
            if (workout.id !== targetWorkout) return workout;

            workout.exercises.filter(
                (exercise) => exercise.id !== targetExercise
            );

            return;
        });
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};
