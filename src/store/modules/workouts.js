const state = {
    workouts: [],
    selectedWorkoutId: null,
    selectedWorkout: null,
    selectedExercise: null,
};

const getters = {
    getWorkouts: (state) => state.workouts,
    getCurrentWorkoutId: (state) => state.selectedWorkoutId,
    getCurrentWorkout: (state) => state.selectedWorkout,
    getCurrentExercise: (state) => state.selectedExercise,
};

const actions = {
    mockFetchInitialLoad({ commit }) {
        const mockResponse = JSON.parse(sessionStorage.mockWorkoutData)[
            'workout-list'
        ];
        commit('setWorkouts', mockResponse);
    },
    setCurrentWorkoutId({ commit }, data) {
        commit('saveCurrentWorkoutId', data);
    },
    setCurrentWorkout({ commit }, data) {
        commit('saveCurrentWorkout', data);
    },
    updateCurrentWorkout({ commit }, data) {
        commit('updateDataWorkout', data);

        commit('removeSelectedWorkout');
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
        commit('checkWorkoutCompletion', data);
    },
    setCurrentExercise({ commit }, data) {
        commit('saveCurrentExercise', data);
    },
    updateNameAndSetsExercise({ commit }, data) {
        commit('updateDataExercise', data);

        commit('removeSelectedWorkoutId');
        commit('removeSelectedExercise');
    },
    deleteExercise({ commit }, data) {
        commit('removeExercise', data);
        commit('checkWorkoutCompletion', data);
    },
};

const mutations = {
    setWorkouts: (state, data) => (state.workouts = data),
    addWorkout: (state, data) => {
        state.workouts.unshift({
            id: state?.workouts.length
                ? 1 +
                  state.workouts.reduce((acc, curr) => {
                      if (acc < curr.id) {
                          return curr.id;
                      } else {
                          return acc;
                      }
                  }, -Infinity)
                : 1,
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
    saveCurrentWorkoutId: (state, data) => {
        state.selectedWorkoutId = data;
    },
    saveCurrentWorkout: (state, data) => {
        state.selectedWorkout = data;
    },
    updateDataWorkout: (state, data) => {
        state.workouts.forEach((workout) => {
            if (workout.id === data.id) {
                workout.workoutName = data;
            }
        });
    },
    addExercise: (state, [targetWorkout, data]) => {
        state.workouts.forEach((workout) => {
            if (workout.id === targetWorkout) {
                workout.exercises.push({
                    id: workout?.exercises.length
                        ? 1 +
                          workout.exercises.reduce((acc, curr) => {
                              if (acc < curr.id) {
                                  return curr.id;
                              }
                          }, -Infinity)
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
    saveCurrentExercise: (state, data) => {
        state.selectedExercise = data;
    },
    updateDataExercise: (state, [targetWorkout, targetExercise, data]) => {
        state.workouts.forEach((workout) => {
            if (workout.id === targetWorkout) {
                workout.exercises = workout.exercises.map((exercise) => {
                    if (exercise.id === targetExercise) {
                        return {
                            ...exercise,
                            name: data.name,
                            sets: data.sets,
                            complete: false,
                        };
                    }
                    return exercise;
                });
                workout.workoutComplete = false;
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
    checkWorkoutCompletion: (state, [targetWorkout]) => {
        state.workouts.forEach((workout) => {
            if (workout.id === targetWorkout) {
                const numberOfIncompleteExercises = workout.exercises.filter(
                    (exercise) => exercise.complete != true
                ).length;

                if (
                    numberOfIncompleteExercises === 0 &&
                    workout.exercises.length
                ) {
                    workout.workoutComplete = true;
                } else {
                    workout.workoutComplete = false;
                }
            }
        });
    },
    removeSelectedWorkoutId: (state) => {
        state.selectedWorkoutId = null;
    },
    removeSelectedWorkout: (state) => {
        state.selectedWorkout = null;
    },
    removeSelectedExercise: (state) => {
        state.selectedExercise = null;
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};
