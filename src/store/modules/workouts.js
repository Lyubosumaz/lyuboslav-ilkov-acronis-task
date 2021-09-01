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
    completeExercise({ commit }, data) {
        commit('updateExercise', data);
    },
    deleteExercise({ commit }, data) {
        commit('removeExercise', data);
    },
};

const mutations = {
    setWorkouts: (state, data) => (state.workouts = data),
    addWorkout: (state, data) => {
        state.workouts.unshift({
            id: state?.workouts.length ? state.workouts.length + 1 : 1,
            workoutName: data,
            workoutComplete: false,
            exercises: [],
        });
    },
    removeWorkout: (state, targetWorkout) => {
        state.workouts = state.workouts.filter(
            (workout) => workout.id !== targetWorkout
        );
    },
    addExercise: (state, [targetWorkout, data]) => {
        state.workouts.forEach((workout) => {
            if (workout.id === targetWorkout) {
                workout.exercises.push({
                    id: workout?.exercises.length
                        ? workout.exercises.length + 1
                        : 1,
                    name: data.name,
                    sets: data.sets,
                    complete: false,
                });
                workout.workoutComplete = false;
            }
        });
    },
    updateExercise: (state, [targetWorkout, targetExercise]) => {
        state.workouts.forEach((workout) => {
            if (workout.id === targetWorkout) {
                workout.exercises.forEach((exercise) => {
                    if (exercise.id === targetExercise) {
                        exercise.complete = !exercise.complete;
                    }
                });
            }
        });
    },
    removeExercise: (state, [targetWorkout, targetExercise]) => {
        state.workouts.forEach((workout) => {
            if (workout.id === targetWorkout) {
                workout.exercises = workout.exercises.filter(
                    (exercise) => exercise.id !== targetExercise
                );
            }
        });
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};
